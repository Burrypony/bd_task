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
  db.all( "SELECT * FROM Providers", [], (err, rows) => {
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
  db.all( "SELECT * FROM Bank", [], (err, rows) => {
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

exports.listAllAccount = function( req, res )
{
  db.all( "SELECT * FROM Accounts", [], (err, rows) => {
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

exports.listProvidersAndGoods2Years = function( req, res )
{
  db.all( "SELECT Providers.provider_id, Providers.name_of_provider, BillDet.name_of_goods FROM Providers JOIN (Bill  JOIN BillDet ON BillDet.bill_id = Bill.bill_id) ON Bill.provider_id = Providers.provider_id WHERE Bill.date_of_bill >\"2016-01-01\"", [], (err, rows) => {
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

exports.listBanksWithAllMoney = function( req, res )
{
  db.all( "SELECT Bank.name_of_bank , SUM(Bill.sum_of_bill) FROM Bank JOIN (Accounts JOIN Bill ON Bill.account_id = Accounts.account_id ) ON Bank.MFI_bank = Accounts.MFI_bank GROUP BY Bank.name_of_bank HAVING COUNT(Bill.sum_of_bill)", [], (err, rows) => {
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

// Nastia ENDэ

exports.listAllNameOfGoods = function( req, res )
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

exports.findGoodsForProvider = function( req, res )
{
  let query

  query = "SELECT name_of_goods FROM Contracts WHERE provider_id =\"" + req.params.providerId + "\"";

  db.all( query , [], (err, rows) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
     res.send( rows );
    }
  } )  
}

exports.addProvider = function( req, res )
{
  let query;
  
  query = "SELECT * FROM Providers WHERE provider_id=\"" + req.body.id + "\"";

  db.all( query, [], ( err, rows ) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      if ( rows.length == 0 )
      {
        query = "INSERT INTO Providers (provider_id, name_of_provider, city, street, built, flat) VALUES ('" 
        + req.body.id + "','" + req.body.name + "','" + req.body.city + "','"
        + req.body.street + "','" + req.body.building + "','" + req.body.flat + "')"; 
      }
      else
      {
        query = `UPDATE Providers SET name_of_provider="${req.body.name}", city="${req.body.city}", street="${req.body.street}", built="${req.body.building}", flat="${req.body.flat}" WHERE provider_id="${req.body.id}"`;
      }
      db.all( query , [] , ( err, rows ) => {
        if ( err )
        {
          res.send( err );
        }
        else
        {
          res.send( "OK" );
        }
      } );      
    }
  } );
}

exports.addBills = function( req, res )
{
  let query;
  
  query = "SELECT * FROM Bill WHERE bill_id=\"" + req.body.billId + "\"";

  db.all( query, [], ( err, rows ) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      if ( rows.length == 0 )
      {
        query = "INSERT INTO Bill (date_of_bill, number_from_provider, sum_of_bill, provider_id, account_id) VALUES ('" 
        + req.body.billDate + "','" + req.body.numFromProv + "','" + req.body.sumOfBill + "','"
        + req.body.billProviderId + "','" + req.body.billAccountId + "')"; 
      }
      else
      {
        query = `UPDATE Bill SET date_of_bill="${req.body.billDate}", number_from_provider="${req.body.numFromProv}", sum_of_bill="${req.body.sumOfBill}", provider_id="${req.body.billProviderId}", account_id="${req.body.billAccountId}" WHERE bill_id="${req.body.billId}"`;
      }
      db.all( query , [] , ( err, rows ) => {
        if ( err )
        {
          res.send( err );
        }
        else
        {
          res.send( "OK" );
        }
      } );      
    }
  } );
}

/*
exports.addBill = function( req, res )
{
  let query;
  
  query = "SELECT * FROM Bill WHERE bill_id=\"" + req.body.id + "\"";

  db.all( query, [], ( err, rows ) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      if ( rows.length == 0 )
      {
        query = "INSERT INTO Bill (date_of_bill, number_from_provider, sum_of_bill, provider_id, account_id) VALUES ('" 
        + req.body.billDate + "','" + req.body.billNumber + "','" + req.body.billSum + "','"
        + req.body.billProviderId + "','" + req.body.billAccountId + "')"; 
      }
      else
      {
        query = `UPDATE Bill SET date_of_bill="${req.body.billDate}", number_from_provider="${req.body.billNumber}", sum_of_bill="${req.body.billSum}", provider_id="${req.body.billProviderId}", account_id="${req.body.billAccountId}" WHERE bill_id="${req.body.id}"`;
      }
      db.all( query , [] , ( err, rows ) => {
        if ( err )
        {
          res.send( err );
        }
        else
        {
          res.send( "OK" );
        }
      } );      
    }
  } );
}*/
exports.addBillAccount = function( req, res )
{
  const query = "INSERT INTO Accounts (account_id, MFI_bank) VALUES ('" 
  + req.body.billAccountID + "','" + req.body.billMFIAccount +  "')"; 

  db.all( query , [] , ( err, rows ) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.send( "OK" );
    }
  } )
  console.log( req.body );
}

exports.addBillBank = function( req, res )
{
  const query = "INSERT INTO Bank (MFI_bank, name_of_bank) VALUES ('" 
  + req.body.billMFIBank + "','" + req.body.billNameOfBank +  "')"; 

  db.all( query , [] , ( err, rows ) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.send( "OK" );
    }
  } )
  console.log( req.body );
}

exports.addContracts = function( req, res )
{
  const query = "INSERT INTO Contracts (provider_id, name_of_goods, fromDate, toDate) VALUES ('" 
  + req.body.contractProviderId + "','" + req.body.contractNameOfGoods + "','" + req.body.contractFrom +"','" + req.body.contractTo + "')"; 

  db.all( query , [] , ( err, rows ) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.send( "OK" );
    }
  } )
  console.log( req.body );
}

exports.addNomenOfDels = function( req, res )
{
  const query = "INSERT INTO NomenOfDel (name_of_goods, accountancy_account, order_number, Unit) VALUES ('" 
  + req.body.nomenOfDelNameOfGoods + "','" + req.body.nomenOfDelAcc + "','" + req.body.nomenOfDelOrderNumber +"','" + req.body.nomenOfDelUnit + "')"; 

  db.all( query , [] , ( err, rows ) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.send( "OK" );
    }
  } )
  console.log( req.body );
}

exports.addBillDet = function( req, res )
{
  const query = "INSERT INTO BillDet (name_of_goods, price_per_unit, amount, sum, VAT, sum_VAT, bill_id) VALUES ('" 
  + req.body.billDetNameOfGoods + "','" + req.body.billDetPricePerUnit + "','" + req.body.billDetAmount +"','" + req.body.billDetSum +  "','" + req.body.billDetVAT + "','" + req.body.billDetSumVAT + "','" + req.body.billDetBillId +"')"; 

  db.all( query , [] , ( err, rows ) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.send( "OK" );
    }
  } )
  console.log( req.body );
}

exports.addGoodsOnStor = function( req, res )
{
  const query = "INSERT INTO GoodsOnStor (name_of_goods, amount, sum, bill_id, id_of_storage) VALUES ('" 
  + req.body.goodsOnStorName + "','" + req.body.goodsOnStorAmount + "','" + req.body.goodsOnStorSum +"','" + req.body.goodsOnStorBillId +  "','" + req.body.goodsOnStorIdStorage +"')"; 

  db.all( query , [] , ( err, rows ) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.send( rows );
    }
  } )
}  

exports.filterProvidersName = function( req, res )
{
  const query = "SELECT * FROM Providers WHERE name_of_provider LIKE '%" + req.body.name + "%'";
  db.all( query , [] , ( err, rows ) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.send( rows );
    }
  } );
}

exports.addRegOfStor = function( req, res )
{
  const query = "INSERT INTO RegOfStor (responsible_person, address) VALUES ('" 
  + req.body.RegOfStorResposiblePer + "','" + req.body.RegOfStorAdress + "')"; 

  db.all( query , [] , ( err, rows ) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.send( "OK" );
    }
  } )
  console.log( req.body );
}

exports.filterBillProviderId = function( req, res )
{
  const query = "SELECT * FROM Bill WHERE provider_id LIKE '%" + req.body.providerId + "%'";
  db.all( query , [] , ( err, rows ) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.send( rows );
    }
  } );
}

exports.filterBillDetBillId = function( req, res )
{
  const query = "SELECT * FROM BillDet WHERE bill_id LIKE '%" + req.body.billId + "%'";
  db.all( query , [] , ( err, rows ) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.send( rows );
    }
  } );
}

exports.filterGoodsOnStorIdStor = function( req, res )
{
  const query = "SELECT * FROM GoodsOnStor WHERE id_of_storage LIKE '%" + req.body.idStor + "%'";
  db.all( query , [] , ( err, rows ) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.send( rows );
    }
  } );
}

exports.loadProvider = function( req, res )
{
  const query = "SELECT * FROM Providers WHERE provider_id=\"" + req.params.providerId + "\"";
  db.all( query , [] , ( err, rows ) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.send( rows );
    }
  } );
} 

exports.loadBill = function( req, res )
{
  const query = "SELECT * FROM Bill WHERE bill_id=\"" + req.params.billId + "\"";
  db.all( query , [] , ( err, rows ) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.send( rows );
    }
  } );
} 

exports.loadBillDet = function( req, res )
{
  const query = "SELECT * FROM BillDet WHERE bill_det_id=\"" + req.params.billId + "\"";
  db.all( query , [] , ( err, rows ) => {
    if ( err )
    {
      res.send( err );
    }
    else
    {
      res.send( rows );
    }
  } );
} 