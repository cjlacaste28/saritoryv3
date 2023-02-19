import React from 'react'

export default function ItemsManagement() {
  return (
	<div>
    <p className="ms-3 breadcrumbs">Manage Items | Items Management</p>
    <div className="container">
				{/* <!-- ADD BUTTON --> */}
				<div className="addProduct__container mb-3 d-flex justify-content-end">
					<button type="button" className="btn btn-primary" data-bs-toggle="modal" 
					data-bs-target="#addProductModal" id="addProductBtn"><i className="fa-solid fa-plus me-2"></i>ADD NEW PRODUCT</button>

					<div className="modal fade" id="addProductModal" data-bs-backdrop="static" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h1 className="modal-title fs-5" id="addProductModalLabel">ADD PRODUCT</h1>
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
									<form id="productForm" className="">
										<div className="mt-2">
											<label for="productNameInput" className="form-label">Product</label>
											<input type="text" className="form-control" id="productNameInput" aria-describedby="productNameInputFeedback" required/>
											<div id="productNameInputFeedback" className="invalid-feedback">
											  Product Name is required
											</div>
										</div>

										<div className="mt-2">
											<label for="productSelectCategory" className="col-form-label">Category:</label>
											<select className="form-select" required aria-label="select example" id="productSelectCategory">
											  <option disabled selected value="">Open to choose category</option>
											</select>
											<div className="invalid-feedback" id="prodCategory-error1">
												Please Select Category
											</div>
											<div className="invalid-feedback" id="prodCategory-error2">
												Please add category <a href="category-management.html">here</a>
											</div>
										</div>

										<div className="mt-2">
											<label for="productPriceInput" className="form-label">Price:</label>
											<input type="number" className="form-control" id="productPriceInput" aria-describedby="productPriceInputFeedback" step='0.01'  placeholder='0.00' min="0.01" required/>
											<div id="productPriceInputFeedback" className="invalid-feedback">
											  Product Price must not be empty or 0
											</div>
										</div>

										<div className="mt-2">
											<label for="productQuantityInput" className="form-label">Quantity:</label>
											<input type="number" className="form-control" id="productQuantityInput" aria-describedby="productQuantityInputFeedback" min="1" required/>
											<div id="productQuantityInputFeedback" className="invalid-feedback">
											  Product Quantity must not be empty or 0
											</div>
										</div>

										<div className="mt-2">
											<label for="productExpirationInput" className="form-label">Expiration (Optional):</label>
											<input type="date" className="form-control" id="productExpirationInput" aria-describedby="productExpirationInputFeedback"/>
										</div>
									
										<div className="mt-2">
											<label for="productImageInput" className="col-form-label">Image (Optional):</label>
											<input type="file" className="form-control" onchange="getProductImage();" aria-label="file example" accept="image/*" id="productImageInput"/>
										</div>
									</form>
									<div id="showProductImage"></div>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="productCancelButton">CANCEL</button>
									<button type="button" className="btn btn-primary" id="productSaveButton">SAVE</button>
									<button type="button" className="btn btn-primary" id="productUpdateButton">UPDATE</button>
								</div>
							</div>
						</div>
					</div>
				</div>

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
									<th scope="col" className="text-center">Actions</th>
								</tr>
								
							</thead>
							<tbody id="product__tbody">
								{/* <!-- DISPLAY PRODUCT LIST HERE --> */}
								<tr id="empty-product__display">
									<td colspan="8" className="py-5">
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
