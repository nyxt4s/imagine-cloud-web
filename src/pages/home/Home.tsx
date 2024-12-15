import star from '../../assets/Star 1.svg';
import Footer from '../../components/footer/footer';

export default function Home (){

    return (
        <>
            <div className="h-svh min-w-full bg-black">
                <div className="container flex h-svh mx-auto px-4 bg-black pt-20  ">
                    <div className="w-1/2 content-center h-screen text-center justify-center items-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white  w-max">NYX TECHNOLOGIES</h1>
                        <p className="text-white text-1xl mt-4">"Tu Tiempo Importa, Nuestro Tecnología 
                        Simplifica: ¡Vive más, Preocúpate menos!"</p>
                        <br />
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            Contáctanos
                        </button>
                    </div>
                    <div className="w-1/2 h-auto content-center">
                     <img src={star} alt="" className='ml-32 absolute animate-spin rotate-2'/>
                     <img src={star} alt="" className='ml-32 absolute animate-pulse rotate-180'/>
                     <img src={star} alt="" className='ml-32 absolute animate-ping'/>
                        <img src={star} alt="" className='ml-32  animate-spin'/>
                    </div>
                  
                </div>
                <div className="container h-svh mx-auto px-4 bg-red-700    ">
                    <div className="w-1/2 h-">
                        fdsfsd
                    </div>
                    <div className="w-1/2 h-auto">

                    </div>
                </div>
                <Footer>

                </Footer>
            </div>
        </>
    )
}