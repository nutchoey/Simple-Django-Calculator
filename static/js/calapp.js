const numKeys = [];
const opns = [];
const res = document.querySelector("#resultArea");
const clrBtn = document.querySelector("#clrTxt");
const delBtn = document.querySelector("#del");
const eqBtn = document.querySelector("#eq");
const decPoint = document.querySelector("#decp");
const opnSyms = ["+", "-", "*", "/"];

for(let i=0; i<9 ; i++){
    const qs = "#num" + i;
    numKeys.push(document.querySelector(qs));
    numKeys[i].addEventListener("click", () => {
        res.textContent += i;
    });
}

for(let i=0; i<=3 ; i++){
    const qs = "#op" + i;
    opns.push(document.querySelector(qs));
    opns[i].addEventListener("click", () => {
        res.textContent += opnSyms[i];
    });

}

clrBtn.addEventListener("click", () => {
    res.textContent = "";
});

delBtn.addEventListener("click", () => {
    res.textContent = res.textContent.slice(0, -1);
});

decPoint.addEventListener("click", () => {
    res.textContent += ".";
});

eqBtn.addEventListener("click", () => {
    try{
        res.textContent = eval(res.textContent);
    }
    catch(error){
        res.textContent = "Error";
    }
});