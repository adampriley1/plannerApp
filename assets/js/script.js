var currentDayDisplayEl = $("#currentDay");
//display current date

populateFromStorage();
displayDate();

// handle displaying the time
function displayDate() {
  //eusures current time updated ever second
  setInterval(() => {
    //gets current time
    const now = dayjs();
    //format the time
    const formattedTime = now.format("dddd, MMMM D");
    //text field displays formatted time
    currentDayDisplayEl.text(formattedTime);
  }, 1000);
}

//gets the current hour from dayjs
const nowHour = parseInt(dayjs().format("H"));

//loop to go through each.time-block element and set class to change colour depending on time//

$(".time-block").each(function () {
  $(this);
  const elementHour = parseInt($(this).attr("data-hour"));

  if (elementHour < nowHour) {
    $(this).addClass("past");
  }

  if (elementHour === nowHour) {
    $(this).addClass("present");
  }

  if (elementHour > nowHour) {
    $(this).addClass("future");
  }
});

///Get data from user and store in local storage///

//event listner for buttons
$(".saveBtn").on("click", function (event) {
  //get values from schedule
  hourValue = $(event.target).closest(".time-block").data("hour");
  textValue = $(event.target).closest(".time-block").find("textarea").val();

  //store values to local storage
  localStorage.setItem(hourValue, textValue);
  alert("Schedule item added to local storage");
});

//loop through all the hours. If any data stored in local storage, save this vakue and add to textarea field

function populateFromStorage() {
  $(".time-block").each(function () {
    const hourValue = $(this).data("hour");
    let savedValue = localStorage.getItem(hourValue);

    if (savedValue) {
      $(this).find("textarea").val(savedValue);
    }
  });
}
