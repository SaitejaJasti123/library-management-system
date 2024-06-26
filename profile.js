<main>
	<%- include('../partials/studentSidebar') %>
	
	<div id="main-wrapper">
		<form action="/student/profile?_method=PUT" method="POST" class="w-75 border m-auto my-5 bg-white rounded-2">
			<h5 class="text-center bg-primary text-white form-title">Profile</h5>
			
			<div class="form-body p-4">
				<div class="mb-4">
					<label for="first-name" class="form-label">First Name</label>
					<input type="text" name="student[firstName]" class="form-control" id="first-name" placeholder="Enter first name.." value="<%= currentUser.firstName %>" required>
				</div>
				
				<div class="mb-4">
					<label for="last-name" class="form-label">Last Name</label>
					<input type="text" name="student[lastName]" class="form-control" id="last-name" placeholder="Enter last name.." value="<%= currentUser.lastName %>" required>
				</div>
				
				<div class="mb-4">
					<label for="email" class="form-label">Email</label>
					<input type="email" id="email" class="form-control" value="<%= currentUser.email %>" disabled>
				</div>
				
				<div class="mb-4">
					<span class="d-inline-block me-2">Gender:</span>
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="radio" name="student[gender]" id="male" value="male" <% if(currentUser.gender=='male'){%> checked <%}%> >
						<label class="form-check-label" for="male">Male</label>
					</div>
					<div class="form-check form-check-inline">
						<input class="form-check-input" type="radio" name="student[gender]" id="female" value="female" <% if(currentUser.gender=='female'){%> checked <%}%> >
						<label class="form-check-label" for="female">Female</label>
					</div>
				</div>
				
				<div class="mb-4">
					<label for="address" class="form-label">Address</label>
					<input type="text" name="student[address]" class="form-control" id="address" placeholder="Enter address.." value="<%= currentUser.address %>">
				</div>
				
				<div class="mb-4">
					<label for="phone" class="form-label">Phone</label>
					<input type="number" name="student[phone]" class="form-control" id="phone" placeholder="Enter phone.." value="<%= currentUser.phone %>">
				</div>
				
				<button type="submit" class="btn w-75 d-block m-auto mt-4">Update</button>
			</div>
		</form>
	</div>
	
	
</main>
