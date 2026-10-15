let cart = [];
let total = 0;
function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });
    total = total + price;
    displayCart();
}
function displayCart() {
    let cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";
    if (cart.length == 0) {
        cartItems.innerHTML = "<p>Cart is empty</p>";
    }
    cart.forEach(function(item) {
        let p = document.createElement("p");
        p.innerHTML = item.name + " - ₹" + item.price;
        cartItems.appendChild(p);
    });
    document.getElementById("total").innerText = total;
}
function searchFood() {
    let search = document.getElementById("search").value.toLowerCase();
    let foods = document.getElementsByClassName("food");
    for (let i = 0; i < foods.length; i++) {
        let name = foods[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
        if (name.includes(search)) {
            foods[i].style.display = "block";
        } else {
            foods[i].style.display = "none";
        }
    }
}
function placeOrder() {
    let name = document.getElementById("customerName").value;
    let address = document.getElementById("address").value;
    if (name == "") {
        alert("Please enter your name");
        return;
    }
    if (address == "") {
        alert("Please enter your delivery address");
        return;
    }
    if (cart.length == 0) {
        alert("Please add food to cart");
        return;
    }
    alert(
        "Order placed successfully!\n" +
        "Customer: " + name +
        "\nAddress: " + address +
        "\nTotal: ₹" + total
    );
    cart = [];
    total = 0;
    document.getElementById("customerName").value = "";
    document.getElementById("address").value = "";
    displayCart();
}
