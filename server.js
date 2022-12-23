// set up express js
const {response} = require('express');
const express = require('express');
const app = express();
const port = 8000;
const authRouter = require('./routes/auth.js')

app.use(express.json())

// set up view and public
app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs');
app.use(express.static('public'));



// routing home
app.get('/', (request, response) => {
    response.status(200).render("home")
});


// routing gamplay
app.post('/gameplay', (request, response) => {
    response.status(200).render("gameplay")
});

//route login
app.use(authRouter)



app.listen(port, () => {
    console.log(`web starting at port ${port}`)
})