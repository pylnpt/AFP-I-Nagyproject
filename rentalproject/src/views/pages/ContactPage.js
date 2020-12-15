import React from "react";
//google map components
//import {Map, GoogleApiWrapper } from 'google-maps-react';

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import BasicNavBar from "../../components/Navbars/BasicNavBar.js";
import ContactHeader from "../../components/Headers/ContactHeader.js";
import BasicFooter from "../../components/Footers/BasicFooter.js";

function ProfilePage() {

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (

    <>
      <BasicNavBar />
      <ContactHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            
            <div className="name">
              <h2 className="title">
               Miraculum Autókölcsönző  <br />
              </h2>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              
              <h3>
                Telephely: 1520, Eger Dobó utca 69.
                <br></br>
              </h3>
              <h3>
              Telefonszámaink:<br></br> 06-55/202-375 <br></br> 06-55/324-754 <br></br> 06-55/541-910
              </h3>
              <h3>
                E-mail címünk: miraculumauto@auto.hu
              </h3>
              <br />
              <div>
              </div>
             
            </Col>
          </Row>
          <br />
         
         
        </Container>
      </div>
      <BasicFooter />
    </>
  );
}

export default ProfilePage;
