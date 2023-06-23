window.addEventListener("load", solve);

function solve() {

  let firstNameElement = document.querySelector('#first-name');
  let lastNameElement = document.querySelector('#last-name');
  let ageElement = document.querySelector('#age');
  let genderElement = document.querySelector('#genderSelect');
  let textElement = document.querySelector('#task');
  let newInput = document.querySelector('#in-progress');
  let messageInput = document.querySelector('#message');
  let finished = document.querySelector('#finished');
  let clearBtn = document.querySelector('#clear-btn');let clearInput = document.querySelector('#finished-wrapper');

  let sbmButton = document.querySelector('#form-btn');
  sbmButton.addEventListener('click', submit)
  sbmButton.disabled = false;


  function submit(e) {
    e.preventDefault()

    let firstName = firstNameElement.value;
    let lastName = lastNameElement.value;
    let age = ageElement.value;
    let gender = genderElement.value;
    let text = textElement.value

    if (firstName == '' // age als Number ?
      || lastName == ''
      || age == ''
      || gender == '') {
      return
    }


    //Make DOM
    let liElement = document.createElement('li');
    liElement.classList.add('each-line');

    let articleElement = document.createElement('article');
    let h4Element = document.createElement('h4');
    h4Element.innerText = `${firstName} ${lastName}`
    let p1Element = document.createElement('p')
    p1Element.innerText = `${gender}, ${age}`;
    let p2Element = document.createElement('p');
    p2Element.innerText = text;

    articleElement.appendChild(h4Element);
    articleElement.appendChild(p1Element);
    articleElement.appendChild(p2Element);
    liElement.appendChild(articleElement)

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.innerText = 'Edit';
    editBtn.addEventListener('click', edited)

    let completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.innerText = 'Mark as complete';
    completeBtn.addEventListener('click', completeFunc)

    liElement.appendChild(editBtn);
    liElement.appendChild(completeBtn);
    newInput.appendChild(liElement)

    firstNameElement.value = '';
    lastNameElement.value = '';
    ageElement.value = '';
    genderElement.value = '';
    textElement.value = '';

    //Counter


    function edited() {
      e.preventDefault()

      /* //let articleContent = currentDishes.getElementsByTagName('article')[0].children;

      let fullName = e.target.parentElement.children[0].children[0].textContent.split(' ');
      let ageEl = e.target.parentElement.children[0].children[1].textContent.split(', ');
      let textEl = e.target.parentElement.children[0].children[2].textContent.split(', ');
      firstNameElement.value = fullName[0];
      lastNameElement.value = fullName[1];
      ageElement.value = ageEl[1]
      textElement.value = textEl; */

      /* let currentDishes = e.target.parentElement;
      let articleContent = currentDishes.getElementsByTagName('article')[0].children;
      let fNameValue = articleContent[0].textContent.split(' ')[0];
      let lNameValue = articleContent[0].textContent.split(' ')[1];
      let aValue = articleContent[1].textContent.split(' ')[1];
      let teValue = articleContent[2].textContent;
      firstNameElement.value = fNameValue;
      lastNameElement.value = lNameValue;
      ageElement.value = aValue;
      textElement.value = teValue */

      firstNameElement.value = firstName;
      lastNameElement.value = lastName;
      ageElement.value = age;
      textElement.value = text;
      liElement.remove()
    }
    function completeFunc(e) {
      e.preventDefault()

      

      let currentFunc = e.target.parentElement.children[0].children;
      //let sendenFunc ??

      let nameVa = e.target.parentElement.children[0].children[0].textContent.split(' ')[0]
      let lastVa = e.target.parentElement.children[0].children[0].textContent.split(' ')[1]
      let gengenElement = e.target.parentElement.children[0].children[1].textContent.split(', ')[0]
      let ageageElemet = e.target.parentElement.children[0].children[1].textContent.split(', ')[1]


      firstNameElement.value = nameVa;
      lastNameElement.value = lastVa;
      genderElement.value = gengenElement;
      ageElement.value = ageageElemet;

      
      //debugger

      let rowTable = document.createElement('li');
      rowTable.classList.add('each-line');
      let aElement = document.createElement('article');
      let p1 = document.createElement('p');
      p1.textContent = `${firstNameElement.value}, ${lastNameElement.value}`
      let p2 = document.createElement('p');
      p2.textContent = `${genderElement.value}, ${ageElement.value}`;

      aElement.appendChild(p1);
      aElement.appendChild(p2);
      rowTable.appendChild(aElement)
      finished.appendChild(rowTable)

      firstNameElement.value = '';
      lastNameElement = '';
      ageElement.value = '';
      genderElement.value = '';
      textElement.value = '';
    }

    
    clearBtn.addEventListener('click', () => {
      finished.remove()
    })
  }
}