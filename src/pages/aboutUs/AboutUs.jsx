import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styled from "./aboutUs.module.css";

function aboutUs() {
  return (
    <div>
      <Navbar />

      <div className={styled.aboutWrapper}>
        <h2>about us</h2>
        <div className={styled.imagesWrapper}>
          <img src="https://images.pexels.com/photos/4050347/pexels-photo-4050347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <p>
            At our company, we pride ourselves on delivering high-quality products and services to our customers. Our mission is to provide innovative solutions that meet the needs of our clients and
            help them achieve their goals. Our team is made up of experienced professionals who are passionate about what they do. From software development to customer service, every member of our
            team is committed to providing exceptional value to our customers. We strive to create a positive and collaborative work environment that fosters creativity, communication, and teamwork.
            We available
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default aboutUs;
