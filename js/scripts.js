$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();

    var total = $("input#name").val();
    var output = [];


    for (var index=5; index<=30; index +=5) {

      var output = total * index;
      output.push();

  // debugger;

};

    // output.forEach(function(item) {
    //   $(".items").append("<li>" + item + "</li>");
    // });
  // debugger;
  // $("#items").show(output);

});

});
