import React from "react";
import './services.css';

const Services  = () => {
    return(
        <div className=" services component_space" id ="Services">
            <div className="heading">
                <h1 className="heading">"Indulge in Opulence: Your Ultimate Private Haven"</h1>
                <p className="heading p_color">
                Adel's Private Suites offers a luxurious experience with its exceptional services,
                </p>
                <p className="heading p_color">
                including a beautiful pool, elegantly designed rooms, delicious dining options, and  a spacious event hall.
                </p>
                <p className="heading p_color">
                Whether you're looking to relax, indulge in fine cuisine, or  host a special occasion,
                </p>
                <p className="heading p_color">
                Adel's Private Suites promises unparalleled comfort and impeccable service.
                </p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="service_box pointer">
                            <div className="icon">
                            <svg
                                stroke = "currentColor"
                                fill = "none"
                                stroke-width ="2"
                                viewBox="0 0 24 24"
                                stroke-strokeLinecap="round"
                                strokeLinejoin="round"
                                height ="1em"
                                width ="1em"
                                xmlns = "http://www.w3.org/2000/svg"
                                >
                                    <path m="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                                    <line x1 ="2" y1="20" x2="2" y2="20"></line>
                                </svg>

                            </div>
                            <div className="service_meta">
                                <h1 className =" service_text">Accomodation</h1>
                                <p className="p service_text p_color">
                                Adel's offers elegantly designed and well-appointed rooms
                                with modern amenities to ensure a comfortable and relaxing stay.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="service_box pointer">
                            <div className="icon">
                          

                            </div>
                            <div className="service_meta">
                                <h1 className =" service_text">Pool</h1>
                                <p className="p service_text p_color">
                                Guest can enjoy a stunning pool area where they can swim,
                                relax on loungers, or soak up the sun in a tranquil and 
                                beautiful setting.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="service_box pointer">
                            <div className="icon">
                            

                            </div>
                            <div className="service_meta">
                                <h1 className =" service_text">Dining/Food Catering</h1>
                                <p className="p service_text p_color">
                                Adel's features a culinary experience with delicious food options 
                                prepared by skilled chefs. From gourmet meals to light snacks, 
                                guest can savor a variety dishes crafted with the finest ingredients.

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="service_box pointer">
                            <div className="icon">
                            

                            </div>
                            <div className="service_meta">
                                <h1 className =" service_text">Event Hall</h1>
                                <p className="p service_text p_color">
                               For special occasions or corporate events. Adel's offers a spacious
                               and sophisticated event hall that can customized to meet your specific
                               needs.Whethers it's a wedding reception,business conference, or any other
                               event, Adel's provide state-of-the-art facilities and attentive service.

                                </p>
                            </div>
                        </div>
                    </div>

                   
                            </div>
                        </div>
                    </div> 
    )
}
export default Services;