const fs = require('fs');
var Data = fs.readFileSync('Data.json');
var fetched_data = JSON.parse(Data);


module.exports = fetched_data;








// const url = axios.get("https://api.merakilearn.org/courses");
// var data = url.data;
// const fatch = JSON.stringify(data);
// fs.writeFileSync('Data.json', fatch);
// console.log(data)

// // module.exports = Data;


// const axios = require('axios');
// const url = "https://api.merakilearn.org/courses"
// axios.get(url).then(resp =>{
//     var data = resp.data;        //converting into data
//     // console.log(data)
//     var putdata = JSON.stringify(data, null, 4);
//     fs.writeFileSync('Data.json', putdata);
// });
