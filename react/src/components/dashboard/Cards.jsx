import React from 'react'

export default function Card () {

    return (
        <div>
            <div className="container" id="cardFeatures">
			<div className="row">
				{/* <!--COL1 card 1--> */}
				<div className="card__item col-xl-4 col-md-6 col-sm-12 mt-3" id="card-item__categories">
					<div className="card h-100 d-flex p-3 flex-column">
						<h1 style="color:#36b9cc">
							Total Categories <span><i className="fa-solid fa-rectangle-list"></i>&nbsp;&nbsp;</span>
						</h1>
						<p className="cardNumber" id="displayTotalCategory">0</p>
						<a href="./category-management.html" className="btn mt-auto btn-primary fw-bold">View</a>
					</div>
				</div>
		
				{/* <!--COL2 card 2--> */}
				<div className="card__item col-xl-4 col-md-6 col-sm-12 mt-3" id="card-item__products">
					<div className="card h-100 d-flex p-3 flex-column">
						<h1 style="color:#1cc88a">
							Total Items<span><i className="fa-solid fa-box-archive"></i>&nbsp;&nbsp;</span>
						</h1>
						<p className="cardNumber" id="displayTotalProduct">0</p>
						<a href="./item-management.html" className="btn mt-auto btn-primary fw-bold">View</a>
					</div>
				</div>

				{/* COL4 card 4 */}
				<div className="card__item col-xl-4 col-md-6 col-sm-12 mt-3" id="card-item__expiration">
					<div className="card h-100 d-flex p-3 flex-column" >
						<h1 style="color:#fa5041">
							Expiring Items <span><i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;</span>
						</h1>
						<p className="cardNumber" id="displayTotalExpiration">0</p>
						<a href="./expiring-items.html" className="btn mt-auto btn-primary fw-bold" >View</a>
					</div>
				</div>
			</div>
		</div>
        </div>
    )


}