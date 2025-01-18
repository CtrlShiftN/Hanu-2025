import { Player, User } from '../models/Types';
import { getDatabase, ref, set, get, update } from 'firebase/database'; // Import necessary functions

import app from '../config/firebase';

const db = getDatabase(app);

export const SignUp = async (user: User): Promise<User | Error> => {
    try {
        const userRef = ref(db, `user`); // Reference to the "users" collection

        // Retrieve the current users count to generate the next index
        const usersSnapshot = await get(userRef);
        let index = 0;
        if (usersSnapshot.exists()) {
            usersSnapshot.forEach((_) => {
                index++;
            });
        }

        // Check if username exists before creating user
        const usernameRef = ref(db, `user`);
        const usernameSnapshot = await get(usernameRef);

        // Loop through existing users to check for duplicate username
        let usernameExists = false;
        usernameSnapshot.forEach((childSnapshot) => {
            const existingUser = childSnapshot.val();
            if (existingUser.username === user.username) {
                usernameExists = true;
                return true; // Stop looping
            }
        });

        if (usernameExists) {
            throw new Error('Username has existed'); // Fix: Return null as User | Error
        }

        // Create the new user with the next available index
        const newUserRef = ref(db, `user/${index}`);
        await set(newUserRef, {
            username: user.username,
            password: user.password,
            player: user.player,
        });
        return user;
    } catch (error) {
        throw error;
    }
};

export const Login = async (
    username: string,
    password: string
): Promise<User | Error> => {
    try {
        const userRef = ref(db, `user`);
        const userSnapshot = await get(userRef);

        let foundUser: User | null = null;

        userSnapshot.forEach((childSnapshot) => {
            const user: User = childSnapshot.val();
            if (user.username === username && user.password === password) {
                if (user.player.jobs == undefined) {
                    user.player.jobs = [];
                }

                if (user.player.badDeeds == undefined) user.player.badDeeds = [];
                if (user.player.goodDeeds == undefined) user.player.goodDeeds = [];

                foundUser = user;
                return true; // Stop looping
            }
        });

        if (foundUser === null) {
            throw new Error('User not found.'); // Fix: Return null as User | Error
        }

        return foundUser;
    } catch (error) {
        throw error;
    }
};

export const savePlayerData = async (
    username: string,
    player: Player
): Promise<string | null> => {
    try {
        const userSnapshotRef = ref(db, 'user');
        const userSnapshot = await get(userSnapshotRef);

        let foundUserKey: string | null = null;

        userSnapshot.forEach((childSnapshot) => {
            const snapshotUser = childSnapshot.val();
            if (snapshotUser.username === username) {
                foundUserKey = childSnapshot.key;
                return true; // Stop looping
            }
        });

        if (foundUserKey === null) {
            return null; // User not found
        }

        const userRef = ref(db, `user/${foundUserKey}`);
        await update(userRef, {
            player: player,
        });

        return username;
    } catch (error) {
        throw error;
    }
};
