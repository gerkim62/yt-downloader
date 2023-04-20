const express = require("express");
const ytdl = require("ytdl-core");
const app = express();

const PORT = 3000;

app.get("/download", (req, res) => {
  const url = req.query.url;
  res.header("Content-Disposition", 'attachment; filename="video.mp4"');
  ytdl(url, { format: "mp4" }).pipe(res);
});

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
