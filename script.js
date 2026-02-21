
const container = document.querySelector('.container')

console.log(container.offsetWidth)
let gridSize = 16;
let gridXaxis = Math.sqrt(gridSize)

let cellWidth = String(container.offsetWidth / Math.sqrt(gridSize)) + 'px'


for (let i = 0; i < gridSize; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.style.width = cellWidth
    container.appendChild(cell)
}

const cells = container.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseenter', () => {
        cell.style.backgroundColor = 'grey'
    });
}); 



// Under construction

    const setGridBtn = document.querySelector('.setGrid')
    setGridBtn.addEventListener('click', setGrid)



    function changeGrid() {
        const input = prompt('How many cells do you want the grid to be wide (max. 100)?', '')
        let cells = parseInt(input)
        if (Number.isInteger(cells) && cells > 0 && cells <= 100) {
            console.log('Valid integer:', cells)
        } else {
            alert('Not a valid integer. The grid will be set to 16x16 cells.')
            let cells = 16;
            console.log('Default integer:', cells)
        }
        console.log(typeof cells)
    }

    function setGrid(gridWidth, container) {
        for (let i = 0; i < gridWidth^2; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.style.width = cellWidth
        container.appendChild(cell)
        }
    } 