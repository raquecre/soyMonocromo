import CardContact from "./CardContact";

const Footer = () => {


    return (
        <div className=" text-black p-10  ">
            <div className="flex items-start gap-5 "  data-aos="fade-down-right">
                <img className="w-1/6 " src="https://i.imgur.com/UZR9R8B.png" alt="imageLogo" srcset="" />
               {/*  <p className="text-5xl mb-5 ">Contáctanos</p> */}
            </div>

            <div className="grid xl:grid-cols-2 xl:gap-10 lg:grid-cols-2 lg:gap-20" data-aos="fade-up-right">

                <div className="grid grid-col ">
                    <CardContact
                        textContact="hola@soymonocromo.com"
                        iconTypeContact={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 text-blue-500">
                                <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                            </svg>}
                    />

                    <CardContact
                        textContact="919915292 / 650603242"
                        iconTypeContact={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" w-10 text-yellow-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>

                        }
                    />
                    <CardContact
                        textContact="Tomás Redondo, 2 Planta 5 Nave 18 28033 Madrid"
                        iconTypeContact={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 text-pink-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        }
                    />


                </div>

                <iframe className="pl-5 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.1487139050546!2d-3.62976880000001!3d40.4719749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422ef23f6816b3%3A0xd9848e4e02b049fe!2sC.%20Tom%C3%A1s%20Redondo%2C%202%2C%20Nave%2018%2C%2028033%20Madrid!5e0!3m2!1ses!2ses!4v1693318303638!5m2!1ses!2ses" width="550" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>


        </div>
    )
}

export default Footer