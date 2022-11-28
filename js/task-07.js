const sizeBySlider = document.querySelector('#font-size-control')
const targetText = document.querySelector('#text')

let currentSliderValue = ''

sizeBySlider.addEventListener('input' , (event) => {
    currentSliderValue = event.currentTarget.value
    targetText.style.fontSize = `${currentSliderValue}px`
    console.log(currentSliderValue)
})



