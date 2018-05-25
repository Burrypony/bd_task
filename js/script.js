function validate() {
  var ddl = document.getElementById("type_of_info");
  var selectedValue = ddl.options[ddl.selectedIndex].value;
  if (selectedValue == "providers") {
      $("#op1").css( "display", "block" );
      $("#op2").css( "display", "none" );
      $("#op3").css( "display", "none" );
      $("#op4").css( "display", "none" );
  } else if (selectedValue == "bill") {
    $("#op1").css( "display", "none" );
    $("#op2").css( "display", "block" );
    $("#op3").css( "display", "none" );
    $("#op4").css( "display", "none" );
  }else if (selectedValue == "bank") {
    $("#op1").css( "display", "none" );
    $("#op2").css( "display", "none" );
    $("#op3").css( "display", "block" );
    $("#op4").css( "display", "none" );
  }else if (selectedValue == "storage") {
    $("#op1").css( "display", "none" );
    $("#op2").css( "display", "none" );
    $("#op3").css( "display", "none" );
    $("#op4").css( "display", "block" );
  }
  else {
    alert("You cant check this info please make your choise one more time")
  }
}
