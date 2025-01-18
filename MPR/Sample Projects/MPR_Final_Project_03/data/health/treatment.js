export const treatment = [
    {
        name: 'Self treatment',
        money: 25,
        time: "1000",
        requirements: [""],
        health: { isIncrease: true, index: "2" },
    },
    {
        name: 'Meditate',
        money: "Free",
        time: "2000",
          requirements: ["At least 12 years old"],
        iq: { isIncrease: true, index: "3" },
        health: { isIncrease: true, index: "1" },
    },
    {
        name: 'Take pills',
        money: 50,
        time: "4000",
          requirements: ["At least 5 years old"],
        happiness: { isIncrease: true, index: "5" },
        health: { isIncrease: false, index: "2" },
    },
    {
        name: 'See a doctor',
        money: 1000,
        time: "6000",
        requirements: [""],
        health: { isIncrease: true, index: "5" },
    },
    {
        name: 'Hospital stay',
        money: 3000,
        time: "15000",
        requirements: [""],
        health: { isIncrease: true, index: "10" },
        happiness: { isIncrease: false, index: "3" }
    },
    {
        name: 'Experimental treatment',
        money: 44000,
        time: "30000",
        requirements: ["At least 16 years old"],
        health: { isIncrease: true, index: "40" },
    },
    {
        name: 'Elixir of Youth',
        money: 2000000,
        time: "60000",
        requirements: ["At least 50 year old"],
        health: { isIncrease: true, index: "90" },
    },
];