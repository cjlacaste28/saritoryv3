import Two from '../../assets/logotext.png';


function Copyright (){
   
    return (


		
		<div className="bg-light"   >
			<div className="container text-start">
				<div className="row footer__container ">
					<div className="col pb-3"><img src={Two}
            style = {{ cursor: 'pointer' }} width="200px" id="footer-logo"/></div>
                
                    <div className="col text-primary fw-bold pt-3 text-end" id="copyright">
						<p>© Copyright 2022 SARITORY | All Rights Reserved</p>
					</div>
				</div>
			</div>
        </div>


          
  
    );
}
export default Copyright;