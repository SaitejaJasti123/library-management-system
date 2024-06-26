<div class="bg-image-container p-5">
	<div class="form-container bg-white m-auto p-5">
		<form action="/auth/student-signup" method="POST">
			<h3 class="text-center mb-3">Student Signup</h3>
	
			<% if(typeof errors != 'undefined') { %>
				<% errors.forEach(function(error) { %>
					<div class="alert alert-danger alert-dismissible fade show" role="alert">
						<%= error.msg %>
						<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
					</div>
				<% }); %>
			<% } %>
	
			<div class="mb-3">
				<label for="first-name" class="form-label">First name</label>
				<input type="text" name="firstName" class="form-control" id="first-name" placeholder="Enter first name.." value="<%= typeof firstName != 'undefined' ? firstName : '' %>" required>
			</div>
			
			<div class="mb-3">
				<label for="last-name" class="form-label">Last name</label>
				<input type="text" name="lastName" class="form-control" id="last-name" placeholder="Enter last name.." value="<%= typeof lastName != 'undefined' ? lastName : '' %>" required>
			</div>
			
			<div class="mb-3">
				<label for="email" class="form-label">Email address</label>
				<input type="email" name="email" class="form-control" id="email" placeholder="Enter email.." value="<%= typeof email != 'undefined' ? email : '' %>" required>
				<div class="form-text">We'll never share your email with anyone else.</div>
			</div>
	
			<div class="mb-3">
				<label for="password1" class="form-label">Password</label>
				<input type="password" name="password1" class="form-control" id="password1" placeholder="Enter password.." value="<%= typeof password1 != 'undefined' ? password1 : '' %>" required>
			</div>
	
			<div class="mb-3">
				<label for="password2" class="form-label">Confirm Password</label>
				<input type="password" name="password2" class="form-control" id="password2" placeholder="Re-enter password.." value="<%= typeof password2 != 'undefined' ? password2 : '' %>" required>
			</div>
			<button type="submit" class="btn d-block m-auto mt-4">Submit</button>
			
			
			<div class="mt-3">
				<span>Already have an account?</span>
				<a href="/auth/student-login">Login here</a>
			</div>
			
			<div>
				<span>Are you an Admin?</span>
				<a href="/auth/admin-login">Please login here</a>
			</div>
			
		</form>
	</div>
</div>
