// Create a new router
const express = require("express");
const router = express.Router();

// Define our data
var shopData = {
    shopName: "Drink Guzzlers",
    productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
    
    // Add shop locations
    locations: [
        {
            name: "Goldsmiths store",
            manager: "Gold, Smith",
            address: "Goldsmihts University"
        },
        {
            name: "Elephant and Castle Store",
            manager: "frank, Castle",
            address: "castle square"
        },
        {
            name: "Oxford branch",
            manager: "Ronda, Shawarma",
            address: "Oxford street"
        }
    ]
};
// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", shopData)
}); 

router.get("/about", (req, res) => {
    res.render("about.ejs", shopData)
}); 

router.get("/search", (req, res) => {
    res.render("search.ejs",shopData)
}); 

router.get('/search_result', function (req, res) {
  const name = req.query.name_text;
  const category = req.query.category_text;
  
  res.send("You searched for " + name + " in " + category);
});



router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
}); 
 
router.post("/registered", (req,res) => { 
  res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered!'+ "we will send an email to you at: " + req.body.email); 
}); 

router.get("/survey", (req, res) => {
    res.render("survey.ejs",shopData)
}); 
router.post("/submit_survey", (req, res) => {
    const first = req.body.first;
    const last = req.body.last;
    const email = req.body.email;
    const age = req.body.age;
    const drink = req.body.drinkCategory;
    const student = req.body.student ? "Yes" : "No";

    res.send(`
        <h1>Survey Submitted</h1>
        <p>Name: ${first} ${last}</p>
        <p>Email: ${email}</p>
        <p>Age: ${age}</p>
        <p>Drinks category: ${drink}</p>
        <p>Student? ${student}</p>
    `);
});


// Export the router object so index.js can access it
module.exports = router;

