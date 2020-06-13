import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  getMember,
  updateMember,
  clearMember,
  deleteMember
} from "../../actions";
import "./editMember.css";

class EditMember extends PureComponent {
  state = {
    formdata: {
      _id: this.props.match.params.id,
      name: "",
      image: "",
      position: "",
      year: "",
      email: "",
      mobile: "",
      linkedin: ""
    }
  };

  handleInput = (member, name) => {
    const newFormdata = {
      ...this.state.formdata
    };
    newFormdata[name] = member.target.value;
    this.setState({
      formdata: newFormdata
    });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.dispatch(updateMember(this.state.formdata));
  };

  UNSAFE_componentWillMount() {
    this.props.dispatch(getMember(this.props.match.params.id));
  }

  deleteMember = () => {
    this.props.dispatch(deleteMember(this.props.match.params.id));
  };

  redirectUser = time => {
    setTimeout(() => {
      this.props.history.push("/working-team");
    }, time);
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    let member = nextProps.members.member;
    this.setState({
      formdata: {
        _id: member._id,
        name: member.name,
        image: member.image,
        position: member.position,
        year: member.year,
        email: member.email,
        mobile: member.mobile,
        linkedin: member.linkedin
      }
    });
  }

  componentWillUnmount() {
    this.props.dispatch(clearMember());
  }

  render() {
    console.log(this.props.members)
    const mem = this.props.members;
    if (
      mem.member &&
      mem.member.response &&
      mem.member.response.status === 400
    ) {
      this.props.history.push("/working-team");
    }
    return (
      <div className="mcontainer">
        {mem.updateMember ? <div>{this.redirectUser(0)}</div> : null}
        <div className="borderbox">
          <form onSubmit={this.submitForm}>
            <div className="editmemberhead">EDIT MEMBER</div>
            <hr />

            <div id="space">
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
                placeholder="Enter the Position"
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
              <br></br>
              
            </div>
            <br />
            <button
              id="editmemberbutton"
              className="btn btn-block btn-warning"
              type="submit"
            >
              Edit Member
            </button>
            <div
              id="deletememberbutton"
              className="btn btn-block btn-danger"
              onClick={this.deleteMember}
            >
              Delete Member
            </div>
          </form>
        </div>

        {mem.memberDeleted ? (
          <div className="btn btn-block btn-success">
            Member Deleted!!!
            {this.redirectUser(2000)}
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    members: state.members
  };
}

export default connect(mapStateToProps)(EditMember);
