function strikeThrough(){

let firstLineItem = document.querySelector('li');

firstLineItem.style.textDecoration = 'line-through';
}
strikeThrough()




function idImageSource(stringId, stringUrl){

    let image = document.querySelector(stringId)

        image.src = stringUrl

}
 

idImageSource('#image-1', 'https://www.enago.com/academy/wp-content/uploads/2017/10/Argument-Paper-750x330.jpg')
idImageSource('#image-2', 'https://s3.amazonaws.com/images.kateheddleston.com/galleries/39c77a5f-9973-4daf-87e7-2321811cce67/1429037426571_calvin-arguing_medium')
idImageSource('#image-3', 'https://www.paraphrase-online.com/blog/wp-content/uploads/2020/10/Rhetoric-for-a-copywriter-How-to-form-arguments.jpg')

function removeFirstLi(){

    let firstLi = document.querySelector('li');

        firstLi.remove()

}

removeFirstLi()
removeFirstLi()

function idFontSize(stringFontSize, stringId){

    let idFontSize = document.querySelector(stringId)

    idFontSize.style.fontSize = stringFontSize
}

idFontSize('45px', '#heading')


function appendDom(domElement){

    let listItem = document.querySelector('ul')

    listItem.appendChild(domElement)

}

let newListItem = document.createElement('img');
newListItem.src = 'https://blog.blackswansecurity.com/wp-content/uploads/argument.jpg'

appendDom(newListItem)

function idHeightThirty(stringId){

    let idheightThirty = document.querySelector(stringId)

    idheightThirty.style.height = '30px'
}

idHeightThirty('#image-2')

function invisElement(element){

    let invisElement = document.querySelector(element)

    invisElement.className = 'invisible'
}

invisElement('#image-3')

function createListItem(text){
    let listItem = document.createElement('li');
    listItem.innerText = text;
    return listItem;
}

let newListItemTwo = createListItem('arguments');
appendDom(newListItemTwo);

function newHeaderSizeAndText(size,text){
    let newHeader = document.createElement(`h${size}`);
    newHeader.innerText = text;
    return newHeader;
}

let newHeader = newHeaderSizeAndText('2', 'more arguments');
appendDom(newHeader);
