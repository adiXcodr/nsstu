import React, { Component } from "react";
import "./home.css";
import { connect } from "react-redux";
import { getGallerys } from "../../actions";
import { getNotifications } from "../../actions";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends Component {
  UNSAFE_componentWillMount() {
    this.props.dispatch(getGallerys());
    this.props.dispatch(getNotifications());
  }

  showCar = gallery => {
    return gallery.list && gallery.list.length > 0 ? (
      [gallery.list[0], ...gallery.list.reverse().slice(0,5)].map(item => (
        <figure key={item._id}>
          <img src={item.image} alt={item.name} />
          <figcaption>{item.name}</figcaption>
        </figure>
      ))
    ) : (
      <figure>
        <img src="https://i.imgur.com/Lkwuerm.png" alt="IEEE logo" />
        <figcaption></figcaption>
      </figure>
    );
  };

  
  showNotifications = notification => 
  notification.list && notification.list.length > 0 ?(
     notification.list.map(item => (
       <div key={item._id} id="notification_item">
          {this.props.user.login.isAuth === true ? (
            <div>
              <Link id="edit_headline" to={`/editNotification/${item._id}`}>
                EDIT
              </Link>
              <br></br>
            </div>
            ) : null}
          <a href={item.link} target="_blank" id="notification_headline">{item.headline}</a>
          <p>{item.date.slice(0,10)}</p>
          
       </div>
     )) 
   ) : (
     <div>No Notifications yet!</div>
   );
  

  render() {
    return (
      <div className="container" id="mainhome">
        <div class="slide_notif ">
            
            <div id="slider" class="slide_display">
              <div id="captioned-gallery">
                <figure className="slider">
                  {this.showCar(this.props.gallerys)}
                </figure>
              </div>
            </div>

        </div>


        <div className="about row">

          <div class="aboutieee col-auto">
            <div className="header">ABOUT TUSC</div>
            <div className="text">
            Tezpur University Students Council acts as the voice of the students of Tezpur University. The body aims to work for the benifit of the students and resolve their issues in a proper way. The council is elected yearly by the students with the help of the University administration.
              <br />{" "}
              <a
                href="http://www.tezu.ernet.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Tezpur University
              </a>
            </div>
          </div>


          <div id="news_scroll" class="col-auto">   
                    <div class="news_head">
                      <p>NOTIFICATIONS</p>
                      </div> 
                      {this.props.user.login.isAuth != null ? (
                          <Link id="addmembut" className="wcontainer" to="/addNotification">
                            Add notification
                          </Link>
                        ) : null}
                      <marquee behavior="scroll" direction="up" scrollamount="2" onmouseover="this.stop();" onmouseout="this.start();">
                      <ul id="notification_ul">
                        <li>{this.showNotifications(this.props.notifications)}</li>
                      </ul>
                    </marquee>
        </div>  

           

        </div>  {/*Row ends here*/}

         <br></br>
        <div class="tezu_notif">
              <div class="news_head">
                            <p>TU NEWS FEED</p>
              </div> 
              <iframe src="http://www.tezu.ernet.in/newsfeeds.html" ></iframe>

        </div>




      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gallerys: state.gallerys,
    notifications:state.notifications
  };
}


export default connect(mapStateToProps)(Home);
