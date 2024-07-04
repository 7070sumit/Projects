const path=require('path');
const express=require('express');

const PORT=3000;
const app=express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname,'public')))

const userData=require('./routes/user.js')
const adminData=require('./routes/admin.js');

app.use(userData.router)
app.use(adminData.router)




app.listen(PORT,()=>{
    console.log(`Server sucessfully started at port ${PORT}`);
})