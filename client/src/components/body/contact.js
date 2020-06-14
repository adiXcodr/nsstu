import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";

class Contact extends React.Component {
  render() {
    return (
      <div className="contactmainpage">
        
        <div id="pcontact">
          If you want to contact us directly,
          <Link id="pcontact1" to="/working-team">
            {" "}
            Click Here
          </Link>
        </div>
       
         

            <div class="contact_box">
      
                    <p class="contact_box_head">CONTACT US</p>
                    <form action="https://formspree.io/xrgykobq" method="POST" class="cf">
                      <input name="name" type="text" id="input-name" placeholder="Name*" required/>
                      <input name="email" type="email" id="input-email" placeholder="Email address*" required/>
                      <input name="subject" type="text" id="input-subject" placeholder="Subject (Optional)" />
                      <textarea name="message" type="text" id="input-message" placeholder="Message*" required></textarea>

                    <input type="submit" value="Submit" id="input-submit"/>
                  </form>
      
            </div>


      </div>
    );
  }
}

export default Contact;
