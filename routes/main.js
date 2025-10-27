// Create a new router
const express = require("express");
const router = express.Router();

// Define our data
var shopData = {shopName: "The Thirsty Student", 
                productCategories:["Beer", "Wine", "Soft Drinks", "Hot Drinks"]}

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

// Export the router object so index.js can access it
module.exports = router;

