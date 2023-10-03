const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menuWrapper = document.querySelector(".menu-wrapper");
const hasCollapsible = document.querySelectorAll(".has-collapsible");

// Sidenav Toggle
openMenu.addEventListener("click", function () {
	menuWrapper.classList.add("offcanvas");
});

closeMenu.addEventListener("click", function () {
	menuWrapper.classList.remove("offcanvas");
});

// Collapsible Menu
hasCollapsible.forEach(function (collapsible) {
	collapsible.addEventListener("click", function () {
		collapsible.classList.toggle("active");

		// Close Other Collapsible
		hasCollapsible.forEach(function (otherCollapsible) {
			if (otherCollapsible !== collapsible) {
				otherCollapsible.classList.remove("active");
			}
		});
	});
});

// scrollreveal
const sr = ScrollReveal({
	origin: "left",
	distance: "50px",
	duration: "2000",
	reset: true
})

sr.reveal('.slide-left', {})

$(document).on('click', '.toggle', function(event) {
	event.preventDefault();
	
	var target = $(this).data('target');
	$('#' + target).toggleClass('hide');
  });
