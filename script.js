
const container = document.querySelector('.container')

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
        cell.style.width = cellWidth
        cell.classList.add('cell')
        container.appendChild(cell)
    }
} 


const cells = container.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseenter', () => {
        cell.style.backgroundColor = 'grey'
    });
}); 



// Under construction

    const setGridBtn = document.querySelector('.setGrid')
    setGridBtn.addEventListener('click', changeGrid)



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

