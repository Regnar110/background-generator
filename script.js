//Wersja samorobna. Prostsze rozwiązanie w plikach gotowych z kursu.

const inputColorOne = document.getElementById("inputcolorone");
const inputColorTwo = document.getElementById("inputcolortwo");
const documentBody = document.getElementsByTagName("body")[0];
const actualColor = document.getElementById("actualcolor");
documentBody.style.backgroundImage = `linear-gradient(to right, #7380dd, #e33535)`;
actualColor.textContent =`linear-gradient (to right, ${inputColorOne.value}, ${inputColorTwo.value})`

const stringifyAndParseValues = function(colorV) {
    let colorData=JSON.parse(JSON.stringify({colorV}));
    return colorData.colorV;
}

const changeColor = function(){
    if(event.target.id === "inputcolorone") {
        let colorOneValue = inputColorOne.value
        let readyValue = stringifyAndParseValues(colorOneValue);
        documentBody.style.backgroundImage = `linear-gradient(to right, ${readyValue}, ${inputColorTwo.value})`;
        actualColor.textContent = `linear-gradient (to right, ${readyValue}, ${inputColorTwo.value})`

    } else {
        let colorTwoValue = inputColorTwo.value
        let readyValue = stringifyAndParseValues(colorTwoValue);
        documentBody.style.backgroundImage = `linear-gradient(to right,${inputColorOne.value}, ${readyValue})`;
        actualColor.textContent = `linear-gradient (to right, ${inputColorOne.value}, ${readyValue})`
    }
}

inputColorOne.addEventListener("input", changeColor)
inputColorTwo.addEventListener("input", changeColor)