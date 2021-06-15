import FirebaseAuth from '../components/auth/firebaseAuth'

export default function login() {
    return (
        <div className="flex flex-col h-screen my-auto items-center bgimg bg-cover align-middle justify-center bg-black">
            <div className="max-w-sm rounded overflow-hidden shadow-lg px-30 py-40 ">
                <p className="text-6xl font-bold text-white">Like Hunted ❤</p>
                <p className="text-4xl font-bold text-red-900">Inicia Sesion</p>
                <FirebaseAuth></FirebaseAuth>
               
            </div>
        </div>
    )
}