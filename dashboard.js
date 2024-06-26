<main>
	<%- include('../partials/studentSidebar') %>
	
	<div id="main-wrapper">
			
		<div class="bg-white mb-5 p-3">
			<h5 class="m-0 fw-bold color-theme">Dashboard</h5>
		</div>
		
		<div class="d-flex gap-3 flex-wrap m-4 text-white">
			
			<div class="bg-primary rounded p-3" style="width: 250px;">
				<div class="fs-1"><%= numStudents %></div>
				<div class="fs-5">students</div>
			</div>
			
			
			<div class="bg-success rounded p-3" style="width: 250px;">
				<div class="fs-1"><%= numDistinctBooks %></div>
				<div class="fs-5">distinct books in library</div>
			</div>
			
			<div class="bg-primary rounded p-3" style="width: 250px;">
				<div class="fs-1"><%= numTotalBooks %></div>
				<div class="fs-5">total count of books</div>
			</div>
			
			<div class="bg-warning rounded p-3" style="width: 250px;">
				<div class="fs-1"><%= numBooksNotReturned %></div>
				<div class="fs-5">books not returned</div>
			</div>
			
			<div class="bg-danger rounded p-3" style="width: 250px;">
				<div class="fs-1"><%= numBooksOverdue %></div>
				<div class="fs-5">books overdue</div>
			</div>
			
		</div>
	</div>
	
</main>
