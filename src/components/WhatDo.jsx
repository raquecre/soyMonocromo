import CardWhatDo from "./CardWhatDo"
import TitleSections from "./TitleSections"

const WhatDo = () => {



    return (
        <>
            <TitleSections titleSection="Qué hacemos"/>
            <div className=" content-center grid items-center justify-items-center grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10  ">

                {/*  <img src="https://www.ecoimpresion.es/blog/wp-content/uploads/2019/11/Offset-digital-770x470.jpg" alt="dfsljk" srcset="" /> */}

                <CardWhatDo textWhatDo="Ploteado y corte" imageWhatDo="https://www.aejames.com/wp-content/uploads/2019/01/Parrot-Care-900x900.jpg" />
 

                 <CardWhatDo textWhatDo="Gestión y producción de elementos gráficos publicitarios." imageWhatDo="https://www.aejames.com/wp-content/uploads/2019/01/Parrot-Care-900x900.jpg" />
                <CardWhatDo textWhatDo="Fabricación de elementos corpóreos para rótulos y similares." imageWhatDo="https://www.aejames.com/wp-content/uploads/2019/01/Parrot-Care-900x900.jpg" />
                <CardWhatDo textWhatDo="Coordinación y seguimiento del montaje ante el cliente final." imageWhatDo="https://www.aejames.com/wp-content/uploads/2019/01/Parrot-Care-900x900.jpg" />
                <CardWhatDo textWhatDo="Gestión y producción de elementos gráficos publicitarios." imageWhatDo="https://www.aejames.com/wp-content/uploads/2019/01/Parrot-Care-900x900.jpg" />
                <CardWhatDo textWhatDo="Producción de audiovisuales, realización de eventos en streaming y montaje" imageWhatDo="https://www.aejames.com/wp-content/uploads/2019/01/Parrot-Care-900x900.jpg" /> 
            </div>
        </>
    )
}


export default WhatDo