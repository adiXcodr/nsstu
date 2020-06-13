import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, userRegister, deleteUser } from "../../actions";
import "./register.css";
class Register extends Component {
  state = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    error: ""
  };

  async UNSAFE_componentWillMount() {
    await this.props.dispatch(getUsers());
  }

  delUser = async id => {
    await this.props.dispatch(deleteUser(id));
    await this.props.dispatch(getUsers());
  };

  handleInputEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleInputPassword = event => {
    this.setState({ password: event.target.value });
  };
  handleInputName = event => {
    this.setState({ name: event.target.value });
  };
  handleInputLastname = event => {
    this.setState({ lastname: event.target.value });
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.user.register === false) {
      this.setState({ error: "Error, try again!!!" });
    } else {
      this.setState({
        name: "",
        lastname: "",
        email: "",
        password: ""
      });
    }
  }

  submitForm = async e => {
    e.preventDefault();
    this.setState({ error: "" });

    await this.props.dispatch(
      userRegister(
        {
          email: this.state.email,
          password: this.state.password,
          name: this.state.name,
          lastname: this.state.lastname,
          rank: this.props.user.login.rank + 1
        },
        this.props.user.users
      )
    );
  };

  showUsers = user =>
    user.users
      ? user.users.map(item => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.lastname}</td>
            <td>{item.email}</td>
            {item.rank > this.props.user.login.rank ? (
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => this.delUser(item._id)}
                >
                  Del
                </button>
              </td>
            ) : null}
          </tr>
        ))
      : null;

  render() {
    let user = this.props.user;
    return (
      <div className="admin" id="addadminpage">
        <div>
          <form onSubmit={this.submitForm} id="addadmincontainer">
            <div className="addadminhead">ADD ADMIN</div>
            <div>
              {user.message ? (
                <div>{user.message}</div>
              ) : (
                <div>{this.state.error}</div>
              )}
              <input
                className="form-control"
                id="adminname"
                type="text"
                placeholder="Enter Name"
                value={this.state.name}
                onChange={this.handleInputName}
                required
              />

              <input
                className="form-control"
                id="adminlastname"
                type="text"
                placeholder="Enter Lastname"
                value={this.state.lastname}
                onChange={this.handleInputLastname}
                required
              />

              <input
                className="form-control"
                id="adminemail"
                type="email"
                placeholder="Enter Email"
                value={this.state.email}
                onChange={this.handleInputEmail}
                required
              />

              <input
                className="form-control"
                id="adminpass"
                type="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.handleInputPassword}
                required
              />
            </div>
            <br />
            <button
              id="addadmin"
              type="submit"
              className="btn btn-success btn-block"
            >
              Add Admin
            </button>
          </form>

          <br />

          <div id="curradmincontainer">
            <div className="curradmin">CURRENT ADMINS</div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{this.showUsers(user)}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Register);
