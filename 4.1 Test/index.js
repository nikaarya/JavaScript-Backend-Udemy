import express from "express";

let app = express();
let port = 3000;

app.get("/", (req, res) => {
   res.render("index.ejs", {
      names: ["Nika", "Adam", "Lisa", "Peter"]
   });
});

app.listen(port, () => {
   console.log(`Listening on port ${port}.`);
});