import "./Content1.css";
import payImage from "../../assets/pay.jpg";
import payImage1 from "../../assets/pay1.jpg"; 

const Content1 = () => {
  return (
    <div className="container">
      <div className="grid">
        <div className="side left">
          <p className="highlight-text">
            Get paid early Save automatically all your pay.
          </p>
          <h6 className="subtext">
            Inscrivez-vous des maintenant et profitez de nos se rvivices.
          </h6>
          <form className="email-form">
            <input
              type="email"
              placeholder="Your business email"
              required
              className="email-input"
            />
            <button type="submit" className="btn-get-started">
              Get started
            </button>
          </form>
        </div>

        <div className="side right image-container">
          <img
            src={payImage}
            alt="Payment illustration"
            className="base-image"
          />
          <img
            src={payImage1}
            alt="Second payment illustration"
            className="overlay-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Content1;