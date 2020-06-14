var express = require("express"),
  bodyParser = require("body-parser"),
  cookieParser = require("cookie-parser"),
  mongoose = require("mongoose"),
  config = require("./config/config").get(process.env.NODE_ENV),
  app = express();

mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify", false);

const connectDb = () => {
  return mongoose.connect(config.DATABASE, {
    useCreateIndex: true,
    useNewUrlParser: true
  });
};

const { User } = require("./models/user");
const { Event } = require("./models/event");
const { Member } = require("./models/member");
const { Notification } = require("./models/notification");
const { Gallery } = require("./models/gallery");
const { auth } = require("./middleware/auth");

app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static("client/build"));

// +++++++++++ GET  +++++++++++++++++++++
//Get events
app.get("/getEvent", (req, res) => {
  let id = req.query.id;

  Event.findById(id, (err, doc) => {
    if (err) return res.status(400).send(err);
    res.send(doc);
  });
});

// All Events
app.get("/events", (req, res) => {
  Event.find({}, (err, users) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(users);
  });
});

//Get members
app.get("/getMember", (req, res) => {
  let id = req.query.id;
  Member.findById(id, (err, doc) => {
    if (err) return res.status(400).send(err);
    res.send(doc);
  });
});

// All Members
app.get("/working-team", (req, res) => {
  Member.find({}, (err, users) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(users);
  });
});

//Get notification
app.get("/getNotification", (req, res) => {
  let id = req.query.id;
  Notification.findById(id, (err, doc) => {
    if (err) return res.status(400).send(err);
    res.send(doc);
  });
});

// All Members
app.get("/getNotifications", (req, res) => {
  Notification.find({}, (err, users) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(users);
  });
});

//Get gallery
app.get("/getGallery", (req, res) => {
  let id = req.query.id;
  Gallery.findById(id, (err, doc) => {
    if (err) return res.status(400).send(err);
    res.send(doc);
  });
});

// All gallery
app.get("/gallerys", (req, res) => {
  Gallery.find({}, (err, users) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(users);
  });
});

// Auth
app.get("/auth", auth, (req, res) => {
  res.json({
    isAuth: true,
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    rank: req.user.rank
  });
});

// User
app.get("/users", (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(users);
  });
});

// LogOut
app.get("/logout", auth, (req, res) => {
  req.user.deleteToken(req.token, (err, user) => {
    if (err) {
      return res.status(400).send(err);
    }
    res.sendStatus(200);
  });
});

//++++++++++++ event +++++++++++++++++++++
// New Event
app.post("/events", (req, res) => {
  const event = new Event(req.body);
  event.save((err, doc) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({
      post: true,
      eventId: doc._id
    });
  });
});

// New Member
app.post("/working-team", (req, res) => {
  const member = new Member(req.body);
  member.save((err, doc) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({
      post: true,
      memberId: doc._id
    });
  });
});

// New Notification
app.post("/", (req, res) => {
  const notification = new Notification(req.body);
  notification.save((err, doc) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({
      post: true,
      notificationId: doc._id
    });
  });
});


// New Picture
app.post("/gallerys", (req, res) => {
  const gallery = new Gallery(req.body);
  gallery.save((err, doc) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({
      post: true,
      galleryId: doc._id
    });
  });
});

// Register
app.post("/add-admin", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (user) {
      return res.json({
        success: false,
        message: "Email is in use by someone else!"
      });
    } else {
      const user = new User(req.body);
      user.save((err, doc) => {
        if (err) return res.json({ success: false });
        res.status(200).json({
          success: true,
          user: doc
        });
      });
    }
  });
});

// Login
app.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        isAuth: false,
        message: "Auth failed, email not found!"
      });
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          isAuth: false,
          message: "Wrong Password"
        });
      }
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("auth", user.token).json({
          isAuth: true,
          id: user._id,
          email: user.email
        });
      });
    });
  });
});

//++++++++++++ UPDATE +++++++++++++++++++
// Update Event
app.post("/event_update", (req, res) => {
  Event.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, doc) => {
    if (err) return res.status(400).send(err);
    res.json({
      success: true,
      doc
    });
  });
});

// Update Member
app.post("/member_update", (req, res) => {
  Member.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true },
    (err, doc) => {
      if (err) return res.status(400).send(err);
      res.json({
        success: true,
        doc
      });
    }
  );
});
// Update Notification
app.post("/notification_update", (req, res) => {
  Notification.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true },
    (err, doc) => {
      if (err) return res.status(400).send(err);
      res.json({
        success: true,
        doc
      });
    }
  );
});

// Update Pictures
app.post("/gallery_update", (req, res) => {
  Gallery.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true },
    (err, doc) => {
      if (err) return res.status(400).send(err);
      res.json({
        success: true,
        doc
      });
    }
  );
});

//++++++++++ DELETE +++++++++++++++++++++
// Delete Event
app.delete("/event_delete", (req, res) => {
  let id = req.query.id;

  Event.findByIdAndRemove(id, (err, doc) => {
    if (err) return res.status(400).send(err);
    res.json(true);
  });
});

// Delete Member
app.delete("/member_delete", (req, res) => {
  let id = req.query.id;

  Member.findByIdAndRemove(id, (err, doc) => {
    if (err) return res.status(400).send(err);
    res.json(true);
  });
});

// Delete Notification
app.delete("/notification_delete", (req, res) => {
  let id = req.query.id;

  Notification.findByIdAndRemove(id, (err, doc) => {
    if (err) return res.status(400).send(err);
    res.json(true);
  });
});

// Delete Picture
app.delete("/gallery_delete", (req, res) => {
  let id = req.query.id;

  Gallery.findByIdAndRemove(id, (err, doc) => {
    if (err) return res.status(400).send(err);
    res.json(true);
  });
});

// Admin Delete
app.delete("/user_delete", (req, res) => {
  let id = req.query.id;
  User.findByIdAndRemove(id, (err, doc) => {
    if (err) return res.status(400).send(err);
    res.json(true);
  });
});

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

const port = process.env.PORT || 3001;

connectDb().then(async () => {
  createUser();
  app.listen(port, () => {
    console.log("SERVER IS RUNNING!!!");
  });
});

const createUser = async () => {
  User.findOne({ email: "nss@tezu.in" }, (err, user) => {
    if (!user) {
      const user = new User({
        email: "nss@tezu.in",
        password: "Nss@tezu12345",
        name: "Admin",
        lastname: "NSS_TEZU",
        rank: 0
      });
      user.save();
    }
  });
};
