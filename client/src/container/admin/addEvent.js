import React, { Component } from "react";
import { connect } from "react-redux";
import { addEvent, clearNewEvent } from "../../actions";
import "./add.css";

class AddEvent extends Component {
  state = {
    formdata: {
      error: "",
      title: "",
      image: "",
      description: "",
      date: ""
    }
  };

  handleInput = (event, name) => {
    const newFormdata = {
      ...this.state.formdata
    };
    newFormdata[name] = event.target.value;
    this.setState({
      formdata: newFormdata
    });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.dispatch(
      addEvent({
        ...this.state.formdata
      })
    );
  };

  componentWillUnmount() {
    this.props.dispatch(clearNewEvent());
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.newevent === null) {
      this.setState({ error: "Error, try again!!!" });
    } else {
      nextProps.history.push("/events");
    }
  }

  render() {
    return (
      <div id="addevepage">
        <div className="containereve">
          <div className="borderbox">
            <form onSubmit={this.submitForm}>
              <div className="addeventhead">ADD EVENT</div>
              <hr />
              <div>
                <div className="w-80 p-1" id="addeveboxes">
                  <input
                    className="form-control"
                    id="evetitle"
                    type="text"
                    placeholder="Enter the Title"
                    value={this.state.formdata.title}
                    onChange={event => this.handleInput(event, "title")}
                  />
                  <br />

                  <input
                    className="form-control"
                    id="eveimage"
                    type="url"
                    placeholder="Enter the Image Link"
                    value={this.state.formdata.image}
                    onChange={event => this.handleInput(event, "image")}
                  />
                  <br />

                  <input
                    className="form-control"
                    id="evedate"
                    type="date"
                    value={this.state.formdata.date}
                    onChange={event => this.handleInput(event, "date")}
                  />
                  <br />

                  <textarea
                    value={this.state.formdata.description}
                    rows="11"
                    id="evedesc"
                    className="form-control"
                    placeholder="Enter a description"
                    onChange={event => this.handleInput(event, "description")}
                  />
                </div>
                <br />
                <button
                  id="addevebutton"
                  className="btn btn-block btn-warning"
                  type="submit"
                >
                  Add
                </button>
                <div>{this.state.error}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

export default connect(mapStateToProps)(AddEvent);
