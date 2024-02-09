import React from "react";

function Services({ imageURLs }) {
  const text = "Our Services";
  const words = text.split(" ");

  const serviceData = [
    {
      title: "Outfit Co-Ordination",
      description:
        "Our platform offers fashion advice on colors and trend recommendations based on client preferences and suitability for various occasions.",
    },
    {
      title: "Event Styling",
      description:
        "We offer personalized assistance for special events by curating appropriate outfits and accessories.",
    },
    {
      title: "Tailored Suggestions",
      description:
        "Our platform categorizes users based on age, profession, region, and fashion preferences, ensuring tailored guidance and suggestions.",
    },
    {
      title: "Real-Time Simulation",
      description:
        "Users can create virtual simulations of their desired personalities with our AR capabilities.",
    },
    {
      title: "Virtual Assistance",
      description:
        "Our AI-AR enabled virtual assistant provides personalized recommendations, outfit suggestions, and trend monitoring.",
    },
    {
      title: "Styling Advise",
      description:
        "We offer personalized assistance for special events by curating appropriate outfits and accessories.",
    },
  ];

  return (
    <div className="services">
      <h1 className="s1">
        {words.map((word, index) => (
          <span key={index} className={`word-${index + 1}`}>
            {word}
          </span>
        ))}
      </h1>

      <div className="services-container">
        <div className="services-list">
          <div className="service-section">
            {imageURLs.slice(0, 3).map((url, index) => (
              <div key={index} className="service-item">
                <div className="img-container">
                  <img src={url} alt={`img ${index}`} />
                </div>
                <h4 className="s2">{serviceData[index].title}</h4>
                <p className="blog-text1">{serviceData[index].description}</p>
              </div>
            ))}
          </div>

          <div className="service-section">
            {imageURLs.slice(3, 6).map((url, index) => (
              <div key={index} className="service-item">
                <div className="img-container">
                  <img src={url} alt={`img ${index}`} />
                </div>
                <h4 className="s2">{serviceData[index + 3].title}</h4>
                <p className="blog-text1">
                  {serviceData[index + 3].description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;



