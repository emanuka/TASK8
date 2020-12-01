jQuery(document).ready(function ($) {
  $("#form-group").on("submit", function (e) {
    e.preventDefault();

    //assigning input text
    let name = $("#yourName").val();
    //assigning output alert div
    const tasks = $("div#tasks");
    tasks.empty();

    if (!name) {
      //if the name input is empty valid print error
      tasks.removeClass("alert-success"); //remove alert success class in case if retrying
      tasks.addClass("alert-danger"); //add alert danger class
      tasks.prepend(`Please enter valid name.`); //print prepend message
    } else {
      //if not print the name entered
      tasks.removeClass("alert-danger"); //remove alert danger class in case if retrying
      tasks.addClass("alert-success"); //add alert success class
      tasks.prepend(`Hello there! ${name}.`); //print prepend message
    }
  });
});
