import React, { Component } from "react";
import "./home.css";
import { connect } from "react-redux";
import { getGallerys } from "../../actions";
import { getNotifications } from "../../actions";
import { Link } from "react-router-dom";

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
<<<<<<< HEAD
            <div className="header">ABOUT NSS Tezpur University</div>
            <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor tincidunt dictum. Fusce aliquam convallis viverra. Quisque iaculis odio id neque vulputate, a sollicitudin orci lacinia. Duis ut ultricies orci. Maecenas ac blandit lorem. Ut sollicitudin turpis ante, a lobortis diam condimentum vitae. Nulla aliquam erat mauris, in volutpat ex eleifend ac. Donec facilisis, elit id aliquam efficitur, ex tellus scelerisque tellus, a cursus sem ipsum sit amet ligula.
=======
            <div className="header">NSS Tezpur University</div>
            <div className="text">
            National Service Scheme Tezpur University, popularly known as NSS is an extension dimension to the higher education system to orient the student youth to community service while they are studying in educational institutions, under the aegis of Ministry of Youth Affairs & Sports, Govt. of India.
>>>>>>> 88dcc628e401042751904c3f69ce716729a56d2e
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
<<<<<<< HEAD
        </div>
        <div className="about row">
=======
        </div>  

           

        </div>  {/*Row ends here*/}

        <div id="about_nss">
            <div className="header">About National Service Scheme</div>
            <div className="text">
            The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, Ministry of Youth Affairs & Sports. It provides opportunity to the student youth of 11th & 12th Class of schools at +2 Board level and student youth of Technical Institution, Graduate & Post Graduate at colleges and University level of India to take part in various government led community service activities & programmes.The sole aim of the NSS is to provide hands on experience to young students in delivering community service.
              <br />{" "}
              <a
                href="https://nss.gov.in/nss-detail-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
          </div>

         
>>>>>>> 88dcc628e401042751904c3f69ce716729a56d2e

          <div class="aboutnss col-auto">
            <div className="header">ABOUT NSS Tezpur University</div>
            <div className="text">
              The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, Ministry of Youth Affairs & Sports. It provides opportunity to the student youth of 11th & 12th Class of schools at +2 Board level and student youth of Technical Institution, Graduate & Post Graduate at colleges and University level of India to take part in various government led community service activities & programmes.The sole aim of the NSS is to provide hands on experience to young students in delivering community service. 
              <br />{" "}
              <a
                href="https://nss.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit NSS
              </a>
            </div>
          </div>

        </div> 

        </div>  {/*Row ends here*/}

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
