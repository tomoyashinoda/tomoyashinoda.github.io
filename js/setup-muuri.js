// Muuri
$(window).on("load", function () {
	var grid = new Muuri(".grid", {
		// Default show animation
		showDuration: 250,
		showEasing: "ease",
		// Default hide animation
		hideDuration: 250,
		hideEasing: "ease",
		// Item's visible/hidden state styles
		visibleStyles: {
			opacity: "1",
			transform: "scale(1)",
		},
		hiddenStyles: {
			opacity: "0",
			transform: "scale(0.99)",
		},
		layoutOnResize: true,
		layout: {
			fillGaps: true,
		},
		layoutDuration: 250,
		layoutEasing: "ease",
	});

	// Initial filter
	var className = $(".filter-btn .active").attr("class");
	className = className.split(" ");
	if (className[0] != "all") {
		grid.filter("." + className[0]);
	}

	// Filter button
	$(".filter-btn li").on("click", function () {
		$(".filter-btn .active").removeClass("active");
		$(".photoswipe-slide").removeClass("photoswipe-slide--active");
		var className = $(this).attr("class");
		className = className.split(" ");
		$("." + className[0]).addClass("active");
		if (className[0] == "all") {
			grid.show(grid.getItems());
			$(".photoswipe-slide").addClass("photoswipe-slide--active");
		} else {
			grid.filter("." + className[0]);
			$("." + className[0] + " .photoswipe-slide").addClass("photoswipe-slide--active");
		}
	});
});

// 読み込まれたら0.1秒後に表示
const loading = document.querySelector(".grid");
window.addEventListener("load", () => {
	setTimeout(() => {
		loading.classList.remove("grid--loading");
	}, 100);
});