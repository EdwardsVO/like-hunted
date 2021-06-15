import Navbar from './navbar.js'
function layaout({ children }) {
    return (
        <div>
            <Navbar></Navbar>
            <main>{ children }</main>
        </div>

    )
}

export default layaout
