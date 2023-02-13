import {Link} from 'react-router-dom';

function Footer (){
   
    return (
       <div>

   
	{/* <!-- CREATE AN ACCOUNT--> */}
		<div className="bg-primary">
			<div className="text-center text-light pt-5 pb-3 fw-bold container">
				<h2>Create a free account today!</h2>
			</div>
			<p className="text-center text-light fw-bold pb-3 container">Keep track of your Sales and Inventory</p>
			<div style={{ display:'flex', justifyContent: 'center', }}>
				<button type="button" className="btn learnmore fw-bold text-light " id="CTA_Register">
					<Link to="/portal/register" style={{  color:'white',backgroundColor: '#FF914D', borderRadius:'10%', padding: '10px 20px',textAlign: 'center', textDecoration: 'none', display:' inline-block', fontSize: '16px', margin:' 4px 2px', cursor: 'pointer' }}>REGISTER NOW</Link> 
				</button>
			</div>
			<p className="text-center text-light fw-bold mt-3 pb-5 container">Get in touch if you have questions, we are happy to help! </p>
		</div>
	</div>
    );
}
export default Footer;