const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://vanshika:1234@cluster0.gq1cvby.mongodb.net/tastyMunchMern?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Mongo connected');

        // Now, you can access the "food_items" collection and perform operations here
        const fetched_data = mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();

        const foodCategory = mongoose.connection.db.collection("food_category");
        const catData = await foodCategory.find({}).toArray();

        global.food_items = data;
        global.foodCategory = catData;
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};

// Export the connectDB function without invoking it
module.exports = connectDB();



