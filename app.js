function Product(name, price) {
    this.name = name;
    this.price = price;
}

let cartItems = [];

function addItemByPrompt() {
    const name = prompt('Ingrese el nombre del producto:');
    if (name === null || name.trim() === '') {
        return;
    }

    let price;
    do {
        const priceInput = prompt('Ingrese el precio del producto:');
        price = parseFloat(priceInput);
    } while (isNaN(price) || price <= 0);

    const product = new Product(name, price);
    cartItems.push(product);
    alert(`El producto "${name}" ha sido agregado al carrito.`);
}

function viewCart() {
    if (cartItems.length === 0) {
        alert('El carrito está vacío.');
        return;
    }

    let cartList = 'Productos en el carrito:\n';
    let total = 0;

    cartItems.forEach((item, index) => {
        cartList += `${index + 1}. ${item.name} - $${item.price.toFixed(2)}\n`;
        total += item.price;
    });

    cartList += `\nTotal: $${total.toFixed(2)}`;

    alert(cartList);
}

function removeItemByPrompt() {
    if (cartItems.length === 0) {
        alert('El carrito está vacío.');
        return;
    }

    let index;
    do {
        const indexInput = prompt('Ingrese el número del producto que desea eliminar:');
        index = parseInt(indexInput) - 1;
    } while (isNaN(index) || index < 0 || index >= cartItems.length);

    const removedItem = cartItems.splice(index, 1)[0];
    alert(`El producto "${removedItem.name}" ha sido eliminado del carrito.`);
}
