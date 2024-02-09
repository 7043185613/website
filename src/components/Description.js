import React from "react";

export default function Description({ imageuRl, imageURl, imageurL}) {

  const advData = [
    {
      title: "Deepkal Vaswani,USA",
      description:
        "Microsoft Conversational AI Cloud Architecture (8 years exp.)",
    },
    {
      title: "Raj Krishna,USA",
      description:
        "Microsoft AI-ML, DevOps,Data Analytics  (10 years exp.)",
    },
    {
      title: "Raj Paul,USA",
      description:
        "Microsoft Conversational AI,Generative AI (8 years exp.)",
    },
    {
      title: "Diana,Ireland",
      description:
        "AI Expert, 4 Years Experience at Microsoft.",
    },
  ];
  return (
    <>
      <div className="description-container">
        <h1 className="mission">Mission</h1>
        <p className="miss-desc">
          At Eveo, we're all about helping you confidently express your unique
          style. Our mission is to offer personalized guidance for managing your
          personal image at any event or function, so you can feel your best.
          Using cutting-edge AI-AR technology, we're here to transform the way
          you approach personality management. Our easy-to-use virtual
          assistance and real-time simulations are designed to help you make
          informed decisions, boost your confidence, and leave a lasting
          impression. We can't wait to help you look and feel amazing!
        </p>
        <div className="img-des1">
          <img src={imageuRl} alt="des1" />
        </div>

        <div className="img-des2">
          <img src={imageURl} alt="des2" />
        </div>
        <div className="desc2">
        <h1 className="mission">Vision</h1>
        <p className="miss-desc">
          At Eveo, we are passionate about being the ultimate AI-AR platform for
          personality management. We want to make sure that everyone has access
          to personalized virtual styling assistance, no matter where they are
          or what their budget is. With our innovative technology, we create a
          welcoming environment where individuals can confidently express
          themselves, make informed choices, and have a lasting impact. Our
          mission is to empower our users, helping them make authentic
          connections and unlocking their full potential in any situation.
        </p>
        </div>

        <p className="advisors">Advisors</p>
        <div className="adv-container">
            {imageurL.slice(0, 4).map((url, index) => (
              <div key={index} className="adv-item">
                <div className="img4-container">
                  <img src={url} alt={`img ${index}`} />
                </div>
                <h4 className="adv-title">{advData[index].title}</h4>
                <p className="adv-desc">{advData[index].description}</p>
              </div>
            ))}
          </div>
      </div>
    </>
  );
}





