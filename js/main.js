/* --- СОЗДАНИЕ И ВЫВОД СПИСКА ПРИ НАВЕДЕНИИ КУРСОРА НА КНОПКУ --- */
const buttonActivitiesAll = document.querySelector("#activities-all");

buttonActivitiesAll.addEventListener("mouseenter", function() {
	let newList = document.querySelector(".activities-box").cloneNode(true);
	
	let elems = newList.children;
	
	for (let elem of elems) {
		if (elem.classList.contains("title--section")) {
			elem.remove();
		}
	}
	
	let buttonElementRect = this.getBoundingClientRect();
	newList.setAttribute("id", "id001");
	newList.classList.add("activities-box--active")
	newList.style.position = "fixed";
	newList.style.zIndex = "100";
	newList.style.left = 0;
	newList.style.right = 0;
	newList.style.top = `${buttonElementRect.bottom}px`;
	
	this.insertAdjacentElement("afterEnd", newList);
	
	
	/* --- СКРЫТИЕ ВСПЛЫВАЮЩЕГО СПИСКА ПРИ КЛИКЕ ПО ССЫЛКЕ --- */
	let newListLinks = newList.querySelectorAll(".activities-type__link");
	
	for (let newListLink of newListLinks) {
		newListLink.addEventListener("click", function() {
			document.querySelector(".activities-box--active").remove();
			console.log(true)
		})
	}
	
	/* --- СКРЫТИЕ ВСПЛЫВАЮЩЕГО СПИСКА ПРИ ОТВЕДЕНИИ КУРСОРА --- */
	newList.addEventListener("mouseleave", function() {
		document.querySelector(".activities-box--active").remove();
	})
	
	
	
//	buttonActivitiesAll.addEventListener("mouseleave", function(event) {
//		document.addEventListener("mousemove", function(event) {
//			if (!event.target.classList.contains("activities-box--active")) {
//				document.querySelector(".activities-box--active").remove();				
//			}
//		})
//	})
})



/* --- TITLE ДЛЯ НЕКОТОРЫХ ЭЛЕМЕНТОВ --- */

let popularLinks = document.querySelectorAll(".activities-type__link");

for (let popularLink of popularLinks) {
	popularLink.title = popularLink.textContent;
}


let footerLinks = document.querySelectorAll(".footer__top-info-group-link");

for (let footerLink of footerLinks) {
	footerLink.title = footerLink.textContent;
}



/* --- МОБИЛЬНОЕ МЕНЮ --- */

const mobileMenuButton = document.querySelector(".mobile-menu-button");

const mobileMenu = document.querySelector(".mobile-menu");

mobileMenuButton.addEventListener("click", function() {
	if (!this.classList.contains("active")) {
		this.classList.toggle("active");
		mobileMenu.classList.toggle("active");
	}
})


const closeButton = document.querySelector(".button-close");

closeButton.addEventListener("click", function() {
	if (mobileMenu.classList.contains("active")) {
		mobileMenu.classList.toggle("active");
		mobileMenuButton.classList.toggle("active");
	}
})