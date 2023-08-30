

const Navbar = () => {


    return (
        <div className=" flex flex-col items-center sm:flex-row xs:flex-row md:flex-row xl:justify-around">

            <div className="w-[400px] ">
                <img cla src="https://i.imgur.com/W6QaLVt.png" alt="monkeyLogo" />
            </div>

            <ul className="font-bold flex text-3xl p-2 ">
                <li className="hover:bg-blue-400 hover:bg-opacity-60 text-gray-800 font-bold py-2 px-4 rounded-l">
                    Qué hacemos
                </li>

                <li className="hover:bg-yellow-400 hover:bg-opacity-60 text-gray-800 font-bold py-2 px-4 ">
                    Nuestro trabajo
                </li>

                <li className=" hover:bg-pink-400 hover:bg-opacity-60 text-gray-800 font-bold py-2 px-4 rounded-r">
                    Contacto
                </li>

            </ul>

        </div>
    )
}

export default Navbar;