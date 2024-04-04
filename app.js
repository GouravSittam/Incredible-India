const express=require('express');
const app=express();
const mongoose=require("mongoose");
const Listing=require("./models/listing.js");

const MONGO_URL="mongodb://127.0.0.1:27017/IncredibleIndia";

main().then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>");
});

//Adding a sample url for testing in database 
app.get("/testlisting", async(req,res)=>{
    let sampleListing=new Listing({
        title: "My Home",
        description: "This is my home page",
        price: 1000,
        location: "Kangra, Himachal Pradesh",
        country: "India"
    });
    await sampleListing.save();
    console.log("Sample was saved");
    res.send("<h1>Successfully created a new listing</h1>");

});

app.listen(8000, ()=>{console.log('Server is running on port 8000');});
 