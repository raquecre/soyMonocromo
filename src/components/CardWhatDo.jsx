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

        <div data-aos="zoom-in" className=" duration-500 relative  transition-all  ">

            <div className=" grid content-center justify-items-center items-center m-3 text-xl rounded-2xl  ">


                <img className="rounded-lg" src={imageWhatDo} alt="image description" />

                <div className="absolute px-4 text-lg text-white bottom-6 bg-gray-800 bg-opacity-40 rounded-xl">
                    <p className="text-3xl text-white">{textWhatDo}</p>
                </div>
            </div>


        </div>
    )

}

export default CardWhatDo