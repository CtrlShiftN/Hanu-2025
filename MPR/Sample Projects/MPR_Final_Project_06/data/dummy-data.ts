import { UserResponse, Relationship } from '../models/Types';

export const USER_RESPONSES: UserResponse[] = [
    {
        desc: 'Give Flower',
        deed: 1,
    },
    {
        desc: 'Fist Bump',
        deed: 0,
    },
    {
        desc: 'Sucker Punch in Face',
        deed: -1,
    },
    {
        desc: 'Mocking For No Reason',
        deed: -1,
    },
    {
        desc: 'Give Complements',
        deed: 1,
    },
];

export const PARENT_INFOS: Relationship[] = [
    {
        name: 'Robert Downey Jr.',
        desc: 'Father',
        maritalStatus: 'Married to Scarlett Johansson',
        work: 'Actor for Marvel Studios',
    },
    {
        name: 'Scarlett Johansson',
        desc: 'Mother',
        maritalStatus: 'Married to Robert Downey Jr.',
        work: 'Actress for Marvel Studios',
    },
];