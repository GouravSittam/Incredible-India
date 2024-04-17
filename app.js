require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");//help for create template in websites

// const MONGO_URL = "mongodb://127.0.0.1:27017/IncredibleIndia";
const dbUrl = process.env.ATLASDB_URL;

// async function main() {
//   await mongoose.connect(MONGO_URL);
// }

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

  async function main() {
    await mongoose.connect(dbUrl);
  }

  app.get("/", (req, res) => {
    res.send("Hello, I am groot");
    // res.render("listings/home.ejs");
  });

  app.get("/book", (req, res) => {
    // res.send("Hello, I am groot");
    res.render("listings/book.ejs");
  });

  //home
app.get("/home", (req, res) => {
  // res.send("Hello, I am groot");
  res.render("listings/home.ejs");
});

//New Route
app.get("/listings/new", (req, res)=>{
    res.render("listings/new.ejs"); 
});

//Create Route
app.post("/listings", async (req, res)=>{
  // let {title, description, image, price, country, location} = req.body;
  let newListing = new Listing(req.body.listing);
  await newListing.save();
  // console.log(listing);
  res.redirect("/listings");
});

//Edit Route
app.get("/listings/:id/edit", async (req, res)=>{
  const { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", {listing});
});

//Update Route
app.put("/listings/:id", async(req, res)=>{
  let {id} = req.params;
  await Listing.findByIdAndUpdate(id, {...req.body.listing});
  res.redirect(`/listings/${id}`);
})

//Delete Route
app.delete("/listings/:id", async (req, res)=>{
  let {id} = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listings");
});

//Show Route
app.get("/listings/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send("Invalid ObjectId.");
    }

    const objectId = new mongoose.Types.ObjectId(id);
    const listing = await Listing.findOne({ _id: objectId });

    if (!listing) {
      return res.status(404).send("Listing not found.");
    }

    res.render("listings/show.ejs", { listing });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error.");
  }
});

//Index Route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

// app.get("/testListing", async (req, res)=>{
//     let sampleListing = new Listing({
//         title: "My New Villa",
//         description: "By the beach",
//         price: 1200,
//         location: "Calangute, Goa",
//         country: "India",
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("Successful Testing");
// })

app.listen(8000, () => {
  console.log(`server is listening to port 8000`);
});