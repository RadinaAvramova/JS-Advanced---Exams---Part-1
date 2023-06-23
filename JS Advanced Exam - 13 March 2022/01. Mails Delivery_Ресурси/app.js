function solve() {
    document.getElementById("add").addEventListener("click", addList)
    document.getElementById("reset").addEventListener("click", clearInput)
 
    let text = document.getElementById("recipientName");
    let title = document.getElementById("title");
    let message = document.getElementById("message");
    let listMails = document.getElementById("list");
    let ulSendList = document.getElementsByClassName('sent-list')[0];
    let deleteeList = document.getElementsByClassName('delete-list')[0];
 
    function addList(e) {
        e.preventDefault();
        let textValue = text.value;
        let titleValue = title.value;
        let messageValue = message.value;
 
        if (!textValue || !titleValue || !messageValue) {
            return
        }
        createElement(textValue, titleValue, messageValue)
        clearInput();
    }
 
    function createElement(textValue, titleValue, messageValue) {
        let li = document.createElement("li");
 
        let h1 = document.createElement("h4");
        h1.textContent = `Title: ${titleValue}`;
 
        let h2 = document.createElement("h4");
        h2.textContent = `Recipient Name: ${textValue}`;
 
        let span = document.createElement("span");
        span.textContent = `${messageValue}`;
 
        let div = document.createElement("div");
        div.setAttribute("id", "list-action");
 
        let sendBtn = document.createElement("button");
        sendBtn.setAttribute("type", "submit"); //change
        sendBtn.setAttribute("id", "send"); //change
        sendBtn.textContent = "Send";
        sendBtn.addEventListener("click", sendText)
 
 
        let deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("type", "submit");   //change
        deleteBtn.setAttribute("id", "delete"); //change
        deleteBtn.textContent = "Delete"
        deleteBtn.addEventListener("click", deleteList);
 
        li.appendChild(h1);
        li.appendChild(h2);
        li.appendChild(span);
        li.appendChild(div);
        div.appendChild(sendBtn);
        div.appendChild(deleteBtn);
        listMails.appendChild(li);
 
        text.value = "";
        title.value = "";
        message.value = "";
 
        function sendText(e) {
 
            let li = document.createElement("li");
 
            let span1 = document.createElement("span");
            span1.textContent = `To: ${textValue}`;
 
            let span2 = document.createElement("span");
            span2.textContent = `Title: ${titleValue}`;
 
            let div = document.createElement("div");
            div.classList.add("btn")
 
            let btnDelete = document.createElement("button");
            btnDelete.setAttribute("type", "submit");   //change
            btnDelete.setAttribute("class", "delete")   //change
            btnDelete.textContent = "Delete";
            btnDelete.addEventListener("click", deleteList)
 
            let currentMail = e.target.parentNode.parentNode;
            currentMail.remove();
            e.preventDefault();
 
            li.appendChild(span1);
            li.appendChild(span2);
            li.appendChild(div);
            div.appendChild(btnDelete);
            ulSendList.appendChild(li);
 
        }
        function deleteList(e) {
            let currentMail = e.target.parentNode.parentNode;
            currentMail.remove();
            e.preventDefault();
 
            let li = document.createElement("li");
 
            let span1 = document.createElement("span");
            span1.textContent = `To: ${textValue}`;
 
            let span2 = document.createElement("span");
            span2.textContent = `Title: ${titleValue}`;
 
            li.appendChild(span1);
            li.appendChild(span2);
            deleteeList.appendChild(li);
 
            div.appendChild(sendBtn);
            div.appendChild(deleteBtn);
        }
    }
    function clearInput(e) {
 
        text.value = "";
        title.value = "";
        message.value = "";
    }
 
}

solve();


function solve() {
    let recipientName = document.getElementById("recipientName");
    let title = document.getElementById("title");
    let message = document.getElementById("message");
    let btnAdd = document.getElementById("add");
    let list = document.getElementById("list");
    let btnReset = document.getElementById("reset");
    let sentList = document.getElementsByClassName("sent-list")[0];
    let deleteList = document.getElementsByClassName("delete-list")[0];

    btnReset.addEventListener("click", (ev) => {
        ev.preventDefault();
        resetting();
    });

    btnAdd.addEventListener("click", (ev) => {
        ev.preventDefault();
        adding();
        recipientName.value = "";
        title.value = "";
        message.value = "";
    });

    function resetting() {
        recipientName.value = "";
        title.value = "";
        message.value = "";
    }

    function adding() {
        let recipientNameValue = recipientName.value;
        let titleValue = title.value;
        let messageValue = message.value;

        if (recipientNameValue && titleValue && messageValue) {
            let li = document.createElement("li");

            let h4 = document.createElement("h4");
            h4.textContent = `Title: ${titleValue}`;

            let h42 = document.createElement("h4");
            h42.textContent = `Recipient Name: ${recipientNameValue}`;

            let span = document.createElement("span");
            span.textContent = `${messageValue}`;

            let div = document.createElement("div");
            div.setAttribute("id", "list-action");

            let buttonsend = document.createElement("button");
            buttonsend.setAttribute("type", "submit");
            buttonsend.setAttribute("id", "send");
            buttonsend.textContent = "Send";
            buttonsend.addEventListener("click", (event) => {
                event.preventDefault();
                sending(event);
            });

            let buttondelete = document.createElement("button");
            buttondelete.setAttribute("type", "submit");
            buttondelete.setAttribute("id", "delete");
            buttondelete.textContent = "Delete";
            buttondelete.addEventListener("click", (ev) => {
                ev.preventDefault();
                deletting(ev);
            });

            div.appendChild(buttonsend);
            div.appendChild(buttondelete);
            li.appendChild(h4);
            li.appendChild(h42);
            li.appendChild(span);
            li.appendChild(div);

            list.appendChild(li);
        }
    }

    function sending(event) {
        let listTitle = event.target.parentElement.parentElement.children[0];
        let listRecipientName = event.target.parentElement.parentElement.children[1];
        let butdelete = event.target.parentElement.parentElement.children[3].children[1];
        let newDelete = butdelete;
        newDelete.removeAttribute('id');
        newDelete.setAttribute('class', 'delete');

        let li = document.createElement("li");
        let span = document.createElement("span");
        span.textContent = `To: ${listRecipientName.textContent.split(": ")[1]}`;
        let span2 = document.createElement("span");
        span2.textContent = listTitle.textContent;

        let div = document.createElement("div");
        div.setAttribute("class", "btn");
        div.appendChild(newDelete);
        li.appendChild(span);
        li.appendChild(span2);
        li.appendChild(div);

        sentList.appendChild(li);

        event.target.parentElement.parentElement.remove();
    }

    function deletting(event) {
        let listTitle = event.target.parentElement.parentElement.children[0];
        let listRecipientName = event.target.parentElement.parentElement.children[1];
        let li = document.createElement("li");
        let spanTitle = document.createElement("span");
        let spanRecipName = document.createElement("span");

        if (listRecipientName.textContent.includes('Recipient Name')) {
            spanTitle.textContent = 'To: ' + listRecipientName.textContent.split(': ')[1];
            spanRecipName.textContent = 'Title: ' + listTitle.textContent.split(': ')[1];
        } else {
            spanTitle.textContent = listTitle.textContent;
            spanRecipName.textContent = listRecipientName.textContent;
        }

        li.appendChild(spanTitle);
        li.appendChild(spanRecipName);
        deleteList.appendChild(li);

        event.target.parentElement.parentElement.remove();
    }
}

