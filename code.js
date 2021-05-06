const btn = document.querySelector('button');
const nameInput = document.querySelector('#name');
const weightInput = document.querySelector('#weight');
const heightInput = document.querySelector('#height');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');

nameInput.addEventListener('input', (e) => {
})

weightInput.addEventListener('input', (e) => {
})

heightInput.addEventListener('input', (e) => {
})


BMIresult = () => {
    if(nameInput.value === "") {
        alert("add your name");
    } else if(weightInput.value === "") {
        alert("add your weight") 
    } else if(heightInput.value === "") {
        alert("add your height")
    } else {
        
        let weight = parseFloat(weightInput.value);
        let height = parseFloat(heightInput.value);
        let BMIindex = (weight / (height / 100 * height / 100)).toFixed(1);
        // console.log(weight + height);
        h2.textContent = `${nameInput.value} - your BMI index: ${BMIindex}`;


        const addResult = () => {
            if(BMIindex < 18.5) {
                h3.textContent = 'you\'\ re underweight';
            } else if(BMIindex >= 18.6 && BMIindex < 24.9) {
                h3.textContent = 'your weight is good';
            } else if(BMIindex >= 25 && BMIindex < 29.9) {
                h3.textContent = 'unfortunately your weight is too high'
            } else {
                h3.textContent = 'be careful. You\'\ re overweight';
            }
        }
        
addResult()
        nameInput.value = "";
        weightInput.value = "";
        heightInput.value = "";

    }
    
}



btn.addEventListener('click', BMIresult);
