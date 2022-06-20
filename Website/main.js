let secNavBarActive = false;
const imgDescs = [
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis consequat lectus nec euismod. Nunc et facilisis magna. Nunc sit amet justo ut velit condimentum placerat in id mi. In congue gravida eros et sollicitudin. Sed quis interdum massa. Maecenas justo nibh, placerat a faucibus vitae, cursus a libero.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis consequat lectus nec euismod. Nunc et facilisis magna. Nunc sit amet justo ut velit condimentum placerat in id mi. In congue gravida eros et sollicitudin. Sed quis interdum massa. Maecenas justo nibh, placerat a faucibus vitae, cursus a libero.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis consequat lectus nec euismod. Nunc et facilisis magna. Nunc sit amet justo ut velit condimentum placerat in id mi. In congue gravida eros et sollicitudin. Sed quis interdum massa. Maecenas justo nibh, placerat a faucibus vitae, cursus a libero.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis consequat lectus nec euismod. Nunc et facilisis magna. Nunc sit amet justo ut velit condimentum placerat in id mi. In congue gravida eros et sollicitudin. Sed quis interdum massa. Maecenas justo nibh, placerat a faucibus vitae, cursus a libero.',
	'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis consequat lectus nec euismod. Nunc et facilisis magna. Nunc sit amet justo ut velit condimentum placerat in id mi. In congue gravida eros et sollicitudin. Sed quis interdum massa. Maecenas justo nibh, placerat a faucibus vitae, cursus a libero.'
]

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
	/* Hide navbar buttons and show a menu button when screen width is too small - i could probably have done this with CSS media queries */
	const navbar = document.getElementById("navbar");
	const navbarMenuButton = document.getElementById("navmenubutton");
	const secondaryNavbar = document.getElementById("secondarynavbar");
	const navChildren = navbar.children;
	const screenWidth = window.innerWidth;
	
	if (screenWidth <= 600 || mobileCheck()) {
		for (let i = 0; i < navChildren.length; i++) {
			let obj = navChildren[i];
			if (obj.tagName === "A") obj.style.display = "none";
		}

		navbarMenuButton.style.display = "block";
	} else {
		for (let i = 0; i < navChildren.length; i++) {
			let obj = navChildren[i];
			if (obj.tagName === "A") obj.style.display = "block";
		}

		if (secNavBarActive) {
			secondaryNavbar.style.transform = "translate(-110%)";
			secNavBarActive = false;
		}
		
		navbarMenuButton.style.display = "none";
	}	
}

window.onload = () => {
	const navMenuButton = document.getElementById("navmenubutton");
	const secondaryNavbar = document.getElementById("secondarynavbar");
	const imgLeftButton = document.getElementById("img-left-button");
	const imgRightButton = document.getElementById("img-right-button");
	const contactButton = document.getElementById("contact-btn");
	const imgTitle = document.getElementById("gallery-img-title");
	const imgDesc = document.getElementById("gallery-img-desc");
	const paintings = [];
	let currentImage = 1;
	
	updateNavbarOnResize();

	let updateGallery = () => {
		paintings[currentImage].style.display = "block";	
		imgTitle.innerHTML = paintings[currentImage].alt;
		imgDesc.innerHTML = imgDescs[currentImage - 1];
	}

	navMenuButton.onclick = () => {
		if (secNavBarActive) {
			secondaryNavbar.style.transform = "translate(-110%)";
			secNavBarActive = false;
		} else {
			secondaryNavbar.style.transform = "translate(-6%)";
			secNavBarActive = true;
		}
	}	
	
	imgLeftButton.onclick = () => {
		paintings[currentImage].style.display = "none";
		currentImage--;
		if (currentImage < 1) currentImage = 6;
		updateGallery();
	}

	imgRightButton.onclick = () => {
		paintings[currentImage].style.display = "none";
		currentImage++;
		if (currentImage > 6) currentImage = 1;
		updateGallery();
	}
	
	for (let i = 0; i <= 6; i++) {
		paintings.push(document.getElementById("painting"+i));	
	}
	
	updateGallery();
}

window.onresize = updateNavbarOnResize;
