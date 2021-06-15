import firebase from "firebase/app"
import 'firebase/database'
import { useState } from "react"

function postcards({ autor, description, likes, title }) {
    const [count, setCount] = useState('')
    
    return (

        <div className="max-w rounded shadow-lg bg-white text-black mt-10 ml-12 mr-12">

            <div className="px-6 py-4 flex ">
                <div className="font-bold text-xl mb-2 ">{title}</div>
                <p className="text-gray-700text-2x1 ml-16">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button className="inline-block bg-gray-200  text-3x1 font-semibold text-gray-700 mr-2 mb-2 hover:border-black px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    {likes} {count ? count: '---'}❤
                </button>

                <span className="inline-block bg-gray-200 rounded-full  text-3x1 font-semibold text-gray-700 mr-2 mb-2 px-4 py-2 pr-8">{autor}</span>
                <span>❤</span>
            </div>
        </div>

    )
}

export default postcards
