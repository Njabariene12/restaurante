
export function home(div){
        const contents = document.querySelector("#content");
        const hdiv = document.createElement("h1");
        hdiv.setAttribute("class", "home");

        hdiv.innerHTML = `<h1>Hello There</h1>
        <h2>Welcome to Frank's Bistro, Where we serve amazing sandwitches and tantalizing drinks
                Come chill out with your friend's and have a gentle afternoon in a calming zone. Cheers</h2>`

        contents.appendChild(hdiv);
}



