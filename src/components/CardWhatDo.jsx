const CardWhatDo = props => {

    const { textWhatDo, imageWhatDo } = props;

    return (


        <div className=" grid content-center justify-items-center items-center m-3 text-xl  rounded-2xl  ">

            <div className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <a href="#">
                    <img className="rounded-lg" src={imageWhatDo} alt="image description" />
                </a>
                <div className="absolute px-4 text-lg text-white bottom-6">
                    <p className="text-3xl text-blue-700">{textWhatDo}</p>
                </div>
            </div>
            

        </div>
    )

}

export default CardWhatDo