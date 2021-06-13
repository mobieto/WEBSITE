let secNavBarActive = false;

let mobileCheck = () => {
	if (navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)) 
	
	return true;
}

let updateNavbarOnResize = () => {
	/* Hide navbar buttons and show a menu button when screen width is too small */
	const navbar = document.getElementById("navbar");
	const navbarMenuButton = document.getElementById("navmenubutton");
	const navChildren = navbar.children;
	const screenWidth = window.innerWidth;
	const secondaryNavbar = document.getElementById("secondarynavbar");
	
	if (screenWidth <= 600 || mobileCheck()) {
		for (let i = 0; i < navChildren.length; i++) {
			let item = navChildren[i];

			if (item.tagName === "A") {
				item.style.display = "none";
			}
		}

		navbarMenuButton.style.display = "block";
	} else {
		for (let i = 0; i < navChildren.length; i++) {
			let item = navChildren[i];

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

	const navMenuButton = document.getElementById("navmenubutton");
	const secondaryNavbar = document.getElementById("secondarynavbar");
	let currentImage = 1;

	navMenuButton.onclick = () => {
		if (secNavBarActive) {
			secondaryNavbar.style.transform = "translate(-110%)";
			secNavBarActive = false;
		} else {
			secondaryNavbar.style.transform = "translate(-6%)";
			secNavBarActive = true;
		}
	}	
}

window.onresize = () => {
	updateNavbarOnResize();
}
