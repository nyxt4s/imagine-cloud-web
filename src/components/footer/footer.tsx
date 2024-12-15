

export default function Footer () {



    return ( 
        <footer className="flex items-center justify-center h-96 container mx-auto">
                    <div className="w-1/4  m-4">
                        <h5>Up Business</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate a, ultricies sit nunc purus vel cras pellentesque.</p>
                        <a href=""><img src="" alt="" /></a>
                    </div>
                    <div className="w-1/4 flex flex-col m-4 ">
                    <h5>sobre nosotros</h5>
                  
                        <ul>
                            <li>Home</li>
                            <li>Como trabajamos</li>
                            <li>Nuestro equipo</li>
                            <li>Precios</li>
                            <li>Terminos legales</li>
                        </ul>
                    </div>
                    <div className="w-1/4  m-4">
                        <h5>locacion</h5>

                    </div>
                    <div className="w-1/4  m-4">
                        <h5>Contactanos </h5>
                        <p>nyxTechnologies@gmail.com</p>
                        <p>+569 22585699</p>
                    </div>
            </footer>
    )
}