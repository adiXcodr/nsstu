import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getGallerys } from "../../actions";
import "./gallerys.css";
import ModalImage from "react-modal-image";

class Gallerys extends Component {
  UNSAFE_componentWillMount() {
    this.props.dispatch(getGallerys());
  }

  showGallerys = gallery =>
    gallery.list && gallery.list.length > 0 ? (
      gallery.list.reverse().map(item => (
        <div key={item._id} id="grows">
          <div className="gcard">
            {this.props.user.login.isAuth === true ? (
              <Link id="editghead" to={`/editGallery/${item._id}`}>
                EDIT
              </Link>
            ) : null}

            <ModalImage
              className="gimages"
              small={item.image}
              medium={item.image}
              alt={item.name}
              hideDownload="true"
              hideZoom="true"
            />

            <div id="gcbody">
              <p id="gname">{item.name}</p>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div>No Pictures yet!</div>
    );
  render() {
    return (
      <div id="maingallerypage">
        {this.props.user.login.isAuth != null ? (
          <Link id="addgallerybutton" to="/addGallery">
            Add Pictures
          </Link>
        ) : null}
        <div className="gheader"></div>
        <div>{this.showGallerys(this.props.gallerys)}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gallerys: state.gallerys
  };
}

export default connect(mapStateToProps)(Gallerys);
