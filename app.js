/*-------------------------------- Constants --------------------------------*/
const buttonNumberElements = document.querySelectorAll('.number')
console.dir(buttonNumberElements)
const buttonOperatorElements = document.querySelectorAll('.operator')
console.dir(buttonOperatorElements)
const buttonEqualsElement = document.querySelector('.equals')
console.dir(buttonEqualsElement)

const displayElement = document.querySelector('.display')

let xString = ''
let yString = ''
let operatorString = ''
//loop prints the numbers
// buttonNumberElements.forEach((number) =>{
//     console.log(number.textContent);
    
// })

//loop prints the operators
// buttonOperatorElements.forEach((operator) =>{
//     console.log(operator.textContent);
    
// })

/* Concat example
let text1 = "sea";
let text2 = "food";
let result = text1.concat(text2);
*/
buttonNumberElements.forEach((number) =>{
    number.addEventListener('click', () =>{
        if (operatorString ==='C' || operatorString ===''){
            xString = xString.concat(number.textContent)
            displayElement.textContent = `${xString}`
        // console.log(number.textContent)
        } else {
            yString = yString.concat(number.textContent)
            displayElement.textContent = `${yString}`
        }
    })
})

buttonOperatorElements.forEach((operator) =>{
    operator.addEventListener('click', () =>{
        if (operator.textContent === 'C') { //clear works a bit different
            operatorString = operator.textContent
            xString = ''
            yString = ''
            displayElement.textContent = xString
            console.log(xString);
            
        } else if (xString!='' && yString!='') {
            console.log('See Me!')
            if (yString=== '0' && operatorString === '/') {
                displayElement.textContent = 'Err div/0'
                xString = ''
                yString = ''
                operatorString = ''
            } else {
                console.log('plusequals')
                displayElement.textContent = String(doMath(xString, yString, operatorString)).concat(operatorString)
                yString = ''//clear y string to do more maths
                operatorString = ''
                xString = displayElement.textContent //result is our new X
            }
            
        }   
         else {  
//other operators all match how they are written as JS operators (I could probably leverage that as a LevelUp) --done 
        operatorString = operator.textContent
        displayElement.textContent = xString.concat(operatorString)
        // console.log(operator.textContent)
        }
        // displayElement.textContent = xString
        // console.log(xString);
        
    })
})

buttonEqualsElement.addEventListener('click', () => {
    if (yString=== '0' && operatorString === '/') {
        displayElement.textContent = 'Err div/0'
        xString = ''
        yString = ''
        operatorString = ''
    } else {
        displayElement.textContent = doMath(xString, yString, operatorString)
        yString = ''//clear y string to do more maths
        operatorString = ''
        xString = displayElement.textContent //result is our new X
    }
})


// const calcElement = document.querySelector('#calculator')
// console.dir(calcElement)
/*-------------------------------- Variables --------------------------------*/

let x = 0; //first number
let y = 0; //second number
let answer = 0; //result

//technically the way a calc works I think is x=x*y (replacing 1st val with solution as the equation is run but w/e)

/*------------------------ Cached Element References ------------------------*/
const bodyElement = document.querySelector('body')


/*----------------------------- Event Listeners -----------------------------*/
//listener to grab button presses


/*-------------------------------- Functions --------------------------------*/
//function to grab 
function doMath(x,y,o) {

    // if (o==='/') {
    //     return (Number(x)/Number(y))
    // } else if (o==='*') {
    //     return (Number(x)*Number(y))
    // } else if (o==='+') {
    //     return (Number(x)+Number(y))
    // } else if (o==='-') {
    //     return (Number(x)-Number(y))
    // }
    return eval(x.concat(o).concat(y))  
}
