import React from 'react';
import "./about.css";
import AboutImage from "../../img/about.png";


const AboutUs = () => {
  return (
    <>
    <section>
      <div className="about container">
        <div className="row justify-content-center">
          <div className="col-sm-6">
            <img src ={AboutImage} alt=""/>
          </div>

          
          <div className="col-sm-6">
            <h2>About <span> Adel's Private Suites</span></h2>
            <p>
            Adel's Private Suite offers a luxurious and exclusive experience for guests looking for the ultimate getaway. 
            Nestled in a serene location, this private suite boasts a variety of amenities to ensure a memorable stay.<br />
            <br />
            Step into the lap of luxury with Adel's Private Suite and indulge in a refreshing pool that awaits your relaxation.
            Dive into the crystal-clear waters or simply unwind poolside, basking in the tranquility and privacy provided.<br />
            <br />
            The suite itself features elegantly designed rooms that exude comfort and style.
            Each room is meticulously decorated, creating a soothing ambiance that invites you to unwind and recharge.Sink into plush bedding and enjoy a restful night's sleep, awakening refreshed and ready for the day ahead.<br />
            <br />
            A spacious hall provides the perfect setting for gatherings and socializing. 
            Whether hosting a special event or enjoying a cozy evening with loved ones, the hall offers ample space for entertainment and creating cherished memories.<br />
            <br />
            To satisfy your culinary desires, Adel's Private Suite offers a delectable selection of foods and beverages.
            Indulge in a variety of delectable dishes expertly prepared by our talented chefs. 
            From local delicacies to international flavors, there's something to please every palate.
            Pair your meal with a fine selection of beverages, from refreshing cocktails to exquisite wines, elevating your dining experience to new heights.<br />
            <br />
            At Adel's Private Suite, every aspect of your stay is carefully curated to ensure a truly unforgettable experience.
            From the inviting pool to the well-appointed rooms,the spacious hall, and the delightful culinary offerings, every detail is designed with your comfort and enjoyment in mind. 
            Escape to Adel's Private Suite and embrace a world of luxury, relaxation, and culinary delights.<br />

            </p>
          </div>
        </div>
      </div>
    </section>
    </>
    
    );
  };
  
  export default AboutUs;
  