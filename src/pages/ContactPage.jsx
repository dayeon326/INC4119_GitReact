//동국대학교 홈페이지 바로가기 기능 추가
import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import Dpage from "../components/Dpage";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2>연락처</h2>
      <ContactInfo />
      <ContactForm />
      <Dpage />
    </div>
  );
};

export default ContactPage; 