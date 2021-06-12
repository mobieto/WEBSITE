var secNavBarActive = false;

function mobileCheck() {
	if (navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)) 
	
	return true;
};

function updateNavbarOnResize() {
	/* Hide navbar buttons and show a menu button when screen width is too small */
	var navbar = document.getElementById("navbar");
	var navbarMenuButton = document.getElementById("navmenubutton");
	var navChildren = navbar.children;
	var screenWidth = window.innerWidth;
	var secondaryNavbar = document.getElementById("secondarynavbar");
	
	if (screenWidth <= 650 || mobileCheck()) {
		for (var i = 0; i < navChildren.length; i++) {
			var item = navChildren[i];

			if (item.tagName === "A") {
				item.style.display = "none";
			}
		}

		navbarMenuButton.style.display = "block";
	} else {
		for (var i = 0; i < navChildren.length; i++) {
			var item = navChildren[i];

			if (item.tagName === "A") {
				item.style.display = "block";
			}
		}

		if (secNavBarActive) {
			secondaryNavbar.style.transform = "translate(-110%)";
			secNavBarActive = false;
		}
		
		navbarMenuButton.style.display = "none";
	}	
}

window.onload = () => {
	updateNavbarOnResize();

	var navMenuButton = document.getElementById("navmenubutton");
	var secondaryNavbar = document.getElementById("secondarynavbar");
	var currentImage = 1;

	navMenuButton.onclick = () => {
		if (secNavBarActive) {
			secondaryNavbar.style.transform = "translate(-110%)";
			secNavBarActive = false;
		} else {
			secondaryNavbar.style.transform = "translate(-5%)";
			secNavBarActive = true;
		}
	}	
}

window.onresize = () => {
	updateNavbarOnResize();
}