const canvas = document.getElementsByClassName('canvas')
const context = canvas[0].getContext('2d')

canvas[0].width = 480
canvas[0].height = 480

const CELL_SIZE = 30

const player = new Topology





drawGrid()
function drawGrid() {
    context.strokeStyle = 'blue'
    context.lineWidth = 0.5
    for (let i = 0; i < canvas[0].width / CELL_SIZE; i++) {
        context.beginPath()
        context.moveTo(i * CELL_SIZE, 0)
        context.lineTo(i * CELL_SIZE, canvas[0].height)
        context.stroke()
    }
    for (let i = 0; i < canvas[0].height / CELL_SIZE; i++) {
        context.beginPath()
        context.moveTo(0, i * CELL_SIZE)
        context.lineTo(canvas[0].width, i * CELL_SIZE)
        context.stroke()
    }
    context.strokeStyle = 'red'
    context.lineWidth = 2
    context.beginPath()
    context.moveTo(0, 60)
    context.lineTo(canvas[0].width, 60)
    context.stroke()


}