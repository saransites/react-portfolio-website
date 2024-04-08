import React from "react";
import Formcontacts from "./formcontacts";
import Footer from "../footer";
const Contact = () => {
  return (
    <section id="contact">
      <div className={`md:w-[60%] flex flex-col justify-center items-center rounded-[10%] shadow-[0_0_30px_black] text-center py-2`}
      >
        <Formcontacts/>
        <Footer/>
      </div>
    </section>
  );
};

export default Contact;
