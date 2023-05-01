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
const currentOutput = document.querySelectorAll(".currentOutput");
const previousOutput = document.querySelectorAll(".previousOutput");

// Functions
const dailyStatus = () => {

  for (let i = 0; i < obj.length; i++) {
    const taskTitle = obj[i].title;
    const taskTimeframesDailyCurrent = obj[i].timeframes.daily.current;
    const taskTimeframesDailyprevious = obj[i].timeframes.daily.previous;

    switch (taskTitle) {
      case "Work":
        currentOutput[i].textContent = `${taskTimeframesDailyCurrent}hrs`;
        previousOutput[i].textContent = `Last day - ${taskTimeframesDailyprevious}hrs`;
        break;
      case "Play":
        currentOutput[i].textContent = `${taskTimeframesDailyCurrent}hrs`;
        previousOutput[i].textContent = `Last day - ${taskTimeframesDailyprevious}hrs`;
        break;
      case "Study":
        currentOutput[i].textContent = `${taskTimeframesDailyCurrent}hrs`;
        previousOutput[i].textContent = `Last day - ${taskTimeframesDailyprevious}hrs`;
        break;
      case "Exercise":
        currentOutput[i].textContent = `${taskTimeframesDailyCurrent}hrs`;
        previousOutput[i].textContent = `Last day - ${taskTimeframesDailyprevious}hrs`;
        break;
      case "Social":
        currentOutput[i].textContent = `${taskTimeframesDailyCurrent}hrs`;
        previousOutput[i].textContent = `Last day - ${taskTimeframesDailyprevious}hrs`;
        break;
      case "Self Care":
        currentOutput[i].textContent = `${taskTimeframesDailyCurrent}hrs`;
        previousOutput[i].textContent = `Last day - ${taskTimeframesDailyprevious}hrs`;
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
        currentOutput[i].textContent = `${taskTimeframesWeeklyCurrent}hrs`;
        previousOutput[i].textContent = `Last day - ${taskTimeframesWeeklyprevious}hrs`;
        break;
      case "Play":
        currentOutput[i].textContent = `${taskTimeframesWeeklyCurrent}hrs`;
        previousOutput[i].textContent = `Last day - ${taskTimeframesWeeklyprevious}hrs`;
        break;
      case "Study":
        currentOutput[i].textContent = `${taskTimeframesWeeklyCurrent}hrs`;
        previousOutput[i].textContent = `Last day - ${taskTimeframesWeeklyprevious}hrs`;
        break;
      case "Exercise":
        currentOutput[i].textContent = `${taskTimeframesWeeklyCurrent}hrs`;
        previousOutput[i].textContent = `Last day - ${taskTimeframesWeeklyprevious}hrs`;
        break;
      case "Social":
        currentOutput[i].textContent = `${taskTimeframesWeeklyCurrent}hrs`;
        previousOutput[i].textContent = `Last day - ${taskTimeframesWeeklyprevious}hrs`;
        break;
      case "Self Care":
        currentOutput[i].textContent = `${taskTimeframesWeeklyCurrent}hrs`;
        previousOutput[i].textContent = `Last day - ${taskTimeframesWeeklyprevious}hrs`;
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
        currentOutput[i].textContent = `${taskTimeframesMonthlyCurrent}hrs`;
        previousOutput[i].textContent = `Last day - ${taskTimeframesMonthlyprevious}hrs`;
        break;
      case "Play":
        currentOutput[i].textContent = `${taskTimeframesMonthlyCurrent}hrs`;
        previousOutput[i].textContent = `Last day - ${taskTimeframesMonthlyprevious}hrs`;
        break;
      case "Study":
        currentOutput[i].textContent = `${taskTimeframesMonthlyCurrent}hrs`;
        previousOutput[i].textContent = `Last day - ${taskTimeframesMonthlyprevious}hrs`;
        break;
      case "Exercise":
        currentOutput[i].textContent = `${taskTimeframesMonthlyCurrent}hrs`;
        previousOutput[i].textContent = `Last day - ${taskTimeframesMonthlyprevious}hrs`;
        break;
      case "Social":
        currentOutput[i].textContent = `${taskTimeframesMonthlyCurrent}hrs`;
        previousOutput[i].textContent = `Last day - ${taskTimeframesMonthlyprevious}hrs`;
        break;
      case "Self Care":
        currentOutput[i].textContent = `${taskTimeframesMonthlyCurrent}hrs`;
        previousOutput[i].textContent = `Last day - ${taskTimeframesMonthlyprevious}hrs`;
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

