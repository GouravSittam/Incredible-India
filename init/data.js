const sampleListings = [
  {
    title: "Taj Mahal Retreat",
    description:
      "Experience the grandeur of the Taj Mahal in this luxurious retreat. Explore the rich history and culture of Agra.",
    image:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/6822877.jpg?k=2269f1fca3724601cd5ff9a65c7c93bc3f7ecf309b3b387411acf530521dbbd6&o=&hp=1",
    price: 1500,
    location: "Agra",
    state: "Uttar Pradesh",
    country: "India",
  },
  {
    title: "Goa Beachfront Villa",
    description:
      "Relax on the sandy beaches of Goa in this beautiful beachfront villa with a private pool.",
    image:"https://images.unsplash.com/photo-1529236180072-ffc4c847ff24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Goa",
    state: "Goa",
    country: "India",
  },
  {
    title: "Kerala Backwater Houseboat",
    description:
      "Cruise through the serene backwaters of Kerala in this traditional houseboat. Witness picturesque landscapes and local life.",
    image:"https://images.unsplash.com/photo-1616543382503-d3501dcb960f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Alappuzha",
    state: "Kerala",
    country: "India",
  },
  {
    title: "Jaipur Royal Palace",
    description:
      "Live like royalty in this majestic palace in the Pink City of Jaipur. Immerse yourself in the vibrant culture and history of Rajasthan.",
    image:"https://images.unsplash.com/photo-1611963451988-1313b07d3f62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Jaipur",
    state: "Rajasthan",
    country: "India",
  },
  {
    title: "Leh-Ladakh Adventure Camp",
    description:
      "Embark on an adventure in the breathtaking landscapes of Leh-Ladakh. Camp under the stars and explore the rugged terrain.",
    image:"https://images.unsplash.com/photo-1600501851304-1a55c6135cf2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Leh",
    state: "Ladakh",
    country: "India",
  },
  {
    title: "Varanasi Spiritual Retreat",
    description:
      "Find inner peace in the spiritual city of Varanasi. Experience the ancient rituals on the banks of the Ganges.",
    image:"https://images.unsplash.com/photo-1529572892816-00e6784c0799?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Varanasi",
    state: "Uttar Pradesh",
    country: "India",
  },
  {
    title: "Munnar Hill Station Cottage",
    description:
      "Escape to the tranquil hills of Munnar in this cozy cottage surrounded by tea plantations. Enjoy the cool breeze and scenic views.",
    image:"https://images.unsplash.com/photo-1520286874555-9d3a9f5779d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Munnar",
    state: "Kerala",
    country: "India",
  },
  {
    title: "Udaipur Lakefront Villa",
    description:
      "Experience the romance of Udaipur in this elegant lakefront villa. Admire the stunning sunset over Lake Pichola.",
    image:"https://images.unsplash.com/photo-1568716320237-7a8062e8e99f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Udaipur",
    state: "Rajasthan",
    country: "India",
  },
  {
    title: "Andaman Island Paradise",
    description:
      "Discover paradise on the Andaman Islands in this secluded beach resort. Dive into crystal-clear waters and relax on pristine beaches.",
    image:"https://images.unsplash.com/photo-1584800304770-cc03c6ca4585?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Andaman Islands",
    state: "Andaman and Nicobar Islands",
    country: "India",
  },
  {
    title: "Mumbai City Apartment",
    description:
      "Experience the hustle and bustle of Mumbai in this modern city apartment. Explore Bollywood, markets, and iconic landmarks.",
    image:"https://images.unsplash.com/photo-1529100748327-e6b2f3e5c0a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Mumbai",
    state: "Maharashtra",
    country: "India",
  },
  {
    title: "Darjeeling Tea Estate Bungalow",
    description:
      "Immerse yourself in the aroma of tea in this charming bungalow in Darjeeling. Explore tea gardens and enjoy panoramic views of the Himalayas.",
    image:"https://images.unsplash.com/photo-1614371248004-e2e5a5e9b622?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Darjeeling",
    state: "West Bengal",
    country: "India",
  },
  {
    title: "Hampi Heritage Homestay",
    description:
      "Step back in time in the UNESCO World Heritage Site of Hampi. Stay in a traditional homestay and explore ancient ruins.",
    image:"https://images.unsplash.com/photo-1584120788497-6fc5fc855ad7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Hampi",
    state: "Karnataka",
    country: "India",
  },
  {
    title: "Rishikesh Yoga Retreat",
    description:
      "Rejuvenate your mind, body, and soul in the yoga capital of the world. Practice yoga and meditation in tranquil surroundings.",
    image:"https://images.unsplash.com/photo-1593173930048-4a2c9259cfc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Rishikesh",
    state: "Uttarakhand",
    country: "India",
  },
  {
    title: "Puducherry French Villa",
    description:
      "Experience a slice of France in the charming town of Puducherry. Stay in a colonial villa and stroll along the picturesque promenade.",
    image:"https://images.unsplash.com/photo-1617622562357-1162bfa20134?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Puducherry",
    state: "Puducherry",
    country: "India",
  },
  {
    title: "Shimla Mountain Cabin",
    description:
      "Escape to the cool hills of Shimla in this cozy mountain cabin. Enjoy panoramic views and trekking trails.",
    image:"https://images.unsplash.com/photo-1541895129-f73f04fffae5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Shimla",
    state: "Himachal Pradesh",
    country: "India",
  },
  {
    title: "Pune Vineyard Resort",
    description:
      "Indulge in wine tasting and relaxation at a vineyard resort in Pune. Experience the charm of the countryside.",
    image:"https://images.unsplash.com/photo-1576628386661-72ed3f8ed0df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Pune",
    state: "Maharashtra",
    country: "India",
  },
  {
    title: "Kolkata Cultural Homestay",
    description:
      "Immerse yourself in the rich culture and heritage of Kolkata in a traditional homestay. Explore historic landmarks and taste local cuisine.",
    image:"https://images.unsplash.com/photo-1607281987499-4c8cf319d80e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Kolkata",
    state: "West Bengal",
    country: "India",
  },
  {
    title: "Rajkot Heritage Haveli",
    description:
      "Step into the bygone era in a heritage haveli in Rajkot. Experience royal hospitality and explore the vibrant markets.",
    image:"https://images.unsplash.com/photo-1541731559977-d68292c34b19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Rajkot",
    state: "Gujarat",
    country: "India",
  },
  {
    title: "Srinagar Houseboat Experience",
    description:
      "Stay in a traditional houseboat on the serene Dal Lake in Srinagar. Enjoy shikara rides and breathtaking views of the Himalayas.",
    image:"https://images.unsplash.com/photo-1610357513964-c08095baf73e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Srinagar",
    state: "Jammu and Kashmir",
    country: "India",
  },
  {
    title: "Chennai Beach House",
    description:
      "Relax on the sandy shores of Chennai in a beachfront house. Enjoy seafood delicacies and vibrant nightlife.",
    image:"https://images.unsplash.com/photo-1605563902184-34bb4adada4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Chennai",
    state: "Tamil Nadu",
    country: "India",
  },
  {
    title: "Madurai Temple Retreat",
    description:
      "Explore the ancient temples of Madurai from a serene retreat. Witness religious ceremonies and architectural marvels.",
    image:"https://images.unsplash.com/photo-1612301739282-762ea42b4d07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Madurai",
    state: "Tamil Nadu",
    country: "India",
  },
  {
    title: "Aurangabad Caves Exploration",
    description:
      "Discover the ancient caves of Aurangabad from a comfortable base. Marvel at intricate carvings and learn about Buddhist history.",
    image:"https://images.unsplash.com/photo-1573575932377-907e96ad3b9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Aurangabad",
    state: "Maharashtra",
    country: "India",
  },
  {
    title: "Amritsar Golden Temple Homestay",
    description:
      "Experience the spiritual aura of the Golden Temple in Amritsar from a cozy homestay. Witness the mesmerizing evening ceremony.",
    image:"https://images.unsplash.com/photo-1618129290465-e09f8a1b138f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Amritsar",
    state: "Punjab",
    country: "India",
  },
  {
    title: "Lucknow Nawabi Mansion",
    description:
      "Live like a Nawab in a grand mansion in Lucknow. Indulge in culinary delights and explore the city's rich heritage.",
    image:"https://images.unsplash.com/photo-1542362062-7df30b5c19b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Lucknow",
    state: "Uttar Pradesh",
    country: "India",
  },
  {
    title: "Guwahati Riverfront Retreat",
    description:
      "Escape to a peaceful retreat on the banks of the Brahmaputra River in Guwahati. Explore wildlife and cultural attractions.",
    image:"https://images.unsplash.com/photo-1607406383695-c62b2fd3ddc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Guwahati",
    state: "Assam",
    country: "India",
  },
  {
    title: "Bengaluru Tech Hub Apartment",
    description:
      "Experience the vibrant tech culture of Bengaluru from a stylish apartment. Explore bustling markets and innovative startups.",
    image:"https://images.unsplash.com/photo-1575926680220-bbd9c2d9c51b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Bengaluru",
    state: "Karnataka",
    country: "India",
  },
  {
    title: "Hyderabad Nawabi Palace",
    description:
      "Live like royalty in a Nawabi palace in Hyderabad. Explore historic landmarks and savor authentic Hyderabadi cuisine.",
    image:"https://images.unsplash.com/photo-1606144345898-330ec1e60462?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Hyderabad",
    state: "Telangana",
    country: "India",
  },
  {
    title: "Tirupati Temple Pilgrimage",
    description:
      "Embark on a spiritual journey to the sacred temples of Tirupati. Seek blessings and witness religious rituals.",
    image:"https://images.unsplash.com/photo-1559582934-80b67e4436d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Tirupati",
    state: "Andhra Pradesh",
    country: "India",
  },
  {
    title: "Nainital Lakeside Retreat",
    description:
      "Relax by the tranquil lakes of Nainital in a cozy retreat. Enjoy boating and stunning views of the surrounding mountains.",
    image:"https://images.unsplash.com/photo-1540225124871-8d928f0e5ef0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Nainital",
    state: "Uttarakhand",
    country: "India",
  },
  {
    title: "Jodhpur Desert Camp",
    description:
      "Experience the magic of the Thar Desert in a luxury camp in Jodhpur. Enjoy camel safaris and traditional Rajasthani entertainment.",
    image:"https://images.unsplash.com/photo-1564754910082-92a6c4641c77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Jodhpur",
    state: "Rajasthan",
    country: "India",
  },
  {
    title: "Gangtok Mountain Retreat",
    description:
      "Escape to the serene mountains of Gangtok in a cozy retreat. Explore monasteries and enjoy panoramic views of Kanchenjunga.",
    image:"https://images.unsplash.com/photo-1550082673-9f5a0a424490?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Gangtok",
    state: "Sikkim",
    country: "India",
  },
  {
    title: "Thiruvananthapuram Beach Resort",
    description:
      "Relax on the golden sands of Thiruvananthapuram in a beach resort. Indulge in Ayurvedic treatments and water sports.",
    image:"https://images.unsplash.com/photo-1601652332225-7cd5b9bbf637?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Thiruvananthapuram",
    state: "Kerala",
    country: "India",
  }
];

module.exports = { data: sampleListings };
