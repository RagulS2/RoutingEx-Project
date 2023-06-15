// express===================================================>
const express=require("express");
app=express();
app.use(express.json())

// cors====================================================>
const cors=require("cors")
app.use(cors());

// mysql=========================================================>
const mysql=require("mysql")

//mysql connection=============================================>

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'rahul',
    password: 'Ragul@0209',
    database: 'Company'
});
connection.connect();
console.log("connected...");


app.get('/all',(req,res)=>{
    connection.query(`SELECT id,cName,address,noe,location from companyDetails where isActive=1;`,function(error,results){
        if(error){
            console.log(error);
        }
        console.log('the output is',results);
        res.json(results);
    });
})

app.post('/insert', (req, res) => {
    console.log(req.body)
    connection.query('insert into companyDetails (cName,address,noe,location) values (?,?,?,?)', [req.body.cName, req.body.address, req.body.noe,req.body.location], function (error, results) {
        if (error) {
            console.log("error", error)
            return
        }
        console.log("created sucessfully");
        console.log(results)
        res.json(results)
    });
})

app.put('/update', (req, res) => {
    connection.query('update companyDetails set cName=?,address=?,noe=?,location=? where id=?', [req.body.cName,req.body.address,req.body.noe,req.body.location,req.body.id], function (error, results) {
        if (error) {
            console.log("error", error)
        }   
        console.log("update sucessfully");

        console.log(results)
        res.json(results)

    });
})
app.put('/delete', (req, res) => {
    connection.query('update companyDetails set isActive=? where id=?', [0,req.body.id], function (error, results) {
        if (error) {
            console.log("error", error)
        }
        console.log("deleted sucessfully");

        console.log(results)
        res.json(results)

    });
})

app.get('/getById/:id', (req, res) => {

    connection.query(`SELECT id,cName,address,address,noe,location from companyDetails where id = ${req.params.id}`, function (error, results) {
        if (error) {
            console.log(error);
        }
        console.log('The solution is: ', results);
        res.json(results)
    });
})



app.get('/allemp',(req,res)=>{
    connection.query(`SELECT id,EmpName,empAddress from EmployeeDetails;`,function(error,results){
        if(error){
            console.log(error);
        }
        console.log('the output is',results);
        res.json(results);
    });
})

app.get('/getId/:id', (req, res) => {

    connection.query(`SELECT id,EmpName,empAddress from EmployeeDetails where id = ?`,[req.params.id], function (error, results) {
        if (error) {
            console.log(error);
        }
        console.log('The solution is: ', results);
        res.json(results)
    });
})

app.listen(4000,()=>{
    console.log("we are watching");
})


app.use(cors({
    origin:'http://localhost:4200'
})) 