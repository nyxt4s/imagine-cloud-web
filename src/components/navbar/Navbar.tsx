import { GoArrowRight } from "react-icons/go";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Logo  from "../../assets/nyx technologies.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
    const handleMenu = () => {
        const navDialog = document.getElementById("nav-dialog");
        navDialog?.classList.toggle("hidden");
    };

    return (
        <nav className="px-5 lg:px-10 py-4 flex bg-white justify-between items-center border border-b-gray-200 fixed top-0 w-full z-50">
            <a href="#" className="flex-1 flex text-lg font-semibold font-sans  lg: ml-2">
                <img src={Logo} alt="" className="h-[50px] " /> <p className="absolute mt-2 ml-12">NYX TECHNOLOGIES</p>
            </a>
            <div id="nav-menu" className="hidden text-lg lg:flex gap-10">
                <a href="#"
                    className="font-medium font-sans hover:text hover:underline underline-offset-4 decoration-2" >
                    Inicio
                </a>
                <Link to="/conocenos" className="font-medium font-sans hover:text-black hover:underline underline-offset-4 decoration-2"
                >
                    Conócenos
                </Link>
                <a
                    href="#"
                    className="font-medium font-sans hover:text-black hover:underline underline-offset-4 decoration-2"
                >
                    Qué hacemos
                </a>
                <Link
                    to='/blog'
                    className="font-medium font-sans hover:text-black hover:underline underline-offset-4 decoration-2"
                >
                    Blog
                </Link>
            </div>

            <div className="flex-1 justify-end hidden lg:flex text-black">
                <button className="group flex gap-2 items-center border border-gray-300 pl-2 pr-3 py-2 rounded-lg hover:border-gray-600 text-lg leading-none font-semibold">
                    Contáctanos{" "}
                    <GoArrowRight className="group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
                </button>
            </div>

            <button onClick={handleMenu} className="border-t-orange-50 lg:hidden">
                <IoMenu className="text-3xl"></IoMenu>
            </button>

            {/* Menú móvil */}
            <div id="nav-dialog" className="hidden fixed z-10 lg:hidden bg-white inset-0 px-5 py-4">
                <div className="flex justify-between">
                    <a href="#" className="flex-1 flex text-lg font-semibold font-sans ml-2" id="brand-logo">
                    <img src={Logo} alt="" className="h-[50px] " /> <p className="absolute mt-2 ml-12">NYX TECHNOLOGIES</p>
                    </a>
                    <button onClick={handleMenu} className="lg:hidden">
                        <IoMdClose className="text-3xl"></IoMdClose>
                    </button>
                </div>

                <div className="mt-6">
                    <a
                        href="#"
                        className="font-medium m-3 p-3 bg-gray-100 hover:bg-gray-200 rounded-lg block"
                    >
                        Home
                    </a>
                    <Link
                        to="/conocenos"
                        className="font-medium m-3 p-3 bg-gray-100 hover:bg-gray-200 rounded-lg block"
                    >
                        Conócenos
                    </Link>
                    <a
                        href="#"
                        className="font-medium m-3 p-3 bg-gray-100 hover:bg-gray-200 rounded-lg block"
                    >
                        Qué hacemos
                    </a>
                    <Link
                        to="/blog"
                        className="font-medium m-3 p-3 bg-gray-100 hover:bg-gray-200 rounded-lg block"
                    >
                        Blog
                    </Link>
                </div>
                <div className="h-[1px] bg-gray-300 my-4"></div>
                <div className="flex-1 justify-end mt-6 px-3">
                    <button className="w-full group flex gap-2 items-center px-4 bg-gray-100 py-4 rounded-lg hover:bg-gray-200 text-lg leading-none font-semibold">
                        Contáctanos
                        <GoArrowRight className="group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
