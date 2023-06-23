function solve() {
   
    let nextButton = document.getElementById("next-btn");
      nextButton.addEventListener("click", function nextFunc(event) {
         event.preventDefault();
         
         let carModel = document.getElementById("car-model")
         let carYear =document.getElementById("car-year")
         let partName = document.getElementById("part-name")
         let partNumber = document.getElementById("part-number")
         let condition = document.getElementById("condition")
         let valuesArray = [carModel.value, Number(carYear.value), partName.value, Number(partNumber.value), condition.value ]
 
         if(!valuesArray.includes("") && 1980 < valuesArray[1] && valuesArray[1] < 2023) {
            let image = document.getElementById("complete-img");
            image.style.visibility = "hidden";
            let paragraph = document.getElementById("complete-text");
            paragraph.textContent = "";
            
            let currentLi = document.createElement("li");
            currentLi.classList.add("part-content");
 
            let currentArticle = document.createElement("article");
 
            let modelP = document.createElement("p");
            modelP.textContent = `Car Model: ${valuesArray[0]}`
 
            let yearP = document.createElement("p");
            yearP.textContent = `Car Year: ${valuesArray[1]}`
 
            let partNameP = document.createElement("p");
            partNameP.textContent = `Part Name: ${valuesArray[2]}`
 
            let partNumberP = document.createElement("p");
            partNumberP.textContent = `Part Number: ${valuesArray[3]}`
 
            let conditionP = document.createElement("p");
            conditionP.textContent = `Condition: ${valuesArray[4]}`;
 
            let editButton = document.createElement("button");
            editButton.classList.add("edit-btn");
            editButton.textContent = "Edit";
 
            let continueButton = document.createElement("button");
            continueButton.classList.add("continue-btn");
            continueButton.textContent = "Continue";
            
            currentArticle.appendChild(modelP);
            currentArticle.appendChild(yearP);
            currentArticle.appendChild(partNameP);
            currentArticle.appendChild(partNumberP);
            currentArticle.appendChild(conditionP);
 
            currentLi.appendChild(currentArticle);
            currentLi.appendChild(editButton);
            currentLi.appendChild(continueButton);
 
            let parentUl = document.getElementsByClassName("info-list")[0];
            parentUl.appendChild(currentLi);
 
            carModel.value = "";
            carYear.value = "";
            partName.value = "";
            partNumber.value = "";
            condition.value = "";
 
            nextButton.disabled = true;
 
            editButton.addEventListener("click", function editFunc() {
            carModel.value = valuesArray[0];
            carYear.value = valuesArray[1];
            partName.value = valuesArray[2];
            partNumber.value = valuesArray[3];
            condition.value = valuesArray[4];
 
            currentLi.remove();
            nextButton.disabled = false;
            })
 
            continueButton.addEventListener("click", function continueFunc() {
            currentLi.remove()
 
            let continueLi = document.createElement("li");
            continueLi.classList.add("part-content");
 
            continueLi.appendChild(currentArticle);
 
            let confirmButton = document.createElement("button");
            confirmButton.classList.add("confirm-btn");
            confirmButton.textContent = "Confirm";
            
            let cancelButton = document.createElement("button");
            cancelButton.classList.add("cancel-btn")
            cancelButton.textContent = "Cancel";
            
            continueLi.appendChild(confirmButton);
            continueLi.appendChild(cancelButton);
 
            let confirmUl = document.getElementsByClassName("confirm-list")[0];
            confirmUl.appendChild(continueLi);
 
            confirmButton.addEventListener("click", function confirmFunc() {
                 continueLi.remove();
                 nextButton.disabled = false;
                 image.style.visibility = "visible";
                 paragraph.textContent = "Part is Ordered!"
            })
 
            cancelButton.addEventListener("click", function cancelFunc() {
                 continueLi.remove();
                 nextButton.disabled = false;
            })
         })
 
         }
    })
 }




 window.addEventListener('load', solve);
 
function solve() {
        let carModelElement = document.getElementById('car-model');
        let carYearElement = document.getElementById('car-year');
        let partNameElement = document.getElementById('part-name');
        let partNumberElement = document.getElementById('part-number');
        let conditionElement = document.getElementById('condition');
 
        let nextBtn = document.getElementById('next-btn');
        let ulInfoList = document.querySelector('.info-list');
        let confirmList = document.querySelector('.confirm-list');
 
        let completeImg = document.getElementById('complete-img'); //?
        let completeText = document.getElementById('complete-text');//?
 
        nextBtn.addEventListener('click', onEdit);
 
function onEdit(e){
        e.preventDefault();
 
        let carModel = carModelElement.value;
        let carYear = Number(carYearElement.value);
        let partName = partNameElement.value;
        let partNumber = partNumberElement.value;
        let condition = conditionElement.value;
 
        if(!carModel || !carYear || !partName || !partNumber || !condition || carYear < 1980 || carYear > 2023){
                return;
        }
 
        completeImg.style.visibility = 'hidden';
        completeText.textContent = '';
 
        let li = document.createElement('li');
        li.setAttribute('class', 'part-content');
        //li.classList.add('part-content');
 
        let article = document.createElement('article');
 
        let pCarModel = document.createElement('p');
        pCarModel.textContent = `Car Model: ${carModel}`;
 
        let pCarYear = document.createElement('p');
        pCarYear.textContent = `Car Year: ${carYear}`;
 
        let pPartName = document.createElement('p');
        pPartName.textContent = `Part Name: ${partName}`;
 
        let pPartNumber = document.createElement('p');
        pPartNumber.textContent = `Part Number: ${partNumber}`;
 
        let pCondition = document.createElement('p');
        pCondition.textContent = `Condition: ${condition}`;
 
        let editBtn = document.createElement('button');
        editBtn.setAttribute('class', 'edit-btn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', onEdit);
 
        let continueBtn = document.createElement('button');
        continueBtn.setAttribute('class', 'continue-btn');
        continueBtn.textContent = 'Continue';
        continueBtn.addEventListener('click', onContinue);
 
        article.appendChild(pCarModel);
        article.appendChild(pCarYear);
        article.appendChild(pPartName);
        article.appendChild(pPartNumber);
        article.appendChild(pCondition);
 
        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);
 
        ulInfoList.appendChild(li);
 
        carModelElement.value = '';
        carYearElement.value = '';
        partNameElement.value = '';
        partNumberElement.value = '';
        conditionElement.value = '';
 
        nextBtn.disabled = true;
 
        function onEdit(){
                li.remove();
 
                carModelElement.value = carModel;
                carYearElement.value = carYear;
                partNameElement.value = partName;
                partNumberElement.value = partNumber;
                conditionElement.value = condition;
 
                nextBtn.disabled = false;
        }
 
        function onContinue(){
                let liConfirm = document.createElement('li');
                liConfirm.setAttribute('class', 'part-content');
 
                let confirmBtn = document.createElement('button');
                confirmBtn.setAttribute('class', 'confirm-btn');
                confirmBtn.textContent = 'Confirm';
                confirmBtn.addEventListener('click', onConfirm);
 
                let cancelBtn = document.createElement('button');
                cancelBtn.setAttribute('class', 'cancel-btn');
                cancelBtn.textContent = 'Cancel';
                cancelBtn.addEventListener('click', onCancel);
 
                liConfirm.appendChild(article);
                liConfirm.appendChild(confirmBtn);
                liConfirm.appendChild(cancelBtn);
 
                confirmList.appendChild(liConfirm);
 
                li.remove();
 
                function onConfirm(){
                        liConfirm.remove();
                        nextBtn.disabled = false;
                        completeImg.style.visibility = 'visible';
                        completeText.textContent = 'Part is Ordered!';
                }
 
                function onCancel(){
                        liConfirm.remove();
                        nextBtn.disabled = false;
                }
        }
}
};