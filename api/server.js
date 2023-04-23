const app = require("./app");
const { connection } = require("./config/connection");

connection();

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
