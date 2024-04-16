let DATABASE = []

let FORM = document.querySelector(`form`)

    FORM.onsubmit = function (EVENT)
    {
        EVENT.preventDefault();
    }

function OBSERVE_INPUT_RANGE (EVENT)
{
    EVENT.target.nextElementSibling.innerText = `${EVENT.target.value} tiết`;
    EVENT.target.nextElementSibling.dataset.value = parseInt(EVENT.target.value);
}

function ADD_INPUT_DATE ()
{
    let CLONE_INPUT_DATE = document.createElement(`input`)
        CLONE_INPUT_DATE.type = "date"
        CLONE_INPUT_DATE.name = "data-date"

    let CLONE_INPUT_RANGE = document.createElement(`input`)
        CLONE_INPUT_RANGE.type = "range"
        CLONE_INPUT_RANGE.name = "data-lesson"

        CLONE_INPUT_RANGE.min = 0
        CLONE_INPUT_RANGE.max = 4
        CLONE_INPUT_RANGE.step = 1
        CLONE_INPUT_RANGE.value = 2

        CLONE_INPUT_RANGE.oninput = OBSERVE_INPUT_RANGE

    let CLONE_INPUT_LOG = document.createElement(`p`)
        CLONE_INPUT_LOG.className = "data-lesson"
        CLONE_INPUT_LOG.innerText = `2 tiết`
        CLONE_INPUT_LOG.dataset.value = 2

    let DATA_ITEM = document.createElement('div')
        DATA_ITEM.className = "data-date-item"

        DATA_ITEM.appendChild(CLONE_INPUT_DATE)
        DATA_ITEM.appendChild(CLONE_INPUT_RANGE)
        DATA_ITEM.appendChild(CLONE_INPUT_LOG)

    let LIST_DATE = document.querySelectorAll(`form > div[data-alias="data-date-container"] > div[class="data-date-item"]`)
    let LAST_DATE = LIST_DATE[LIST_DATE.length - 1]
    
        LAST_DATE.insertAdjacentElement('afterend', DATA_ITEM)
}

let LIST_DATE = document.querySelectorAll(`form > div[data-alias="data-date-container"] > div[class="data-date-item"]`)
let LAST_DATE = LIST_DATE[LIST_DATE.length - 1]
    LAST_DATE.children[2 - 1].oninput = OBSERVE_INPUT_RANGE

let BUTTON_ADD = document.querySelector(`form > div[data-alias="data-date-container"] > div[class="button"]`)
    BUTTON_ADD.onclick = ADD_INPUT_DATE

let SUBMIT = document.querySelector(`form > input[type="submit"]`)

    SUBMIT.onclick = function (EVENT)
    {
        let RESULT = 
        {
            FullName: document.querySelector(`form > div[data-alias="information-student-container"] > input[id="FullName"]`).value,
            ID: document.querySelector(`form > div[data-alias="information-student-container"] > input[id="ID"]`).value,
            Subject: document.querySelector(`form > div[data-alias="information-subject-container"] > input[id="subject"]`).value,
            NumberCredit: document.querySelector(`form > div[data-alias="information-subject-container"] > input[id="numberCredit"]`).value,
            DataDate: [],
            TotalCredit: 0
        }

        let LIST_DATE = document.querySelectorAll(`form > div[data-alias="data-date-container"] > div[class="data-date-item"]`)

        for (let DATE of LIST_DATE)
        {
            if (DATE.firstElementChild.value !== "")
            {
                RESULT.DataDate.push(DATE.firstElementChild.value)
                RESULT.TotalCredit += parseInt(DATE.lastElementChild.dataset.value)
            }
        }

        /* delete-value */
        {
            let LIST_INPUT = FORM.querySelectorAll(`input`)

            for (let INPUT of LIST_INPUT)
            {
                if (INPUT.type !== "submit")
                {
                    INPUT.value = ""
                }
            }
                
            ADD_INPUT_DATE()

            for (let DATE of LIST_DATE)
            {
                DATE.remove()
            }
        }

        DATABASE.push(RESULT)
    }