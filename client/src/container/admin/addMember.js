import React, { Component } from "react";
import { connect } from "react-redux";
import { addMember, clearNewMember } from "../../actions";
import "./addMember.css";

class AddMember extends Component {
  state = {
    formdata: {
      error: "",
      name: "",
      image: "",
      position: "",
      year: "",
      email: "",
      mobile: "",
      linkedin: ""
    }
  };

  handleInput = (member, title) => {
    const newFormdata = {
      ...this.state.formdata
    };
    newFormdata[title] = member.target.value;
    this.setState({
      formdata: newFormdata
    });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.dispatch(
      addMember({
        ...this.state.formdata
      })
    );
  };

  componentWillUnmount() {
    this.props.dispatch(clearNewMember());
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.newmember === null) {
      this.setState({ error: "Error, try again!!!" });
    } else {
      nextProps.history.push("/working-team");
    }
  }

  render() {
    return (
      <div className="memcontainer" id="addmem">
        <div className="borderbox">
          <form onSubmit={this.submitForm}>
            <div className="addmemberhead">ADD MEMBER</div>
            <hr />
            <div>
              <div className="w-80 p-1">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Enter the Name"
                  value={this.state.formdata.name}
                  onChange={member => this.handleInput(member, "name")}
                />
                <br />

                <input
                  className="form-control"
                  id="position"
                  type="text"
                  placeholder="Enter the Department"
                  value={this.state.formdata.position}
                  onChange={member => this.handleInput(member, "position")}
                />
                <br />
               
                <input
                  className="form-control"
                  id="image"
                  //input type="file" placeholder="Add profile picture" name="pic" accept="image/*"
                  input
                  type="url"
                  placeholder="Add the Profile Picture Link"
                  value={this.state.formdata.image}
                  onChange={member => this.handleInput(member, "image")}
                />

                <br />

                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Enter the Email"
                  value={this.state.formdata.email}
                  onChange={member => this.handleInput(member, "email")}
                />
                <br></br>
                <input
                  className="form-control"
                  id="mobile"
                  type="number"
                  placeholder="Enter the Mobile Number"
                  value={this.state.formdata.mobile}
                  onChange={member => this.handleInput(member, "mobile")}
                />
                
                
              </div>
              <br />
              <button
                id="addmemberbutton"
                className="btn btn-block btn-warning"
                type="submit"
              >
                Add Member
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
    members: state.members
  };
}

export default connect(mapStateToProps)(AddMember);
