const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const { error } = require('console');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: "mysql.razs.me",
    user: "flh_user2",
    password: "z3M5-gQDX_Ba!8[23",
    database: "flh_student"
});

// Connecting to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

app.get('/',(req,res)=>{
    res.send("Welcome to Express Server")
})

app.get('/jobs', (req, res) => {
    db.query("SELECT * FROM waseem_jobprotal", (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

//create users
app.post('/waseem_users',(req,res) => { 

  const { Name , Email, Password, Repeatpassword } = req.body;

    console.log(req.body);
    const query = 'INSERT INTO waseem_users ( Name, Email, password, Repeatpassword) VALUES (?,?,?,?)'; 
      
      db.query(query,[ Name, Email , Password, Repeatpassword ], (err,result) =>{

            if (err) {
                console.log(err)
                return res.status(500).json({ error: 'error creating users'});
            }
            res.status(201).json({message: 'user created', userId: result.insertId});

      });

});


// Read all users
app.get('/waseem_users', (req, res) => {
    const query = 'SELECT * FROM waseem_users';
   
    db.query(query, (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Error fetching users' });
      }
      res.status(200).json(results);
    });
  });






  //   db.query(query, (err, results) => {
  //     if (err) {
  //       return res.status(500).json({ error: 'Error fetching users' });
  //     }
  //     res.status(200).json(results);
  //   });
  // });
 
//login Api
//   app.post('/waseem_login', (req,res)=>{
//     const{Emailaddress,Password}=req.body;
    
//   const query = "SELECT * FROM `waseem_users` WHERE Emailaddress LIKE? AND Password LIKE?";

// db.query(query,[ Emailaddress , Password], (err,result)=>{

//   if(err){
    
//     return res.status(500).send({ error: 'Emailaddress/Password invalid, try again'});
//   }
//    if(results.length>0){
//     res.send({message:"your login successfull"});
//    }else{ 
//     res.send({message:"invalid username/password"});

//    }
// });
 
// })

app.post('/waseem_login', (req, res) => {
  const { Emailaddress, Password } = req.body;

  if (!Emailaddress || !Password) {
      return res.status(400).json({ error: "Email and Password are required" });
  }

  const query = "SELECT * FROM `waseem_users` WHERE Email = ?";

  db.query(query, [Emailaddress], (err, result) => {
      if (err) {    
          console.error("Database error:", err);
          return res.status(500).json({ error: "Internal Server Error" });
      }

      if (result.length === 0) {
          return res.status(401).json({ error: "Invalid username or password" });
      }

     
      if (result[0].Password === Password) {
          return res.json({ message: "Your login was successful" });
      } else {
          return res.status(401).json({ error: "Invalid username or password" });
      }
  });
});

  








app.listen(4000, () => console.log("Server running on port 4000"));