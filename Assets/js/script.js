// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var time = dayjs().format('hh:mm:ss');
var date = dayjs().format("M-DD-YYYY");
$(function () {
var blocks = $(".time-block")
console.log(blocks)

    
})
  //for loop query selector for time block arrays
//.children and .sibling methods and .parent


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $(".saveBtn").on("click",function(){
    var text = $(this).siblings(".description").val()
    var hour = $(this).parent().attr("id").substring(5)
    localStorage.setItem(hour, text)
    
      });



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  for (let index = 9; index <= 17; index++) {
    $("#hour-" + index + " .description").val(localStorage.getItem(index))
    
  };



  // TODO: Add code to display the current date in the header of the page.

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  setInterval(function () {
    time = dayjs().format('hh:mm:ss');
    date = dayjs().format("M-DD-YYYY");
    $("#currentDay").text(date);
    $("#currentTime").text(time)
    var currentHour = dayjs().hour()
$(".time-block").each(function(){
var blockHour = $(this).attr("id").substring(5)
if (blockHour < currentHour) {
$(this).addClass("past")
$(this).removeClass("present")
$(this).removeClass("future")    
}
else if (blockHour == currentHour) {
    $(this).addClass("present")
    $(this).removeClass("past")
    $(this).removeClass("future")    
    }
else{
    $(this).addClass("future")
    $(this).removeClass("past")
    $(this).removeClass("present")  

}

})
  }, 1000);


  
