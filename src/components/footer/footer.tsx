

export default function Footer () {



    return ( 
        <footer className="flex items-center justify-center h-96 container mx-auto bg-black">
                    <div className="w-1/4  m-4 h-4/5 p-4">
                        <h5 className="text-white mb-4">Up Business</h5>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate a, ultricies sit nunc purus vel cras pellentesque.</p>
                        <a href=""><img src="" alt="" /></a>
                    </div>
                    <div className="w-1/4 flex flex-col m-4 h-4/5 p-4">
                        <h5 className="text-white pb-4">sobre nosotros</h5>
                        <ul className="text-white">
                            <li className="pb-2">Home</li>
                            <li className="pb-2">Como trabajamos</li>
                            <li className="pb-2">Nuestro equipo</li>
                            <li className="pb-2">Precios</li>
                            <li className="pb-2">Terminos legales</li>
                        </ul>
                    </div>
                    <div className="w-1/4  m-4 h-4/5 p-4">
                        <h5 className="text-white">locacion</h5>

                    </div>
                    <div className="w-1/4  m-4 h-4/5 p-4">
                        <h5 className="text-white pb-4">Contactanos </h5>
                        <ul>
                            <li className="text-white pb-2 list-disc">nyxTechnologies@gmail.com</li>
                            <li className="text-white pb-2 list-disc">+569 22585699</li>
                        </ul>

                    </div>
            </footer>
    )
}