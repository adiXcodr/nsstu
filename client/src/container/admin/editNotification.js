import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  getNotification,
  updateNotification,
  clearNotification,
  deleteNotification
} from "../../actions";
import "./editMember.css";

class EditNotification extends PureComponent {
  state = {
    formdata: {
      _id: this.props.match.params.id,
      name: "",
      date:"",
      headline:"",
      link:""
    }
  };

  handleInput = (notification, title) => {
    const newFormdata = {
      ...this.state.formdata
    };
    newFormdata[title] = notification.target.value;
    this.setState({
      formdata: newFormdata
    });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.dispatch(updateNotification(this.state.formdata));
    alert("Edit Success");
    this.redirectUser(2000);
  };

  UNSAFE_componentWillMount() {
    this.props.dispatch(getNotification(this.props.match.params.id));
  }

  deleteNotification = () => {
    this.props.dispatch(deleteNotification(this.props.match.params.id));
  };

  redirectUser = time => {
    setTimeout(() => {
      this.props.history.push("/");
    }, time);
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    let notification = nextProps.notifications.notification;
    this.setState({
      formdata: {
        _id: notification._id,
        date:notification.date,
        headline:notification.headline,
        link:notification.link
      }
    });
  }

  componentWillUnmount() {
    this.props.dispatch(clearNotification());
  }

  render() {
    const not = this.props.notifications;
    if (
      not.notification &&
      not.notification.response &&
      not.notification.response.status === 400
    ) {
      this.props.history.push("/");
    }
    return (
      <div className="mcontainer">
        {not.updateNotification ? <div>{this.redirectUser(0)}</div> : null}
        <div className="borderbox">
          <form onSubmit={this.submitForm}>
            <div className="editmemberhead">EDIT NOTIFICATION</div>
            <hr />

            <div id="space">
            <input
                  className="form-control"
                  id="name"
                  type="date"
                  placeholder="Enter the Name"
                  value={this.state.formdata.date}
                  onChange={notification => this.handleInput(notification, "date")}
                />
                <br />

                <input
                  className="form-control"
                  id="position"
                  type="text"
                  placeholder="Enter the Headline"
                  value={this.state.formdata.headline}
                  onChange={notification => this.handleInput(notification, "headline")}
                />
                <br />
               
                <input
                  className="form-control"
                  id="image"
                  //input type="file" placeholder="Add profile picture" name="pic" accept="image/*"
                  input
                  type="url"
                  placeholder="Add the Document Link"
                  value={this.state.formdata.link}
                  onChange={notification => this.handleInput(notification, "link")}
                />


              <br></br>
              
            </div>
            <br />
            <button
              id="editmemberbutton"
              className="btn btn-block btn-warning"
              type="submit"
            >
              Edit Notification
            </button>
            <div
              id="deletememberbutton"
              className="btn btn-block btn-danger"
              onClick={this.deleteNotification}
            >
              Delete Notification
            </div>
          </form>
        </div>

        {not.notificationDeleted ? (
          <div className="btn btn-block btn-success">
            Notification Deleted!!!
            {this.redirectUser(2000)}
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications
  };
}

export default connect(mapStateToProps)(EditNotification);
