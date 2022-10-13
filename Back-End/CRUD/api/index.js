import express from "express";

const app = express();

app.listen(8765, () => {
  console.log("Connected to backend! ✅");
});
