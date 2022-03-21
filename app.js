const express = require("express");
const app = express();
const port = 5055;
const users = require('./db/users.json');
//const filesystem = require("fs");


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get("/", (req, res) => {
   res.render('index');
})

app.get("/gameplay", (req, res) => {
    res.render('gameplay');
})

app.get("/users", (req, res) => {
    console.log(users)
    res.status(200).json(users);
})

app.get("/login", (req, res) => {
    res.render('loginPage');
})

app.get("/register", (req, res) => {
    res.render('registerPage');
  })


app.post("/register", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const newUser = {
        email: email,
        password: password
    }

    users.push(newUser);
    //filesystem.writeFileSync("./db/users.json", JSON.stringify(users));
    
    res.status(201).redirect('/loginPage');
    // res.json({
    //     message: "success",
    //     data: users
    // })
})

app.post("/login", (req, res) => {
    //const {email, password} = req.body
    const email = req.body.email;
    const password = req.body.password;

    for(user of users) {
        if(user.email === email && user.password === password){
            return res.redirect('/gameplay');
        }
    }

    res.status(400).json({
        message: "Email atau password salah"
    })
})

app.listen(port, () => {
    console.log(`listen at port: ${port}`);
})