const axios = require('axios');

exports.handler = async (event) => {

  // var hash_value=event.queryStringParameters.hash;
  hash_value = "e10adc3949ba59abbe56e057f20f883e";
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


  let ans_list=[];

  let answer;


/*
for(var i =0;i<urls.length;i++){
    getR(hash_value,i,addList,urls[i],ans_list);

}
*/

  await  axios.get(urls[0],{params :{hash:hash_value}})
    .then((response) => {
      // ans_list[i]=response.data;
      //callback(addList,ans_list,sira);
      console.log(response.data);
    }).catch((err) => {
      console.error(err);
    });









  // değer bulundu mu bulunmadı mı onun kontrolü

  let i=0;
  while(i<urls.length && ans_list[i]==-1){

    i++;
  }

  if (i==urls.length) {
    answer =-1 ;
  }
  else{
    answer=ans_list[i];
  }

  return{
    statusCode:200,
    body:JSON.stringify(answer),
  };


};



async function getR(hashV, sira , callback,url,ans_list){

  await  axios.get(url,{params :{hash:hashV}})
    .then((response) => {
      // ans_list[i]=response.data;
      callback(addList,ans_list,sira);
    }).catch((err) => {
      console.error(err);
    });

}
function addList(response_data,ans_list,sira){
  console.log("response ", response_data);
  ans_list[sira]=response_data;

}