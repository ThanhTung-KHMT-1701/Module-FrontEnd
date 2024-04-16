let FORM_Status = true

function SHOW_DATA ()
{
    let GRID = document.querySelector(`div[class="PREVIEW"]`)

    if (FORM_Status)
    {
        while (GRID.lastElementChild)
        {
            GRID.lastElementChild.remove()
        }

        FORM_Status = false
        
        FORM.style.setProperty("display", "none")
        GRID.style.setProperty("display", "grid")
        
        for (let PROPERTY of Object.getOwnPropertyNames(DATABASE[0]))
        {
            let ITEM = document.createElement(`div`)
                ITEM.dataset.alias = "title"
                ITEM.innerText = PROPERTY

            GRID.appendChild(ITEM)
        }

        let ITEM = document.createElement(`div`)
            ITEM.dataset.alias = "title"
            ITEM.innerText = "Score"

        GRID.appendChild(ITEM)


        for (let STUDENT of DATABASE)
        {
            let A = 1
            let B = 0

            for (let PROPERTY of Object.getOwnPropertyNames(STUDENT))
            {
                if (PROPERTY === "NumberCredit")
                {
                    A = parseFloat(STUDENT[PROPERTY]) * 15
                }
                else if (PROPERTY === "TotalCredit")
                {
                    B += parseFloat(STUDENT[PROPERTY])
                }

                let ITEM = document.createElement(`div`)
                    ITEM.dataset.alias = PROPERTY
                    // ITEM.innerText = `${PROPERTY} : ${STUDENT[PROPERTY]}`
                    ITEM.innerText = STUDENT[PROPERTY]

                GRID.appendChild(ITEM)
            }

            let ITEM = document.createElement(`div`)
                ITEM.dataset.alias = "Score"
                // ITEM.innerText = `Score : ${(10 - B / A * 10).toFixed(2)}`
                ITEM.innerText = (10 - B / A * 10).toFixed(2)

            GRID.appendChild(ITEM)
        }
    }
    else
    {
        FORM_Status = true
        FORM.style.setProperty("display", "flex")
        GRID.style.setProperty("display", "none")
    }
}

let PREVIEW = document.querySelector(`img[alt="preview"]`)
    PREVIEW.onclick = SHOW_DATA