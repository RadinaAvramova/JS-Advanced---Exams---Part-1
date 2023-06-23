function solve() {
    let form = document.getElementsByTagName("form")[0];
    //console.log(form.children)
    let first = form.children[1];
    let second = form.children[3];
    let third = form.children[5];
    let button = form.children[6];
    let totalPrice = 0;
    let totalProfit = document.getElementsByTagName("h1")[1];
    button.addEventListener("click", function (e) {
        e.preventDefault();
        if (first.value != "" && second.value >= 0 && third.value >= 0) {
            //console.log("vutre")
            

            if (second.value < 2000) {
                let x = document.createElement("div");
                x.classList.add("book");

                let parg = document.createElement("p");

                parg.textContent = `${first.value} [${second.value}]`;

                let button = document.createElement("button");
                button.textContent = `Buy it only for ${(third.value * 0.85).toFixed(2)} BGN`;
                x.appendChild(parg);
                x.appendChild(button);
                document.getElementsByClassName("bookShelf")[0].appendChild(x);
            } else {
                let x = document.createElement("div");
                x.classList.add("book");

                let parg = document.createElement("p");

                parg.textContent = `${first.value} [${second.value}]`;

                let button = document.createElement("button");
                button.textContent = `Buy it only for ${third.value} BGN`;

                let button2 = document.createElement("button");
                button2.textContent = `Move to old section`;

                x.appendChild(parg);
                x.appendChild(button);
                x.appendChild(button2);
                document.getElementsByClassName("bookShelf")[1].appendChild(x);
            }

            //console.log(x)
        } else {
            //console.log("vunka")
        }
    })
    document.addEventListener("click", function (e) {
        if (e.target.textContent === "Move to old section") {
            let div=e.target.parentNode
            let elemenpP=div.getElementsByTagName("p");
            //console.log(elemenpP.textContent)
            let childs=e.target.children;
            let x = document.createElement("div");
            x.classList.add("book");

            let parg = document.createElement("p");

            parg.textContent = `${first.value} [${second.value}]`;

            let button = document.createElement("button");
            button.textContent = `Buy it only for ${(third.value * 0.85).toFixed(2)} BGN`;
            x.appendChild(parg);
            x.appendChild(button);
            document.getElementsByClassName("bookShelf")[0].appendChild(x);
        div.remove();
        return;
        }
        let div=e.target.textContent;
        //console.log(div)
        let spl=div.split(" ");
        //console.log(spl)
        if(spl[0]==="Buy"&&spl[1]==="it"&&spl[2]==="only"){
            let price2 = +spl[4];
            //console.log(price2)
            totalPrice += price2;
            totalProfit.textContent = `Total Store Profit: ${totalPrice.toFixed(2)} BGN`
            let element=e.target.parentNode;
            element.remove();
        }
        
    });



}