window.addEventListener('load', solve);

function solve() {

    let inputFirstName = document.getElementById('first-name');
    let inputSecondname = document.getElementById('last-name');
    let numberOfGuest = document.getElementById('people-count');
    let checkIn = document.getElementById('from-date');
    let daysCount = document.getElementById('days-count');
    let inputWithInfo = document.querySelector('.ticket-info-list');
    let inputConfirmed = document.querySelector('.confirm-ticket');
    let deletedList = document.querySelector('#main');
    let bodyId = document.getElementById('body');

    //Buttons

    let nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', reservated);
    nextBtn.disabled = false;

    function reservated(e) {
        e.preventDefault();

        let firstName = inputFirstName.value;
        let lastName = inputSecondname.value;
        let guestnumber = Number(numberOfGuest.value);
        let date = checkIn.value;
        let counterDays = Number(daysCount.value);

        if (inputFirstName.value == '' ||
            inputSecondname.value == '' ||
            numberOfGuest.value == '' ||
            //numberOfGuest <= 0 ||
            //new Date (checkIn.value) < checkIn || // Guest 0 oder -1 ??
            checkIn.value == '' ||
            daysCount.value == '') {
            return;
        }

        let liElement = document.createElement('li');
        liElement.classList.add('ticket');

        let articleElement = document.createElement('article');
        liElement.appendChild(articleElement);

        let h3ElementName = document.createElement('h3');
        h3ElementName.innerText = `Name: ${firstName} ${lastName}`;
        articleElement.appendChild(h3ElementName);

        let paragraphIn = document.createElement('p');
        paragraphIn.innerText = `From date: ${date}`;
        articleElement.appendChild(paragraphIn);

        let paragraphDays = document.createElement('p');
        paragraphDays.innerText = `For ${counterDays} days`;
        articleElement.appendChild(paragraphDays);

        let paragraphPeople = document.createElement('p');
        paragraphPeople.innerText = `For ${guestnumber} people`;
        articleElement.appendChild(paragraphPeople);

        let editBtn = document.createElement('button');
        editBtn.addEventListener('click', editReservation);
        editBtn.innerText = 'Edit';
        editBtn.classList.add('edit-btn');
        liElement.appendChild(editBtn);

        let btnContinue = document.createElement('button');
        btnContinue.addEventListener('click', confirmed);
        btnContinue.innerText = 'Continue';
        btnContinue.classList.add('continue-btn');
        liElement.appendChild(btnContinue);

        inputWithInfo.appendChild(liElement);
        nextBtn.disabled = true;

        inputFirstName.value = '';
        inputSecondname.value = '';
        numberOfGuest.value = '';
        checkIn.value = '';
        daysCount.value = '';

        function editReservation() {

            inputFirstName.value = firstName;
            inputSecondname.value = lastName;
            checkIn.value = date;
            numberOfGuest.value = guestnumber;
            daysCount.value = counterDays;

            nextBtn.disabled = false;

            liElement.remove()

        }

        function confirmed() {

            inputConfirmed.appendChild(liElement);

            editBtn.remove();
            btnContinue.remove();

            let btnConfirmed = document.createElement('button');
            btnConfirmed.classList.add('confirm-btn');
            btnConfirmed.innerText = 'Confirm';
            btnConfirmed.addEventListener('click', confirmedReservation);

            let btnCancel = document.createElement('button');
            btnCancel.classList.add('cancel-btn');
            btnCancel.innerText = 'Cancel';
            btnCancel.addEventListener('click', cancelReservation);

            liElement.appendChild(btnConfirmed);
            liElement.appendChild(btnCancel);

        }

        function confirmedReservation() {

            deletedList.remove()
            let h1Element = document.createElement('h1');
            h1Element.setAttribute('id', 'thank-you')
            h1Element.innerText = 'Thank you, have a nice day!';

            let backBtn = document.createElement('button');
            backBtn.setAttribute('id', 'back-btn');
            backBtn.innerText = 'Back'
            bodyId.appendChild(h1Element);
            bodyId.appendChild(backBtn);



        }

        function cancelReservation() {
            nextBtn.disabled = false;
            liElement.remove();

        }

    }

}





    
    
