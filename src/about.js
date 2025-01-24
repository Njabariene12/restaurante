export function about(div){
        const contents = document.querySelector("#content");
        const desc = document.createElement("h3");
        desc.setAttribute("class", "home");

        desc.innerHTML = `<h3>Smile up</h3>
        <h4>Here is some stuff about love and loving </h4>`

        contents.appendChild(desc);
}
        