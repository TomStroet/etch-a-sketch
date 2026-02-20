
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
