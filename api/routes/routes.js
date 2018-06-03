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

    app.route( "/api/accounts" )
    .get( controller.listAllAccountID );  

    // Nastia BEGIN
    app.route( "/api/bills" )
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

    // Nastia END

    app.route( "/api/provider" )
    .post( controller.addProvider );
}

