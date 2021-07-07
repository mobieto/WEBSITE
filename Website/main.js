let secNavBarActive = false;
const imgDescs = [
	'This is sample text sample text basically sample text oh yeah! sample text\nSample text deez sample ok ok ok5 yq5y q45y q54y q45y q54y q54y q54y q45y q54y q5y q5y',
	'Another sample text ok ok ok ok ok ok nthoingrgrn frnf jfrjguj rgui rt gi qgwerg 5y254y 54tyq 54y q54y q5 yq45uy q45y q45y q45y q45y q54g q 54 q45yq45g q45y rthwr5hq5y',
	'1 2 3 4 5 6 7 8 9 0 sample text test here 1 2 3 test test 1 2 3a erga ergary atjqaa dfgdvvb sdfv aerg aerh  atjhafgaer gafg aertghaerga ryh aetuyaerrg qrt256 2445624 5',
	'njergjaergarjgaejrgua rhagu rhhgil aerurhhg aurrh h garhga jfng iauhv rjanglfhgal rugha fvha lruvha rjghral fhg laruhv arhg aufhv arjhgaui rrh avuur vlanrugha r vjnrl uiuig g ahruiggah rlv uaarh  gauihr viaurh h gauarhvauir hhgaurvh alriugha rvuiharil ilguahri ivuuahr gliauhri i vaurgi aurjnvi argguaj rivjar kgajkrhnvaeuirrhv aerugha fvnaui rgh afnba riugha fuiiga ',
	'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
	'jgngbfhfhvfjvhnauutgafuvnuarngfna ufv auvha fg vhafg ahfgvh atfgfaj kkvbafgvbaf frthg auirhv aurth hgjbh agh adjkdjfh v auyhhv aufvhartfvbhha fubh afhbjkrhgqeklfuhhvbaujh brgaer gaerg adfga erh at afgarg adfgareg adfgatyah fagr aerg argadf gar afg rafgar arg fagr afga rgarga raeryha erha ergarg adfg'
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

window.onresize = () => {
	updateNavbarOnResize();
}
