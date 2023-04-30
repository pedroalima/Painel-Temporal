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

// const statusOutput = document.querySelectorAll(".dashboard-list-item-content-secundary");

// Functions
const dailyStatus = () => {

  obj.forEach(task => {
    const taskTitle = task.title;
    const taskTimeframesDailyCurrent = task.timeframes.daily.current;
    const taskTimeframesDailyprevious = task.timeframes.daily.previous;

    switch (taskTitle) {
      case "Work":
        workCurrentOutput.textContent = `${taskTimeframesDailyCurrent}hrs`;
        workPreviousOutput.textContent = `Last Week - ${taskTimeframesDailyprevious}hrs`;
        break;
      case "Play":
        playCurrentOutput.textContent = `${taskTimeframesDailyCurrent}hrs`;
        playPreviousOutput.textContent = `Last Week - ${taskTimeframesDailyprevious}hrs`;
        break;
      case "Study":
        studyCurrentOutput.textContent = `${taskTimeframesDailyCurrent}hrs`;
        studyPreviousOutput.textContent = `Last Week - ${taskTimeframesDailyprevious}hrs`;
        break;
      case "Exercise":
        exerciseCurrentOutput.textContent = `${taskTimeframesDailyCurrent}hrs`;
        exercisePreviousOutput.textContent = `Last Week - ${taskTimeframesDailyprevious}hrs`;
        break;
      case "Social":
        socialCurrentOutput.textContent = `${taskTimeframesDailyCurrent}hrs`;
        socialPreviousOutput.textContent = `Last Week - ${taskTimeframesDailyprevious}hrs`;
        break;
      case "Self Care":
        selfCareCurrentOutput.textContent = `${taskTimeframesDailyCurrent}hrs`;
        selfCarePreviousOutput.textContent = `Last Week - ${taskTimeframesDailyprevious}hrs`;
        break;
    }
  })

  // Version primary

  // const workTimeframesDaily = obj[0].timeframes.daily;
  // const playTimeframesDaily = obj[1].timeframes.daily;
  // const studyTimeframesDaily = obj[2].timeframes.daily;
  // const exerciseTimeframesDaily = obj[3].timeframes.daily;
  // const socialTimeframesDaily = obj[4].timeframes.daily;
  // const selfCareTimeframesDaily = obj[5].timeframes.daily;

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

  obj.forEach(task => {
    const taskTitle = task.title;
    const taskTimeframesWeeklyCurrent = task.timeframes.weekly.current;
    const taskTimeframesWeeklyprevious = task.timeframes.weekly.previous;

    switch (taskTitle) {
      case "Work":
        workCurrentOutput.textContent = `${taskTimeframesWeeklyCurrent}hrs`;
        workPreviousOutput.textContent = `Last Week - ${taskTimeframesWeeklyprevious}hrs`;
        break;
      case "Play":
        playCurrentOutput.textContent = `${taskTimeframesWeeklyCurrent}hrs`;
        playPreviousOutput.textContent = `Last Week - ${taskTimeframesWeeklyprevious}hrs`;
        break;
      case "Study":
        studyCurrentOutput.textContent = `${taskTimeframesWeeklyCurrent}hrs`;
        studyPreviousOutput.textContent = `Last Week - ${taskTimeframesWeeklyprevious}hrs`;
        break;
      case "Exercise":
        exerciseCurrentOutput.textContent = `${taskTimeframesWeeklyCurrent}hrs`;
        exercisePreviousOutput.textContent = `Last Week - ${taskTimeframesWeeklyprevious}hrs`;
        break;
      case "Social":
        socialCurrentOutput.textContent = `${taskTimeframesWeeklyCurrent}hrs`;
        socialPreviousOutput.textContent = `Last Week - ${taskTimeframesWeeklyprevious}hrs`;
        break;
      case "Self Care":
        selfCareCurrentOutput.textContent = `${taskTimeframesWeeklyCurrent}hrs`;
        selfCarePreviousOutput.textContent = `Last Week - ${taskTimeframesWeeklyprevious}hrs`;
        break;
    }
  })
}

const monthlyStatus = () => {

  obj.forEach(task => {
    const taskTitle = task.title;
    const taskTimeframesMonthlyCurrent = task.timeframes.monthly.current;
    const taskTimeframesMonthlyprevious = task.timeframes.monthly.previous;

    switch (taskTitle) {
      case "Work":
        workCurrentOutput.textContent = `${taskTimeframesMonthlyCurrent}hrs`;
        workPreviousOutput.textContent = `Last Week - ${taskTimeframesMonthlyprevious}hrs`;
        break;
      case "Play":
        playCurrentOutput.textContent = `${taskTimeframesMonthlyCurrent}hrs`;
        playPreviousOutput.textContent = `Last Week - ${taskTimeframesMonthlyprevious}hrs`;
        break;
      case "Study":
        studyCurrentOutput.textContent = `${taskTimeframesMonthlyCurrent}hrs`;
        studyPreviousOutput.textContent = `Last Week - ${taskTimeframesMonthlyprevious}hrs`;
        break;
      case "Exercise":
        exerciseCurrentOutput.textContent = `${taskTimeframesMonthlyCurrent}hrs`;
        exercisePreviousOutput.textContent = `Last Week - ${taskTimeframesMonthlyprevious}hrs`;
        break;
      case "Social":
        socialCurrentOutput.textContent = `${taskTimeframesMonthlyCurrent}hrs`;
        socialPreviousOutput.textContent = `Last Week - ${taskTimeframesMonthlyprevious}hrs`;
        break;
      case "Self Care":
        selfCareCurrentOutput.textContent = `${taskTimeframesMonthlyCurrent}hrs`;
        selfCarePreviousOutput.textContent = `Last Week - ${taskTimeframesMonthlyprevious}hrs`;
        break;
    }
  })
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

