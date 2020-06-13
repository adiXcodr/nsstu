import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  getGallery,
  updateGallery,
  clearGallery,
  deleteGallery
} from "../../actions";

class EditGallery extends PureComponent {
  state = {
    formdata: {
      _id: this.props.match.params.id,
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
    this.props.dispatch(updateGallery(this.state.formdata));
  };

  UNSAFE_componentWillMount() {
    this.props.dispatch(getGallery(this.props.match.params.id));
  }

  deleteGallery = () => {
    this.props.dispatch(deleteGallery(this.props.match.params.id));
  };

  redirectUser = time => {
    setTimeout(() => {
      this.props.history.push("/gallery");
    }, time);
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    let gallery = nextProps.gallerys.gallery;
    this.setState({
      formdata: {
        _id: gallery._id,
        name: gallery.name,
        image: gallery.image
      }
    });
  }

  componentWillUnmount() {
    this.props.dispatch(clearGallery());
  }

  render() {
    const mem = this.props.gallerys;
    if (
      mem.gallery &&
      mem.gallery.response &&
      mem.gallery.response.status === 400
    ) {
      this.props.history.push("/gallery");
    }
    return (
      <div id="editevepage">
        <div className="containereveedit">
          {this.props.gallerys.updateGallery ? (
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
                  value={this.state.formdata.name}
                  onChange={gallery => this.handleInput(gallery, "name")}
                />
                <br />

                <input
                  className="form-control"
                  id="eveimageedit"
                  type="url"
                  placeholder="Enter the Image Link"
                  value={this.state.formdata.image}
                  onChange={gallery => this.handleInput(gallery, "image")}
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
                onClick={this.deleteGallery}
              >
                Delete
              </div>
            </form>
          </div>
        </div>

        {this.props.gallerys.galleryDeleted ? (
          <div className="btn btn-block btn-success">
            Picture Deleted!!!
            {this.redirectUser(2000)}
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gallerys: state.gallerys
  };
}

export default connect(mapStateToProps)(EditGallery);
