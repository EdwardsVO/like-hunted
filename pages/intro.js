import Link from 'next/link';

export default function intro() {
    return (
        <div className="container bg-gradient-to-r from-pink-100 to-pink-500 ">
            <div className="p-48">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <p className="text-7xl font-bold text-black">Bienvenido a</p>
                    <p className="text-7xl font-extrabold tracking-widest text-white">Like Hunted
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg></p>

                </div>
                <div className="items-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font font-bold py-2 px-4">
                        <Link href="/">
                            <a >Launch</a>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}


