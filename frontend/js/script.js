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
      $("#op9").css( "display", "none" );
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
    $("#op9").css( "display", "none" );
    showAllBills();
    showAllProvidersID();
    showAllAccountID();
    showAllBankInAccount();
    showAllBillsBillDet();
    // showAllNameOfGoodBillDet();
    updateContractGoods( $( "#billProviderId" ).val() );
  }else if (selectedValue == "bank") {
    $("#op1").css( "display", "none" );
    $("#op2").css( "display", "none" );
    $("#op3").css( "display", "block" );
    $("#op4").css( "display", "none" );
    $("#op5").css( "display", "none" );
    $("#op6").css( "display", "none" );
    $("#op7").css( "display", "none" );
    $("#op8").css( "display", "none" );
    $("#op9").css( "display", "none" );
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
    $("#op9").css( "display", "none" );
    showAllGoodsONStorages();
    showAllIdOfStor();
    showAllBillsGoodsOnStor();
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
    $("#op9").css( "display", "none" );
    showAllContracts();
    showAllProvidersIDToContracts();
    showAllNameOfGood()
  }else if (selectedValue == "goods") {
    $("#op1").css( "display", "none" );
    $("#op2").css( "display", "none" );
    $("#op3").css( "display", "none" );
    $("#op4").css( "display", "none" );
    $("#op5").css( "display", "none" );
    $("#op6").css( "display", "block" );
    $("#op7").css( "display", "none" );
    $("#op8").css( "display", "none" );
    $("#op9").css( "display", "none" );
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
  $("#op9").css( "display", "none" );
  showAllBillDet();
  showAllNameOfGoodBillDet();
  showAllBillsBillDet();
}else if (selectedValue == "storage") {
  $("#op1").css( "display", "none" );
  $("#op2").css( "display", "none" );
  $("#op3").css( "display", "none" );
  $("#op4").css( "display", "none" );
  $("#op5").css( "display", "none" );
  $("#op6").css( "display", "none" );
  $("#op7").css( "display", "none" );
  $("#op8").css( "display", "block" );
  $("#op9").css( "display", "none" );
  showAllStorage();
}else if (selectedValue == "account") {
  $("#op1").css( "display", "none" );
  $("#op2").css( "display", "none" );
  $("#op3").css( "display", "none" );
  $("#op4").css( "display", "none" );
  $("#op5").css( "display", "none" );
  $("#op6").css( "display", "none" );
  $("#op7").css( "display", "none" );
  $("#op8").css( "display", "none" );
  $("#op9").css( "display", "block" );
  showAllAccount();
  showAllProvidersID();
}


  else {
    alert("You cant check this info please make your choise one more time")
  }


  $("#addButton").click(function(){
    if (selectedValue == "providers"){
      $("#btnAddProvider").val( "add" );
      $("#addProvider").addClass("displayFlex");
    }else if(selectedValue == "bill"){
      $("#btnAddBill").val( "add" );
      $( "#addBillId").prop( "disabled", false );
      $( "#addBill").addClass("displayFlex");
      $( "#addBillDet").addClass("displayFlex");
      $("#billAndBillDet").addClass("displayFlex");
    }else if(selectedValue == "contract"){
      $("#addContract").addClass("displayFlex");
    }else if(selectedValue == "billDet"){
      $("#addBillDet").addClass("displayFlex");
    }else if(selectedValue == "goods_on_storage"){
      $("#addGoodsOnStor").addClass("displayFlex");
    }else if(selectedValue == "storage"){
      $("#addRegOfStor").addClass("displayFlex");
    }  
  });

  $(".buttonBack").click(function(){
    if (selectedValue == "providers"){
      $("#addProvider").removeClass("displayFlex");
    }else if(selectedValue == "bill"){
      $("#addBill").removeClass("displayFlex"),
      $("#addAccount").removeClass("displayFlex"),
      $("#addBank").removeClass("displayFlex");
      $( "#addBillDet").removeClass("displayFlex");
      $("#billAndBillDet").removeClass("displayFlex");
    }else if(selectedValue == "contract"){
      $("#addContract").removeClass("displayFlex"),
      $("#addNomenOfDel").removeClass("displayFlex");
    }else if(selectedValue == "billDet"){
      $("#addBillDet2").removeClass("displayFlex");

    }else if(selectedValue == "storage"){
      $("#addRegOfStor").removeClass("displayFlex");
    }else if(selectedValue == "goods_on_storage"){
      $("#addGoodsOnStor").removeClass("displayFlex");
    }
  });
}
//REPORT1
$("#btnReport1").click(function(){
  $("#mainForm").addClass("display_none"),
  $("#report1").addClass("display_flex"),
  $("#btnPrint1").addClass("display_block");
  $("#report2").removeClass("display_flex");
  showProvidersAdnGoods2Years();
})

//REPORT2
$("#btnReport2").click(function(){
  $("#mainForm").addClass("display_none"),
  $("#report2").addClass("display_flex"),
  $("#btnPrint2").addClass("display_block");
  $("#report1").removeClass("display_flex");
  showAllMoneyInBanks();
})

$("#mainTabel").click(function(){
  $("#mainForm").removeClass("display_none"),
  $("#report1").removeClass("display_flex"),
  $("#report2").removeClass("display_flex"),
  $("#btnPrint1").removeClass("display_block");
});

$("#btnOpenRegAccount").click(function(){
  $("#addAccount").addClass("displayFlex");
  $("#addBill").removeClass("displayFlex");
});

$("#btnOpenRegBank").click(function(){
  $("#addBank").addClass("displayFlex");
  $("#addAccount").removeClass("displayFlex");
});

$("#btnAddGoods").click(function(){
  $("#addNomenOfDel").addClass("displayFlex");
  $("#addContract").removeClass("displayFlex");
});



function editProvider( id )
{
  fetch( "/api/provider/" + id ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
        if ( data.length > 0 )
        {
          $( "#addProviderId" ).val( data[0].provider_id );
          $( "#addProviderName" ).val( data[0].name_of_provider );
          $( "#addCity" ).val( data[0].city);
          $( "#addStreet" ).val( data[0].street );
          $( "#addBuilt" ).val( data[0].built );
          $( "#addFlat" ).val( data[0].flat );

          $( "#addProviderId").prop( "disabled", true );
          $("#btnAddProvider").val( "save" );
          $("#addProvider").addClass("displayFlex");
          validate();
        }
      } );
    }
  } );
}

function editBill ( id )
{
  fetch( "./api/bills/" + id ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
        if ( data.length > 0 )
        {
          $( "#billAddBillId" ).val( data[0].bill_id );
          $( "#billAddDateOfBill" ).val( data[0].date_of_bill );
          $( "#billAddNumberFromProvider" ).val( data[0].number_from_provider);
          $( "#billAddSumOfBill" ).val( data[0].sum_of_bill );
          $( "#billProviderId" ).val( data[0].provider_id );
          $( "#billAccountId" ).val( data[0].account_id );

          $( "#addBillId").prop( "disabled", true );
          $("#btnAddBill").val( "save" );
          $("#btnOpenRegAccount").prop( "type", "hidden");
          $("#addBill").addClass("displayFlex");
          $("#billAndBillDet").addClass("displayFlex");
          $("#addBillDet").addClass("display_none")
        }
      } );
    }
  } );
}

function editBillDet ( id )
{
  fetch( "./api/billdet/" + id ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
        if ( data.length > 0 )
        {
          $( "#billDetAllGoods2" ).val( data[0].name_of_goods );
          $( "#addBillDetProcePerUnit2" ).val( data[0].price_per_unit );
          $( "#addBillDetAmount2" ).val( data[0].amount);
          $( "#addBillDetSum2" ).val( data[0].sum );
          $( "#addBillDetVat2" ).val( data[0].VAT );
          $( "#addBillDetSumWithVat2" ).val( data[0].sum_VAT );

          $( "#addProviderId").prop( "disabled", true );
          $("#btnAddBillDet").val( "save" );
          //$("#btnOpenRegAccount").prop( "type", "hidden");
          $("#addBillDet2").addClass("displayFlex");
          $("#cg1").addClass("display_none");
          $("#cg2").addClass("display_none");
          //$("#billAndBillDet").addClass("displayFlex");
          //$("#addBill").addClass("display_none")
        }
      } );
    }
  } );
}





function renderProviders( rows )
{
  let htmlResult = "<table>";
  rows.forEach( element => {
    htmlResult +="<tr><td>"  + element.provider_id +"</td>"  +  "<td>" + element.name_of_provider + "</td>" + "<td>" + element.city + "</td>" + "<td>" + element.street + "</td>" + "<td>" + element.built + "</td>" + "<td>" + element.flat + "</td>";
    if ( UserStatus && UserStatus != "director" )
    {
      htmlResult += "<td class=\"edit_button\" onclick=\"editProvider(" + element.provider_id +")\">Edit</td>";
    }
    htmlResult += "</tr>";
  });
  htmlResult += "</table>";
  $( "#providersTable" ).html( htmlResult );
}

function renderBill( rows )
{
  let htmlResult = "<table>";
  rows.forEach( element => {
    htmlResult +="<td>" + element.bill_id + "</td>"  +  "<td>" + element.date_of_bill + "</td>" + "<td>" + element.number_from_provider + "</td>" + "<td>" + element.sum_of_bill + "</td>" + "<td>" + element.provider_id + "</td>" + "<td>" + element.account_id + "</td>" ;
    if ( UserStatus && UserStatus != "director" )
    {
      htmlResult += "<td class=\"edit_button\" onclick=\"editBill(" + element.bill_id +")\">Edit</td></tr>";;
    }
    htmlResult += "</tr>";
  });
  htmlResult +="</table>"
  $( "#billTable" ).html( htmlResult );
}

function renderBillDet( rows )
{
  let htmlResult = "<table>";
  rows.forEach( element => {
    htmlResult +="<td>" + element.bill_det_id + "</td>"  +  "<td>" + element.name_of_goods + "</td>" + "<td>" + element.price_per_unit + "</td>" + "<td>" + element.amount + "</td>" + "<td>" + element.sum + "</td>"  +  "<td>" + element.VAT + "</td>"  + "<td>" + element.sum_VAT + "</td>"  + "<td>" + element.bill_id + "</td>"  + "</tr>";
  });
  htmlResult += "</table>"
  $( "#billDetTable2" ).html( htmlResult );
}

function renderGoodsOnStor( rows )
{
  let htmlResult = "";
  rows.forEach( element => {
    htmlResult +="<table>" + "<td>" + element.goods_on_storages_id + "</td>"  +  "<td>" + element.name_of_goods + "</td>" + "<td>" + element.amount + "</td>" + "<td>" + element.sum + "</td>" + "<td>" + element.bill_id + "</td>" + "<td>" + element.id_of_storage + "</td>" + "</table>";
  });
  $( "#storageTable" ).html( htmlResult );
}

function showAllProviders()
{
  fetch( "/api/providers" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
        renderProviders( data )
      } )
    }
  } )
}

function showAllProvidersID()
{
  fetch( "/api/providers" ).then( (response) => {
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

function showAllIdOfStor()
{
  fetch( "/api/regofstor" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult2 = "";
          data.forEach( element => {
            htmlResult2 += "<option>" + element.id_of_storage + "</option>" ;
          });
          $( "#goodsOnStorIDOfStor" ).html( htmlResult2 );
      } )
    }
  } )
}

function showAllProvidersIDToContracts()
{
  fetch( "/api/provider" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult2 = "";
          data.forEach( element => {
            htmlResult2 += "<option>" + element.provider_id + "</option>" ;
          });
          $( "#contractProviderId" ).html( htmlResult2 );
      } )
    }
  } )
}

function showAllAccountID()
{
  fetch( "/api/accounts" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult3 = "";
          data.forEach( element => {
            htmlResult3 += "<option>" + element.account_id + "</option>"  ;
          });
          $( "#billAccountId" ).html( htmlResult3 );
      } )
    }
  } )
}

function showAllBills()
{
  fetch( "/api/bills" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
        renderBill( data )
      } )
    }
  } )
}

function showAllBillsBillDet()
{
  fetch( "/api/bill" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult4 = "";
          data.forEach( element => {
            htmlResult4 += "<option>" + element.bill_id +  "</option>" ;
          });
          $( "#billDetBillID" ).html( htmlResult4 );
      } )
    }
  } )
}

function showAllBillsGoodsOnStor()
{
  fetch( "/api/billGoodsOnStor" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult4 = "";
          data.forEach( element => {
            htmlResult4 +="<option>" + element.bill_id + "</option>" ;
          });
          $( "#goodsOnStorBillID" ).html( htmlResult4 );
      } )
    }
  } )
}

function showAllBanks()
{
  fetch( "/api/banks" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult5 = "";
          data.forEach( element => {
            htmlResult5 +="<table>" + "<td>" + element.MFI_bank + "</td>"  +  "<td>" + element.name_of_bank + "</td>" + "</table>";
          });
          $( "#bankTable" ).html( htmlResult5 );
      } )
    }
  } )
}

function showAllGoodsONStorages()
{
  fetch( "/api/storage" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
        renderGoodsOnStor( data )
      } )
    }
  } )
}


function showProvidersAdnGoods2Years()
{
  fetch( "/api/providerss" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult10 = "";
          data.forEach( element => {
            htmlResult10 +="<table>" + "<td>" + element["Providers.provider_id"] + "</td>"  +  "<td>" + element["Providers.name_of_provider"] + "</td>"  +  "<td>" + element["BillDet.name_of_goods"] + "</td>" + "</table>";
          });
          $( "#reportTabel1" ).html( htmlResult10 );
      } )
    }
  } )
}

function showAllMoneyInBanks()
{
  fetch( "/api/banksbill" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult10 = "<table>" ;
          data.forEach( element => {
            htmlResult10 += "<tr>" + "<td>" + element["Bank.name_of_bank"] + "</td>"  +  "<td>" + element["SUM(Bill.sum_of_bill)"] + "</td>" + "</tr>" ;
          });
          htmlResult10 += "</table>"
          $( "#reportTabel2" ).html( htmlResult10 );
      } )
    }
  } )
}



// Nastia BEGIN
function showAllContracts()
{
  fetch( "/api/contracts" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult7 = "";
          data.forEach( element => {
            htmlResult7 +="<table>" + "<td>" + element.contracts_id + "</td>"  +  "<td>" + element.provider_id + "</td>"  +  "<td>" + element.name_of_goods + "</td>" +  "<td>" + element.fromDate + "</td>" +  "<td>" + element.toDate + "</td>" + "</table>";
          });
          $( "#contractsTable" ).html( htmlResult7 );
      } )
    }
  } )
}

function showAllGoods()
{
  fetch( "/api/goods" ).then( (response) => {
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
  fetch( "/api/billdet" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
        renderBillDet( data )
      } )
    }
  } )
}

function showAllStorage()
{
  fetch( "/api/regofstor" ).then( (response) => {
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

function showAllAccount()
{
  fetch( "/api/account" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult9 = "";
          data.forEach( element => {
            htmlResult9 +="<table>" + "<td>" + element.account_id + "</td>"  +  "<td>" + element.MFI_bank + "</td>" + "</table>";
          });
          $( "#accountTable" ).html( htmlResult9 );
      } )
    }
  } )
}

function showAllBankInAccount()
{
  fetch( "/api/banks" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult9 = "";
          data.forEach( element => {
            htmlResult9 +="<option value=\"" +  element.MFI_bank +"\">" + element.MFI_bank +  "(" + element.name_of_bank + ")" +"</option>";
          });
          $( "#accountMFIBank" ).html( htmlResult9 );
      } )
    }
  } )
}

function showAllNameOfGood()
{
  fetch( "/api/nomenOfDel" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult9 = "";
          data.forEach( element => {
            htmlResult9 +="<option>" + element.name_of_goods +"</option>";
          });
          $( "#contractsNameOfGoods" ).html( htmlResult9 );
      } )
    }
  } )
}

function showAllNameOfGoodBillDet()
{
  fetch( "/api/nomenOfDel2" ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
          let htmlResult9 = "";
          data.forEach( element => {
            htmlResult9 +="<option>" + element.name_of_goods +"</option>";
          });
          $( "#billDetAllGoods" ).html( htmlResult9 );
      } )
    }
  } )
}

function validateProvider( provider )
{
 //TODO: add provider validation.

  return true;
}

function providerRemoveFlexClass (){
  $("#addProvider").removeClass("displayFlex");
}

function billRemoveFlexClass (){
  $("#addBill").removeClass("displayFlex");
}

function billAccountRemoveFlexClass (){
  $("#addAccount").removeClass("displayFlex");
}

function billBankRemoveFlexClass (){
  $("#addBank").removeClass("displayFlex");
}

function contractRemoveFlexClass (){
  $("#addContract").removeClass("displayFlex");
}

function nomenOfDelRemoveFlexClass (){
  $("#addNomenOfDel").removeClass("displayFlex");
}

function goodsOnStorRemoveFlexClass (){
  $("#addGoodsOnStor").removeClass("displayFlex");
}

$( "#btnAddProvider" ).click( function() {

//

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
      url: "/api/provider",
      dataType: "json",
      success: function (msg) {
          validate();
      },
      data: provider
    });
  }
  else
  {
    //TODO: add validation error message
  }
  providerRemoveFlexClass();
  validate();
} );

function validateBill( bill )
{
 //TODO: add bill validation.

  return true;
}



$( "#btnAddBill" ).click( function() {

  var bill = {
    billDate : $( "#billAddDateOfBill" ).val(),
    billNumber: $( "#billAddNumberFromProvider" ).val(),
    billSum: $( "#billAddSumOfBill" ).val(),
    billProviderId: $( "#billProviderId" ).val(),
    billAccountId : $( "#billAccountId" ).val()
  }

  if ( validateBill( bill ) )
  {

    $.ajax({
      type: "POST",
      url: "/api/bill",
      dataType: "json",
      success: function (msg) {
          validate();
      },
      data: bill
    });
  }
  else
  {
    //TODO: add validation error message
  }

  var billDet = {
    billDetNameOfGoods : $( "#billDetAllGoods" ).val(),
    billDetPricePerUnit : $( "#addBillDetProcePerUnit" ).val(),
    billDetAmount : $( "#addBillDetAmount" ).val(),
    billDetSum : $( "#addBillDetSum" ).val(),
    billDetVAT : $( "#addBillDetVat" ).val(),
    billDetSumVAT : $( "#addBillDetSumWithVat" ).val(),
    billDetBillId : $( "#billDetBillID" ).val()       
  }

  if (  validateContract( billDet ) )
  {

    $.ajax({
      type: "POST",
      url: "./api/billDets",
      dataType: "json",
      success: function (msg) {
          validate();
      },
      data: billDet
    });
  }
  else
  {
    //TODO: add validation error message
  }
  $("#billAndBillDet").removeClass("displayFlex");
  billRemoveFlexClass();
  nomenOfDelRemoveFlexClass();
  validate();
} );

$( "#btnAddBillDet" ).click( function() {

  var billDet = {
    billDetNameOfGoods : $( "#billDetAllGoods" ).val(),
    billDetPricePerUnit : $( "#addBillDetProcePerUnit" ).val(),
    billDetAmount : $( "#addBillDetAmount" ).val(),
    billDetSum : $( "#addBillDetSum" ).val(),
    billDetVAT : $( "#addBillDetVat" ).val(),
    billDetSumVAT : $( "#addBillDetSumWithVat" ).val(),
    billDetBillId : $( "#billDetBillID" ).val()       
  }

  if (  validateContract( billDet ) )
  {

    $.ajax({
      type: "POST",
      url: "./api/billDets",
      dataType: "json",
      success: function (msg) {
          validate();
      },
      data: billDet
    });
  }
  else
  {
    //TODO: add validation error message
  }
  $("#addBillDet2").removeClass("displayFlex");
  validate();
} );


function validateBillAccount( account )
{
 //TODO: add account validation.

  return true;
}

$( "#btnAddAccount" ).click( function() {

  var account = {
    billAccountID : $( "#addBillAccountId" ).val(),
    billMFIAccount : $( "#accountMFIBank" ).val()   
  }

  if ( validateBillAccount( account ) )
  {

    $.ajax({
      type: "POST",
      url: "/api/account",
      dataType: "json",
      success: function (msg) {
          validate();
      },
      data: account
    });
  }
  else
  {
    //TODO: add validation error message
  }

  billAccountRemoveFlexClass();
  validate();
} );

function validateBillBank( account )
{
 //TODO: add bank validation.

  return true;
}

$( "#btnAddBank" ).click( function() {

  var bank = {
    billMFIBank : $( "#addBillMFIbank" ).val(),
    billNameOfBank : $( "#addBillNameOfBank" ).val()   
  }

  if ( validateBillBank( bank ) )
  {

    $.ajax({
      type: "POST",
      url: "/api/bank",
      dataType: "json",
      success: function (msg) {
          validate();
      },
      data: bank
    });
  }
  else
  {
    //TODO: add validation error message
  }

  billBankRemoveFlexClass();
  validate();
} );

function validateContract( contract )
{
 //TODO: add contract validation.

  return true;
}

$( "#btnAddContract" ).click( function() {

  var contract = {
    contractProviderId : $( "#contractProviderId" ).val(),
    contractNameOfGoods : $( "#contractsNameOfGoods" ).val(),
    contractFrom : $( "#addContractFrom" ).val(),
    contractTo : $( "#addContractTo" ).val()    
  }

  if (  validateContract( contract ) )
  {

    $.ajax({
      type: "POST",
      url: "/api/contracts",
      dataType: "json",
      success: function (msg) {
          validate();
      },
      data: contract
    });
  }
  else
  {
    //TODO: add validation error message
  }

  contractRemoveFlexClass();
  validate();
} );

function validateNomenOfDel( nomenOfDel )
{
 //TODO: add NomenOfDel validation.

  return true;
}

$( "#btnAddNomenOfDel" ).click( function() {

  var nomenOfDel = {
    nomenOfDelNameOfGoods : $( "#addNomenOfDelNameOfGoods" ).val(),
    nomenOfDelAcc : $( "#addNomenOfDelAccountancyAccount" ).val(),
    nomenOfDelOrderNumber : $( "#addNomenOfDelOrderNumber" ).val(),
    nomenOfDelUnit : $( "#addNomenOfDelUnit" ).val()    
  }

  if (  validateContract( nomenOfDel ) )
  {

    $.ajax({
      type: "POST",
      url: "/api/nomenOfDels",
      dataType: "json",
      success: function (msg) {
          validate();
      },
      data: nomenOfDel
    });
  }
  else
  {
    //TODO: add validation error message
  }

  nomenOfDelRemoveFlexClass();
  validate();
} );

function validateBillDel( billDet )
{
 //TODO: add billDet validation.

  return true;
}

$( "#btnAddBillDet" ).click( function() {

  var billDet = {
    billDetNameOfGoods : $( "#billDetAllGoods" ).val(),
    billDetPricePerUnit : $( "#addBillDetProcePerUnit" ).val(),
    billDetAmount : $( "#addBillDetAmount" ).val(),
    billDetSum : $( "#addBillDetSum" ).val(),
    billDetVAT : $( "#addBillDetVat" ).val(),
    billDetSumVAT : $( "#addBillDetSumWithVat" ).val(),
    billDetBillId : $( "#billDetBillID" ).val()       
  }

  if (  validateContract( billDet ) )
  {

    $.ajax({
      type: "POST",
      url: "/api/billDets",
      dataType: "json",
      success: function (msg) {
          validate();
      },
      data: billDet
    });
  }
  else
  {
    //TODO: add validation error message
  }

  validate();
} );

function validateGoodsOnStor( GoodsOnStor )
{
 //TODO: add billDet validation.

  return true;
}

$( "#btnAddGoodsOnStor" ).click( function() {

  var GoodsOnStor = {
    goodsOnStorName : $( "#addGoodsOnStorNameOfGoods" ).val(),
    goodsOnStorAmount : $( "#addGoodsOnStorAmount" ).val(),
    goodsOnStorSum : $( "#addGoodsOnStorSum" ).val(),
    goodsOnStorBillId : $( "#goodsOnStorBillID" ).val(),
    goodsOnStorIdStorage : $( "#goodsOnStorIDOfStor" ).val()
  }

  if (  validateContract( GoodsOnStor ) )
  {

    $.ajax({
      type: "POST",
      url: "/api/goodsOnStor",
      dataType: "json",
      success: function (msg) {
          validate();
      },
      data: GoodsOnStor
    });
  }
  else
  {
    //TODO: add validation error message
  }

  goodsOnStorRemoveFlexClass();
  validate();
} );

function validateRegOfStor( RegOfStor )
{
 //TODO: add RegOfStor validation.

  return true;
}

$( "#btnAddRegOfStor" ).click( function() {

  var RegOfStor = {
    RegOfStorResposiblePer : $( "#addRegOfStorResponsiblePerson" ).val(),
    RegOfStorAdress : $( "#addRegOfStorAddress" ).val()
  }

  if (  validateRegOfStor( RegOfStor ) )
  {

    $.ajax({
      type: "POST",
      url: "/api/addRegOfStor",
      dataType: "json",
      success: function (msg) {
          validate();
      },
      data: RegOfStor
    });
  }
  else
  {
    //TODO: add validation error message
  }

  goodsOnStorRemoveFlexClass();
  validate();
} );


$( "#billProviderId" ).change( function() {
  updateContractGoods( $( this ).val() );
} );

function updateContractGoods( providerId )
{
  fetch( "./api/contractgoods/" + providerId ).then( (response) => {
    if ( response.status == 200 )
    {
      response.json().then( (data) => {
        let options = "";

        options = data.map( function( item ){ return "<option>" + item.name_of_goods + "</option>" } );
        $( "#billDetAllGoods" ).html( options.join( "" ) );
      } )
    }
  } );
}

/*
var app = function() {

  var currentInfoTypeId = 


  return {

  }
}();
*/



validate();


function filterProviders()
{
  var filterData = {
      id : $("input[name=provider_id]").val(),
      name: $( "input[name=name_of_prov]" ).val(),
      city: $( "input[name=city]" ).val(),
      street: $( "input[name=street]" ).val(),
      building : $( "input[name=built]" ).val(),
      flat: $( "input[name=flat]" ).val()
  }

  $.ajax({
    type: "POST",
    url: "/api/filterProviders",
    dataType: "json",
    success: function ( data ) {
      renderProviders( data );
    },
    data: filterData
  });
}

var providersFilterOnChange = function() {

  var tOut;

  function runFilter()
  {
    filterProviders();
  }

  return function()
  {
    if ( tOut )
    {
      window.clearTimeout( tOut );
    }
    tOut = window.setTimeout( runFilter, 500 );
  }
}();


function filterBill()
{
  var filterBill = {
      providerId : $("input[name=bill_provider_id]").val(),
      accountId: $( "input[name=account_id]" ).val()
  }

  $.ajax({
    type: "POST",
    url: "/api/filterBill",
    dataType: "json",
    success: function ( data ) {
      renderBill( data );
    },
    data: filterBill
  });
}

var billFilterOnChange = function() {

  var tOut;

  function runFilter()
  {
    filterBill();
  }

  return function()
  {
    if ( tOut )
    {
      window.clearTimeout( tOut );
    }
    tOut = window.setTimeout( runFilter, 500 );
  }
}();

function filterBillDet()
{
  var filterBillDet = {
      billId : $("input[name=bill_det_bill_id]").val()
  }

  $.ajax({
    type: "POST",
    url: "/api/filterBillDet",
    dataType: "json",
    success: function ( data ) {
      renderBillDet( data );
    },
    data: filterBillDet
  });
}

var billDetFilterOnChange = function() {

  var tOut;

  function runFilter()
  {
    filterBillDet();
  }

  return function()
  {
    if ( tOut )
    {
      window.clearTimeout( tOut );
    }
    tOut = window.setTimeout( runFilter, 500 );
  }
}();


function filterGoodsOnStor()
{
  var filterGoodsOnStor = {
      idStor : $("input[name=GoodsOnStorIdOfStorage]").val()
  }

  $.ajax({
    type: "POST",
    url: "/api/filterGoodsOnStor",
    dataType: "json",
    success: function ( data ) {
      renderGoodsOnStor( data );
    },
    data: filterGoodsOnStor
  });
}

var GoodsOnStorFilterOnChange = function() {

  var tOut;

  function runFilter()
  {
    filterGoodsOnStor();
  }

  return function()
  {
    if ( tOut )
    {
      window.clearTimeout( tOut );
    }
    tOut = window.setTimeout( runFilter, 500 );
  }
}();

//PRINT TABEL

function printReport1()
{
  var report1Print = document.getElementById("printZone1");
  newWin= window.open("");
  newWin.document.write(report1.outerHTML);
  newWin.print();
  newWin.close();
}

$("#btnPrint1").click(function(){
  printReport1();
});

function printReport2()
{
  var report2Print = document.getElementById("printZone2");
  newWin= window.open("");
  newWin.document.write(report2.outerHTML);
  newWin.print();
  newWin.close();
}

$("#btnPrint2").click(function(){
  printReport2();
});


// SUM
/*
$("#addBillDetSum").click(function(){
  sumPriceForUnitAndAmount();
});

function sumPriceForUnitAndAmount()
{
  var pfu, am;
  pfu = document.getElementById("addBillDetProcePerUnit").value;
  am = document.getElementById("addBillDetAmount").avlue;
  result = (pfu * am);
  document.getElementById("addBillDetSum").innerHTML=result;
}*/

$("#addBillDetProcePerUnit , #addBillDetAmount").bind("change", function(){
  $("#addBillDetSum").val($("#addBillDetProcePerUnit").val() * $("#addBillDetAmount").val());
});

$("#addBillDetSum , #addBillDetVat").bind("change", function(){
  sum();
  //$("#addBillDetSumWithVat").val($("#addBillDetSum".val() + $("#addBillDetVat").val()));
});
function sum(){
  var addBillDetSum = $("#addBillDetSum").val();
  var addBillDetVat = $("#addBillDetVat").val();
  var sumThis = parseInt(addBillDetSum) + parseInt(addBillDetVat);
  $("#addBillDetSumWithVat").val(sumThis);
};

if ( UserStatus && UserStatus == "director" )
{
  $( "#addButton" ).prop( "disabled", true );
}