import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styled from "./aboutUs.module.css";

function aboutUs() {
  return (
    <div>
      <Navbar />

      <div className={styled.aboutWrapper}>
        <h2>about us</h2>
        <p>
          Lorem ipsum, Lorem ipsum, dolorLorem ipsum, dolorLorem ipsum, dolorLorem ipsum, dolorLorem ipsum, dolorLorem ipsum, dolorLorem ipsum, dolorLorem ipsum, dolorLorem ipsum, dolorLorem ipsum,
          dolorLorem ipsum, dolorLorem ipsum, dolorLorem ipsum, dolorLorem ipsum, dolorLorem ipsum, dolorLorem ipsum, dolorLorem ipsum, dolor.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default aboutUs;
