import Inventory from '../../assets/inventory.png';
import Price from '../../assets/price.png';
import Warning from '../../assets/warning.png';
import People from '../../assets/people.png';



function Features (){
   
    return (
       <div id='features'>
		
    {/* <!-- Features--> */}
	<div className="pb-5" style={{backgroundColor:'#0082FC'}}>
		<div className="text-center text-light pt-5 pb-3" id="Features"><h2  style={{fontWeight:'bold'}}>FEATURES</h2></div>
		<div className="container d-flex justify-content-center">
			<div className="row p-1">
				<div className="inventory col pb-3">
					<div className="card card__container">
						<img className="mx-auto card-icons d-flex justify-content-center pt-5 " src={Inventory} alt="inventory" />
						<div className="card-body">
							<h5 className="card-title pt-1 text-center"  style={{color:'black'}}>Inventory Management</h5>
							<p className="card-text pt-1"  style={{color:'black'}}>
								Manage your inventory easily and affordably in this user friendly WebApp. The main inventory functions are viewing, adding, editing and deleting informations of the products.
							</p>
						</div>
					</div>
				</div>
				<div className="income col pb-3">
					<div className="card card__container">
						<img className="mx-auto card-icons d-flex justify-content-center pt-5 " src={Price} alt="price" />
						<div className="card-body">
							<h5 className="card-title pt-1 text-center"  style={{color:'black'}}>Income Tracker</h5>
							<p className="card-text pt-1"  style={{color:'black'}}>
								Track your cash flow easier using our Income Tracker feature. Advantages of this feature is it can help you stick to your budget. Reveal your speding issues and help you meet your financial objectives.

							</p>
						</div>
					</div>
				</div>
				<div className="expiring col pb-3">
					<div className="card card__container">
					<img className="mx-auto card-icons d-flex justify-content-center pt-5 " src={Warning} alt="Waring" />


						<div className="card-body">
							<h5 className="card-title pt-1 text-center"  style={{color:'black'}}>Expiring Items</h5>
							<p className="card-text pt-1" style={{color:'black'}} >
								Don’t miss the expiration dates of your products. View the items that needs attention and track the number of items that will expire on your Dashboard with a particular days tracker.

							</p>
						</div>
					</div>
				</div>
				<div className="Tindera col pb-3">
					<div className="card card__container" >
					<img className="mx-auto card-icons d-flex justify-content-center pt-5 " src={People} alt="People" />
						<div className="card-body">
							<h5 className="card-title pt-1 text-center"  style={{color:'black'}}>Tindera Account</h5>
							<p className="card-text pt-1" style={{color:'black'}} >
								Create a sub account for your Store Attendant, you can limit the access to your Saritory Account and monitor transaction. The Store attend can insert sales.

							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	
   </div>
          
  
    );
}
export default Features;