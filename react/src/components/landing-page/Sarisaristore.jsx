 import Sarisari from '../../assets/banner-saritory1.png';


function Sarisaristore (){
   
    return (
       <div>

        {/* Sarisari store */}
       	<div className="bg-image sairsari-store-image" style={{ backgroundImage: 'url(' +Sarisari+ ')', height:'calc(100vh - 80px)'}}>

		<div className="container d-flex align-items-center header-text__main" >
			<div id="header-text__container"  style={{ position:'relative', top:'30vh'}}>
				<h1 className="sarisari-store banner-text text-light fw-bold" style={{ fontSize:'65px'}}>
					SARI-SARI STORE <br />
					INVENTORY MADE EASY<br />
				</h1>
				<button type="button" className="btn learnmore fw-bold text-light" >
					<a href="#about"  style={{ color:'white',backgroundColor: '#FF914D', borderRadius:'10%', padding: '10px 20px',textAlign: 'center', textDecoration: 'none', display:' inline-block', fontSize: '16px', margin:' 4px 2px', cursor: 'pointer', }}>LEARN MORE</a> 
				</button>
			</div>
		</div>

</div>


   </div>
          
  
    );
}
export default Sarisaristore;