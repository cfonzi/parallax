$(document).ready(init);

function init() {
	/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */

    
	$.fn.scrollPath("getPath")
    
		.moveTo(400, 50, {name: "one"})
    
		.lineTo(1300, 50, {name: "two"})
    
        .rotate(2 * Math.PI / 2, {name: "two"})
    
		.lineTo(1200, 1000, {name: "three"})
    
		.lineTo(1800, 1900, {name: "four"})
    
        .rotate(3 * Math.PI / 1.5, {name: "four"})
    
		.lineTo(2400, 1000, {name: "five"})
    
		.lineTo(2400, 100, {name: "six"})
    
        .rotate(3 * Math.PI / 2, {name: "six"})
    
        .lineTo(1600, -900, {name: "seven"})

		.lineTo(400, -900, {name: "eight"})
    
        .rotate(3 * Math.PI / 1.5, {name: "eight"})
    
		.arc(1100, 50, 700, -Math.PI / 1.5, -Math.PI, true);

    
    
	$(".wrapper").scrollPath({drawPath: true, wrapAround: true});


	$("nav").find("a").each(function() {
        var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();
			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
		});
	});
    

	/* ===================================================================== */

	$(".settings .show-path").click(function(e) {
		e.preventDefault();
		$(".sp-canvas").toggle();
	}).toggle(function() {
		$(this).text("Hide Path");
	}, function() {
		$(this).text("Show Path");
	});



	$.getJSON("http://cdn.api.twitter.com/1/urls/count.json?callback=?&url=http%3A%2F%2Fjoelb.me%2Fscrollpath",
			function(data) {
				if(data && data.count !== undefined) {
					$(".follow .count").html("the " + ordinal(data.count + 1) + " kind person to");
				}
			});
	}


function highlight(element) {
	if(!element.hasClass("highlight")) {
		element.addClass("highlight");
		setTimeout(function() { element.removeClass("highlight"); }, 2000);
	}
}
function ordinal(num) {
	return num + (
		(num % 10 == 1 && num % 100 != 11) ? 'st' :
		(num % 10 == 2 && num % 100 != 12) ? 'nd' :
		(num % 10 == 3 && num % 100 != 13) ? 'rd' : 'th'
	);
}
