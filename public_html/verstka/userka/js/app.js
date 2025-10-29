isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

let body = document.querySelector('body');

	 if (isMobile.any()) {
		 body.classList.add('touch');
		 let arrow = document.querySelectorAll('.arrow');
		 for (let i = 0; i < arrow.length; i++) {
			 let thisLink = arrow[i].previousElementSibling
			 let subMenu = arrow[i].nextElementSibling;
			 let thisArrow = arrow[i];
			 thisLink.classList.add('parent');
			 thisLink.addEventListener('click', function (event) {
				 event.preventDefault();
				subMenu.classList.toggle('open');
				thisArrow.classList.toggle('active');
			})			
			 thisArrow.addEventListener('click', function (event) {				 
				subMenu.classList.toggle('open');
				thisArrow.classList.toggle('active');
			})			
		 }
	 } else {
		 body.classList.add('mouse');
	 }
	 /* if (isMobile.any()) {
		 body.classList.add('touch');
		 let arrow = document.querySelectorAll('.arrow');
		 for (let i = 0; i < arrow.length; i++) {
			 let thisLink = arrow[i].previousElementSibling
			 let subMenu = arrow[i].nextElementSibling;
			 let thisArrow = arrow[i];
			 thisLink.classList.add('parent');
			arrow[i].addEventListener('click', function (params) {
				subMenu.classList.toggle('open');
				thisArrow.classList.toggle('active');
			})			
		 }
	 } else {
		 body.classList.add('mouse');
	 } */
	 
//console.log(body);

function menuInit() {
  document.addEventListener("click", function(e) {
	 if (bodyLockStatus && e.target.closest("[data-fls-menu]")) {
		bodyLockToggle();
		document.documentElement.toggleAttribute("data-fls-menu-open");
	 }
  });
}
document.querySelector("[data-fls-menu]") ? window.addEventListener("load", menuInit) : null;

let bodyLockStatus = true
let bodyLockToggle = (delay = 500) => {
  if (document.documentElement.hasAttribute("data-fls-scrolllock")) {
    bodyUnlock(delay);
  } else {
    bodyLock(delay);
  }
};
let bodyUnlock = (delay = 500) => {
  if (bodyLockStatus) {
    const lockPaddingElements = document.querySelectorAll("[data-fls-lp]");
    setTimeout(() => {
      lockPaddingElements.forEach((lockPaddingElement) => {
        lockPaddingElement.style.paddingRight = "";
      });
      document.body.style.paddingRight = "";
      document.documentElement.removeAttribute("data-fls-scrolllock");
    }, delay);
    bodyLockStatus = false;
    setTimeout(function() {
      bodyLockStatus = true;
    }, delay);
  }
};
let bodyLock = (delay = 500) => {
  if (bodyLockStatus) {
    const lockPaddingElements = document.querySelectorAll("[data-fls-lp]");
    const lockPaddingValue = window.innerWidth - document.body.offsetWidth + "px";
    lockPaddingElements.forEach((lockPaddingElement) => {
      lockPaddingElement.style.paddingRight = lockPaddingValue;
    });
    document.body.style.paddingRight = lockPaddingValue;
    document.documentElement.setAttribute("data-fls-scrolllock", "");
    bodyLockStatus = false;
    setTimeout(function() {
      bodyLockStatus = true;
    }, delay);
  }
};



console.log('app');




