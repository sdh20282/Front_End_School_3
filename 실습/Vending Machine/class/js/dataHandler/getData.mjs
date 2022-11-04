async function loadData() {
    const productData = {};

    try {
        const response = await fetch('assets/data.json');
        const result = await response.json();

        for (const product of result) {
            product['purchaseCount'] = 0;
            product['getCount'] = 0;
            productData[product.name] = product;
        }

        return productData;
    }
    catch (error) {
        alert(error);
    }
}

export default loadData;