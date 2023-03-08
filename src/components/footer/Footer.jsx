import styled from "./footer.module.css";

function Footer() {
  return (
    <div className={styled.footerWrapper}>
      <div className={styled.titleWrapper}>
        <div>
          <ul>
            <li>Resources</li>
            <li>Get Help</li>
            <li>Extensions</li>
            <li>Events & Meetups</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Product</li>
            <li>Overview</li>
            <li>For Designers</li>
            <li>For Teams</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Company</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Follow Us</li>
            <li>Twitter</li>
            <li>FaceBook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
