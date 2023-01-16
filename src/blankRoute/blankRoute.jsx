import './blankRoute.css'
import Video from './blankAssets/39bnzm.mp4'

const BlankRoute = () => {
    return ( 
        <div id="video-container-blank">
            <video src={Video} muted loop autoPlay type="video/mp4"></video>
            <div id="overhead-video">
                <h1 id="Welcome-blank" className='stroke zoomIn'>Welcome</h1>
            </div>
        </div>
        // ------------------------------
     );
}
 
export default BlankRoute;