import React from 'react'
import LandingPageNavbar from '../components/landing-page/LandingPageNavbar'
import Sarisaristore from '../components/landing-page/Sarisaristore'
import About from '../components/landing-page/About'
import Features from '../components/landing-page/Features'
import Reviews from '../components/landing-page/Reviews'
import Footer from '../components/landing-page/Footer'
import Copyright from '../components/landing-page/Copyright'

export default function LandingPage() {
  return (
	<div className='app'>
                
            <main className="content">  
            
                <LandingPageNavbar/> 
                <Sarisaristore/>
                <About/>
                <Features/>
                <Reviews/>
                <Footer/>
                <Copyright/>
                
               
            
                     
             {/* <Link to="/loginpage" class="btn btn-success">login here</Link> <br/> <br/>
             <Link to="/registerpage" class="btn btn-success">Register here</Link>       */}
                
            </main> 
        </div>
  )
}
