const productData = [
    {
        name: "Original_Cola",
        price: 1000,
        count: 10,
    },
    {
        name: "Violet_Cola",
        price: 1000,
        count: 0,
    },
    {
        name: "Yellow_Cola",
        price: 1000,
        count: 10,
    },
    {
        name: "Cool_Cola",
        price: 1000,
        count: 3,
    },
    {
        name: "Green_Cola",
        price: 1000,
        count: 10,
    },
    {
        name: "Orange_Cola",
        price: 1000,
        count: 10,
    },
];

function render(productData) {
    renderData = []

    for (const item of productData) {
        renderData.push({
            ...item,
            button: 'buttonlist[0]',
            purchase: 0,
            get: 0
        });
    }

    return renderData;
}

