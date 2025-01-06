function showStockUpdateDiv() {
    var divItem = document.getElementById("stockUpdateDiv");
    divItem.style.display = "block";
}

function showApplyDiscountDiv() {
    var divItem = document.getElementById("applyDiscountDiv");
    divItem.style.display = "block";
}

function hideStockUpdateDiv() {
    var divItem = document.getElementById("stockUpdateDiv");
    divItem.style.display = "none";
}

function hideApplyDiscountDiv() {
    var divItem = document.getElementById("applyDiscountDiv");
    divItem.style.display = "none";
}

function displayDetails() {
    hideStockUpdateDiv();
    hideApplyDiscountDiv();
    if(!globalProduct) {
        createNewProduct();
    }
    document.getElementById("result").textContent = globalProduct.displayProduct();
}

function createNewProduct() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const stock = document.getElementById("stock").value;

    product = new product(name, price, stock);
}

var globalProduct;

function product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;

    this.updateStock = function(newStock) {
        this.stock = newStock;
    };

    this.discountPrice = function(discountValue) {
        this.price = this.price - (this.price * discountValue / 100);
    };

    this.displayProduct = function() {
        return `Product: ${this.name}; Price: ${this.price}; Stock: ${this.stock}`;
    };

    globalProduct = this;
}

function updateStockData() {
    const newStock = document.getElementById("updatedStock").value;
    if(!globalProduct) {
        createNewProduct();
    }
    globalProduct.updateStock(newStock);
    hideStockUpdateDiv();
    hideApplyDiscountDiv();
    displayDetails();
}

function applyDiscountData() {
    const discount = document.getElementById("discount").value;
    if(!globalProduct) {
        createNewProduct();
    }
    globalProduct.discountPrice(discount);
    hideStockUpdateDiv();
    hideApplyDiscountDiv();
    displayDetails();
}