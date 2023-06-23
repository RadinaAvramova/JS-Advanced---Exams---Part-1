function solution() {
 
    let input = document.querySelector('.card input');
    let button = document.querySelector('.card button');
    let ulElement = document.querySelector('.card ul');
 
    button.addEventListener('click', e => {
        e.preventDefault();
 
        let liElement = document.createElement('li');
        liElement.setAttribute('class', 'gift');
        liElement.textContent = input.value;
 
        let btnSendElement = document.createElement('button');
        btnSendElement.setAttribute('id', 'sendButton');
        btnSendElement.textContent = 'Send';
        let btnDiscardElement = document.createElement('button');
        btnDiscardElement.setAttribute('id', 'discardButton');
        btnDiscardElement.textContent = 'Discard';
 
        liElement.appendChild(btnSendElement);
        liElement.appendChild(btnDiscardElement);
        ulElement.appendChild(liElement);
 
        input.value = "";
 
        let allLiElements = Array.from(ulElement.querySelectorAll('li'));
        let sortedLiElements = allLiElements.sort((a, b) => a.innerText.localeCompare(b.innerText));
 
        while (ulElement.firstChild) {
            ulElement.firstChild.remove();
        }
 
        for (const element of sortedLiElements) {
            ulElement.appendChild(element);
        }
 
        btnSendElement.addEventListener('click', e => {
            e.preventDefault;
 
            let ulSentElement = document.querySelector('.container > section:nth-of-type(3) > ul');
            e.target.remove();
            btnDiscardElement.remove();
            ulSentElement.appendChild(liElement);
 
        })
 
        btnDiscardElement.addEventListener('click', e => {
            e.preventDefault;
 
            let ulDiscardElement = document.querySelector('.container > section:nth-of-type(4) > ul');
            e.target.remove();
            btnSendElement.remove();
            ulDiscardElement.appendChild(liElement);
        })
 
    })
 
}


function solution() {
 
    let input = document.querySelector('input');
    let addButton = document.querySelector('button');
    let gifts = document.querySelector('.container > section:nth-of-type(2) ul');
    let sentGifts = document.querySelector('.container > section:nth-of-type(3) ul');
    let discardedGifts = document.querySelector('.container > section:nth-of-type(4) ul');
 
    addButton.addEventListener('click', addGift);
 
    function addGift() {
 
        if (input.value.trim()) {
 
            let sendButton = document.createElement('button');
            sendButton.setAttribute('id', 'sendButton');
            sendButton.textContent = 'Send';
 
            let discardButton = document.createElement('button');
            discardButton.setAttribute('id', 'discardButton');
            discardButton.textContent = 'Discard';
 
            let item = document.createElement('li');
            item.setAttribute('class', 'gift');
            item.textContent = input.value;
            item.appendChild(sendButton);
            item.appendChild(discardButton);
 
            gifts.appendChild(item);
 
            // sort gifts alphabetically
            Array.from(gifts.querySelectorAll('li'))
                .sort((a, b) => a.textContent.localeCompare(b.textContent))
                .forEach(item => gifts.appendChild(item));
 
            input.value = null;
 
            [sendButton, discardButton].forEach(btn => btn.addEventListener('click', manageGifts));
        }
    }
 
    function manageGifts(btn) {
 
        let item = btn.target.parentNode;
        item.lastElementChild.remove();
        item.lastElementChild.remove();
 
        if (btn.target.textContent === 'Send') {
            sentGifts.appendChild(item);
        } else {
            discardedGifts.appendChild(item);
        }
    }
}

