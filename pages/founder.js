import PostForm from '../components/postForm'
import Navbar from '../components/navbar'
function founder() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col h-screen my-auto items-center bgimg bg-cover align-middle justify-center bg-black" >
               
                <div className="mt-5 pb-14 block appearance-none  bg-white border border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight">
                    <p className="mt-5 mb-10 text-4xl text-black font-bold ">Muestra Tu Emprendimiento !</p>
                    <PostForm></PostForm>
                </div>
            </div>
        </div>
    )
}

export default founder

