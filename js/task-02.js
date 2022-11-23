const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
]

//Start

let listItem

const arrayForList = []

const myList = document.querySelector("#ingredients")

for (let i = 0; i < ingredients.length; i += 1) {
    listItem = document.createElement("li")
    listItem.textContent = `${ingredients[i]}`
    arrayForList.push(listItem)
}

myList.append(...arrayForList)
console.log(listItem)
console.log(arrayForList)

// можно через .map и цикл послать в функцию