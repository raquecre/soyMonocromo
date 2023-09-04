import TitleSections from "./TitleSections"

const InfiniteScroll = () => {



    return (
        <>
        <TitleSections titleSection="Nuestros Colaboradores"/>
            <div
                x-data="{}"
                x-init="$nextTick(() => {
                let ul = $refs.logos;
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            ul.nextSibling.setAttribute('aria-hidden', 'true');
        })"
                className="mb-20 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
            >
                <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:w-100 animate-infinite-scroll">
                    <li>
                        <img src="https://1000marcas.net/wp-content/uploads/2019/12/Facebook-logo.png" alt="Facebook" />
                    </li>
                    <li>
                        <img src="https://1000marcas.net/wp-content/uploads/2019/12/Facebook-logo.png" alt="Facebook" />
                    </li>
                    <li>
                        <img src="https://1000marcas.net/wp-content/uploads/2019/12/Facebook-logo.png" alt="Facebook" />
                    </li>
                    <li>
                        <img src="https://1000marcas.net/wp-content/uploads/2019/12/Facebook-logo.png" alt="Facebook" />
                    </li>
                    <li>
                        <img src="https://1000marcas.net/wp-content/uploads/2019/12/Facebook-logo.png" alt="Facebook" />
                    </li>
                    <li>
                        <img src="https://1000marcas.net/wp-content/uploads/2019/12/Facebook-logo.png" alt="Facebook" />
                    </li>
                    <li>
                        <img src="https://1000marcas.net/wp-content/uploads/2019/12/Facebook-logo.png" alt="Facebook" />
                    </li>
                    <li>
                        <img src="https://1000marcas.net/wp-content/uploads/2019/12/Facebook-logo.png" alt="Facebook" />
                    </li>
                </ul>
            </div>
        </>

    )


}

export default InfiniteScroll