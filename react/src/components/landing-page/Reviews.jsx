import Stars from '../../assets/star.png';


function Reviews (){
   
    return (

      <div className="bg-light">
        <div className="text-center text-primary p-5" id="Reviews"><h2  style={{fontWeight:'bold'}}>REVIEWS</h2></div>
          <div className="container text-start p-5">
            <div className="row pb-5 ">
              <div className="col border border-dark mb-2 p-3 mx-4 ">
                  <h5 className="pb-1" style={{color:'black'}}>Jona May Ignacio</h5>
                    <p  style={{color:'black'}}>Saritory helped me manage my inventory! I used to spend 3 hours a day to manually check the inventory. But now, it only takes few minutes to keep me on track. This is a life changer, I now have more time to spend with my twins!</p><br/>
                    <img alt="profile-user" width="25px"src={Stars}/>
                    <img alt="profile-user" width="25px"src={Stars}/>
                    <img alt="profile-user" width="25px"src={Stars}/>
                    <img alt="profile-user" width="25px"src={Stars}/>


              </div>
              <div className="col border border-dark mb-2 p-3 mx-4 ">
                <h5 className="pb-1" style={{color:'black'}}>Carla Cruz</h5>
                 <p  className="pb-4" style={{color:'black'}}>I used to spend a lot of time on managing our expenses using Excel on my PC. But now, I can manage our Income using my mobile device! It’s easy to use and I don’t have to worry about incorrect formulas.</p><br/>
                 <img alt="profile-user" width="25px"src={Stars}/>
                    <img alt="profile-user" width="25px"src={Stars}/>
                    <img alt="profile-user" width="25px"src={Stars}/>
                    <img alt="profile-user" width="25px"src={Stars}/>

            </div>

          </div>
      </div>
		
  
   </div>
          
  
    );
}
export default Reviews;