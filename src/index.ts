const obj = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 4,
          "previous": 2
        },
        "weekly": {
          "current": 28,
          "previous": 14
        },
        "monthly": {
          "current": 120,
          "previous": 60
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 7,
          "previous": 7
        },
        "monthly": {
          "current": 30,
          "previous": 30
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 3,
          "previous": 2
        },
        "weekly": {
          "current": 21,
          "previous": 14
        },
        "monthly": {
          "current": 90,
          "previous": 60
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 0,
          "previous": 7
        },
        "monthly": {
          "current": 0,
          "previous": 30
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 2,
          "previous": 2
        },
        "weekly": {
          "current": 14,
          "previous": 14
        },
        "monthly": {
          "current": 60,
          "previous": 60
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 7,
          "previous": 7
        },
        "monthly": {
          "current": 30,
          "previous": 30
        }
      }
    }
]

// Variables
const currentOutput =  document.querySelectorAll(".currentOutput");
const previousOutput = document.querySelectorAll(".previousOutput");

// Functions
const upedateStatusOutputs = (index: number, TaskTimeframesCurrent: number, taskTimeframesPrevious: number) => {
  currentOutput[index].textContent = `${TaskTimeframesCurrent}hrs`;
  previousOutput[index].textContent = `Last day - ${taskTimeframesPrevious}hrs`;
}

const dailyStatus = () => {

  for (let i = 0; i < obj.length; i++) {
    const taskTitle = obj[i].title;
    const taskTimeframesDailyCurrent = obj[i].timeframes.daily.current;
    const taskTimeframesDailyprevious = obj[i].timeframes.daily.previous;

    switch (taskTitle) {
      case "Work":
        upedateStatusOutputs(i, taskTimeframesDailyCurrent, taskTimeframesDailyprevious);
        break;
      case "Play":
        upedateStatusOutputs(i, taskTimeframesDailyCurrent, taskTimeframesDailyprevious);
        break;
      case "Study":
        upedateStatusOutputs(i, taskTimeframesDailyCurrent, taskTimeframesDailyprevious);
        break;
      case "Exercise":
        upedateStatusOutputs(i, taskTimeframesDailyCurrent, taskTimeframesDailyprevious);
        break;
      case "Social":
        upedateStatusOutputs(i, taskTimeframesDailyCurrent, taskTimeframesDailyprevious);
        break;
      case "Self Care":
        upedateStatusOutputs(i, taskTimeframesDailyCurrent, taskTimeframesDailyprevious);
        break;
    }
  }
};

const weeklyStatus = () => {

  for (let i = 0; i < obj.length; i++) {
    const taskTitle = obj[i].title;
    const taskTimeframesWeeklyCurrent = obj[i].timeframes.weekly.current;
    const taskTimeframesWeeklyprevious = obj[i].timeframes.weekly.previous;

    switch (taskTitle) {
      case "Work":
        upedateStatusOutputs(i, taskTimeframesWeeklyCurrent, taskTimeframesWeeklyprevious);
        break;
      case "Play":
        upedateStatusOutputs(i, taskTimeframesWeeklyCurrent, taskTimeframesWeeklyprevious);
        break;
      case "Study":
        upedateStatusOutputs(i, taskTimeframesWeeklyCurrent, taskTimeframesWeeklyprevious);
        break;
      case "Exercise":
        upedateStatusOutputs(i, taskTimeframesWeeklyCurrent, taskTimeframesWeeklyprevious);
        break;
      case "Social":
        upedateStatusOutputs(i, taskTimeframesWeeklyCurrent, taskTimeframesWeeklyprevious);
        break;
      case "Self Care":
        upedateStatusOutputs(i, taskTimeframesWeeklyCurrent, taskTimeframesWeeklyprevious);
        break;
    }
  }
};

const monthlyStatus = () => {

  for (let i = 0; i < obj.length; i++) {
    const taskTitle = obj[i].title;
    const taskTimeframesMonthlyCurrent = obj[i].timeframes.monthly.current;
    const taskTimeframesMonthlyprevious = obj[i].timeframes.monthly.previous;

    switch (taskTitle) {
      case "Work":
        upedateStatusOutputs(i, taskTimeframesMonthlyCurrent, taskTimeframesMonthlyprevious);
        break;
      case "Play":
        upedateStatusOutputs(i, taskTimeframesMonthlyCurrent, taskTimeframesMonthlyprevious);
        break;
      case "Study":
        upedateStatusOutputs(i, taskTimeframesMonthlyCurrent, taskTimeframesMonthlyprevious);
        break;
      case "Exercise":
        upedateStatusOutputs(i, taskTimeframesMonthlyCurrent, taskTimeframesMonthlyprevious);
        break;
      case "Social":
        upedateStatusOutputs(i, taskTimeframesMonthlyCurrent, taskTimeframesMonthlyprevious);
        break;
      case "Self Care":
        upedateStatusOutputs(i, taskTimeframesMonthlyCurrent, taskTimeframesMonthlyprevious);
        break;
    }
  }
};

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
  };
});