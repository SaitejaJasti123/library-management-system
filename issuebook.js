<main>
	<%- include('../partials/adminSidebar') %>
	
	<div id="main-wrapper">
		<div class="bg-white mb-5 p-3 d-sm-flex align-items-center justify-content-between">
			<h5 class="m-0 fw-bold color-theme">Issue Book</h5>
		</div>
		
		<form action="/admin/issue" method="POST" class="w-75 border m-auto my-1 p-4 bg-white rounded-2">
				<div class="mb-3">
					<label for="email" class="form-label">Student Email</label>
					<input type="email" name="email" class="form-control" id="email" placeholder="Enter student email.." required>
				</div>
				<div class="mb-3">
					<label for="ISBN" class="form-label">Book ISBN</label>
					<input type="number" name="ISBN" class="form-control" id="ISBN" placeholder="Enter book ISBN.." required>
				</div>
				<button type="submit" class="btn w-75 d-block m-auto mt-4">Issue Book</button>
		</form>
	</div>
</main>
