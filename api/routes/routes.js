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
    
    //Nastia END

    app.route( "/api/banks" )
    .get( controller.listAllBanks );  

    app.route( "/api/storages" )
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

    app.route( "/api/provider" )
    .post( controller.addProvider );

    app.route( "/api/bill" )
    .post( controller.addBill );

    app.route( "/api/account" )
    .post( controller.addBillAccount );

    app.route( "/api/bank" )
    .post( controller.addBillBank );

    app.route( "/api/contracts" )
    .post( controller.addContract );

    app.route( "/api/nomenOfDels" )
    .post( controller.addNomenOfDels );

    app.route( "/api/billDets" )
    .post( controller.addBillDet );
}


