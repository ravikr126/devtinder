const express = require("express");
const app = express();
const { AuthMiddl } = require("./auth/auth");
// app.use((req,res)=>{
//     res.send("Hello from the server")
// })

app.use("/hello", (req, res) => {
  res.send("Hello ");
});

app.get("/user", AuthMiddl, (req, res) => {
  res.send({ code: "ravi", password: "secret" });
});

app.use("/master", (req, res) => {
  res.send("Hello master");
});

app.listen(3000, () => {
  console.log("sercer is sucessfully run on port 3000");
});
