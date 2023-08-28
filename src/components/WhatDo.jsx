import CardWhatDo from "./CardWhatDo"
import TitleSections from "./TitleSections"

const WhatDo = () => {



    return (
        <>
            <TitleSections titleSection="Qué hacemos"/>
            <div className=" content-center grid items-center justify-items-center xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 xs:grid-cols-1">

                {/*  <img src="https://www.ecoimpresion.es/blog/wp-content/uploads/2019/11/Offset-digital-770x470.jpg" alt="dfsljk" srcset="" /> */}

                <CardWhatDo textWhatDo="Ploteado y corte" imageWhatDo="https://c5com.com/wp/wp-content/uploads/2011/05/400x400.png" />
                <CardWhatDo textWhatDo="Gestión y producción de elementos gráficos publicitarios." imageWhatDo="https://c5com.com/wp/wp-content/uploads/2011/05/400x400.png" />
                <CardWhatDo textWhatDo="Fabricación de elementos corpóreos para rótulos y similares." imageWhatDo="https://c5com.com/wp/wp-content/uploads/2011/05/400x400.png" />
                <CardWhatDo textWhatDo="Coordinación y seguimiento del montaje ante el cliente final." imageWhatDo="https://c5com.com/wp/wp-content/uploads/2011/05/400x400.png" />
                <CardWhatDo textWhatDo="Gestión y producción de elementos gráficos publicitarios." imageWhatDo="https://c5com.com/wp/wp-content/uploads/2011/05/400x400.png" />
                <CardWhatDo textWhatDo="Producción de audiovisuales, realización de eventos en streaming y montaje" imageWhatDo="https://c5com.com/wp/wp-content/uploads/2011/05/400x400.png" />

            </div>
        </>
    )
}


export default WhatDo