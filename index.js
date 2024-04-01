// function createBox(){
//     const board = document.getElementById('boardHandle')
//     for (let i = 0;i<100;i++){
//         const box = document.createElement('div')
//         box.innerHTML = "1"
//         board.appendChild(box)
//     }
// }
window.onload = ()=>{
    const board = document.getElementById('boardHandle')
    for (let i = 0;i<100;i++){
        const box1 = document.createElement('div')
        const att1 = document.createAttribute('class')
        att1.value = "border-solid border-4 border-sky-500 p-5 m-0"
        box1.setAttributeNode(att1)
        
        box1.innerHTML 
        
        board.appendChild(box1)
    }
}