



app.get("/", function(req, res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
  });
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
  });