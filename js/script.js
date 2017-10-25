var mary = 0;
var colin = 0;
var ben = 0;
var dickon = 0;

$(document).ready(function() {
  $("#questions").submit(function(event) {
    if ($("#indoors-outdoors").val() === "1") {
      colin += 1
    } else if ($("#indoors-outdoors").val() === "2") {
      dickon += 1
    } else if($("#indoors-outdoors").val() === "3") {
      ben += 1
    } else if($("#indoors-outdoors").val() === "4") {
      mary += 1
    } else {
      alert("Please follow the rules!")
    }

    if ($("#thing-to-do").val() === "1") {
      dickon += 1
    } else if ($("#thing-to-do").val() === "2") {
      mary += 1
    } else if ($("#thing-to-do").val() === "3") {
      ben += 1
    } else if ($("#thing-to-do").val() === "4") {
      colin += 1
    } else {
      alert("Please follow the rules!")
    }

    if ($("#health").val() === "1") {
      dickon += 1
    } else if ($("#health").val() === "2") {
      ben += 1
    } else if ($("#health").val() === "3") {
      colin += 1
    } else if ($("#health").val() === "4") {
      mary += 1
    } else {
      alert("Please follow the rules!")
    }

    if (mary > colin && mary > ben && mary > dickon) {
      $("#mary").show()
    } else if ( colin > mary && colin > ben && colin > dickon) {
      $("#colin").show()
    } else if (ben > mary && ben > colin && ben > dickon) {
      $("#ben").show()
    } else if (dickon > ben && dickon > mary && dickon > colin) {
      $("#dickon").show()
    }

    event.preventDefault();
  });
});
