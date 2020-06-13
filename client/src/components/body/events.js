import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getEvents } from "../../actions";
import "./events.css";

class Events extends Component {
  UNSAFE_componentWillMount() {
    this.props.dispatch(getEvents());
  }

  showEvents = event =>
    event.list && event.list.length > 0 ? (
      event.list.reverse().map(item => (
        <div key={item._id} id="mainevent">
          <div className="eblankspace"></div>
          <div id="erows">
            <div className="ecard">
              {this.props.user.login.isAuth === true ? (
                <Link id="editheadevents" to={`/editEvent/${item._id}`}>
                  EDIT
                </Link>
              ) : null}

              <div className="card-body">
                <div id="ename">{item.title}</div>
                <br />
                <img src={item.image} id="eimages" alt={item.title} />
                <div id="descanddate">
                  <div id="edesc">{item.description}</div>
                  <div id="edate">On - {item.date}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div>No Events yet!</div>
    );
  render() {
    return (
      <div id="maineventpage">
        {this.props.user.login.isAuth != null ? (
          <Link id="addeventbutton" to="/addEvent">
            Add Event
          </Link>
        ) : null}
        
        <div>{this.showEvents(this.props.events)}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

export default connect(mapStateToProps)(Events);
