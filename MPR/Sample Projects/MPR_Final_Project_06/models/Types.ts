export interface User {
    username: string;
    password: string;
    player: Player;
}

export interface Player {
    gender: string;
    title: string;
    days: number;
    health: number;
    money: number;
    happiness: number;
    smarts: number;
    coursesTaken: string[];
    jobs: string[];
    activities: string[];
    goodDeeds: string[];
    badDeeds: string[]
}

export interface Effect {
    health: number;
    happiness: number;
    money: number;
    smarts: number;
}

export interface Option {
    desc: string;
    effect: Effect;
}

export interface Education {
    ageNeeded: number;
    desc: string;
    name: string;
    prerequisite: string;
    effect: Effect;
}

export interface Quiz {
    courseName: string;
    questions: Question[];
}

export interface Question {
    question: string;
    options: string[];
    answer: string;
}

export interface Job {
    desc: string;
    name: string;
    prerequisite: string;
    effect: Effect;
    ageNeeded: number;
    requirement: {
        health: number;
        education: string;
        smarts: number;
    };
    type: string;
}

export interface Activity {
    ageNeeded: number;
    desc: string;
    name: string;
    prerequisite: string;
    effect: Effect;
}

export interface Event {
    desc: string;
    name: string;
    options: Option[];
}

export interface NPC {
    name: string;
    desc: string;
    age: number;
    health: number;
    happiness: number;
    smarts: number;
    money: number;
    relationshipType: string;
    maritalStatus?: string;
    work?: string;
    options: Option[];
}

export interface Relationship {
    name: string;
    desc: string;
    maritalStatus: string;
    work: string;
}

export interface NPCInteraction {
    name: string;
    favor: number;
    effect: Effect;
    response: UserResponse[];
}

export interface UserResponse {
    desc: string;
    deed: number; // -1 for bad 0 for neutral 1 for good
}
