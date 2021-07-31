import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Form from 'react-bootstrap/Form'
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";

const ContactData = contactPageData.contactSection;
const contactForm = contactPageData.contactForm;

function Contact(props) {

  const [firstNameQuery, setFirstNameQuery] = useState("");
  const [secondNameQuery, setSecondNameQuery] = useState("");
  const [emailAddressQuery, setEmailAddressQuery] = useState("");
  const [emailTypeQuery, setEmailTypeQuery] = useState("");
  const [emailInfoQuery, setEmailInfoQuery] = useState("");

  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  const email = (evt) => {
    let fullName = firstNameQuery + " " + secondNameQuery
    evt.preventDefault();
    var emailInfoObj = {
      name: fullName,
      emailAddress: emailAddressQuery,
      emailType: emailTypeQuery,
      emailInfo: emailInfoQuery
    };

    emailjs.send('service_9xyztcd', 'contact_form', emailInfoObj, 'user_ZmzEAmycn3mYptVjhl2av')
      .then(function (response) {
        toast('🦄 Wow so easy!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }, function (error) {
        console.log('FAILED...', error);
      });
  }

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
                style={{
                  "border": `1px solid`,
                  "padding": `10px`,
                  "box-shadow": `5px 10px`,
                  "height": `75vh`,
                }}
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <a {...styles} className="general-btn" href={greeting.resumeLink}>
                See my Resume
              </a>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {contactForm["title"]}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {contactForm["subtitle"]}
              </p>
              <div class="contactScreen">
                <div class={theme.name === "dark" ? "screen-header" : "screen-header-light"}>
                  <div class="screen-header-left">
                    <div class="screen-header-button close"></div>
                    <div class="screen-header-button maximize"></div>
                    <div class="screen-header-button minimize"></div>
                  </div>
                  <div class="screen-header-right">
                    <div class="screen-header-ellipsis"></div>
                    <div class="screen-header-ellipsis"></div>
                    <div class="screen-header-ellipsis"></div>
                  </div>
                </div>
                <div class={theme.name === "dark" ? "screen-body" : "screen-body-light"}>
                  <div class="screen-body-item">
                    <Form onSubmit={email}>
                      <Form.Row>
                        <Col s={12} md={6} lg={6}>
                          <Form.Group >
                            <Form.Label className="form-labels">First Name</Form.Label>
                            <Form.Control
                              className="form-text"
                              required
                              placeholder="Enter First Name"
                              value={firstNameQuery}
                              onChange={e => setFirstNameQuery(e.target.value)} />
                          </Form.Group>
                        </Col>
                        <Col s={12} md={6} lg={6}>
                          <Form.Group  >
                            <Form.Label className="form-labels">Second Name</Form.Label>
                            <Form.Control
                              required
                              className="form-text"
                              placeholder="Enter Second Name"
                              required
                              value={secondNameQuery}
                              onChange={e => setSecondNameQuery(e.target.value)} />
                          </Form.Group>
                        </Col>
                      </Form.Row>

                      <Form.Group >
                        <Form.Label className="form-labels">Email</Form.Label>
                        <Form.Control
                          className="form-text"
                          type="email"
                          required
                          placeholder="Enter email"
                          required
                          value={emailAddressQuery}
                          onChange={e => setEmailAddressQuery(e.target.value)} />
                      </Form.Group>

                      <Form.Group controlId="formGridAddress1">
                        <Form.Label className="form-labels">Type of query</Form.Label>
                        <Form.Control
                          className="form-text"
                          as="select"
                          required
                          value={emailTypeQuery}
                          onChange={e => setEmailTypeQuery(e.target.value)}>
                          <option disabled value="">Type of Query</option>
                          <option>Query</option>
                          <option>Freelance Work</option>
                          <option>Job Offer</option>
                          <option>Other</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group controlId="formGridAddress2"
                        className="form-text"
                        required
                        value={emailInfoQuery}
                        onChange={e => setEmailInfoQuery(e.target.value)}>
                        <Form.Label className="form-labels">Query</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" as="textarea" />
                      </Form.Group>

                      <button {...styles} className="general-btn" type="submit">
                        Submit
  </button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Fade>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;
