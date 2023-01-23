import Computer from '../../assets/saritorydashboard1.png';


function About (){
   
    return (
       <div>

      
        {/* ABOUT */}
        <div className="bg-light" id="about">
		<div className="text-center text-primary pt-5 fw-bold" ><h2 style={{fontWeight:'bold'}}>ABOUT SARITORY</h2></div>
		<div className="container text-start">
			<div className="row">
				<div className="col-md-6 pt-5 pb-3">
					<img style={{maxWidth:'100%', maxHeight:'100%'}} src={Computer} alt="computer" />
				</div>
				<div className="col-md-5  pt-5 mt-5 pb-5">
					<p style={{color:'black'}}> 
						Saritoy's Inventory Management System is one of the best inventory system in the Philippines as it is designed to catch an array of details of your inventory, sales, item expiration and most sellable item so that you can make the right
						inventory replenishment decisions quickly. While the system provides an inventory alert, you can prevent any sort of inventory inefficiencies in the shortest possible time.
					</p>
				</div>
			</div>
		</div>
	</div>
		
  
   </div>
          
  
    );
}
export default About;