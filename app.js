const grid = (num) => {
    
    console.log('num4 ', num)
    
    console.log('num1', num)
    
    let container = document.querySelector('.container')
    let boxes = document.querySelectorAll('.item')

    boxes.forEach((div) => {
        div.remove()
    })    
    container.setAttribute('style', `grid-template-rows: repeat(${num}, 1fr); grid-template-columns: repeat(${num}, 1fr);`)
    boxes = num*num
    for (let i = 0; i < boxes; i++) {
        console.log('num 2', num)
        let row = document.createElement('div')
        //row.setAttribute('style', `background-color: ${random_rgba()};`)
        row.setAttribute('class', 'item')
        container.appendChild(row)
    }
}

function random_rgba() {
    const o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

const colorBoxes = (color) => {
    const items = document.querySelectorAll('.item')
    items.forEach((item) => {
    item.addEventListener('mouseout', (e) => {
        console.log(e)
        console.log('Hello')
        if (color == 0) {
            item.setAttribute('style', `background-color: ${random_rgba()};`)
        }else{
            item.setAttribute('style', `background-color: ${color};`)
        }
        
    })
})
}

const updateRange = (num) => {
    let rangeCount = document.querySelector('#range-count')
    let userBox = document.querySelector('#user-box')

    rangeCount.textContent = `${num} X ${num}`
    userBox.value = num
}

const updateColorInput = (color) => {
    document.querySelector('#color').value = color
}




const listener = {
    squareNum: 16,
    color: document.querySelector('#color').value,
}


grid(listener.squareNum)
colorBoxes(listener.color)
updateRange(16)
updateColorInput(listener.color)







document.querySelector('#user-box').addEventListener('input', (e) => {
    listener.squareNum = e.target.value
    updateRange(listener.squareNum)

    
})

document.querySelector('#user-box').addEventListener('mouseup', (e) => {
    grid(listener.squareNum)
    
    if (rainbow.classList.contains("button1")) {
        colorBoxes(0)
    }else{
        colorBoxes(listener.color)
    }
    

})

document.querySelector('#color').addEventListener('input', (e) => {
    console.log(e.target.value)
    listener.color = e.target.value
    colorBoxes(listener.color)

    if (rainbow.classList.contains("button1")) {
        document.querySelector('#rainbow').classList.toggle("button1")
    }
    
    
})



document.querySelector(".reset").addEventListener('click', (e) => {
    grid(listener.squareNum)
    
    if (rainbow.classList.contains("button1")) {
        colorBoxes(0)
    }else{
        colorBoxes(listener.color)
    }
})

document.querySelector('#rainbow').addEventListener('click', (e) => {
    let rainbow = document.querySelector('#rainbow')
    rainbow.classList.toggle("button1")

    if (rainbow.classList.contains("button1")) {
        console.log('true')
        colorBoxes(0)
    }else{
        //listener.color = document.querySelector('#color').value
        
        colorBoxes(listener.color)
        updateColorInput(listener.color)
    }
    //ocument.querySelector('#color').value = listener.color
})



