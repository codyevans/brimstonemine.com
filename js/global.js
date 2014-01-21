
// init smooth scroll on links
$('.subnav-contain a').smoothScroll();

// quick contact on home page
$('#quick-contact').on('click', function(e) {
	alert("i have been clicked")
	e.preventDefault();
});
