class ColaGenerator {
    constructor() {
        this.itemList = document.querySelector('.list-item');
    }

    colaFactory(data) {
        const docFrag = document.createDocumentFragment();
        data.forEach((el) => {
            const item = document.createElement('li');
            const itemTemplate = `
            <button type="button" class="btn-item" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                <img src="src/images/${el.img}" alt="" class="img-item">
                <strong class="tit-item">${el.name}</strong>
                <span class="txt-price">${el.cost}원</span>
            </button>
            `;
            item.innerHTML = itemTemplate;
            docFrag.appendChild(item);
        });
        this.itemList.appendChild(docFrag);
    }

    test(data) {
        console.log(this);
        this.colaFactory(data);
    }

    setup() {
        this.loadData(test);
    }

    async loadData(callback) {
        const response = await fetch('src/js/item.json');

        if (response.ok) { // http 상태코드가 200 ~ 299일 경우 
            callback(await response.json()); // 응답 본문을 읽으면서 객체형태로 파싱합니다.
        } else {
            alert('통신 에러!' + response.status);
        }
    }
}

export default ColaGenerator