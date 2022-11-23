console.log(`Number of categories: ${categories.children.length}`);


const documentNode = categories.children;

// Animals
const animalsNode = documentNode[0];

const animalsText = animalsNode.firstElementChild.textContent;
console.log(`Category: ${animalsText}`);

const animalsElements = animalsNode.lastElementChild.children.length;
console.log(`Elements: ${animalsElements}`);


//Products

const productsNode = documentNode[1];

const productsText = productsNode.firstElementChild.textContent;
console.log(`Category: ${productsText}`);

const productsElements = productsNode.lastElementChild.children.length;
console.log(`Elements: ${productsElements}`);

//Technologies

const technologiesNode = documentNode[2];

const technologiesText = technologiesNode.firstElementChild.textContent;
console.log(`Category: ${technologiesText}`);

const technologiesElements = technologiesNode.lastElementChild.children.length;
console.log(`Elements: ${technologiesElements}`);