"use strict";

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('data.sqlite', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

exports.listAllProviders = function( req, res )
{
  db.all( "SELECT * FROM Providers JOIN PhoneNum ON Providers.provider_id = PhoneNum.provider_id", [], (err, rows) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.json( rows );
    }
  } )  
}

exports.listAllBills = function( req, res )
{
  db.all( "SELECT * FROM Bill", [], (err, rows) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.json( rows );
    }
  } )  
}

// NASTIA BEGIN
exports.listAllBillDet = function( req, res )
{
  db.all( "SELECT * FROM BillDet", [], (err, rows) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.json( rows );
    }
  } )  
}

exports.listAllGoods = function( req, res )
{
  db.all( "SELECT * FROM NomenOfDel", [], (err, rows) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.json( rows );
    }
  } )  
}

exports.listAllContracts = function( req, res )
{
  db.all( "SELECT * FROM Contracts", [], (err, rows) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.json( rows );
    }
  } )  
}

exports.listAllRegOfStor = function( req, res )
{
  db.all( "SELECT * FROM RegOfStor", [], (err, rows) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.json( rows );
    }
  } )  
}
// Nastia END

exports.listAllBanks = function( req, res )
{
  db.all( "SELECT * FROM Bank JOIN Accounts ON Bank.MFI_bank = Accounts.MFI_bank", [], (err, rows) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.json( rows );
    }
  } )  
}

exports.listAllStorages = function( req, res )
{
  db.all( "SELECT * FROM GoodsOnStor", [], (err, rows) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.json( rows );
    }
  } )  
}

exports.listAllProviderID = function( req, res )
{
  db.all( "SELECT provider_id FROM Providers", [], (err, rows) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.json( rows );
    }
  } )  
}

exports.listAllAccountID = function( req, res )
{
  db.all( "SELECT account_id FROM Accounts", [], (err, rows) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.json( rows );
    }
  } )  
}

// Nastia BEGIN

exports.listAllBillID = function( req, res )
{
  db.all( "SELECT bill_id FROM Bill", [], (err, rows) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.json( rows );
    }
  } )  
}

exports.listAllBillDetID = function( req, res )
{
  db.all( "SELECT bill_det_id FROM BillDet", [], (err, rows) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.json( rows );
    }
  } )  
}

exports.listAllRegOfStorID = function( req, res )
{
  db.all( "SELECT id_of_storage FROM RegOfStor", [], (err, rows) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.json( rows );
    }
  } )  
}


exports.listAllGoodsID = function( req, res )
{
  db.all( "SELECT name_of_goods FROM NomenOfDel", [], (err, rows) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.json( rows );
    }
  } )  
}

exports.listAllContractsID = function( req, res )
{
  db.all( "SELECT contracts_id FROM Contracts", [], (err, rows) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.json( rows );
    }
  } )  
}

exports.listAllGoodsOnStorID = function( req, res )
{
  db.all( "SELECT goods_on_storages_id FROM GoodsOnStor", [], (err, rows) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.json( rows );
    }
  } )  
}

// Nastia END

exports.addProvider = function( req, res )
{
  console.log( req.body );
  res.send( "OK" );
}