import imgPc from '../../assets/Rectangle 43 (1).svg';
import imgPc2 from '../../assets/Group 16.svg';
import Footer from '../../components/footer/footer';

export default function Home (){

    return (
        <>
            <div className="h-svh min-w-full bg-black">
       
                <div className="container flex h-svh mx-auto px-4 bg-black pt-20  mb-10">
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
                    
                    </div>
                  
                </div>
                
                <div className="container mx-auto px-4 h-auto py-3 mb-10 ">
                    <h5 className='items-center text-left justify-center text-2xl pb-6'>Nuestros Servicios</h5>
                    <div className='flex justify-center'>
                        <div className='w-1/3 items-center text-center justify-center'>
                            
                            <div className='w-5/6 h-auto  items-center text-center p-4 shadow-md hover:shadow-xl transition-shadow duration-300'>
                                <img src={imgPc} alt="" className='h-2/3 w-full'/>
                                <h6 className='items-center text-center pt-3 text-lg'>web Developers</h6>
                                <p className='p-4 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in malesuada eget fames purus ligula luctus tellus. Habitant condimentum sit gravida praesent. </p>
                                <button>Learn more</button>
                            </div>
                        </div>
                        <div className='w-1/3 '>
                            <div className='w-5/6 h-auto  items-center text-center p-4 shadow-md hover:shadow-xl transition-shadow duration-300'>
                                <img src={imgPc2} alt="" className='h-2/3 w-full'/>
                                <h6 className='items-center text-center pt-3 text-lg'>web Developers</h6>
                                <p className='p-4 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in malesuada eget fames purus ligula luctus tellus. Habitant condimentum sit gravida praesent. </p>
                                <button>Learn more</button>
                            </div>
                        </div>
                        <div className='w-1/3'>  
                            <div className='w-5/6 h-auto items-center text-center p-4 shadow-md hover:shadow-xl transition-shadow duration-300'>
                                <img src={imgPc2} alt="" className='h-2/3 w-full'/>
                                <h6 className='items-center text-center pt-3 text-lg'>web Developers</h6>
                               <p className='p-4 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie in malesuada eget fames purus ligula luctus tellus. Habitant condimentum sit gravida praesent. </p>
                                <button className=''>Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 h-auto py-3 mb-10 ">
                    <h5>Things We Enjoy</h5>
                    <div className='flex'>
                    <div className='align-center flex-col p-4'>
                        <div className='p-3'>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <h6>Content writing</h6>
                                <p>But I must explain to you how all this mistaken 
                                idea of denouncing pleasure</p>
                            </div>
                        </div>
                        <div className='p-3'>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <h6>Content writing</h6>
                                <p>But I must explain to you how all this mistaken 
                                idea of denouncing pleasure</p>
                            </div>
                        </div>
                        <div className='p-3'>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <h6>Content writing</h6>
                                <p>But I must explain to you how all this mistaken 
                                idea of denouncing pleasure</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='p-3'>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <h6>Content writing</h6>
                                <p>But I must explain to you how all this mistaken 
                                idea of denouncing pleasure</p>
                            </div>
                        </div>
                        <div className='p-3'>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <h6>Content writing</h6>
                                <p>But I must explain to you how all this mistaken 
                                idea of denouncing pleasure</p>
                            </div>
                        </div>
                        <div className='p-3'>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <h6>Content writing</h6>
                                <p>But I must explain to you how all this mistaken 
                                idea of denouncing pleasure</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
               
                <Footer>

                </Footer>
              
              
            </div>
        </>
    )
}