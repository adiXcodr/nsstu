import React, { Component } from "react";
import { connect } from "react-redux";
import { addNotification, clearNewNotification } from "../../actions";
import "./addMember.css";

class AddNotification extends Component {
  state = {
    formdata: {
      error: "",
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

  redirectUser = time => {
    setTimeout(() => {
      this.props.history.push("/");
    }, time);
  };

  submitForm = e => {
    e.preventDefault();
    this.props.dispatch(
      addNotification({
        ...this.state.formdata
      })
    );
    alert("Add Success");
    this.redirectUser(2000);
  };

  componentWillUnmount() {
    this.props.dispatch(clearNewNotification());
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.newnotification === null) {
      this.setState({ error: "Error, try again!!!" });
    } else {
      nextProps.history.push("/");
    }
  }

  render() {
    return (
      <div className="memcontainer" id="addmem">
        <div className="borderbox">
          <form onSubmit={this.submitForm}>
            <div className="addmemberhead">ADD NOTIFICATION</div>
            <hr />
            <div>
              <div className="w-80 p-1">
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


                
              </div>
              <br />
              <button
                id="addmemberbutton"
                className="btn btn-block btn-warning"
                type="submit"
              >
                Add notification
              </button>
              <div>{this.state.error}</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications
  };
}

export default connect(mapStateToProps)(AddNotification);
