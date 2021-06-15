import { useUser } from "../firebase/useUser"

export default function navbar() {
    const { user, logout } = useUser()

    if (user) {
        return (
            <nav className="bg-black flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">

                    <span className="font-semibold text-5xl tracking-tight text-white">Like Hunted</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">

                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <a href="/voter" className="text-3xl text-white block ml-8 mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-yellow-400 mr-20">
                            Emprendimientos
                        </a>
                        <a href="/founder" className="text-3xl text-white block ml-8 mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-yellow-400 mr-20">
                            Postear
                        </a>

                    </div>
                    <div className="flex">
                        <div className="shadow-lg inline-block text-3x1 px-10 py-5 leading-none border rounded text-white font-bold border-yellow-400 mt-4 lg:mt-0 bg-black mr-5">{user.name}</div>
                        <div>
                            <button onClick={logout} className="shadow-lg inline-block text-3x1 px-10 py-4 leading-none border rounded text-black font-bold border-white hover:border-transparent hover:text-yellow-400 hover:bg-white mt-4 lg:mt-0 bg-yellow-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
                <hr></hr>
            </nav>
        )
    }
    else return (
        <nav className="bg-black flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">

                <span className="font-semibold text-5xl tracking-tight text-white">Like Hunted</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">

                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="/login" className="text-3xl text-white block ml-8 mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-yellow-400 mr-20">
                        Emprendimientos
                    </a>

                </div>
                <div>
                    <a href="/login" className="shadow-lg inline-block text-3x1 px-10 py-5 leading-none border rounded text-black font-bold border-white hover:border-transparent hover:text-yellow-400 hover:bg-white mt-4 lg:mt-0 bg-yellow-400">LOGIN</a>
                </div>
            </div>
            <hr></hr>
        </nav>

    )
}

