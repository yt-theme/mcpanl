// selector
function Selector( ele ) {
	return document.querySelector( ele )
}


// ######### header action #########

const header     = Selector( "header" )
const headerLogo = Selector( ".header-logo" )

window.onscroll = function() {
	let scrollTop    = document.documentElement.scrollTop
	let clientHeight = document.documentElement.clientHeight
	if ( scrollTop >= clientHeight ) {
		header.className     = "header-action"
		headerLogo.className = "header-logo-action"
	}else{
		header.className     = "header"
		headerLogo.className = "header-logo"
	}
}


// ######### header sidebar #########

const headerMenu       = Selector( ".header-menu" )
const sidebarContainer = Selector( ".sidebar-container" )
const sidebarClose     = Selector( ".sidebar-close" )
const sidebar          = Selector( ".sidebar" )

// header sidebar close fun
function SidebarClose(){
	sidebar.className          = "sidebar"
	sidebarContainer.className = "sidebar-container"
}

headerMenu.onclick = function() {
	sidebar.className          = "sidebar-active"
	sidebarContainer.className = "sidebar-container-active"
}

sidebarContainer.onclick = SidebarClose
sidebarClose.onclick     = SidebarClose

// learn-more
const learnMore         = Selector( ".banner-more" )
const mainShow          = Selector( ".main-show" )
const mainShowOffsetTop = mainShow.offsetTop
learnMore.onclick = function() {
		let currentScrollTop  = document.documentElement.scrollTop
	    document.documentElement.scrollTop = mainShowOffsetTop
}
