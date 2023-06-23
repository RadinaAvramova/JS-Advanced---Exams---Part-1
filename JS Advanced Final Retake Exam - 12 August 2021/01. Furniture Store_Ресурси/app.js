window.addEventListener('load', solve);

function solve() {
    //TO DO
    const form = document.querySelector('form');
    let [modelField, yearField, priceField] = Array.from(form.querySelectorAll('input'));
    let descriptionField = form.querySelector('textarea');
    const addBtn = document.getElementById('add');
    const table = document.getElementById('furniture-list');
    const totalMoney = document.querySelector('tfoot td[class="total-price"]');

    addBtn.addEventListener('click', addFurniture);

    function addFurniture(event) {
        event.preventDefault();

        const year = Number(yearField.value.trim());
        const price = Number(priceField.value.trim());
        const model = modelField.value.trim();
        const description = descriptionField.value.trim();
        const checkPositiveNumbers = year > 0 && price > 0;
        const checkStringFields = model !== '' && description !== '';

        if (!checkPositiveNumbers || !checkStringFields) {
            return;
        }

        const moreBtn = e('button', { class: 'moreBtn' }, 'More Info');
        const buyBtn = e('button', { class: 'buyBtn' }, 'Buy it');

        moreBtn.addEventListener('click', (event) => moreInfo(event, firstRow, secondRow));
        buyBtn.addEventListener('click', () => buyItem(firstRow, secondRow, price, totalMoney));

        const firstRow =
            e('tr', { class: 'info' },
                e('td', {}, model),
                e('td', {}, price.toFixed(2)),
                e('td', {},
                    moreBtn,
                    buyBtn,
                ),
            );

        const secondRow =
            e('tr', { class: 'hide' },
                e('td', {}, `Year: ${year}`),
                e('td', { colspan: '3' }, `Description: ${description}`),
            );

        // console.log(checkNumbersFields, checkStringFields);

        table.appendChild(firstRow);
        table.appendChild(secondRow);

        modelField.value = '';
        yearField.value = '';
        priceField.value = '';
        descriptionField.value = '';
    }

    function moreInfo(event, firstRow, secondRow) {
        event.target.textContent = event.target.textContent === 'More Info'
            ? 'Less Info'
            : 'More Info';

        secondRow.style.display = secondRow.style.display === 'contents'
            ? 'none'
            : 'contents';
    }

    function buyItem(firstRow, secondRow, price, totalMoney) {
        let currentTotal = Number(totalMoney.textContent);
        currentTotal += price;
        totalMoney.textContent = currentTotal.toFixed(2);

        firstRow.remove();
        secondRow.remove();
    }

    function e(type, attr, ...content) {
        const element = document.createElement(type);

        for (let prop in attr) {
            // element[prop] = attr[prop];
            // console.log(attr[prop], prop);
            element.setAttribute(prop, attr[prop]);
        }

        for (let item of content) {
            if (typeof item === 'string' || typeof item === 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }

        return element;
    }
}