$(document).ready(function(e){
// binding a click handler to a "node" div class
	$(".sectionTitle").on("click", function(e){
		showHideContent(e);
	});
});

// note that the depending on where i click, whether its the sectionTitle or the showHideTab,
// that class will be 'target' (because both classes are children of the the bound class "sectionTitle").
// so need to go further up the DOM tree.
// try using delegateTarget so the event selects the actual target

// USING .target
// var showHideContent = function(e){
// 	if ($(e.target).closest('.sectionTitle').contents(".showHideTab").html() == "+") {
// 		console.log("im a +!");
// 		$(e.target).closest('.sectionTitle').contents(".showHideTab").html("&ndash;");
// 		$(e.target).closest('.section').contents(".content").slideDown(300);
// 	} else {
// 		console.log("im a -");
// 		$(e.target).closest('.sectionTitle').contents(".showHideTab").html("+");
// 		$(e.target).closest('.section').contents(".content").slideUp(300);
// 	};
// 	console.log(e.target);
// }

// USING .delegateTarget
var showHideContent = function(e){
	if ($(e.delegateTarget).contents(".showHideTab").html() == "+") {
		console.log("im a +!");
		$(e.delegateTarget).contents(".showHideTab").html("&ndash;");
		$(e.delegateTarget).closest('.section').contents(".content").slideDown(300);
	} else {
		console.log("im a -");
		$(e.delegateTarget).contents(".showHideTab").html("+");
		$(e.delegateTarget).closest('.section').contents(".content").slideUp(300);
	};
	console.log(e.target);
}


obj.dd.on('click', function(event){
    $(this).toggleClass('active');
    return false;
});
 
//...
 
$(function() {
 
    var dd = new DropDown( $('#dd') );
 
    $(document).click(function() {
        // all dropdowns
        $('.dropdownWrapper').removeClass('active');
    });
 
});



// 	next, set a variable function that searches through the DOM for the appropriate element
// to change the html and show the contents of content
// if the html is + 

// write the function of binding toggle function to onclick of 
// toggle the contents of content.

// then write a variable function that upon click of function(e),
// if expandbutton is +, change html to -, and show contents of content
// else change to + and hide contents


// on click of the side nav links:
// if contentClick.hasClick == false, show the content, else hide content

