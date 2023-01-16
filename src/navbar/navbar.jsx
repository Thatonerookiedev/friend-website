import './navbar.css'
import Bear from './navbarAssets/bear.png'


const bear = Bear

const Navbar = () => {
    return ( 
        <div id="navbar-container">
            <div id="navbar">
                <img src={bear} alt="" id="bear"  className='slideInDown'/>
                <a href="/"><h2 id="titleNav" className='slideInDown'>Teddy Rose Jewlery</h2></a>
                {/* ------------------ */}
                <div className="logButtons slideInDown">
                    <a href="/Login"><button className="logbutbuttons">Login</button></a>
                </div>
                <div className="logButtons slideInDown">
                    <a href="/Signup"><button className="logbutbuttons">SignUp</button></a>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;