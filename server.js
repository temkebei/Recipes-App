const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI =  process.env.MONGODB_URI || "mongodb://localhost/recipes_db";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

require('./routes/api-routes')(app);

app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`);
});