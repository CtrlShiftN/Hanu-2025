import { Dimensions } from 'react-native';

export const PLAYER_CONSTANTS = {
    MAX_HEALTH: 100,
    MAX_HAPPINESS: 100,
    MAX_SMARTS: 100,
    MIN_HEALTH: 0,
    MIN_HAPPINESS: 0,
    MIN_SMARTS: 0,
    MIN_MONEY: 0,
    DAY_IN_MONTH: 30,
    DAY_IN_YEAR: 360,
    DAY_INTERVAL: 2000, // 2 seconds = 1 day (720 secs = 1 year)
    GENDER_MALE: 'male',
    GENDER_FEMALE: 'female',
    // initial values
    INITIAL_HEALTH: 100,
    INITIAL_HAPPINESS: 40,
    INITIAL_SMARTS: 20,
    INITIAL_MONEY: 5,
    INITIAL_TITLE: 'No Title Yet',
    INITIAL_DAY: 0,
    INITIAL_GENDER: '',
    // incremental values
    HEALTH_RATE: 0.5,
    NEW_AGE_VALUE: 5,
    // money values
    MONEY_AT_18: 10000,

    ZERO: 0,

    GOOD_DEED_WEIGHT: 0.75,
    BAD_DEED_WEIGHT: 1.0,

    // percentage values
    MAX_EVENT_PERCENTAGE: 4, // number / 0,1,2,3,4 = 20% chance
    MAX_INTERACTION_PERCENTAGE: 50, // number / 0,1,...,50
};

export const GAME_TEXT_CONSTANTS = {
    DIE_TITLE: 'You have died',
    DIE_DESC: 'Play again?',
    YES_TEXT: 'Yes',
    NO_TEXT: 'No',
    OK_TEXT: 'OK',

    WARNING_TITLE: 'Warning',
    WARNING_DESC_EXIT_QUIZ:
        'Are you sure you want to leave the quiz? All progress will be lost.',
    WARNING_TITLE_DAILY_LOGIN: 'You have already taken the daily login money',
    WARNING_EXIT_APP: 'Are you sure you want to exit the app?',

    ERROR_FETCHING_DATA: 'Error fetching data',
    ERROR_FETCHING_DATA_MESSAGE: 'Please try later!',
    ERROR_ACTIVITY_AGE: 'You are not old enough to join for this activity',
    ERROR_ACTIVITY_MONEY: 'You do not have enough money to join this activity',

    ERROR_LOGIN_RESPONSE: 'Error logging in',
    ERROR_SIGNUP_RESPONSE: 'Error signing up',

    QUIZ_DESC_SUCCESS:
        'Congratulations! You are qualified to take this course.',
    JOB_TITLE_SUCCESS: 'Job Taken',
    JOB_TITLE_FAILED: 'Job Application Failed',
    JOB_TITLE_QUIT: 'Job Quit',

    COURSE_TITLE_SUCCESS: 'Course Taken',
    COURSE_TITLE_FAILED: 'Course Application Failed',

    HEADING_PARENT_SECTION: 'Your Parents',
    HEADING_ACTIVITY_SECTION: 'Available Activities',
    HEADING_JOB_SECTION: 'Available Jobs',
    HEADING_EDUCATION_SECTION: 'Available Courses',
    HEADING_SOCIAL_SECTION: 'Social Interactions',

    ACTIVITY_JOIN_BUTTON_TEXT: 'Join',
    JOB_APPLY_BUTTON_TEXT: 'Apply',
    JOB_QUIT_BUTTON_TEXT: 'Quit',
    TAKE_DAILY_LOGIN_BUTTON_TEXT: 'Take Daily Login',
    TAKE_COURSE_BUTTON_TEXT: 'Take Course',
    SIGNIN_BUTTON_TEXT: 'Sign In',
    SIGNUP_BUTTON_TEXT: 'Sign Up',

    CONFIRM_BUTTON_TEXT: 'Confirm',
    CANCEL_BUTTON_TEXT: 'Cancel',
    SAVE_AND_EXIT_BUTTON_TEXT: 'Save and Exit',
    JUST_EXIT_BUTTON_TEXT: 'Just Exit',

    LOADING_TEXT: 'Loading...',

    TO_SIGNUP_TEXT: 'Sign Up Here',
    TO_SIGN_UP_PROMPT: 'Don\'t have an account yet?',
    TO_LOGIN_TEXT: 'Sign In',
    TO_SIGNIN_PROMPT: 'Already have an account?',
};

export const DIMENSIONS = {
    WIDTH: Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height,
};
