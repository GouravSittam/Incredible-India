const express=require('express');
const app=express();
const mongoose=require("mongoose");
const Listing=require("./models/listing.js");
const path=require("path");

const MONGO_URL="mongodb://127.0.0.1:27017/IncredibleIndia";

main().then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}


//Listings the data EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method")); 



app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>");
});

//Index route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  });


 
  //Show Route
  app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
  });




//Adding a sample url for testing in database 
// app.get("/testlisting", async(req,res)=>{
//     let sampleListing=new Listing({
//         title: "My Home",
//         description: "This is my home page",
//         price: 1000,
//         location: "Kangra, Himachal Pradesh",
//         country: "India"
//     });
//     await sampleListing.save();
//     console.log("Sample was saved");
//     res.send("<h1>Successfully created a new listing</h1>");

// });

app.listen(8000, ()=>{console.log('Server is running on port 8000');});
 