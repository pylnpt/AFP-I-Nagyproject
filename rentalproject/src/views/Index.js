import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import BasicNavBar from "../components/Navbars/BasicNavBar.js";
import LandingPageHeader from "../components/Headers/LandingPageHeader.js";
import BasicFooter from "../components/Footers/BasicFooter.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <BasicNavBar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Mi a Miraculum autókölcsönző?</h2>
                <h5 className="description">
                  A Miraculum autókölcsönző évekkel
                  megelőzi a többi kölcsönzőt, nem csak a különleges autóink miatt! Számunkra fontos a környezetünk védelme is, így több
                  féle elektromos és hybrid autóból is választhatnak ügyfeleink.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Kínálatunk
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Amit az Ön számára kínálunk</h2>
            <Row>
            
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("./../assets/img/medal.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Megbízhatóság</CardTitle>
                        {/* <h6 className="card-category">Munkaköre</h6> */}
                      </div>
                    </a>
                    <p className="card-description text-center">
					Mindent megteszünk hogy az ÖN számára legmegfelelőbbkínálatokat nyújthassuk.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("./../assets/img/medal.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Rugalmasság</CardTitle>
                        {/* <h6 className="card-category">Munkaköre</h6> */}
                      </div>
                    </a>
                    <p className="card-description text-center">
                    Ügyfeleink és Partnereink számának gyarapodásával párhuzamosan kínálunk megoldásokat a járműkölcsönzés bármely területén.
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("./../assets/img/medal.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Profizmus</CardTitle>
                        {/* <h6 className="card-category">Munkaköre</h6> */}
                      </div>
                    </a>
                    <p className="card-description text-center">
					Munkatársaink folyamatosan képzéseken vesznek részt, hogy az egyre szélesedő piacon versenyképesek maradjunk.
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Kérdése van?</h2>
                <h4 className="text-center">Rendelkezésére állunk a hét minden napján! Üzeneteikre mihamarabb válaszolunk. Forduljon hozzánk bizalommal!</h4>
                 <h4 className="text-center"><a href='/contact-page'>Ide</a> kattintva tud nekünk üzenni.</h4>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <BasicFooter />
    </>
  );
}

export default LandingPage;
