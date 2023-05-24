import "./home.css";
import Typed from "typed.js"
import HeaderImg from '../../img/h1.jpg';
import Image1 from '../../img/img1.jpg';
import Image2 from '../../img/food2.jpg';
import Image3 from '../../img/img2.jpg';
import { useEffect, useRef } from "react";


const Header = () => {

    const m = useRef(null);

    useEffect(() => {
        const typed = new Typed(m.current,{
            strings : ["Cozy","Relaxing","Delicious","Enjoyable","Serene"],
            startDelay: 500,
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
            showCursor: true,
        });
    });
  return (
    <>
        <section>
            <div className="header">
             <div>
                <div className = "img">
                <img src={HeaderImg} alt=""/> 
             </div>
             <div className="HeaderOverlay"></div>
            </div>
            <div className="headerContent">
                <h1>Experience the perfect blend of comfort and flavor <br /> <span ref={m}></span>
                </h1>
            </div>
            
            </div>
         </section>

         <section>
            <div className=" image-container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="box">
                            <img src = {Image1} className='img-fluid' alt=""/>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="box">
                            <img src = {Image2} className='img-fluid' alt=""/>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="box">
                            <img src = {Image3} className='img-fluid' alt=""/>
                        </div>
                    </div>
                </div>
            </div>
         </section>

        
    </>
  ); 
};

export default Header;
