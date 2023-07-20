let iconLink = document.querySelectorAll(".fa-brands");

console.log(iconLink.length);

for(let i=0; i<iconLink.length; i++) {
    iconLink[i].addEventListener("click", function() {
        console.log();
        let classNameData = this.classList[1];
        let urlAccess;
        if(classNameData === "fa-node-js") {
            urlAccess = "https://learnjavascript.online/";
        }else if(classNameData === "fa-css3") {
            urlAccess = "https://web.dev/learn/css/";
        }else {
            urlAccess = "https://www.learn-html.org/";
        }

        window.open(urlAccess, "_blank");

    });
}