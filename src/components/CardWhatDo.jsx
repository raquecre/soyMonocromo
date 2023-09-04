import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const CardWhatDo = props => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const { textWhatDo, imageWhatDo } = props;

    return (

        <div data-aos="zoom-in" className=" relative  ">

            <div className=" grid content-center justify-items-center items-center m-3 text-xl rounded-2xl   ">


                <img className="rounded-lg" src={imageWhatDo} alt="image description" />

                <div className="absolute m-4 p-4 text-lg text-white backdrop-blur-md hover:backdrop-blur-xl duration-200 ease-in rounded-full">
                    <p className="text-4xl p-3 text-white  ">{textWhatDo}</p>
                </div>
            </div>


        </div>
    )

}

export default CardWhatDo