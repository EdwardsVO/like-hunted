import firebase from 'firebase/app';
import 'firebase/firestore';
import { useUser } from '../../firebase/useUser';

function useReadPost() {
    const { user } = useUser()


    const fetchPost = () => {
        return firebase
            .firestore()
            .collection("posts")
            .get()
            .then((res) => {
                return res.docs.map((doc) => {
                    const data = doc.data()
                    const id = doc.id
                    console.log(data)
                    return {
                        id,
                        ...data
                    }
                })
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            })
    }
    return {fetchPost}
}
export default useReadPost


