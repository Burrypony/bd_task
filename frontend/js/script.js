function validate() {
  var ddl = document.getElementById("type_of_info");
  var selectedValue = ddl.options[ddl.selectedIndex].value;
  if (selectedValue == "providers") {
      $("#op1").css( "display", "block" );
      $("#op2").css( "display", "none" );
      $("#op3").css( "display", "none" );
      $("#op4").css( "display", "none" );
      $("#op5").css( "display", "none" );
      $("#op6").css( "display", "none" );
      $("#op7").css( "display", "none" );
      $("#op8").css( "display", "none" );
      showAllProviders();
  } else if (selectedValue == "bill") {
    $("#op1").css( "display", "none" );
    $("#op2").css( "display", "block" );
    $("#op3").css( "display", "none" );
    $("#op4").css( "display", "none" );
    $("#op5").css( "display", "none" );
    $("#op6").css( "display", "none" );
    $("#op7").css( "display", "none" );
    $("#op8").css( "display", "none" );
    showAllBills();
    showAllProvidersID();
    showAllAccountID();
  }else if (selectedValue == "bank") {
    $("#op1").css( "display", "none" );
    $("#op2").css( "display", "none" );
    $("#op3").css( "display", "block" );
    $("#op4").css( "display", "none" );
    $("#op5").css( "display", "none" );
    $("#op6").css( "display", "none" );
    $("#op7").css( "display", "none" );
    $("#op8").css( "display", "none" );
    showAllBanks();
  }else if (selectedValue == "goods_on_storage") {
    $("#op1").css( "display", "none" );
    $("#op2").css( "display", "none" );
    $("#op3").css( "display", "none" );
    $("#op4").css( "display", "block" );
    $("#op5").css( "display", "none" );
    $("#op6").css( "display", "none" );
    $("#op7").css( "display", "none" );
    $("#op8").css( "display", "none" );
    showAllGoodsONStorages();
// Nastia BEGIN
  }else if (selectedValue == "contract") {
    $("#op1").css( "display", "none" );
    $("#op2").css( "display", "none" );
    $("#op3").css( "display", "none" );
    $("#op4").css( "display", "none" );
    $("#op5").css( "display", "block" );
    $("#op6").css( "display", "none" );
    $("#op7").css( "display", "none" );
    $("#op8").css( "display", "none" );
    showAllContracts();
  }else if (selectedValue == "goods") {
    $("#op1").css( "display", "none" );
    $("#op2").css( "display", "none" );
    $("#op3").css( "display", "none" );
    $("#op4").css( "display", "none" );
    $("#op5").css( "display", "none" );
    $("#op6").css( "display", "block" );
    $("#op7").css( "display", "none" );
    $("#op8").css( "display", "none" );
    showAllGoods();
  }else if (selectedValue == "billDet") {
  $("#op1").css( "display", "none" );
  $("#op2").css( "display", "none" );
  $("#op3").css( "display", "none" );
  $("#op4").css( "display", "none" );
  $("#op5").css( "display", "none" );
  $("#op6").css( "display", "none" );
  $("#op7").css( "display", "block" );
  $("#op8").css( "display", "none" );
  showAllBillDet();
}else if (selectedValue == "storage") {
  $("#op1").css( "display", "none" );
  $("#op2").css( "display", "none" );
  $("#op3").css( "display", "none" );
  $("#op4").css( "display", "none" );
  $("#op5").css( "display", "none" );
  $("#op6").css( "display", "none" );
  $("#op7").css( "display", "none" );
  $("#op8").css( "display", "block" );
  showAllStorage();
}
  else {
    alert("You cant check this info please make your choise one more time")
  }
  $("#addButton").click(function(){
    if (selectedValue == "providers"){
      $("#addProvider").addClass("displayFlex");
    }else if(selectedValue == "bill"){
      $("#addBill").addClass("displayFlex");
    }
  });
  $(".buttonBack").click(function(){
    if (selectedValue == "providers"){
      $("#addProvider").removeClass("displayFlex");
    }else if(selectedValue == "bill"){
      $("#addBill").removeClass("displayFlex");
    }
  });
}


function showAllProviders()
{
  fetch( "./api/providers" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult = "";
          data.forEach( element => {
            htmlResult +="<table>" + "<td>"  + element.provider_id +"</td>"  +  "<td>" + element.name_of_provider + "</td>" + "<td>" + element.city + "</td>" + "<td>" + element.street + "</td>" + "<td>" + element.built + "</td>" + "<td>" + element.flat + "</td>" + "<td>" + element.phone_number + "</td>" +"</table>";
          });
          $( "#providersTable" ).html( htmlResult );
      } )
    }
  } )
}

function showAllProvidersID()
{
  fetch( "./api/providers" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult2 = "";
          data.forEach( element => {
            htmlResult2 += "<option>" + element.provider_id + "</option>" ;
          });
          $( "#billProviderId" ).html( htmlResult2 );
      } )
    }
  } )
}

function showAllAccountID()
{
  fetch( "./api/accounts" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult3 = "";
          data.forEach( element => {
            htmlResult3 += "<option>" + element.account_id + "</option>" ;
          });
          $( "#billAccountId" ).html( htmlResult3 );
      } )
    }
  } )
}

function showAllBills()
{
  fetch( "./api/bills" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult4 = "";
          data.forEach( element => {
            htmlResult4 +="<table>" + "<td>" + element.bill_id + "</td>"  +  "<td>" + element.date_of_bill + "</td>" + "<td>" + element.number_from_provider + "</td>" + "<td>" + element.sum_of_bill + "</td>" + "<td>" + element.provider_id + "</td>" + "<td>" + element.account_id + "</td>" + "</table>";
          });
          $( "#billTable" ).html( htmlResult4 );
      } )
    }
  } )
}

function showAllBanks()
{
  fetch( "./api/banks" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult5 = "";
          data.forEach( element => {
            htmlResult5 +="<table>" + "<td>" + element.MFI_bank + "</td>"  +  "<td>" + element.name_of_bank + "</td>" + "<td>" + element.account_id + "</td>" + "</table>";
          });
          $( "#bankTable" ).html( htmlResult5 );
      } )
    }
  } )
}

function showAllGoodsONStorages()
{
  fetch( "./api/storages" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult6 = "";
          data.forEach( element => {
            htmlResult6 +="<table>" + "<td>" + element.goods_on_storages_id + "</td>"  +  "<td>" + element.name_of_goods + "</td>" + "<td>" + element.amount + "</td>" + "<td>" + element.sum + "</td>" + "<td>" + element.bill_id + "</td>" + "<td>" + element.id_of_storage + "</td>" + "</table>";
          });
          $( "#storageTable" ).html( htmlResult6 );
      } )
    }
  } )
}
// Nastia BEGIN
function showAllContracts()
{
  fetch( "./api/contracts" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult7 = "";
          data.forEach( element => {
            htmlResult7 +="<table>" + "<td>" + element.contracts_id + "</td>"  +  "<td>" + element.provider_id + "</td>"  +  "<td>" + element.name_of_goods + "</td>" +  "<td>" + element.from + "</td>" +  "<td>" + element.to + "</td>" + "</table>";
          });
          $( "#contractsTable" ).html( htmlResult7 );
      } )
    }
  } )
}

function showAllGoods()
{
  fetch( "./api/goods" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult8 = "";
          data.forEach( element => {
            htmlResult8 +="<table>" + "<td>" + element.name_of_goods + "</td>"  +  "<td>" + element.accountancy_account + "</td>" + "<td>" + element.order_number + "</td>" + "<td>" + element.Unit + "</td>"  + "</table>";
          });
          $( "#goodsTable" ).html( htmlResult8 );
      } )
    }
  } )
}
//Nastia END

function showAllBillDet()
{
  fetch( "./api/billdet" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult8 = "";
          data.forEach( element => {
            htmlResult8 +="<table>" + "<td>" + element.bill_det_id + "</td>"  +  "<td>" + element.name_of_goods + "</td>" + "<td>" + element.price_per_unit + "</td>" + "<td>" + element.amount + "</td>" + "<td>" + element.sum + "</td>"  +  "<td>" + element.VAT + "</td>"  + "<td>" + element.sum_VAT + "</td>"  + "<td>" + element.bill_id + "</td>"  + "</table>";
          });
          $( "#billDetTable" ).html( htmlResult8 );
      } )
    }
  } )
}

function showAllStorage()
{
  fetch( "./api/regofstor" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult8 = "";
          data.forEach( element => {
            htmlResult8 +="<table>" + "<td>" + element.id_of_storage + "</td>"  +  "<td>" + element.responsible_person + "</td>" + "<td>" + element.address + "</table>";
          });
          $( "#regOfStorTable" ).html( htmlResult8 );
      } )
    }
  } )
}

validate();

function validateProvider( provider )
{
 //TODO: add provider validation.

  return true;
}

$( "#btnAddProvider" ).click( function() {

  var provider = {
    id : $( "#addProviderId" ).val(),
    name: $( "#addProviderName" ).val(),
    city: $( "#addCity" ).val(),
    street: $( "#addStreet" ).val(),
    building : $( "#addBuilt" ).val(),
    flat: $( "#addFlat" ).val()
  }

  if ( validateProvider( provider ) )
  {

    $.ajax({
      type: "POST",
      url: "./api/provider",
      dataType: "json",
      success: function (msg) {
          validate()
      },

      data: provider
    });
  }
  else
  {
    //TODO: add validation error message
  }


} );

/*
var app = function() {

  var currentInfoTypeId = 


  return {

  }
}();
*/