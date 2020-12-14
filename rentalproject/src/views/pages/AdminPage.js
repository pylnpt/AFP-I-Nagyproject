import React from "react";

// reactstrap components
import {
  Container
} from "reactstrap";

// core components
import AdminNavbar from "components/Navbars/AdminNavBar.js";
import ContactHeader from "components/Headers/ContactHeader.js";
import BasicFooter from "components/Footers/BasicFooter.js";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (

    <>
      <AdminNavbar />
      <ContactHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            
            <div className="name">
              <h2 className="title">
               Ez az admin page...  <br />
              </h2>
            </div>
          </div>         
        </Container>
      </div>
      <BasicFooter />
    </>
  );
}

export default ProfilePage;