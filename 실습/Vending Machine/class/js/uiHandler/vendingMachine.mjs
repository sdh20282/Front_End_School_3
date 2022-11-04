import { addComma, deleteComma } from "../utils/utils.mjs";

class VendingMacnine {
    constructor() {
        // 접근성
        this.main = document.querySelector('main');
        this.vending_machine = this.main.querySelector('.vending_machine');
        this.vending_machine_form = this.vending_machine.querySelector('form');
        this.user_info = this.main.querySelector('.user_info');

        // 입금, 거스름돈 반환
        this.total_amount = this.user_info.querySelector('.total_amount .money_info');
        this.deposit = this.vending_machine_form.querySelector('.deposit');
        this.deposit_button = this.vending_machine_form.querySelector('.deposit_button');
        this.balance = this.vending_machine_form.querySelector('.balance_change .money_info');
        this.change_button = this.vending_machine_form.querySelector('.change_button');

        // 상품
        this.productBtnList = this.vending_machine.querySelector('.product_list');
        this.shoppingCartPurchased = this.vending_machine_form.querySelector('.shopping_cart');
        this.getButton = this.vending_machine_form.querySelector('.buy_product_button');
        this.shoppingCartGot = this.user_info.querySelector('.purchased_products .shopping_cart');
        this.total_price = this.user_info.querySelector('.purchased_products .money_info')

        // prevent form refresh event
        this.vending_machine_form.addEventListener('click', (event) => {
            event.preventDefault();
        });
    }

    insertMoney(event) {
        if (!this.deposit.value.trim().length) {
            alert('금액을 입력해주세요!');
            return;
        }

        let total = parseInt(deleteComma(this.total_amount.textContent));
        let insert = parseFloat(this.deposit.value);

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

        this.total_amount.textContent = addComma(total - insert);
        this.deposit.value = null;
        this.balance.textContent = addComma(insert + parseInt(deleteComma(this.balance.textContent)));
    }

    changeMoney(event) {
        let total = parseInt(deleteComma(this.total_amount.textContent));
        let change = parseInt(deleteComma(this.balance.textContent));

        this.total_amount.textContent = addComma(total + change);
        this.balance.textContent = 0;
    }

    generateProductButtons() {
        const fragment = new DocumentFragment()
        this.productBtnList.innerHTML = '';
    
        for (const key in this.productData) {
            const product = this.productData[key];
    
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
    
        this.productBtnList.appendChild(fragment);
    }
    
    putProduct(event) {
        const productName = event.currentTarget.querySelector('.product_name').textContent;
        const product = this.productData[productName];
    
        if (product.stock == 0) {
            alert('품절된 상품은 선택할 수 없습니다!');
            return;
        }
    
        let change = parseInt(deleteComma(this.balance.textContent));
    
        if (change < product.price) {
            alert('잔액이 부족합니다!');
            return;
        }
    
        event.currentTarget.classList.add('selected');
        product.stock -= 1;
        product.purchaseCount += 1;
        this.balance.textContent = addComma(change - product.price);
        this.productData[productName] = product;
    
    
        if (product.stock == 0) {
            event.currentTarget.classList.add('sold_out')
        }
    
        this.updatePurchasedProducts()
    }
    
    generateListItem(productName, productCount, productImgPath) {
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
    
    updatePurchasedProducts() {
        const fragment = new DocumentFragment()
        this.shoppingCartPurchased.innerHTML = '';
    
        for (const key in this.productData) {
            const product = this.productData[key];
    
            if (parseInt(product.purchaseCount)) {
                fragment.appendChild(this.generateListItem(product.name, product.purchaseCount, product.path));
            }
        };
    
        this.shoppingCartPurchased.appendChild(fragment);
    }
    
    updateGotProducts() {
        const fragment = new DocumentFragment()
        this.shoppingCartGot.innerHTML = '';
    
        for (const key in this.productData) {
            const product = this.productData[key];
    
            if (parseInt(product.getCount)) {
                fragment.appendChild(this.generateListItem(product.name, product.getCount, product.path));
            }
        };
    
        this.shoppingCartGot.appendChild(fragment);
    }
    
    getProduct(event) {
        for (const button of this.productBtnList.querySelectorAll('button')) {
            button.classList.remove('selected');
        }
    
        let sum = 0;
    
        for (const key in this.productData) {
            const product = this.productData[key];
            product.getCount += product.purchaseCount;
            product.purchaseCount = 0;
            this.productData[key] = product;
    
            sum += product.getCount * product.price;
        };
    
        this.updatePurchasedProducts();
        this.updateGotProducts();
    
        this.total_price.textContent = addComma(sum);
    }

    addEvent(productData) {
        this.productData = productData;
        this.deposit_button.addEventListener('click', this.insertMoney.bind(this));
        this.change_button.addEventListener('click', this.changeMoney.bind(this));

        this.generateProductButtons();
        Array.prototype.map.call(this.productBtnList.querySelectorAll('button'), (item) => {
            item.addEventListener('click', this.putProduct.bind(this));
        });

        this.getButton.addEventListener('click', this.getProduct.bind(this));
    }
}

export default VendingMacnine;