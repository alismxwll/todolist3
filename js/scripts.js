$(document).ready(function() {
  $("form#list-form").submit(function(event) {
    event.preventDefault();
    var listInput = $("#list-input").val();
    var newList = {name:listInput, tasks:[]};
    console.log(newList);
    $("#list-input").val("");

    $("#list-ul").append("<li class='list'>" + newList.name + "</li>");
    $(".list").last().click(function() {
      $("ul#task-ul").text("");
      newList.tasks.forEach(function(task) {
        $("ul#task-ul").append("<li>" + task + "</li>");
      });
      $(".list-name").text(newList.name);
      $("#task-form").show();

      $("#task-form").off('submit');
      $("form#task-form").submit(function(event) {
        event.preventDefault();
        var taskInput = $("#task-input").val();

        $("#task-input").val("");
        newList.tasks.push(taskInput);
        $("ul#task-ul").append("<li>" + taskInput + "</li>");
        //$("ul#task-ul").remove(taskInput)
        console.log(newList);

      });
    });
  });
});

      // newList.name.click(function() {
      //   newList.tasks.toggle();
      // });
