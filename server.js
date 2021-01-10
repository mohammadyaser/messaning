const app = require("./app");
const config = require('./config.js');
// let init = require("./initializer");
// init.runInitializer()
//   .then(() => {
//     app.listen(8080, () => {
//       console.log("server port is 8080");
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

  app.listen(config.PORT, () => {
    console.log(`server port is ${config.PORT}`)
  })
