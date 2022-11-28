const inputValueRef = document.querySelector('#validation-input')

const valueOfDataLength = inputValueRef.dataset.length

let inputTextLength = ""

inputValueRef.addEventListener("input",(event) => {
    console.log(event.currentTarget.value)
    inputTextLength = event.currentTarget.value
    console.log(inputTextLength.length)
})


inputValueRef.addEventListener("blur", () =>{
    if (inputTextLength.length == valueOfDataLength){
        inputValueRef.classList.add("valid")
        inputValueRef.classList.remove("invalid")
    } else {
        inputValueRef.classList.add('invalid')
        inputValueRef.classList.remove("valid")
    }
    console.log(inputValueRef.textContent)
})
