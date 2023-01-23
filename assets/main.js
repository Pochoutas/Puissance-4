let round = 1
let red;
let yellow;
let rows = document.querySelectorAll(".cellule");
let gameover = false
let message = document.querySelector("#message");
let cells = document.querySelectorAll('.cell')
let replay = document.querySelector("#replay")
let scoreyellow = document.querySelector("#scoreyellow");
let scorered = document.querySelector("#scorered");
let scorereddom = 0;
let scoreyellowdom = 0;


replay.addEventListener('click', replaygame)

rows.forEach((row) => {
    let cells = row.querySelectorAll('.cell')
    let dataCell = 0
    cells.forEach((cell) => {
        cell.setAttribute("data-cell", dataCell)
        dataCell++
        cell.addEventListener('click', function () {
            play(cell)
        })
    })
})

function play(elem) {
    if (!gameover) {
        replay.style.visibility = "hidden"
        let indexCell = elem.getAttribute('data-cell');
        let rows = document.querySelectorAll('.cellule')
        for (let i = rows.length - 1; i >= 0; i--) {
            let cell = rows[i].querySelectorAll('.cell')[indexCell]
            if (round % 2 != 0) {
                if (cell.style.backgroundColor == "") {
                    cell.style.backgroundColor = 'red'

                    round++
                   
                    break
                }
            } else {
                if (cell.style.backgroundColor == "") {
                    cell.style.backgroundColor = 'yellow'

                    round++
                    break
                }
            }
        }  checkvictory()
        }
    }


function checkvictory() {
    for (let i = 0; i < cells.length - 1; i++) {
        if (cells[i].style.backgroundColor != "") {

            if (cells[i].classList.contains("vdiagdown") && cells[i].style.backgroundColor == cells[i + 8].style.backgroundColor && cells[i].style.backgroundColor == cells[i + 16].style.backgroundColor && cells[i].style.backgroundColor == cells[i + 24].style.backgroundColor) {
                gameover = true
                replay.style.visibility = "visible"
                message.style.display = "block"
                if(cells[i].style.backgroundColor=='red'){
                    scorereddom++
                    scorered.innerHTML=scorereddom
                }else if (cells[i].style.backgroundColor=='yellow'){
                    scoreyellowdom++
                    scoreyellow.innerHTML=scoreyellowdom
                }
                message.innerHTML=`Victoire de ${cells[i].style.backgroundColor}`

            }
            if (cells[i].classList.contains("vline") && cells[i].style.backgroundColor == cells[i + 1].style.backgroundColor && cells[i].style.backgroundColor == cells[i + 2].style.backgroundColor && cells[i].style.backgroundColor == cells[i + 3].style.backgroundColor) {
                gameover = true
                replay.style.visibility = "visible"
                message.style.display = "block"
                if(cells[i].style.backgroundColor=='red'){
                    scorereddom++
                    scorered.innerHTML=scorereddom

                }else if (cells[i].style.backgroundColor=='yellow'){
                    scoreyellowdom++
                    scoreyellow.innerHTML=scoreyellowdom
                }
                message.innerHTML=`Victoire de ${cells[i].style.backgroundColor}`

            }
            if (cells[i].classList.contains("vcolumn") && cells[i].style.backgroundColor == cells[i + 7].style.backgroundColor && cells[i].style.backgroundColor == cells[i + 14].style.backgroundColor && cells[i].style.backgroundColor == cells[i + 21].style.backgroundColor) {
                gameover = true
                replay.style.visibility = "visible"
                message.style.display = "block"
                if(cells[i].style.backgroundColor=='red'){
                    scorereddom++
                    scorered.innerHTML=scorereddom
                }else if (cells[i].style.backgroundColor=='yellow'){
                    scoreyellowdom++
                    scoreyellow.innerHTML=scoreyellowdom
                }
               message.innerHTML= `Victoire de ${cells[i].style.backgroundColor}`

            }
            if (cells[i].classList.contains("vdiagup") && cells[i].style.backgroundColor == cells[i - 6].style.backgroundColor && cells[i].style.backgroundColor == cells[i - 12].style.backgroundColor && cells[i].style.backgroundColor == cells[i - 18].style.backgroundColor) {
                gameover = true
                message.style.display = "block"
                replay.style.visibility = "visible"
                if(cells[i].style.backgroundColor=='red'){
                    scorereddom++
                    scorered.innerHTML=scorereddom
                }else if (cells[i].style.backgroundColor=='yellow'){
                    scoreyellowdom++
                    scoreyellow.innerHTML=scoreyellowdom
                }
              message.innerHTML=`Victoire de ${cells[i].style.backgroundColor}`

            } if (round == 43) {
                replay.style.visibility = "visible"
                message.innerHTML = "Egalité"
            }
        }
    }
    return false
}
function replaygame() {
    round = 1
    gameover = false
    message.style.display = "none"
    for (let i = cells.length - 1; i >= 0; i--) {
        cells[i].style.backgroundColor = ""
    }
    play()
}

