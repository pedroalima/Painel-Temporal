"use strict";
const obj = [
    {
        title: "Work",
        timeFrames: {
            daily: {
                current: 4,
                previous: 2
            },
            weekly: {
                current: 28,
                previous: 14
            },
            monthly: {
                current: 120,
                previous: 60
            }
        }
    },
    {
        title: "Play",
        timeFrames: {
            daily: {
                current: 1,
                previous: 1
            },
            weekly: {
                current: 7,
                previous: 7
            },
            monthly: {
                current: 30,
                previous: 30
            }
        }
    },
    {
        title: "Study",
        timeFrames: {
            daily: {
                current: 3,
                previous: 2
            },
            weekly: {
                current: 21,
                previous: 14
            },
            monthly: {
                current: 90,
                previous: 60
            }
        }
    },
    {
        title: "Exercise",
        timeFrames: {
            daily: {
                current: 0,
                previous: 1
            },
            weekly: {
                current: 0,
                previous: 7
            },
            monthly: {
                current: 0,
                previous: 30
            }
        }
    },
    {
        title: "Social",
        timeFrames: {
            daily: {
                current: 2,
                previous: 2
            },
            weekly: {
                current: 14,
                previous: 14
            },
            monthly: {
                current: 60,
                previous: 60
            }
        }
    },
    {
        title: "Self Care",
        timeFrames: {
            daily: {
                current: 1,
                previous: 1
            },
            weekly: {
                current: 7,
                previous: 7
            },
            monthly: {
                current: 30,
                previous: 30
            }
        }
    }
];
// Variables
const currentOutput = document.querySelectorAll(".currentOutput");
const previousOutput = document.querySelectorAll(".previousOutput");
// Functions
const updateStatusOutputs = (index, TaskTimeFramesCurrent, taskTimeFramesPrevious) => {
    currentOutput[index].textContent = `${TaskTimeFramesCurrent}hrs`;
    previousOutput[index].textContent = `Last day - ${taskTimeFramesPrevious}hrs`;
};
const dailyStatus = () => {
    for (let i = 0; i < obj.length; i++) {
        const taskTimeFramesDailyCurrent = obj[i].timeFrames.daily.current;
        const taskTimeFramesDailyPrevious = obj[i].timeFrames.daily.previous;
        updateStatusOutputs(i, taskTimeFramesDailyCurrent, taskTimeFramesDailyPrevious);
    }
};
const weeklyStatus = () => {
    for (let i = 0; i < obj.length; i++) {
        const taskTimeFramesWeeklyCurrent = obj[i].timeFrames.weekly.current;
        const taskTimeFramesWeeklyPrevious = obj[i].timeFrames.weekly.previous;
        updateStatusOutputs(i, taskTimeFramesWeeklyCurrent, taskTimeFramesWeeklyPrevious);
    }
};
const monthlyStatus = () => {
    for (let i = 0; i < obj.length; i++) {
        const taskTimeFramesMonthlyCurrent = obj[i].timeFrames.monthly.current;
        const taskTimeFramesMonthlyPrevious = obj[i].timeFrames.monthly.previous;
        updateStatusOutputs(i, taskTimeFramesMonthlyCurrent, taskTimeFramesMonthlyPrevious);
    }
};
// Events
document.addEventListener("click", (e) => {
    const target = e.target;
    const targetElementId = target.id;
    switch (targetElementId) {
        case "dailySelector":
            dailyStatus();
            break;
        case "weeklySelector":
            weeklyStatus();
            break;
        case "monthlySelector":
            monthlyStatus();
            break;
    }
    ;
});
