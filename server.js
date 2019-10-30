
require('dotenv').config();
var mongoose = require("mongoose");
var express = require("express");
var request = require("request");
var router = require("express").Router();
// const routes = require("./routes");
// var mongojs = require("mongojs");
var path = require("path");
// const bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express();

// var routes = require("./routes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./public/index.html"));
//   });
// app.use(express.static(path.join(__dirname, './public')));

// app.use(routes);

// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://heroku_ls8sjjhx:tgju5ck8vs9mo9vs0j5cjbbc07@ds229068.mlab.com:29068/heroku_ls8sjjhx";

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/me1st";
mongoose.connect(MONGODB_URI);

const ForumPost = mongoose.model("ForumPost", {
    entry: Array
});

const newForumPost = {
    entry:["this is a post entry"]
};

const newPost = new ForumPost(newForumPost);

newPost.save().then(() => console.log("Post Saved")).catch(err => console.log(err));




// THIS WILL ADD AFFIRMATION OLOAD





const Affirmation = mongoose.model("Affirmation", {
    message: Array
});



const newAffirmation = {
    message: [

        "I am love. I am purpose. I was made with divine intention.",
        "I am in charge of how I feel and today I am choosing happiness.",
        "I radiate love and others reflect love back to me.",
        "The tools I need to succeed are in my possession.",
        "I will say “No” when I do not have the time or inclination to act",
        "The only person who can defeat me is myself.",
        "I do not need other people for happiness.",
        "My opinion Matters",
        "I am free from worry and am at peace with who I am",
        "I’m bold, beautiful, and brilliant.",
        "I will master distractions and keep my focus on my goals.",
        "I will accept nothing but the best",
        "I am not my mistakes",
        "My fear diminishes as I live my life with courage",
        "I am becoming a better version of myself one day at a time",
        "I will act after thought, not on instinct",
        "Time is my most valuable asset. I guard my time carefully.",
        "My life is a gift and I appreciate everything I have.",
        "Limiting beliefs have no power over me. I am optimistic and open-minded.",
        "I control my day; I will not let my day control me.",
        "Today is filled with blessings and I open my heart to receive them",
        "I take care of the world when I take care of myself",
        "I value myself. I value my mind, my emotions, my body, & my spirit",
        "I matter. My wants & needs are just as important as anyone else’s.",
        "I am allowed to say “NO” to others & “YES” to myself.",
        "I love myself. I believe in myself. I support myself.",
        " I am worthy of love & fill myself up with love first",
        "I am not my mistakes and my past is not a reflection of my future.",
        "I am deserving of happiness, love, peace, freedom, money and anything else I desire.",
        "I embrace my flaws knowing that nobody is perfect.",
        "I let go of all that no longer serves me.",
    ]



};

const newEntry = new Affirmation(newAffirmation);

newEntry.save().then(() => console.log("saved")).catch(err => console.log(err));

// app.post("/blog", function(req, res){
//     new ForumPost({
//         message:req.body.message
//     }).save(function(err,doc){
//         if(err){
//             res.json(err)
//         }
//         else{
//             res.send("Successful");
//         }
//     })
// })

app.listen(PORT, function () {
    console.log(
        "listening on" + PORT
    )
});
