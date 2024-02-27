import "../styles/Landinpage.css"
import img from "../images/main images/hero section image.jpg"
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {

   const navigate=useNavigate();

   const gotoLoginPage=()=>{
    navigate("/login/account");
   }


  return (
    <div className="landingpage">
      <img
        className="hero-section-image-1"
        alt=""
        src={img}
      />
      <div className="f">F</div>
      <div className="die">die</div>
      <b className="chefs-special">CHEF’S SPECIAL</b>
      <b className="freshness-in-every-container">
        <p className="freshness">{`Freshness `}</p>
        <p className="freshness">in every bite</p>
      </b>
      <div className="lorem-ipsum-dolor-container">
        <p className="freshness">{`Lorem ipsum dolor sit amet, consectetur `}</p>
        <p className="freshness">adipiscing elit. Quo studio.</p>
      </div>
      <div className="landingpage-child" />
      <div className="oo">oo</div>
     <div className="buttons">
          
          <div className="order-button">
          <Button variant="dark" type="submit" onClick={gotoLoginPage}>Order Now</Button>
          </div>
     </div>
    </div>
  );
};

export default LandingPage;
