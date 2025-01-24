
function meals() {
        /* Initialize cocktail array */
        const foods = [
            {
                name: `Sea winder`,
                preparation: `Fried tilapia fish, garnish with tartar sauce and lemon, cut to fine slices`,
                served: `Served with fried rice, mixed vegetables and salsa .`,
                price: `$20.00`,
            },
            {
                name: `Coral delish`,
                preparation: `Fried fish balls seasoned with periperi and rosemary`,
                served: `Served with rice and mixed vegetables`,
                price: `$16.00`,
            },
            {
                name: `Banks of Ganges`,
                preparation: `Fish curry made with sauteed onions, ginger and ground spices`,
                served: `Served with chapati and steaming rice`,
                price: `$18.00`,
            },
            {
                name: `Chicken curry`,
                preparation: `Chicken curry made with sauteed onions, ginger and ground spices`,
                served: `Served with chapati and steaming rice.`,
                price: `$16.00`,
            },
     ];
    
        /* getter method */
        const getmeal = () => foods;
    
        /* method for adding new food to the array */
        const addCockatil = (cocktail) => foods.push(cocktail);
    
        return { getmeal };
    }
    
    export function menu(div){
        const contents = document.querySelector("#content");
        const container = document.createElement("div");
        container.setAttribute("class", "container");
        contents.appendChild(container);
        const foods = document.createElement("div");
        foods.setAttribute("class", "menu");
        foods.innerHTML = `<h5>Our menu</h5>`
        container.appendChild(foods);
    
        const items = meals();
        for(const cocktail of items.getmeal()){
            const snack = document.createElement("div");
            foods.appendChild(snack);
            const name = document.createElement("h3");
            name.textContent = cocktail.name;
            snack.appendChild(name);
            const preparations = document.createElement("p");           
            preparations.textContent = cocktail.preparation;
            preparations.setAttribute("class", "preparation");
            snack.appendChild(preparations);
            const serves = document.createElement("p");
            serves.textContent = cocktail.served;
            snack.appendChild(serves);
            const prices = document.createElement("p");
            prices.textContent = cocktail.price;
            prices.setAttribute("class", "price");
            snack.appendChild(prices);
        }
    }
    