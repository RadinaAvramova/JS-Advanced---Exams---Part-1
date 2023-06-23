function solve() {
    let inputs = document.getElementById("container").children;
    //console.log(inputs)
    let buttonAdd = inputs[4];
    //console.log(buttonAdd)
    buttonAdd.addEventListener("click", function (e) {
        e.preventDefault();
        let name = inputs[0].value
        let age = inputs[1].value
        let kind = inputs[2].value
        let currentOwner = inputs[3].value;
        //console.log(typeof(age))
        if (name !== "" && age > 0 && kind !== "" && currentOwner !== "") {
            let section = document.getElementById("adoption").children;
            //console.log(section[1]);
            let li = document.createElement("li")
            //console.log(name, age, kind, currentOwner)
            let strong = document.createElement("strong")
            strong.textContent = name;
            let strong2 = document.createElement("strong");
            strong2.textContent = age;
            let strong3 = document.createElement("strong");
            strong3.textContent = kind;

            let p = document.createElement("p")
            p.innerHTML=`<strong>${strong.textContent}</strong> is a <strong>${strong2.textContent}</strong> year old <strong>${strong3.textContent}</strong>`
            let span = document.createElement("span");
            span.textContent = `Owner: ${currentOwner}`
            let button = document.createElement("button");
            button.textContent = "Contact with owner"
            li.appendChild(p);
            li.appendChild(span);
            li.appendChild(button);
            section[1].appendChild(li)
console.log(li.children[0])
            inputs[0].value = ""
            inputs[1].value = ""
            inputs[2].value = ""
            inputs[3].value = ""
            button.addEventListener("click", function (e) {
                let newel = document.createElement("div");
                let input = document.createElement("input");
                input.placeholder = "Enter your names";
                let button2 = document.createElement("button");
                button2.textContent = "Yes! I take it!"
                //console.log(newel)
                newel.appendChild(input);
                newel.appendChild(button2);
                e.target.parentElement.appendChild(newel)
                e.target.parentElement.removeChild(e.target.parentElement.children[2]);
                button2.addEventListener("click", function (e) {
                    if (input.value !== "") {
                        let currentLi = e.target.parentElement.parentElement;
                        console.log(currentLi)
                        let li2 = document.createElement("li")
                        //console.log(name, age, kind, currentOwner)
                        let strong6 = document.createElement("strong")
                        strong6.textContent = name;
                        let strong23 = document.createElement("strong");
                        strong23.textContent = age;
                        let strong33 = document.createElement("strong");
                        strong33.textContent = kind;

                        let p5 = document.createElement("p");
                        p5.innerHTML=`<strong>${strong6.textContent}</strong> is a <strong>${strong23.textContent}</strong> year old <strong>${strong33.textContent}</strong>`
                        let span6 = document.createElement("span");
                        span6.textContent = `New Owner: ${input.value}`;
                        let button8 = document.createElement("button");
                        button8.textContent = "Checked";
                        li2.appendChild(p5);
                        li2.appendChild(span6);
                        li2.appendChild(button8);
                        let dd = document.getElementById("adopted").children;
                        dd[1].appendChild(li2);
                        e.target.parentElement.parentElement.remove();
                    button8.addEventListener("click",function (e){
                        e.target.parentElement.remove();
                    })
                    }
                })
            })
        }
    })
}
