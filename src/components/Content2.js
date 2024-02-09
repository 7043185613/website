import React from "react";
export default function Content2({ imageUrls }) {
  function getImageText(index) {
    const texts = ["Accessibility", "Affordability", "Availibility", "Support"];
    return texts[index] || "";
  }
  function getImagePlain(index){
    const plain = ["45x saves time","400x saves money","PAN India","24/7"]
    return plain[index] || "";
  }
  return (
    <>
      <div className="content2">
        <div className="image-gallery">
          {imageUrls.map((url, index) => (
            <div key={index} className="image-container">
              <img className="p5" src={url} alt={`Img ${index + 1}`} />
              <div className="containr">
             <div className="bottom-fiv">
              <div className="bottom-text">{getImageText(index)}</div>
              <div className="bottom-plain">{getImagePlain(index)}</div>
            </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
