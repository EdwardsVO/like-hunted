import Layout from "../components/layout.js"
import Postcards from "../components/postcards.js"
import Image from "next/image"

function menu() {
    return (
        <div>

            <Layout>
                <div className="p-32 py-32 pb-28  bg-gradient-to-r from-gray-600 to-black ">
                    <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-20">

                        <div className="transform scale-90 -rotate-6">
                            <div className="max-w rounded overflow-hidden shadow-lg bg-white text-black mt-10">

                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">La Pagoda</div>
                                    <p className="text-gray-700 text-base">
                                        El restaurant con la mejor comida asiatica de Caracas, se ubica en El Laguito dentro de Fuerte tiuna
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">339❤</span>

                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Liu khan</span>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
                            <div className="max-w rounded overflow-hidden shadow-lg bg-white text-black mt-10">

                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">ECreative</div>
                                    <p className="text-gray-700 text-base">
                                        Productora audiovisual venezolana hecha por estudiantes 
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">298❤</span>

                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Barbara Ochoa</span>
                             
                                </div>
                            </div>
                        </div>
                        <div className="transform scale-100 translate-y-25">
                            <div className="max-w rounded overflow-hidden shadow-lg bg-white text-black mt-10">

                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Super9</div>
                                    <p className="text-gray-700 text-base">
                                        Canchas de Futbol alquilables a muy bajo costo
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">145❤</span>

                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Paola 9</span>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="transform translate-x-11 translate-y-47">
                            <div className="max-w rounded overflow-hidden shadow-lg bg-white text-black mt-10">

                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">KhanAcademy</div>
                                    <p className="text-gray-700 text-base">
                                        Startup de tecnologia que reparte conocimientos de alto nivel y calidad a estudiantes de todo el mundo de manera gratuita
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">987❤</span>

                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Khan Antonio</span>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="transform translate-x-13 translate-y-27">
                            <div className="max-w rounded overflow-hidden shadow-lg bg-white text-black mt-10">

                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Facebook</div>
                                    <p className="text-gray-700 text-base">
                                        Red madre que controla todas las demas redes sociales
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">832❤</span>

                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Marc Zucaritas</span>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="transform translate-x-3 translate-y-15">
                            <div className="max-w rounded overflow-hidden shadow-lg bg-white text-black mt-10">

                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Anuel</div>
                                    <p className="text-gray-700 text-base">
                                        Estudio musical internacional
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">219❤</span>

                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Anuel AA</span>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="transform translate-x-17 translate-y-3">
                            <div className="max-w rounded overflow-hidden shadow-lg bg-white text-black mt-10">

                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">LEFlms</div>
                                    <p className="text-gray-700 text-base">
                                        Distribuidora y empaquetadora de alimentos 
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">489❤</span>

                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Leslie Ochoa</span>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="transform translate-x-25 translate-y-19">
                            <div className="max-w rounded overflow-hidden shadow-lg bg-white text-black mt-10">

                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Mostaza</div>
                                    <p className="text-gray-700 text-base">
                                        Restaurant de Hamburguesas y perro calientes 
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">333❤</span>

                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Antonio Semidey</span>
                                    
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </Layout>
            <hr></hr>
            <div className="flex flex-row mt-20 bg-yellow-400 p-28">
                <div className="mt-14 ml-36 bg-yellow-400 ">
                    <a href="/login" className="shadow-md text-xl px-28 py-5 leading-none border rounded text-black font-bold border-black hover:border-transparent hover:text-white hover:text-teal-500 hover:bg-black duration-75 mt-20">
                        Registrate Ahora</a>
                </div>
                <div className="w-max flex flex-col bg-yellow-400 ">
                    <p className="text-6xl font-semibold ml-40"> Encuentra emprendimientos todos los dias !</p>
                    <p className="text-7xl font-bold ml-40 animate-bounce">Empieza ahora</p>
                </div>
            </div>
        </div>
    )
}

export default menu
