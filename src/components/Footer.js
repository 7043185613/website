// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

// import React from "react";
// import Slider from "react-slick";
// import logo from "./logo.svg";
// import pm from "D:/eveo/25-01/eveo/src/components/pm.svg";
// import facebook from "../all.png/facebook.png";
// import insta from "../all.png/insta.png";
// import linkedin from "../all.png/linkedin.png";
// import angellist from "../all.png/angellist.png";
// import tel from "../all.png/tel.png";

// function Footer() {
//   const images = [
//     "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693808870291x218412655885969380%2FGTU_innovation.png?w=384&h=266&auto=compress&dpr=1.25&fit=max",
//     "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693808980371x646071236054669700%2FIIML_Incubator.png?w=384&h=266&auto=compress&dpr=1.25&fit=max",
//     "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693809008073x241054722616049540%2FMeta-Logo.png?w=384&h=266&auto=compress&dpr=1.25&fit=max",
//     "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693809035835x740072925358515200%2FMinistry_of_Science_anTechnology_India.png?w=384&h=266&auto=compress&dpr=1.25&fit=max",
//     "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693809896687x564686913620043400%2FMicrosoft-for-Startups.png?w=384&h=266&auto=compress&dpr=1.25&fit=max",
//     "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693809909069x467625668000071900%2Fopenai.png?w=384&h=266&auto=compress&dpr=1.25&fit=max",
//     "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693809915594x952458924033623700%2Fnvidia_Inception.png?w=384&h=266&auto=compress&dpr=1.25&fit=max",
//     "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693809889602x833942812012533100%2FMicrosoft_Partner.png?w=384&h=266&auto=compress&dpr=1.25&fit=max",
//   ];
//   const imgur =
//     "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693904089883x802625093874465300%2Fplay-store-logo-33874.png?w=192&h=74&auto=compress&dpr=1.25&fit=max";
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 1500,
//     slidesToShow: 8,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     arrows: false,
//   };
//   return (
//     <>
//       <div className="support-container">
//         <div className="support-title">Supported & incubated</div>
//         <div className="slider">
//           <Slider {...settings}>
//             {images.map((image, index) => (
//               <div key={index}>
//                 <img src={image} alt={`Slide ${index}`} />
//               </div>
//             ))}
//           </Slider>
//         </div>

//         <div className="ready-container">
//           <p className="ready-content">
//             <h5 className="conte">
//               Ready to Get Started ? &nbsp; &nbsp; Join&nbsp;
//               <strong>EVEO</strong>&nbsp;Today
//             </h5>
//           </p>
//           <div className="ready-mail">
//             <input
//               className="ready-input"
//               type="email"
//               placeholder="Enter Your Email"
//             ></input>
//             <button className="btn-class">Join Now</button>
//           </div>
//         </div>
//         <div className="logo2">
//           <img src={logo} alt="Blog Logo" />
//         </div>
//         <p className="last-content">
//           At Eveo, we are trying to align the fashion according to your
//           preference and under your budget by offering personalized guidance,
//           using AI-AR to transform personality management for events.{" "}
//         </p>
//         <div className="contactus">Contact Us</div>
//         <div className="contact-mail">
//           <lord-icon
//             src="https://cdn.lordicon.com/slmechys.json"
//             trigger="hover"
//             style={{ width: "25px", height: "25px" }}
//           ></lord-icon>
//           <p className="cmail">info@eveo.in</p>
//         </div>
//         <div className="call">
//           <img src={pm} alt="call" />
//           <p className="mobile">0261 3177919</p>
//         </div>
//       </div>
//       <div className="last-container">
//         <div className="our-ser">
//           <div className="main-our-ser">Our Services</div>
//           <p className="os5">
//             Virtual Try-On &nbsp; Expert Advise &nbsp; &nbsp; &nbsp; Outfit
//             Co-Ordination Affordable Services
//           </p>
//           <div className="use-lin">
//             <div className="useful-links">Useful Links</div>
//             <p className="os4">
//               Support &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Services &nbsp; &nbsp;
//               &nbsp; &nbsp; &nbsp; &nbsp; Privacy Policy &nbsp; &nbsp; Terms &
//               Conditions
//             </p>
//           </div>
//         </div>

//         <div className="let-connect">
//           <div className="lets-stay-connected">Let's Stay Connected</div>
//           <div className="last-email-container">
//             <input
//               className="last-email"
//               type="email"
//               placeholder="Your email address"
//             />
//             <div className="let-connect">
//               <div className="square">
//                 <div className="circle">
//                   <div className="telegram-container">
//                     <img src={tel} alt="telegram-icon" className="tel-icon" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="last-join"> &nbsp; &nbsp; Join Us</div>
//         </div>

//         <div className="all5">
//           <div className="playstore">
//             <img src={imgur} alt="playstore" />
//           </div>
//           <div className="icon4">
//             <img className="social-icon1" src={facebook} alt="facebook-icon" />
//             <img className="social-icon2" src={insta} alt="instaicon" />
//             <img className="social-icon3" src={linkedin} alt="linkedinicon" />
//             <img className="social-icon4" src={angellist} alt="angelist" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Footer;

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

import Slider from "react-slick";
import logo from "./logo.svg";
import pm from "D:/eveo/25-01/eveo/src/components/pm.svg";
import facebook from "../all.png/facebook.png";
import insta from "../all.png/insta.png";
import linkedin from "../all.png/linkedin.png";
import angellist from "../all.png/angellist.png";
import tel from "../all.png/tel.png";

function Footer() {
  const images = [
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693808870291x218412655885969380%2FGTU_innovation.png?w=384&h=266&auto=compress&dpr=1.25&fit=max",
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693808980371x646071236054669700%2FIIML_Incubator.png?w=384&h=266&auto=compress&dpr=1.25&fit=max",
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693809008073x241054722616049540%2FMeta-Logo.png?w=384&h=266&auto=compress&dpr=1.25&fit=max",
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693809035835x740072925358515200%2FMinistry_of_Science_anTechnology_India.png?w=384&h=266&auto=compress&dpr=1.25&fit=max",
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693809896687x564686913620043400%2FMicrosoft-for-Startups.png?w=384&h=266&auto=compress&dpr=1.25&fit=max",
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693809909069x467625668000071900%2Fopenai.png?w=384&h=266&auto=compress&dpr=1.25&fit=max",
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693809915594x952458924033623700%2Fnvidia_Inception.png?w=384&h=266&auto=compress&dpr=1.25&fit=max",
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693809889602x833942812012533100%2FMicrosoft_Partner.png?w=384&h=266&auto=compress&dpr=1.25&fit=max",
  ];
  const imgur =
    "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fe68bd600813600a9b62dceea2a4c0228.cdn.bubble.io%2Ff1693904089883x802625093874465300%2Fplay-store-logo-33874.png?w=192&h=74&auto=compress&dpr=1.25&fit=max";
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [count, setCount] = useState(0);
  const [updatedCount, setUpdatedCount] = useState();

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const validateEmail = (email) => {
    const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    return regex.test(email);
  };

  const displayRazorpay = async () => {
    if (!validateEmail(email)) {
      setIsValidEmail(false);
      return;
    }

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("You are offline...... Failed to load razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_BqwXmtR5v1PWNh",
      currency: "INR",
      amount: 3900,
      name: "eveo",
      description: "Thanks for joining",
      handler: async function (response) {
        const jsonData = {
          Email: email,
        };

        try {
          await axios.post("http://192.168.29.219/test", jsonData, {
            headers: {
              "Content-Type": "application/json",
            },
          });

          alert("Payment Successfully");
          const storedEmail = localStorage.getItem("userEmail");
          localStorage.setItem("userEmail", email);
          console.log("Stored Email:", storedEmail);
          updateCount();
        } catch (error) {
          console.error("Error:", error);
        }
      },
      prefill: {
        name: "eveo",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const updateCount = useCallback(async () => {
    try {
      const response = await axios.get("http://192.168.29.219/test");
      setCount(response.data.count);
      setUpdatedCount(response.data.count);
    } catch (error) {
      console.error("Error fetching count:", error);
    }
  }, []);

  useEffect(() => {
    updateCount();
  }, [updateCount]);

  return (
    <>
      <div className="support-container">
        <div className="support-title">Supported & incubated</div>
        <div className="slider">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index}`} />
              </div>
            ))}
          </Slider>
        </div>

        <div className="ready-container">
          <p className="ready-content">
            <h5 className="conte">
              Ready to Get Started ? &nbsp; &nbsp; Join&nbsp;
              <strong>EVEO</strong>&nbsp;Today
            </h5>
          </p>

          <div className="ready-mail">
            <form action="http://192.168.29.219/test" method="get">
              <div className="input-group">
                {!isValidEmail && (
                  <p style={{ color: "red" }}>Invalid email address</p>
                )}
                <input
                  className="ready-input"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsValidEmail(true);
                  }}
                />
                <button
                  type="button"
                  className="btn-class"
                  onClick={() => displayRazorpay()}
                >
                  Join Now
                </button>
              </div>
              <div>
                <p id="count">{updatedCount !== null ? updatedCount : count}</p>
              </div>
            </form>
          </div>
        </div>
        <div className="logo2">
          <img src={logo} alt="Blog Logo" />
        </div>
        <p className="last-content">
          At Eveo, we are trying to align the fashion according to your
          preference and under your budget by offering personalized guidance,
          using AI-AR to transform personality management for events.{" "}
        </p>
        <div className="contactus">Contact Us</div>
        <div className="contact-mail">
          <lord-icon
            src="https://cdn.lordicon.com/slmechys.json"
            trigger="hover"
            style={{ width: "25px", height: "25px" }}
          ></lord-icon>
          <p className="cmail">info@eveo.in</p>
        </div>
        <div className="call">
          <img src={pm} alt="call" />
          <p className="mobile">0261 3177919</p>
        </div>
      </div>
      <div className="last-container">
        <div className="our-ser">
          <div className="main-our-ser">Our Services</div>
          <p className="os5">
            Virtual Try-On &nbsp; Expert Advise &nbsp; &nbsp; &nbsp; Outfit
            Co-Ordination Affordable Services
          </p>
          <div className="use-lin">
            <div className="useful-links">Useful Links</div>
            <p className="os4">
              Support &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Services &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; &nbsp; Privacy Policy &nbsp; &nbsp; Terms &
              Conditions
            </p>
          </div>
        </div>

        <div className="let-connect">
          <div className="lets-stay-connected">Let's Stay Connected</div>

          <div className="last-email-container">
            <form action="http://192.168.29.219/test" method="get">
              <div className="input-group">
                {!isValidEmail && (
                  <p style={{ color: "red" }}>Invalid email address</p>
                )}
                <input
                  className="last-email"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsValidEmail(true);
                  }}
                />
                <div className="let-connect">
                  <div className="square">
                    <div className="circle">
                      <div className="telegram-container">
                        <img
                          src={tel}
                          alt="telegram-icon"
                          className="tel-icon"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p id="count">{updatedCount !== null ? updatedCount : count}</p>
              </div>
            </form>
          </div>
          <div className="last-join">
            {" "}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Join Us
          </div>
        </div>

        <div className="all5">
          <div className="playstore">
            <img src={imgur} alt="playstore" />
          </div>
          <div className="icon4">
            <img className="social-icon1" src={facebook} alt="facebook-icon" />
            <img className="social-icon2" src={insta} alt="instaicon" />
            <img className="social-icon3" src={linkedin} alt="linkedinicon" />
            <img className="social-icon4" src={angellist} alt="angelist" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
