function SVG_CHANGE_COLOR (X)
{
    X.animate
    (
        [
            {
                offset: 0.0,
                transform: `scale(0.8)`,
                fill: `black`
            },
            {
                offset: 0.25,
                transform: `scale(1)`,
                fill: `orange`
            },
            {
                offset: 0.75,
                fill: `orange`
            },
            {
                offset: 1.0,
                fill: `black`
            }
        ],
        {
            duration: 10000,
            easing: "ease-in-out"
        }
    )
}

function SCROLL (X)
{
    X.scrollIntoView
    (
        { 
            behavior: "smooth", 
            block: "center", 
            inline: "nearest" 
        }
    )
}