import React from "react";
import "./founding.css";
import ravi from "../../../src/resources/ravi.jpg";
import prince from "../../../src/resources/prince.jpeg";
import noirrita from "../../../src/resources/noirrita.jpg";
import ashirvad from "../../../src/resources/ashirvad.jpg";
import arya from "../../../src/resources/arya.jpeg";
import vicky from "../../../src/resources/vicky.jpeg";


class Founding extends React.Component {
  render() {
    return (
      <div className="prev_mem_container">
            
            <br></br>
            <div class="wheading">Former Student Coordinators</div>
            <br></br>

            
            
            <div class="wheading">2018-19</div>
            <br></br>
            <div class="cards_year row align-items-center">

                          <div class= "wcard-year">
                                <img src={ravi} className="wimages-coordinator" />
                                <div className="wcbody-coordinator">
                                  <p id="wname">Ravi Roushan Kumar</p>
                                  <p id="wpos">CSE</p>
                                  <br></br>
                                  
                                  
                              </div>   
                        </div>

                        <div class= "wcard-year">
                                <img src={prince} className="wimages-coordinator" />
                                <div className="wcbody-coordinator">
                                  <p id="wname">Prince Konwar</p>
                                  <p id="wpos">ECE</p>
                                  <br></br>
                                 
                              </div>   
                        </div>

                        

            </div>
            <br></br>



            <div class="wheading">2017-18</div>
            <br></br>
            <div class="cards_year row align-items-center">

                          <div class= "wcard-year">
                                <img src={noirrita} className="wimages-coordinator" />
                                <div className="wcbody-coordinator">
                                  <p id="wname">Noirrita Priyadarshini</p>
                                  <p id="wpos">EFL</p>
                                  <br></br>
                                  
                                  
                              </div>   
                        </div>

                        <div class= "wcard-year">
                                <img src={ashirvad} className="wimages-coordinator" />
                                <div className="wcbody-coordinator">
                                  <p id="wname">Ashirvad Kumar</p>
                                  <p id="wpos">CSE</p>
                                  <br></br>
                                 
                                  
                              </div>   
                        </div>

            </div>
            <br></br>





            <div class="wheading">2016-17</div>
            <br></br>
            <div class="cards_year row align-items-center">

                          <div class= "wcard-year">
                                <img src={arya} className="wimages-coordinator" />
                                <div className="wcbody-coordinator">
                                  <p id="wname">Arpitansh Arya</p>
                                  <p id="wpos">CSE</p>
                                  <br></br>
                                 
                                  
                              </div>   
                        </div>

                        <div class= "wcard-year">
                                <img src={vicky} className="wimages-coordinator" />
                                <div className="wcbody-coordinator">
                                  <p id="wname">Vicky Patel</p>
                                  <p id="wpos">Civil Engineering</p>
                                  <br></br>
                                  
                                  
                              </div>   
                        </div>

            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>






      </div>
    );
  }
}

export default Founding;
