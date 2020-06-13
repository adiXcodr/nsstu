import React from "react";
import "./footer.css";
import fbfooter from "../../../src/resources/fbfooter.png";
import instafooter from "../../../src/resources/instafooter.png";
const Footer = () => {
  return (
    <footer className="mainfooter">
      <div className="text-center">
        <div className="follow">
          <h4>FOLLOW US</h4>
          <a
            href="https://www.facebook.com/TUSC201819"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow us on FaceBook"
          >
            <img
              src={fbfooter}
              width="25"
              alt="FBpage"
            />
          </a>
          &nbsp;
          <a
            href="https://www.instagram.com/tusc_official/"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow us on Instagram"
          >
            <img
              src={instafooter}
              width="25"
              alt="YOUTUBEpage"
            />
          </a>
        </div>
        <div className="links">
          <h4>IMPORTANT LINKS</h4>

          <a
            href="http://www.tezu.ernet.in/"
            target="_blank"
            rel="noopener noreferrer"
            title="Tezpur University"
          >
            Tezpur University
          </a>
          <br></br>
          <a
            href="http://agnee.tezu.ernet.in/src/login.php"
            target="_blank"
            rel="noopener noreferrer"
            title="Agnee Webmail"
          >
            Agnee Webmail
          </a>
          <br></br>
          <a
            href="http://www.tezu.ernet.in/newsfeeds.html"
            target="_blank"
            rel="noopener noreferrer"
            title="TU Notifications"
          >
            TU Notifications
          </a>
          <br></br>
          <a
            href="http://www.tezu.ernet.in/intranet/"
            target="_blank"
            rel="noopener noreferrer"
            title="More Sites"
          >
            TU Intranet
          </a>
          <br></br>
        </div>
        <div className="para">
          <p>&copy;{(new Date().getFullYear())} Tezpur University, Tezpur.</p>
        </div>
        <div className= "web-masters">
          <a href="#" class="inactiveLink">WEB MASTERS : </a>
            <a
                href="https://www.linkedin.com/in/adittya-dey-3966b916b/"
                target="_blank"
                rel="noopener noreferrer"
                title="Adittya Dey"
              >
                Adittya Dey
              </a>
              
              <a
                href="https://www.linkedin.com/in/subhasish-goswami-38356a12b/"
                target="_blank"
                rel="noopener noreferrer"
                title="Subhasish Goswami"
              >
                Subhasish Goswami
              </a>
              <br></br>
          </div>     
      </div>
    </footer>
  );
};

export default Footer;
