import { openDatabase } from "react-native-sqlite-storage";
var db = openDatabase({ name: 'vendor.db' });

/////// Start create table of sqlite///////////////

export const createTable = () => {
  db.transaction(function (txn) {
    txn.executeSql(
      'CREATE TABLE IF NOT EXISTS Vendor_Table(transaction_id INTEGER PRIMARY KEY AUTOINCREMENT,vendor_id INTEGER ,vendor_name VARCHAR(30), demand VARCHAR(255), demand_date DATE, remark VARCHAR(255))',
      []
    )
  })
 
}

/////// End create table of sqlite///////////////




/////// Insert Recorad table of sqlite ///////////////


export const insertRecord = (body) => {
 db.transaction(function (txn) {
    txn.executeSql(
      'insert into Vendor_Table(vendor_id,vendor_name,demand,demand_date,remark)values(?,?,?,?,?)', [body.Vendorid,body.Vendorname,body.demands, body.demanddate, body.remark],

      (error, results) => {
        if (results.rowsAffected > 0) {
          console.log('Results', results.rowsAffected)
        
          return true


        }
        else {
          return false
        }

      }

    )

  })

}
/////// End Insert Recorad table of sqlite ///////////////




/////// Display Recorad table of sqlite ///////////////

export const ReadAll = (setDatas) => 
{
  var records = []
  db.transaction((tx) => {
    tx.executeSql('SELECT * FROM Vendor_Table', [],
      (tx, results) => {
      
        for (let i = 0; i < results.rows.length; i++) 
        {
          records.push(results.rows.item(i))
     
        } setDatas(records)
        console.log('shivani', records);
        return (records)
      }
    )

  })}

/////// End Display Recorad table of sqlite ///////////////




///////// Delete  Recorad table of sqlite ///////////////

  export const deleteTableRows=()=>{
    db.transaction((tx)=>{
      tx.executeSql('DELETE FROM Vendor_Table',[],
      )
    })
  }


