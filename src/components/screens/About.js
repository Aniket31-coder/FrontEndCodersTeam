import React from "react";
import Card from "react-bootstrap/Card";
import face from "../images/face.png";

const About = () => {
    return (
        <div className="container2">
          <div className="content1" style={{width:"250px" ,top:"-50px", left:"-5px"}}>About</div>
        <Card>
            <Card.Img variant="top" className="face" src={face} alt="My_face" />
            <Card.Body>
              <Card.Title style={{fontSize:"30px"}}>Aniket Dewnani</Card.Title>
              <Card.Text>
                <a href="https://www.linkedin.com/in/aniket-dewnani-076392193/">
                  <img
                    className="linkedin"
                    src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                    alt="linkedin_img"
                  />
                </a>
                <a href="https://www.github.com/Aniket31-coder">
                  <img
                    className="github"
                    src="https://image.flaticon.com/icons/png/512/25/25231.png"
                    alt="github_icon"
                  />
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
    );
};

export default About;