import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
   const today = new Date();
   let day = today.getDay();

   if (day === 6 || day === 0) {
      res.render("index.ejs", {
         dayType: "the weekend",
         advice: "it's time to have some fun"
      });
   } else {
      res.render("index.ejs", {
         dayType: "a weekday",
         advice: "it's time to work hard"
      });
   }
});

app.listen(port, () => {
   console.log(`Listening on port ${port}`);
});
