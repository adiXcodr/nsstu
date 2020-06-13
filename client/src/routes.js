import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/body/home";
import Events from "./components/body/events";
import Login from "./container/admin/login";
import Layout from "./components/layout";
import AddEvent from "./container/admin/addEvent";
import EditEvent from "./container/admin/editEvent";
import Register from "./container/admin/register";
import Logout from "./container/admin/logout";
import Auth from "./components/auth";
import Gallerys from "./components/body/gallerys";
import AddGallery from "./container/admin/addGallery";
import EditGallery from "./container/admin/editGallery";
import Contact from "./components/body/contact";
import Founding from "./components/members/founding";
import Working from "./components/members/working";
import AddMember from "./container/admin/addMember";
import EditMember from "./container/admin/editMember";
import AddNotification from "./container/admin/addNotification";
import EditNotification from "./container/admin/editNotification";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Auth(Home, null)} />
        <Route path="/events" exact component={Auth(Events, null)} />
        <Route path="/gallery" exact component={Auth(Gallerys, null)} />
        <Route path="/addGallery" exact component={Auth(AddGallery, true)} />
        <Route
          path="/editGallery/:id"
          exact
          component={Auth(EditGallery, true)}
        />
        <Route path="/addEvent" exact component={Auth(AddEvent, true)} />
        <Route path="/logout" exact component={Auth(Logout, true)} />
        <Route path="/editEvent/:id" exact component={Auth(EditEvent, true)} />
        <Route path="/contact" exact component={Auth(Contact, null)} />
        <Route path="/login" exact component={Auth(Login, false)} />
        <Route path="/add-admin" exact component={Auth(Register, true)} />
        <Route path="/working-team" exact component={Auth(Working, null)} />
        <Route path="/addMember" exact component={Auth(AddMember, true)} />
        <Route
          path="/editMember/:id"
          exact
          component={Auth(EditMember, true)}
        />
        <Route path="/addNotification" exact component={Auth(AddNotification, true)} />
        <Route
          path="/editNotification/:id"
          exact
          component={Auth(EditNotification, true)}
        />
        <Route path="/founding-team" exact component={Auth(Founding, null)} />
      </Switch>
    </Layout>
  );
};

export default Routes;
