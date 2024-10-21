import reactLogo from '../assets/react.svg'
import { Link } from 'react-router-dom'
import viteLogo from '/vite.svg'

function Logo() {

    return (
        <div>
            <Link to='/vite'><img src={viteLogo} className="logo" alt="Vite logo"/></Link>

            <Link to='/react'><img src={reactLogo} className="logo react" alt="React logo"/></Link>
        </div>
    )
}

export default Logo
