const asyncRedis = require("async-redis");
const mongoose = require("mongoose");
const config = require('./config.js');

class Initializer {
  static async runInitializer() {
    //await Initializer.redisDb();
    await Initializer.mongoDb();
  }
  // static async redisDb() {
  //   Initializer.redisClinet = asyncRedis.createClient({
  //     host: "127.0.0.1",
  //     db: 13,
  //   });
  // }

  static async mongoDb() {
    try {
      await mongoose.connect(`mongodb://${config.MONGO_DB_HOST}/${config.MONGO_DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        retryWrites: false
      });
      console.log("mongodb is OK");
    } catch (error) {
      console.warn("mongodb Warning", error);
    }
  }
}

module.exports = Initializer;
