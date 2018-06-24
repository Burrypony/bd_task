if(document.location.search == "?err=wrongpassword")
{
    $("#wpas").addClass("display_block");
    $("#wuser").removeClass("display_block");
}
if(document.location.search == "?err=wrongusername")
{
    $("#wuser").addClass("display_block");
    $("#wpas").removeClass("display_block");
}