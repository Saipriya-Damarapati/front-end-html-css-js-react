const toordalCount=document.getElementById('toordalCount');
const toordalPrice=document.getElementById('toordalPrice');

const uraddalCount=document.getElementById('uraddalCount');
const uraddalPrice=document.getElementById('uraddalPrice');

const chanadalCount=document.getElementById('chanadalCount');
const chanadalPrice=document.getElementById('chanadalPrice');

const masoordalCount=document.getElementById('masoordalCount');
const masoordalPrice=document.getElementById('masoordalPrice');

const totalCount=document.getElementById('totalCount');
const totalPrice=document.getElementById('totalPrice');

function decrement(productName) {
    if(productName == 'toordal') {
        if(toordalCount.value > 0) {
            toordalCount.value = eval(getNumber(toordalCount.value) - 1);
        }
    } else if(productName == 'uraddal') {
        if(uraddalCount.value > 0) {
            uraddalCount.value = eval(getNumber(uraddalCount.value) - 1);
        }
    } else if(productName == 'chanadal') {
        if(chanadalCount.value > 0) {
            chanadalCount.value = eval(getNumber(chanadalCount.value) - 1);
        }
    } else if(productName == 'masoordal') {
        if(masoordalCount.value > 0) {
            masoordalCount.value = eval(getNumber(masoordalCount.value) - 1);
        }
    }
    updatePrice(productName);
}

function increment(productName) {
    if(productName == 'toordal') {
        toordalCount.value = eval(getNumber(toordalCount.value) + 1);
    } else if(productName == 'uraddal') {
        uraddalCount.value = eval(getNumber(uraddalCount.value) + 1);
    } else if(productName == 'chanadal') {
        chanadalCount.value = eval(getNumber(chanadalCount.value) + 1);
    } else if(productName == 'masoordal') {
        masoordalCount.value = eval(getNumber(masoordalCount.value) + 1);
    }
    updatePrice(productName);
}

function updatePrice(productName) {
    if(productName == 'toordal') {
        toordalPrice.value = eval(getNumber(toordalCount.value) * 185);
    } else if(productName == 'uraddal') {
        uraddalPrice.value = eval(getNumber(uraddalCount.value) * 165);
    } else if(productName == 'chanadal') {
        chanadalPrice.value = eval(getNumber(chanadalCount.value) * 145);
    } else if(productName == 'masoordal') {
        masoordalPrice.value = eval(getNumber(masoordalCount.value) * 195);
    }
    
    totalCount.value = eval(getNumber(toordalCount.value) + getNumber(uraddalCount.value) + getNumber(chanadalCount.value) + getNumber(masoordalCount.value));
    totalPrice.value = eval(getNumber(toordalPrice.value) + getNumber(uraddalPrice.value) + getNumber(chanadalPrice.value) + getNumber(masoordalPrice.value));
    document.getElementById('toordalCount').innerHTML = toordalCount.value;
    document.getElementById('toordalPrice').innerHTML = ('Rs.' + toordalPrice.value);
    document.getElementById('uraddalCount').innerHTML = uraddalCount.value;
    document.getElementById('uraddalPrice').innerHTML = ('Rs.' + uraddalPrice.value);
    document.getElementById('chanadalCount').innerHTML = chanadalCount.value;
    document.getElementById('chanadalPrice').innerHTML = ('Rs.' + chanadalPrice.value);
    document.getElementById('masoordalCount').innerHTML = masoordalCount.value;
    document.getElementById('masoordalPrice').innerHTML = ('Rs.' + masoordalPrice.value);
    document.getElementById('totalCount').innerHTML = totalCount.value;
    document.getElementById('totalPrice').innerHTML = ('Rs.' + totalPrice.value);
}

function getNumber(x) {
    if(isNaN(x)) {
        return Number(0);
    } else {
        return Number(x);
    }
}