// function createBox(){
//     const board = document.getElementById('boardHandle')
//     for (let i = 0;i<100;i++){
//         const box = document.createElement('div')
//         box.innerHTML = "1"
//         board.appendChild(box)
//     }
// }
const boardItem = [];
var turn = 0;
window.onload = () => {
    const board = document.getElementById('boardHandle');
    for (let i = 0; i < 396; i++) {
        const box1 = document.createElement('div');
        const att1 = document.createAttribute('class');
        const att2 = document.createAttribute('id');
        att2.value = `${i % 36} ${Math.floor(i/36)}`;
        att1.value = 'button';
        box1.addEventListener('click', () => {
            if (turn == 0) {
                box1.innerHTML = 'X';
                turn = 1;

                iswin(i % 36,Math.floor(i/36));
            } else if (turn == 1) {
                box1.innerHTML = 'O';
                turn = 0;

                iswin(i % 36,Math.floor(i/36));
            }

            // boardItem.push(att2.value)
            // console.log(boardItem)
        });
        box1.setAttributeNode(att1);
        box1.setAttributeNode(att2);
        // box1.innerHTML = "⠀"

        board.appendChild(box1);
    }
};
var layout = [];
function getBoard() {
    const board = document.getElementById('boardHandle');
    var z = [];
    layout = [];
    for (let i = 1; i <= 396; i++) {
        z.push(board.children[i - 1].innerHTML);
        if (i % 36 == 0) {
            layout.push(z);
            z = [];
        }
    }
    return layout;
}
function iswin(x,y) {
    const countAxes = {
        horizontal: 1,
        vertical: 1,
        diagonal1: 1,
        diagonal2: 1,
    };
    const dirs = [
        [-1, 0, 'horizontal'],
        [1, 0, 'horizontal'],
        [0, -1, 'vertical'],
        [0, 1, 'vertical'],
        [-1, -1, 'diagonal1'],
        [1, 1, 'diagonal1'],
        [-1, 1, 'diagonal2'],
        [1, -1, 'diagonal2'],
    ];
    // const char =
    //check moi huong cho den khi gap vat can luu lai diem doi huong nguoc lai
}
