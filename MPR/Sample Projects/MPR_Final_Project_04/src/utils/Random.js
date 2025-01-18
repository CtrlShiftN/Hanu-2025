const randomEvent = (events) => {
    const index = Math.floor(Math.random() * events.length);
    return events[index]
}

const randomNumberInRange = (a, b) => {
     return Math.floor(Math.random() * (b - a + 1)) + a;
}

const randomOptions = (arr) => {
    const index = randomNumberInRange(0, arr.length - 1);
    return arr[index]
}

export {randomEvent, randomNumberInRange, randomOptions}