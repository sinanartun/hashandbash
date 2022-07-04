const async = require("async");
const axios = require("axios");
const run = function () {
  let c = 0;
  async.waterfall([
    function (callback) {


      for (let i = 0;i < 10;i++) {
        c++;

        console.log(i)
      }


      callback(null, c);






    },
    function (c, callback) {

      console.log("c:"+c);


      callback(null, c);



    },
    function (hashResult, callback) {

      callback(null,"finish")


    }
  ], function (err, result) {
    if (err) {

      console.log(err + ', error :( ');

      // run();
    } else {
      console.log(result);

      // run();
    }
  });
};


run();