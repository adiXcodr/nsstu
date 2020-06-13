import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getEvent, updateEvent, clearEvent, deleteEvent } from "../../actions";
import "./editEvent.css";

class EditEvent extends PureComponent {
  state = {
    formdata: {
      _id: this.props.match.params.id,
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
    this.props.dispatch(updateEvent(this.state.formdata));
  };

  UNSAFE_componentWillMount() {
    this.props.dispatch(getEvent(this.props.match.params.id));
  }

  deletePost = () => {
    this.props.dispatch(deleteEvent(this.props.match.params.id));
  };

  redirectUser = time => {
    setTimeout(() => {
      this.props.history.push("/events");
    }, time);
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    let event = nextProps.events.event;
    this.setState({
      formdata: {
        _id: event._id,
        title: event.title,
        image: event.image,
        description: event.description,
        date: event.date
      }
    });
  }

  componentWillUnmount() {
    this.props.dispatch(clearEvent());
  }

  render() {
    const mem = this.props.events;
    if (mem.event && mem.event.response && mem.event.response.status === 400) {
      this.props.history.push("/events");
    }
    return (
      <div id="editevepage">
        <div className="containereveedit">
          {this.props.events.updateEvent ? (
            <div>{this.redirectUser(0)}</div>
          ) : null}
          <div className="borderbox">
            <form onSubmit={this.submitForm}>
              <div className="editeventhead">EDIT</div>
              <hr />

              <div id="eventboxes">
                <input
                  className="form-control"
                  id="evetitleedit"
                  type="text"
                  placeholder="Enter the Title"
                  value={this.state.formdata.title}
                  onChange={event => this.handleInput(event, "title")}
                />
                <br />

                <input
                  className="form-control"
                  id="eveimageedit"
                  type="url"
                  placeholder="Enter the Image Link"
                  value={this.state.formdata.image}
                  onChange={event => this.handleInput(event, "image")}
                />
                <br />

                <input
                  className="form-control"
                  id="evedateedit"
                  type="date"
                  value={this.state.formdata.date}
                  onChange={event => this.handleInput(event, "date")}
                />
                <br />

                <textarea
                  value={this.state.formdata.description}
                  rows="11"
                  id="evedescedit"
                  className="form-control"
                  placeholder="Enter a description"
                  onChange={event => this.handleInput(event, "description")}
                />
              </div>
              <br />
              <button
                id="editeventbutt"
                className="btn btn-block btn-warning"
                type="submit"
              >
                Edit
              </button>
              <div
                id="deleteeventbutt"
                className="btn btn-block btn-danger"
                onClick={this.deletePost}
              >
                Delete
              </div>
            </form>
          </div>
        </div>

        {this.props.events.postDeleted ? (
          <div className="btn btn-block btn-success">
            Post Deleted!!!
            {this.redirectUser(2000)}
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

export default connect(mapStateToProps)(EditEvent);
