import {Link} from 'react-router-dom';
import Two from '../../assets/logotext.png';


const LandingPageNavbar = () => {
  

    return (
        <nav className="navbar navbar-expand-sm" style={{backgroundColor:'#0062BE' }}>
        <div className="container mt-2">
        <img 
            alt="profile-user" 
            width="230px"
            src={Two}
            style = {{ cursor: 'pointer' }}
            />
           
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
        <div className="collapse navbar-collapse navbar-collapse text-light text-center" id="mynavbar">
            <ul className="navbar-nav me-auto ">
                <li className="nav-item">
                <a className="nav-link  mt-2" href='#' style={{color:'white', fontWeight:'bold'}} >Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link  mt-2" href='#about' style={{color:'white', fontWeight:'bold'}} >About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link  mt-2" href='#features' style={{color:'white', fontWeight:'bold'}} >Features</a>
                </li>
            </ul>

            <ul className="navbar-nav" sx={{justifyContent:'space-between'}}>
                <li className="nav-item">
                <Link className="nav-link" to = '/login' style={{color:'white', fontWeight:'bold'}}>Login</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to = '/register' style={{color:'white', fontWeight:'bold', border:' 2px solid #FF914D', borderRadius:'10%'}}>Register</Link>
                </li>
            </ul>
      
        </div>
    
  </div>
</nav>
    
);
}

export default LandingPageNavbar;

