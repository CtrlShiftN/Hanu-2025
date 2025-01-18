import { getDatabase, ref, get } from 'firebase/database';
import app from '../config/firebase';

const db = getDatabase(app);

export const getData = async <T>(path: string): Promise<T[]> => {
    // Create a reference to the database
    const dataRef = ref(db, path);
    // Get the data from the database
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
        return snapshot.val();
    } else {
        console.log('No data available');
        return [];
    }
};
