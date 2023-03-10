const headerComponent = document.createElement("template")
const hamMenu = document.getElementById("hamMenu")
const menu = document.getElementById("menu")

headerComponent.innerHTML = `
    <header class="p-6 flex justify-between width-screen-fix m-0 absolute">
        <a href="/src/index.html">
            <img 
            src="/src/svg/Logo-Kunstenadele.svg" 
            alt=""
            class="w-36">
        </a>
    
        
        <svg id="hamMenu" class="ham hamRotate ham1 w-16" viewBox="0 0 100 100" width="80" onclick="toggleMenu(), this.classList.toggle('active') " onclick="this.classList.toggle('active')">
            <path
                class="line top"
                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
            <path
                class="line middle"
                d="m 30,50 h 40" />
            <path
                class="line bottom"
                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />        
        </svg>
    </header>

    

    `
    
document.body.prepend(headerComponent.content)



function toggleMenu() {
    if (menu.classList.contains("showMenu")){
        menu.classList.remove("showMenu")
    } else {
        menu.classList.add("showMenu")
    }
}

function hoverMenu() {
    console.log("bruh")
}

hamMenu.addEventListener("click", toggleMenu())
hamMenu.addEventListener("hover", hoverMenu())