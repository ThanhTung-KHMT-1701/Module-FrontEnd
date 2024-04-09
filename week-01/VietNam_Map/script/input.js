/* DEBUG */
{
    console.log(`input.js`)
}

function INPUT_ENTER (EVENT)
    {
        if (EVENT.key === "Enter")
        {
            /* DEBUG */
            {
                console.log(`EVENT`, EVENT)
                console.log(`EVENT.target`, EVENT.target)
                console.log(`EVENT.target.value`, EVENT.target.value)
            }

            let title_hometown = EVENT.target.value
            let ROOT = document.querySelector(`svg[data-alias="X-VietNam"]`)
            let HOMETOWN = ROOT.querySelector(`path[title="${title_hometown}"]`)

            /* DEBUG */
            {
                console.log(`ROOT`, ROOT)
                console.log(`HOMETOWN`, HOMETOWN)
            }

            if (HOMETOWN === null)
            {
                confirm("The hometown you entered does not exist.")
            }
            else
            {
                let CONTENT = document.querySelector(`div[data-alias="X-content"]`)
                    CONTENT.innerText = GET_DATA(title_hometown)

                    Object.assign
                    (
                        CONTENT.style,
                        {
                            visibility: "visible"
                        }
                    )

                SCROLL(HOMETOWN)
                SVG_CHANGE_COLOR(HOMETOWN)
            }
        }
    }

let INPUT = document.querySelector(`input[type="text"][id="hometown"]`)
    INPUT.addEventListener("keyup", INPUT_ENTER)