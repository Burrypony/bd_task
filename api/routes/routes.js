"use strict";

const controller = require( "../controllers/controller" );

module.exports = function( app )
{
  app.route( "/api/providers" )
    .get( controller.listAllProviders );

    app.route( "/api/bills" )
    .get( controller.listAllBills );  

    //Nastia BEGIN
    app.route( "/api/billdet" )
    .get( controller.listAllBillDet );  

    app.route( "/api/goods" )
    .get( controller.listAllGoods );  

    app.route( "/api/contracts" )
    .get( controller.listAllContracts );  

    app.route( "/api/regofstor" )
    .get( controller.listAllRegOfStor );  

    app.route( "/api/providerss" )
    .get( controller.listProvidersAndGoods2Years );  

    app.route( "/api/banksbill" )
    .get( controller.listBanksWithAllMoney );  

    app.route( "/api/goodsonstorregofstor" )
    .get( controller.listAmountGoodsOnStor );  
    

    app.route( "/api/banks" )
    .get( controller.listAllBanks );  

    app.route( "/api/storage" )
    .get( controller.listAllStorages );  

    app.route( "/api/providers" )
    .get( controller.listAllProviderID );  

    app.route( "/api/provider" )
    .get( controller.listAllProviderID );  

    app.route( "/api/accounts" )
    .get( controller.listAllAccountID );  

    app.route( "/api/account" )
    .get( controller.listAllAccount ); 

    // Nastia BEGIN
    app.route( "/api/bills" )
    .get( controller.listAllBillID );  

    app.route( "/api/bill" )
    .get( controller.listAllBillID );  

    app.route( "/api/billGoodsOnStor" )
    .get( controller.listAllBillID );  

    app.route( "/api/billdet" )
    .get( controller.listAllBillDetID );  

    app.route( "/api/regofstor" )
    .get( controller.listAllRegOfStorID );  
    
    app.route( "/api/goods" )
    .get( controller.listAllGoodsID );  

    app.route( "/api/contracts" )
    .get( controller.listAllContractsID ); 
    
    app.route( "/api/storages" )
    .get( controller.listAllGoodsOnStorID );  

    app.route( "/api/nomenOfDel" )
    .get( controller.listAllNameOfGoods );  

    app.route( "/api/nomenOfDel2" )
    .get( controller.listAllNameOfGoods );  
    // Nastia END

    app.route( "/api/contractgoods/:providerId" )
    .get( controller.findGoodsForProvider );  

    app.route( "/api/billaccount/:providerId" )
    .get( controller.findAccountForProvider );  

    app.route( "/api/provider/:providerId")
    .get( controller.loadProvider);
    
    app.route( "/api/bills/:billId")
    .get( controller.loadBill);

    app.route( "/api/billdet/:billDetId")
    .get( controller.loadBillDet);

    app.route( "/api/provider" )
    .post( controller.addProvider );

    app.route( "/api/bill" )
    .post( controller.addBills );

    app.route( "/api/billDets" )
    .post( controller.addBillDet );

    app.route( "/api/account" )
    .post( controller.addBillAccount );

    app.route( "/api/bank" )
    .post( controller.addBillBank );

    app.route( "/api/contracts" )
    .post( controller.addContracts );

    app.route( "/api/nomenOfDels" )
    .post( controller.addNomenOfDels );

    /*app.route( "/api/billdet/:billDetId" )
    .post( controller.addBillDet );*/

    app.route( "/api/goodsOnStor" )
    .post( controller.addGoodsOnStor );

    app.route( "/api/addregOfStor" )
    .post( controller.addRegOfStor );

    app.route( "/api/filterProviders" )
    .post( controller.filterProvidersName );    

    app.route( "/api/filterBill" )
    .post( controller.filterBillProviderId );  

    app.route( "/api/filterBillDet" )
    .post( controller.filterBillDetBillId ); 

    app.route( "/api/filterGoodsOnStor" )
    .post( controller.filterGoodsOnStorIdStor ); 
}


