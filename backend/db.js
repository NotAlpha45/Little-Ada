const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		//process.env.DB
		mongoose.connect('mongodb+srv://raiyan:1234@cluster0.uoc1c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
