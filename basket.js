function createBasket() {
    let basket = [];
    
    function addToBasket(id, name) {
        let target = basket.findIndex(item => item.id === id);
    
        if (target !== -1) {
            console.log("movcuddur :)");
        } else {
            basket.push({ id, name });
        }
    }

    return {
        basket,
        addToBasket
    };
}

const myBasket = createBasket();

myBasket.addToBasket(1, "n1");
myBasket.addToBasket(2, "n2");
myBasket.addToBasket(1, "n1");

console.log(myBasket.basket);
