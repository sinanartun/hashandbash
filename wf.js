const axios =  require("axios");
const async = require('async');
const {map} = require("async");

let hash_value =    "e10adc3949ba59abbe56e057f20f883e";
let urls=[
  'https://dna55qdmia.execute-api.eu-central-1.amazonaws.com/crack',//0
  'https://ho0plx649b.execute-api.eu-central-1.amazonaws.com/crack1',//1
  'https://76ly2tblz5.execute-api.eu-central-1.amazonaws.com/crack2',//2
  'https://8rr0jrph19.execute-api.eu-central-1.amazonaws.com/crack3',//3
  'https://df8ok9mf2c.execute-api.eu-central-1.amazonaws.com/crack4',//4
  'https://0vz8zhn6lg.execute-api.eu-central-1.amazonaws.com/crack5',//5
  'https://0i15alo5qf.execute-api.eu-central-1.amazonaws.com/crack6',//6
  'https://iogitiimek.execute-api.eu-central-1.amazonaws.com/crack7',//7
  'https://236g8y6yl9.execute-api.eu-central-1.amazonaws.com/crack8',//8
  'https://y67qb30coi.execute-api.eu-central-1.amazonaws.com/crack9',//9
];


const run = function () {
  async.waterfall([
    function (callback) {




      urls.map( function (link, i) {
         axios.get(link, {params: {hash: hash_value}})
          .then((response) => {
            console.log(link);

            // ans_list[i]=response.data;
            //callback(addList,ans_list,sira);

            if (response.data.toString() !== "-1" ) {
              callback(null,response.data);
            }
          }).catch((err) => {
            console.error(err);
          });


      });




    },
    function (hashResult, callback) {

      console.log(hashResult);


        callback(null, hashResult);



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