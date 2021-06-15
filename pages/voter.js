import { fetchLatestPost } from '../components/cloudFirestore/read'
import Navbar from '../components/navbar'
import { useUser } from '../firebase/useUser.js'
import { useState, useEffect } from 'react'
import Postcards from '../components/postcards'

function voter() {
    const [timeline, setTimeline] = useState([])
    const user = useUser()

    useEffect(() => {
        user && fetchLatestPost().then(setTimeline)

    }, [user])

    return (
        <div>
            <Navbar></Navbar>
            <div>
                {timeline.map(({ children, id }) => (

                    <div key={id}>
                        <Postcards
                            autor={children.autor}
                            description={children.description}
                            likes={children.likes}
                            title={children.title}
                            >
                        </Postcards>
                    </div>

                ))}

            </div>

        </div>

    )
}


export default voter
