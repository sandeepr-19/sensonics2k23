const express = require("express");
const PORT = process.env.PORT || 8082;
const app = express();
const pug = require("pug");
const path = require("path");
const bdp = require("body-parser");
const enc = bdp.urlencoded({ extended: true });

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));
app.use(express.static("./public"));

const MongoClient = require("mongodb").MongoClient;
const db_url =
  "mongodb+srv://sandeep:aZMYo0C6G3KxYqMA@cluster-details.ffmkvzn.mongodb.net/?retryWrites=true&w=majority";

app.get("/", (req, res) => {
  res.render("landing.pug");
});

app.get("/event1", (req, res) => {
  res.render("event1.pug");
});
app.get("/event2", (req, res) => {
  res.render("event2.pug");
});
app.get("/event3", (req, res) => {
  res.render("event3.pug");
});
app.get("/event4", (req, res) => {
  res.render("event4.pug");
});
app.get("/event5", (req, res) => {
  res.render("event5.pug");
});
app.get("/event6", (req, res) => {
  res.render("event6.pug");
});

app.post("/event1_d", enc, (req, res) => {
  let tname = req.body.tname;
  let name1 = req.body.name1;
  let rollno = req.body.rollno;
  let email = req.body.email;
  let mobileno = req.body.mobileno;
  let title = req.body.title;
  let abstract = req.body.abstract;
  let name2 = req.body.name2;
  let rollno2 = req.body.rollno2;
  let name3 = req.body.name3;
  let rollno3 = req.body.rollno3;
  MongoClient.connect(db_url, async (err, db) => {
    if (err) throw err;
    const dbo = db.db("event-details");

    const doc = {
      team_name: tname,
      name1: name1,
      rollno: rollno,
      email: email,
      mobileno: mobileno,
      title: title,
      abstract: abstract,
      name2: name2,
      rollno2: rollno2,
      name3: name3,
      rollno3: rollno3,
    };
    const result = await dbo.collection("event1").insertOne(doc);
    db.close();
  });
  res.send("data successfully stored");
});

app.post("/event2_d", enc, (req, res) => {
  let tname = req.body.tname;
  let name1 = req.body.name1;
  let rollno = req.body.rollno;
  let email = req.body.email;
  let mobileno = req.body.mobileno;
  let title = req.body.title;
  let abstract = req.body.abstract;
  let name2 = req.body.name2;
  let rollno2 = req.body.rollno2;
  let name3 = req.body.name3;
  let rollno3 = req.body.rollno3;
  MongoClient.connect(db_url, async (err, db) => {
    if (err) throw err;
    const dbo = db.db("event-details");

    const doc = {
      team_name: tname,
      name1: name1,
      rollno: rollno,
      email: email,
      mobileno: mobileno,
      title: title,
      abstract: abstract,
      name2: name2,
      rollno2: rollno2,
      name3: name3,
      rollno3: rollno3,
    };
    const result = await dbo.collection("event2").insertOne(doc);
    db.close();
  });
  res.render("landing.pug");
});

app.post("/event3_d", enc, (req, res) => {
  let name = req.body.name;
  let rollno = req.body.rollno;
  let email = req.body.email;
  let mobileno = req.body.mobileno;
  MongoClient.connect(db_url, async (err, db) => {
    if (err) throw err;
    const dbo = db.db("event-details");

    const doc = {
      name: name,
      rollno: rollno,
      email: email,
      mobileno: mobileno,
    };
    const result = await dbo.collection("event3").insertOne(doc);
    db.close();
  });
  res.render("landing.pug");
});

app.post("/event4_d", enc, (req, res) => {
  let name = req.body.name;
  let rollno = req.body.rollno;
  let email = req.body.email;
  let mobileno = req.body.mobileno;
  MongoClient.connect(db_url, async (err, db) => {
    if (err) throw err;
    const dbo = db.db("event-details");

    const doc = {
      name: name,
      rollno: rollno,
      email: email,
      mobileno: mobileno,
    };
    const result = await dbo.collection("event4").insertOne(doc);
    db.close();
  });
  res.render("landing.pug");
});

app.post("/event5_d", enc, (req, res) => {
  let tname = req.body.tname;
  let name1 = req.body.name1;
  let rollno = req.body.rollno;
  let email = req.body.email;
  let mobileno = req.body.mobileno;
  let name2 = req.body.name2;
  let rollno2 = req.body.rollno2;
  let name3 = req.body.name3;
  let rollno3 = req.body.rollno3;
  MongoClient.connect(db_url, async (err, db) => {
    if (err) throw err;
    const dbo = db.db("event-details");

    const doc = {
      team_name: tname,
      name1: name1,
      rollno: rollno,
      email: email,
      mobileno: mobileno,
      name2: name2,
      rollno2: rollno2,
      name3: name3,
      rollno3: rollno3,
    };
    const result = await dbo.collection("event5").insertOne(doc);
    db.close();
  });
  res.render("landing.pug");
});

app.post("/event6_d", enc, (req, res) => {
  let tname = req.body.tname;
  let name1 = req.body.name1;
  let rollno = req.body.rollno;
  let email = req.body.email;
  let mobileno = req.body.mobileno;
  let name2 = req.body.name2;
  let rollno2 = req.body.rollno2;
  let name3 = req.body.name3;
  let rollno3 = req.body.rollno3;
  MongoClient.connect(db_url, async (err, db) => {
    if (err) throw err;
    const dbo = db.db("event-details");

    const doc = {
      team_name: tname,
      name1: name1,
      rollno: rollno,
      email: email,
      mobileno: mobileno,
      name2: name2,
      rollno2: rollno2,
      name3: name3,
      rollno3: rollno3,
    };
    const result = await dbo.collection("event6").insertOne(doc);
    db.close();
  });
  res.render("landing.pug");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
