const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    // Start by deleting everything
    await Campground.deleteMany({});

    // Loop and create 50 new campgrounds
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            // IMPORTANT: REPLACE WITH YOUR ACTUAL USER ID FROM YOUR DATABASE
            author: '67a7967df32e924a44dc5d6d',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price,
            // Link to the images you added to the uploads folder
            images: [
                {
                    url: '/uploads/image1.jpg',
                    filename: 'image1.jpg'
                },
                {
                    url: '/uploads/image2.jpg',
                    filename: 'image2.jpg'
                }
            ]
        });
        await camp.save();
    }
}

// Run the seed function and close the connection
seedDB().then(() => {
    mongoose.connection.close();
    console.log("Database seeded!");
});