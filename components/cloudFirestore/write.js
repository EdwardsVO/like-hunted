import firebase from 'firebase/app';
import 'firebase/firestore';
import { useUser } from '../../firebase/useUser';
import { useRouter } from 'next/router'

function WriteToCloudFirestore({children})  {
    const { user } = useUser()
    const router = useRouter()
    const sendData = () => {
        try {
            firebase
                .firestore()
                .collection("posts")
                .add({
                    children
                }).then(()=>{
                    router.push('/voter')
                })
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    return (
        <button onClick={sendData} className="border-transparent px-1">
            <a className="shadow-md text-4x1 px-60  py-5 leading-none border rounded text-black font-bold border-black hover:border-transparent  hover:text-teal-500 hover:bg-yellow-400 duration-75 mt-20" >Postear</a>
            </button>
    )
}

export default WriteToCloudFirestore