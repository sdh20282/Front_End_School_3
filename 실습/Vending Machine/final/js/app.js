// 접근성
const main = document.querySelector('main');
const vending_machine = main.querySelector('.vending_machine');
const vending_machine_form = vending_machine.querySelector('form');
const user_info = main.querySelector('.user_info');

vending_machine_form.addEventListener('click', (event) => {
    event.preventDefault();
});

// 입금, 거스름돈 반환
const total_amount = user_info.querySelector('.total_amount .money_info');
const deposit = vending_machine_form.querySelector('.deposit');
const deposit_button = vending_machine_form.querySelector('.deposit_button');
const balance = vending_machine_form.querySelector('.balance_change .money_info');
const change_button = vending_machine_form.querySelector('.change_button');

function addComma(num) {
    return num.toString().split('').reverse().map((value, index) => index % 3 === 0 && index !== 0 ? value + ',' : value).reverse().join('');
}

function deleteComma(str) {
    return str.split(',').join('');
}

function insertMoney(event) {
    if (!deposit.value.trim().length) {
        alert('금액을 입력해주세요!');
        return;
    }

    let total = parseInt(deleteComma(total_amount.textContent));
    let insert = parseFloat(deposit.value);

    if (insert <= 0) {
        alert('0 보다 큰 금액을 입력해주세요!');
        return;
    }

    if (insert > total) {
        alert('소지금보다 적은 금액을 입력해주세요!');
        return;
    }

    if (insert % 1) {
        alert('1보다 작은 금액은 버려집니다!');
        insert = Math.floor(insert);
    }

    total_amount.textContent = addComma(total - insert);
    deposit.value = null;
    balance.textContent = addComma(insert + parseInt(deleteComma(balance.textContent)));
}

function changeMoney(event) {
    let total = parseInt(deleteComma(total_amount.textContent));
    let change = parseInt(deleteComma(balance.textContent));

    total_amount.textContent = addComma(total + change);
    balance.textContent = 0;
}

deposit_button.addEventListener('click', insertMoney);
change_button.addEventListener('click', changeMoney);

// 상품
const productBtnList = vending_machine.querySelector('.product_list');

const shoppingCartPurchased = vending_machine_form.querySelector('.shopping_cart');
const getButton = vending_machine_form.querySelector('.buy_product_button');

const shoppingCartGot = user_info.querySelector('.purchased_products .shopping_cart');
const total_price = user_info.querySelector('.purchased_products .money_info')

const productData = {}

async function getProductData() {
    try {
        const response = await fetch('./assets/data.json');
        const result = await response.json();

        for (const product of result) {
            product['purchaseCount'] = 0;
            product['getCount'] = 0;
            productData[product.name] = product;
        }
    }
    catch (error) {
        alert(error);
    }
}

function generateProductButtons() {
    const fragment = new DocumentFragment()
    productBtnList.innerHTML = '';

    for (const key in productData) {
        const product = productData[key];

        const listItem = document.createElement('li');
        const productBtn = document.createElement('button');
        const productImg = document.createElement('img');
        const productName = document.createElement('span');
        const productPrice = document.createElement('span');

        listItem.appendChild(productBtn);

        productBtn.classList.add('product', 'light_gray_normal_border', 'border_10px');
        productBtn.appendChild(productImg);
        productBtn.appendChild(productName);
        productBtn.appendChild(productPrice);

        productImg.setAttribute('src', `./assets/images/${product.path}`);
        productImg.setAttribute('alt', '음료 이미지입니다.')

        productName.classList.add('product_name');
        productName.innerText = product.name;

        productPrice.classList.add('product_price');
        productPrice.innerText = product.price;

        fragment.appendChild(listItem);
    }

    productBtnList.appendChild(fragment);
}

function putProduct(event) {
    const productName = this.querySelector('.product_name').textContent;
    const product = productData[productName];

    if (product.stock == 0) {
        alert('품절된 상품은 선택할 수 없습니다!');
        return;
    }

    let change = parseInt(deleteComma(balance.textContent));

    if (change < product.price) {
        alert('잔액이 부족합니다!');
        return;
    }

    this.classList.add('selected');
    product.stock -= 1;
    product.purchaseCount += 1;
    balance.textContent = addComma(change - product.price);
    productData[productName] = product;


    if (product.stock == 0) {
        this.classList.add('sold_out')
    }

    updatePurchasedProducts()
}

function generateListItem(productName, productCount, productImgPath) {
    const listItem = document.createElement('li');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const figcaption = document.createElement('figcaption');
    const desc = document.createElement('p');
    const count = document.createElement('p');

    listItem.classList.add('selected_product', 'border_5px');
    listItem.appendChild(figure);
    figure.classList.add('selected_product_image');
    figure.appendChild(img);
    figure.appendChild(figcaption);
    img.setAttribute('src', `./assets/images/${productImgPath}`);
    img.setAttribute('alt', `음료 이미지입니다.`);
    figcaption.appendChild(desc);
    desc.classList.add('product_name');
    desc.textContent = productName;
    listItem.appendChild(count);
    count.classList.add('selected_product_count', 'light_gray_normal_border', 'border_5px');
    count.textContent = productCount;

    return listItem;
}

function updatePurchasedProducts() {
    const fragment = new DocumentFragment()
    shoppingCartPurchased.innerHTML = '';

    for (const key in productData) {
        const product = productData[key];

        if (parseInt(product.purchaseCount)) {
            fragment.appendChild(generateListItem(product.name, product.purchaseCount, product.path));
        }
    };

    shoppingCartPurchased.appendChild(fragment);
}

function updateGotProducts() {
    const fragment = new DocumentFragment()
    shoppingCartGot.innerHTML = '';

    for (const key in productData) {
        const product = productData[key];

        if (parseInt(product.getCount)) {
            fragment.appendChild(generateListItem(product.name, product.getCount, product.path));
        }
    };

    shoppingCartGot.appendChild(fragment);
}

function getProduct(event) {
    for (const button of productBtnList.querySelectorAll('button')) {
        button.classList.remove('selected');
    }

    let sum = 0;

    for (const key in productData) {
        const product = productData[key];
        product.getCount += product.purchaseCount;
        product.purchaseCount = 0;
        productData[key] = product;

        sum += product.getCount * product.price;
    };

    updatePurchasedProducts();
    updateGotProducts();

    total_price.textContent = addComma(sum);
}

getProductData()
    .then(() => generateProductButtons())
    .then(() => {
        Array.prototype.map.call(productBtnList.querySelectorAll('button'), (item) => {
            item.addEventListener('click', putProduct);
        });
    });

getButton.addEventListener('click', getProduct);