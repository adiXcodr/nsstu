import React from "react";
import axios from "axios";

const Logout = props => {
  axios.get("/logout").then(request => {
    setTimeout(() => {
      props.history.push("/");
    }, 2000);
  });
  return <div>Logging you out.</div>;
};

export default Logout;
