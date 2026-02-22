const container = document.querySelector('.container')
const setGridBtn = document.querySelector('.setGrid')
setGridBtn.addEventListener('click', changeGrid)
drawGrid(container)


/**
 * Clears the existing grid and draws a new one in the available space of the container.
 * @param {HTMLDivElement} container - The container element for the grid
 * @param {number} gridWidth - The width of the grid.
 */
function drawGrid(container, gridWidth = 16) {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild)
    }

    const cellWidth = String(container.offsetWidth / gridWidth) + 'px'
    const gridSize = Math.pow(gridWidth, 2)
    for (let i = 0; i < gridSize; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.style.width = cellWidth
        cell.style.opacity = 0;
        cell.addEventListener('mouseenter', () => {
            if (cell.style.opacity < 0.9) {
                cell.style.opacity = Number(cell.style.opacity) + 0.1
            }
        })
        container.appendChild(cell)
    }
} 


/**
 * Prompt for the grid width, check input validity and call drawGrid to draw a new grid.
 */
function changeGrid() {
    const input = prompt('How many cells do you want the grid to be wide (max. 100)?', '')
    let cells = parseInt(input)
    if (!Number.isInteger(cells) || cells <= 0 || cells > 100) {
        alert('Not a valid integer. The grid will be set to 16x16 cells.')
        cells = 16;
    }
    drawGrid(container, cells);
}
