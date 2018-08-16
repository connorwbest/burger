//Import our Mysql connection
var connection = require('../config/connection.js');

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";

        console.log(queryString);

        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            } else {
                cb(result);
            }
        });
    },

    createOne: function(table, cols, val, cb) {
        var queryString = "INSERT INTO " + table + " (" + cols + ") "  + "VALUES (" + printQuestionMarks(val.length) + ") ";
        
        console.log(queryString);

        connection.query(queryString, val, function(err, result){
            if(err) {
                throw err
            } else {
                cb(result);
            }
        })
    },

    updateOne: function(table, objColVals, watched, cb) {
        var queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + watched;

        console.log(queryString);

        connection.query(queryString, function(err, result){
            if(err) {
                throw err;
            } else {
                cb(result);
            }
        })
    }
}


module.exports = orm;