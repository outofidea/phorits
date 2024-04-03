// function createBox(){
//     const board = document.getElementById('boardHandle')
//     for (let i = 0;i<100;i++){
//         const box = document.createElement('div')
//         box.innerHTML = "1"
//         board.appendChild(box)
//     }
// }
const boardItem = []
window.onload = ()=>{
    const board = document.getElementById('boardHandle')
    for (let i = 0;i<396;i++){

        const box1 = document.createElement('div')
        const att1 = document.createAttribute('class')
        const att2 = document.createAttribute('id')
        att2.value=`${((i)%36)} ${String(((i)/36))[0]}`
        att1.value = "button"
        box1.setAttributeNode(att1)
        box1.setAttributeNode(att2)
        box1.innerHTML = "⠀"
        
        board.appendChild(box1)
    }
}
function lmao(){
    const board = document.getElementById('boardHandle')
    var z = []
    var layout = []
    for (let i =1;i<=396;i++){
        z.push(board.children[i-1].innerHTML)
        if (i%36==0){
            layout.push(z)
            z=[]
        }
    }
}