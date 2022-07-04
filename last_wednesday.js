const async = require("async");
const axios = require('axios');


let hash_value =    "e10adc3949ba59abbe56e057f20f883e";
let urls=[
  'https://dna55qdmia.execute-api.eu-central-1.amazonaws.com/crack?start=0&finish=100000',//0
  'https://ho0plx649b.execute-api.eu-central-1.amazonaws.com/crack1?start=100001&finish=200000',//1
  'https://76ly2tblz5.execute-api.eu-central-1.amazonaws.com/crack2?start=200001&finish=200000',//2
  'https://8rr0jrph19.execute-api.eu-central-1.amazonaws.com/crack3?start=300001&finish=200000',//3
  'https://df8ok9mf2c.execute-api.eu-central-1.amazonaws.com/crack4?start=400001&finish=200000',//4
  'https://0vz8zhn6lg.execute-api.eu-central-1.amazonaws.com/crack5?start=500001&finish=200000',//5
  'https://0i15alo5qf.execute-api.eu-central-1.amazonaws.com/crack6?start=600001&finish=200000',//6
  'https://iogitiimek.execute-api.eu-central-1.amazonaws.com/crack7?start=700001&finish=200000',//7
  'https://236g8y6yl9.execute-api.eu-central-1.amazonaws.com/crack8?start=800001&finish=200000',//8
  'https://y67qb30coi.execute-api.eu-central-1.amazonaws.com/crack9?start=900001&finish=1000000',//9
];





const run = function () {
  let c = 0;
  async.waterfall([
    function (callback) {


      for (let i = 0;i < 10;i++) {
        axios.get(urls[i], {params: {hash: hash_value}})
          .then((response) => {
            console.log(urls[i]);

            // ans_list[i]=response.data;
            //callback(addList,ans_list,sira);

            if (response.data.toString() !== "-1" ) {
              callback(null,response.data);
            }
          }).catch((err) => {
          console.error(err);
          callback(err,null);
        });
      }







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


exports.handler = async (event) => {

  for (let i = 0;i < 10;i++) {



    await axios.get(urls[i], {params: {hash: hash_value}})
      .then((response) => {


        // ans_list[i]=response.data;
        //callback(addList,ans_list,sira);

        if (response.data.toString() !== "-1" ) {
          // callback(null,response.data);

          console.log("sssssssssssssssss")
          console.log(response.data)

        }else{
          console.log(response.data)
        }
      }).catch((err) => {
        console.error(err);
        // callback(err,null);
      });

    // const response = {
    //     statusCode: 200,
    //     body: JSON.stringify('Hello from Lambda!'),
    // };
    // return response;


    // TODO implement
    // const response = {
    //     statusCode: 200,
    //     body: JSON.stringify('Hello from Lambda!'),
    // };
    // return response;
  }
};
