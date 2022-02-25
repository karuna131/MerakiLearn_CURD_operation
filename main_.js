const express = require('express');
var fs = require('fs');
const data = require('./fetch_data');
// console.log(data);
const json_data = require('./Data.json');
// console.log(json_data);
const bodyparser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const { type } = require('os');


const app = express();
var PORT = 8000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get('/get_data', (req,res)=>{
    res.send(data);
})


app.post('/send_data', (req,res)=>{
    var Information = {
    'id': req.body.id, 
    'name' : req.body.name, 
    'logo' : req.body.logo,
    'notes' : req.body.notes,
    'days_to_complete' : req.body.days_to_complete,
    'short_description' : req.body.short_description,     
    'type' : req.body.type,
    'course_type' : req.body.course_type,
    'lang_available' : req.body.lang_available
}
    res.json(Information);
    // console.log(req.body);
    // var read = fs.readFileSync('Data.json');
    var data_info = JSON.parse(fs.readFileSync('Data.json'));
    data_info.push(Information);
    fs.writeFileSync("Data.json",JSON.stringify(data_info,null,4));
 
})



app.put('/update_data/:id', (req,res)=>{
    const id = req.params.id
    const name = req.body.name
    const logo = req.body.logo
    const notes = req.body.notes
    const days_to_complete = req.body.days_to_complete
    const short_description = req.body.short_description
    const type = req.body.type
    const course_type = req.body.course_type
    const lang_available = req.body.lang_available
    const data_elements = data.map((data_)=>{
        if(data_.id==id){
            data_['name'] = name,
            data_['logo'] = logo,
            data_['notes'] = notes,
            data_['days_to_complete'] = days_to_complete,
            data_['short_description'] = short_description,
            data_['type'] = type,
            data_['course_type'] = course_type,
            data_['lang_available'] = lang_available
            return data_;
        }
        else{
            return data_;
        }
    });
    fs.writeFileSync("Data.json",JSON.stringify(data_elements,null,4));
    res.json(data_elements);
})



app.delete('/delete_data/:id', (req,res)=>{
    const id = req.params.id;
    res.send(`id ${id} is deleted`)
    del = data.filter((d)=>d.id!=id);
    fs.writeFileSync("Data.json",JSON.stringify(del,null,4));
})


app.listen(PORT, ()=>{
    console.log('okk')
}); 