import mongoose from "mongoose";

const MONGO_URL = "mongodb+srv://amatya:XyvnVxV2.P6.qRF@cluster0.jce3k.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready !");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}
async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
