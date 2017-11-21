const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("client/build"));


mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

const db = require('./models')
	const {Article} = db


app.post("/api/saved", (req, res) => {
	var article = req.body
	console.log(article)


	Article.create(article)
		.then(() => {
			res.json(article)
		})
		.catch((err) => {
			res.json(err)
		})

})

app.get("*", function(req, res){
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

