const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/LavaJato", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
