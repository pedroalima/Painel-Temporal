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
]

// Variables
const workCurrentOutput = <HTMLHeadingElement> document.querySelector("#workCurrentOutput");
const workPreviousOutput = <HTMLSpanElement> document.querySelector("#workPreviousOutput");
const playCurrentOutput = <HTMLHeadingElement> document.querySelector("#playCurrentOutput");
const playPreviousOutput = <HTMLSpanElement> document.querySelector("#playPreviousOutput");
const studyCurrentOutput = <HTMLHeadingElement> document.querySelector("#studyCurrentOutput");
const studyPreviousOutput = <HTMLSpanElement> document.querySelector("#studyPreviousOutput");
const exerciseCurrentOutput = <HTMLHeadingElement> document.querySelector("#exerciseCurrentOutput");
const exercisePreviousOutput = <HTMLSpanElement> document.querySelector("#exercisePreviousOutput");
const socialCurrentOutput = <HTMLHeadingElement> document.querySelector("#socialCurrentOutput");
const socialPreviousOutput = <HTMLSpanElement> document.querySelector("#socialPreviousOutput");
const selfCareCurrentOutput = <HTMLHeadingElement> document.querySelector("#selfCareCurrentOutput");
const selfCarePreviousOutput = <HTMLSpanElement> document.querySelector("#selfCarePreviousOutput");

// Functions
const dailyStatus = () => {
  // const workTimeframesDaily = obj[0].timeframes.daily;
  // const playTimeframesDaily = obj[1].timeframes.daily;
  // const studyTimeframesDaily = obj[2].timeframes.daily;
  // const exerciseTimeframesDaily = obj[3].timeframes.daily;
  // const socialTimeframesDaily = obj[4].timeframes.daily;
  // const selfCareTimeframesDaily = obj[5].timeframes.daily;

  obj.forEach(task => {
    const allTaskTimeframesDailyCurrent = task.timeframes.daily.current
    const allTaskTimeframesDailyPrevious = task.timeframes.daily.previous
    
    if (allTaskTimeframesDailyCurrent && allTaskTimeframesDailyPrevious) {
      workCurrentOutput.textContent = `${allTaskTimeframesDailyCurrent}hrs`;
      workPreviousOutput.textContent = `Last Week - ${allTaskTimeframesDailyPrevious}hrs`;
    }
  })

  // workCurrentOutput.textContent = `${workTimeframesDaily.current}hrs`;
  // workPreviousOutput.textContent = `Last Week - ${workTimeframesDaily.previous}hrs`;

  // playCurrentOutput.textContent = `${playTimeframesDaily.current}hrs`;
  // playPreviousOutput.textContent = `Last Week - ${playTimeframesDaily.previous}hrs`;

  // studyCurrentOutput.textContent = `${studyTimeframesDaily.current}hrs`;
  // studyPreviousOutput.textContent = `Last Week - ${studyTimeframesDaily.previous}hrs`;

  // exerciseCurrentOutput.textContent = `${exerciseTimeframesDaily.current}hrs`;
  // exercisePreviousOutput.textContent = `Last Week - ${exerciseTimeframesDaily.previous}hrs`;

  // socialCurrentOutput.textContent = `${socialTimeframesDaily.current}hrs`;
  // socialPreviousOutput.textContent = `Last Week - ${socialTimeframesDaily.previous}hrs`;

  // selfCareCurrentOutput.textContent = `${selfCareTimeframesDaily.current}hrs`;
  // selfCarePreviousOutput.textContent = `Last Week - ${selfCareTimeframesDaily.previous}hrs`;
}

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
}

const monthlyStatus = () => {
  const workTimeframesMonthly = obj[0].timeframes.monthly;
  const playTimeframesMonthly = obj[1].timeframes.monthly;
  const studyTimeframesMonthly = obj[2].timeframes.monthly;
  const exerciseTimeframesMonthly = obj[3].timeframes.monthly;
  const socialTimeframesMonthly = obj[4].timeframes.monthly;
  const selfCareTimeframesMonthly = obj[5].timeframes.monthly;

  workCurrentOutput.textContent = `${workTimeframesMonthly.current}hrs`;
  workPreviousOutput.textContent = `Last Week - ${workTimeframesMonthly.previous}hrs`;

  playCurrentOutput.textContent = `${playTimeframesMonthly.current}hrs`;
  playPreviousOutput.textContent = `Last Week - ${playTimeframesMonthly.previous}hrs`;

  studyCurrentOutput.textContent = `${studyTimeframesMonthly.current}hrs`;
  studyPreviousOutput.textContent = `Last Week - ${studyTimeframesMonthly.previous}hrs`;

  exerciseCurrentOutput.textContent = `${exerciseTimeframesMonthly.current}hrs`;
  exercisePreviousOutput.textContent = `Last Week - ${exerciseTimeframesMonthly.previous}hrs`;

  socialCurrentOutput.textContent = `${socialTimeframesMonthly.current}hrs`;
  socialPreviousOutput.textContent = `Last Week - ${socialTimeframesMonthly.previous}hrs`;

  selfCareCurrentOutput.textContent = `${selfCareTimeframesMonthly.current}hrs`;
  selfCarePreviousOutput.textContent = `Last Week - ${selfCareTimeframesMonthly.previous}hrs`;
}

// Events
document.addEventListener("click", (e) => {
  const target = e.target;
  const targetElementId = (target as HTMLLabelElement).id;

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
});

