const form = document.querySelector('form')


form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const fit = document.getElementById('fit')
    const unfit = document.getElementById('unfit')
    const fat = document.getElementById('fat')
    const dkn = document.getElementById('dnk')
    

    if(height === '' || height <= 0 || isNaN(height)){
        results.innerHTML = "Please enter a valid Height in centi meters"
        dkn.style.display = 'block';
    }
    else if(weight === '' || weight <= 0 || isNaN(weight)){
        results.innerHTML = "Please enter a valid Weight in Kilo Grams (KG)"
        dkn.style.display = 'block';
    } else{
       const bmi = (weight/ ((height*height)/10000)).toFixed(2);
       //show the result
       if(bmi < 18.6){
            results.innerHTML = `Your BMI is ${bmi}, which suggests you are under weight.`
            unfit.style.display = 'block';

       }else if( bmi < 24.9){
            results.innerHTML = `Your BMI is ${bmi}, you are of normal weight.`
            fit.style.display = 'block';
       }else{
            results.innerHTML = `🚨Your BMI is ${bmi}, you are Over weight.🚨 `
            fat.style.display = 'block';
       }
    }
    
})


