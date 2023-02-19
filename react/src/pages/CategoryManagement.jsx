import React from 'react'

export default function CategoryManagement() {
  return (
	<div>
    {/* CategoryManagement */}
    <p className="ms-3 breadcrumbs"> Manage Items | Category Management</p>
    <div className="container">
				{/* <!-- ADD BUTTON --> */}
				<div className="addCategory__container mb-3 d-flex justify-content-end">
					<button type="button" className="btn btn-primary" data-bs-toggle="modal" 
					data-bs-target="#addCategoryModal" id="addCategoryBtn"><i className="fa-solid fa-plus me-2"></i>ADD CATEGORY</button>

					<div className="modal fade" id="addCategoryModal" tabindex="-1" aria-labelledby="addCategoryModalLabel" aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h1 className="modal-title fs-5" id="addCategoryModalLabel">ADD CATEGORY</h1>
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
									<form id="categoryForm">
									<div className="mb-3">
										<label for="categoryNameInput" className="col-form-label">Category Name:</label>
										<input type="text" className="form-control" id="categoryNameInput"/>
										<div className="invalid-feedback" id="category-error">
											Category must not be empty.
										</div>
									</div>
									</form>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="categoryCancelButton">CANCEL</button>
									<button type="button" className="btn btn-primary" id="categorySaveButton">SAVE</button>
									<button type="button" className="btn btn-primary" id="categoryUpdateButton">UPDATE</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- TABLE --> */}
				<div className="row">
					<div className="col-12">
						<table className="table table-bordered">
							<thead className="bg-primary text-white">
								<tr>
								<th scope="col">Category Name</th>
								<th scope="col" className="text-center">Actions</th>
								</tr>
							</thead>
							<tbody id="category__tbody">
								<tr id="empty-category__display">
									<td colspan="2" className="py-5">
										<div className="empty-list">
											<i className="fas fa-inbox text-black-50 d-block text-center empty-list__icon"></i>
											<p className="empty-list-desc d-block text-center text-black-50 empty-list__description">Category List is empty</p>
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
