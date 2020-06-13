import React, { Component } from "react";
import { connect } from "react-redux";
import { addGallery, clearNewGallery } from "../../actions";
// import "./addGallery.css";

class AddGallery extends Component {
  state = {
    formdata: {
      error: "",
      name: "",
      image: ""
    }
  };

  handleInput = (gallery, name) => {
    const newFormdata = {
      ...this.state.formdata
    };
    newFormdata[name] = gallery.target.value;
    this.setState({
      formdata: newFormdata
    });
  };

  submitForm = e => {
    e.preventDefault();
    this.props.dispatch(
      addGallery({
        ...this.state.formdata
      })
    );
  };

  componentWillUnmount() {
    this.props.dispatch(clearNewGallery());
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.newgallery === null) {
      this.setState({ error: "Error, try again!!!" });
    } else {
      nextProps.history.push("/gallery");
    }
  }

  render() {
    return (
      <div id="addevepage">
        <div className="containereve">
          <div className="borderbox">
            <form onSubmit={this.submitForm}>
              <div className="addeventhead">ADD A PICTURE</div>
              <hr />
              <div>
                <div className="w-80 p-1" id="addeveboxes">
                  <input
                    className="form-control"
                    id="evetitle"
                    type="text"
                    placeholder="Enter the Caption"
                    value={this.state.formdata.name}
                    onChange={gallery => this.handleInput(gallery, "name")}
                  />
                  <br />

                  <input
                    className="form-control"
                    id="eveimage"
                    type="url"
                    placeholder="Enter the Image Link"
                    value={this.state.formdata.image}
                    onChange={gallery => this.handleInput(gallery, "image")}
                  />
                  <br />
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
    gallerys: state.gallerys
  };
}

export default connect(mapStateToProps)(AddGallery);
