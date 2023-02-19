import React from 'react'

export default function Items() {
  return (
    <div>
      {/* Items */}

      <div className="container mt-5" id="dashboardProductDisplay">
			<h3 className="text-primary fw-bold">LIST OF PRODUCTS</h3>
			{/* <!-- TABLE --> */}
			<div className="productTable__container overflow-auto">
				<div className="col-12">
					<table className="table table-bordered" style="table-layout: auto;">
						<thead className="bg-primary text-white">
							<tr>
								<th scope="col" className="text-center">Image</th>
								<th scope="col" className="text-center">Product</th>
								<th scope="col" className="text-center">Category</th>
								<th scope="col" className="text-center">Price</th>
								<th scope="col" className="text-center">Quantity</th>
								<th scope="col" className="text-center">Total Price</th>
								<th scope="col" className="text-center">Expiration</th>
							</tr>
							
						</thead>
						<tbody id="product__tbody">
							{/* <!-- DISPLAY PRODUCT LIST HERE --> */}
							<tr id="empty-product__display">
								<td colspan="7" className="py-5">
									<div className="empty-list">
										<i className="fas fa-inbox text-black-50 d-block text-center empty-list__icon"></i>
										<p className="empty-list-desc d-block text-center text-black-50 empty-list__description">Product List is empty</p>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
      
    </div>
  )
}
