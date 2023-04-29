"use strict";
const obj = [
    {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
];

// Variables
const workCurrentOutput = document.querySelector("#workCurrentOutput");
const workPreviousOutput = document.querySelector("#workPreviousOutput");
const playCurrentOutput = document.querySelector("#playCurrentOutput");
const playPreviousOutput = document.querySelector("#playPreviousOutput");
const studyCurrentOutput = document.querySelector("#studyCurrentOutput");
const studyPreviousOutput = document.querySelector("#studyPreviousOutput");
const exerciseCurrentOutput = document.querySelector("#exerciseCurrentOutput");
const exercisePreviousOutput = document.querySelector("#exercisePreviousOutput");
const socialCurrentOutput = document.querySelector("#socialCurrentOutput");
const socialPreviousOutput = document.querySelector("#socialPreviousOutput");
const selfCareCurrentOutput = document.querySelector("#selfCareCurrentOutput");
const selfCarePreviousOutput = document.querySelector("#selfCarePreviousOutput");

// Functions
const weeklyStatus = () => {
    const workTimeframesWeekly = obj[0].timeframes.weekly;
    const playTimeframesWeekly = obj[1].timeframes.weekly;
    const studyTimeframesWeekly = obj[2].timeframes.weekly;
    const exerciseTimeframesWeekly = obj[3].timeframes.weekly;
    const socialTimeframesWeekly = obj[4].timeframes.weekly;
    const selfCareTimeframesWeekly = obj[5].timeframes.weekly;

    workCurrentOutput.textContent = `${workTimeframesWeekly.current}hrs`;
    workPreviousOutput.textContent = `Last Week - ${workTimeframesWeekly.previous}hrs`;

    playCurrentOutput.textContent = `${playTimeframesWeekly.current}hrs`;
    playPreviousOutput.textContent = `Last Week - ${playTimeframesWeekly.previous}hrs`;

    studyCurrentOutput.textContent = `${studyTimeframesWeekly.current}hrs`;
    studyPreviousOutput.textContent = `Last Week - ${studyTimeframesWeekly.previous}hrs`;

    exerciseCurrentOutput.textContent = `${exerciseTimeframesWeekly.current}hrs`;
    exercisePreviousOutput.textContent = `Last Week - ${exerciseTimeframesWeekly.previous}hrs`;

    socialCurrentOutput.textContent = `${socialTimeframesWeekly.current}hrs`;
    socialPreviousOutput.textContent = `Last Week - ${socialTimeframesWeekly.previous}hrs`;

    selfCareCurrentOutput.textContent = `${selfCareTimeframesWeekly.current}hrs`;
    selfCarePreviousOutput.textContent = `Last Week - ${selfCareTimeframesWeekly.previous}hrs`;
};

// Events
document.addEventListener("click", (e) => {
    const targetElementId = e.target.id;

    switch (targetElementId) {
        case "dayleSelector":
            ;
            break;
        case "weeklySelector":
            weeklyStatus();
            break;
        case "monthlySelector":
            ;
            break;
    }
});
