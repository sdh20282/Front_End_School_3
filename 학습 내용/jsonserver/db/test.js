// http://localhost:3001/product
// http://localhost:3001/product/0
// http://localhost:3001/product/1
// http://localhost:3001/product/2
// http://localhost:3001/product?_sort=id&_order=DESC
// http://localhost:3001/product?_sort=id&_order=ASC
// http://localhost:3001/product?id_gte=3
// http://localhost:3001/product?id_lte=5
// http://localhost:3001/product?_start=0&_end=5
// http://localhost:3001/product?_start=5&_end=10

fetch('http://localhost:3001/product', {
    method: 'GET'
})
.then((response) => response.json())
.then((data) => {
    console.log('성공:', data);
})
.catch((error) => {
    console.error('실패:', error);
});


const data = {
    "id": 9,
    "productName": "제주코딩베이스캠프 1000일 놀고먹는제주캠프",
    "price": 80000000,
    "stockCount": 1,
    "viewCount": 0,
    "pubDate": "2022-02-28",
    "modDate": "2022-02-28"
};

fetch("http://localhost:3001/product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
})
.then((response) => response.json())
.then((data) => {
    console.log("성공:", data);
})
.catch((error) => {
    console.error("실패:", error);
});