import React from "react";
import Header from "./partials/header";
import Footer from "./partials/footer";

//import Notifications from "./body/notification";
const Layout = props => {
  return (
    <div>
      <meta name="viewport" content="width=1024"></meta>
      <Header />
      <div
        className="row(edit)"
        style={{ padding: 0, width: "100%", margin: 0, minHeight: "75vh" }}
      >
        <div className="col-sm-8(edit)">{props.children}</div>
        {/*
        <div className="col-sm-4">
          <Notifications/>
        </div>
      */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
