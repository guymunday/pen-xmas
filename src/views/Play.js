import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import background from "../assets/pen-xmas-landscape.jpg"
import interact from "interactjs"

const GameLandscapeStyles = styled.div`
  width: 100%;
  height: 100vh;
  background: green;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .landscape-background-container {
    height: 100%;
    img {
      height: 100%;
      object-fit: cover;
      pointer-events: none;
    }
  }
`

export default function Play() {
  const dragRef = React.useRef(null)

  React.useEffect(() => {
    let angleScale = {
      angle: 0,
      scale: 1,
    }
    let scaleElement = document.getElementById("scale-element")
    let resetTimeout

    interact(".draggable")
      .draggable({
        inertia: true,
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: "parent",
            endOnly: true,
          }),
        ],
        autoScroll: true,
        listeners: {
          move: dragMoveListener,
        },
      })
      .gesturable({
        listeners: {
          start(event) {
            angleScale.angle -= event.angle

            clearTimeout(resetTimeout)
            scaleElement.classList.remove("reset")
          },
          move(event) {
            let currentAngle = event.angle + angleScale.angle
            let currentScale = event.scale * angleScale.scale

            scaleElement.style.transform =
              "rotate(" + currentAngle + "deg)" + "scale(" + currentScale + ")"
          },
          end(event) {
            angleScale.angle = angleScale.angle + event.angle
            angleScale.scale = angleScale.scale * event.scale

            resetTimeout = setTimeout(reset, 1000)
            scaleElement.classList.add("reset")
          },
        },
      })

    function dragMoveListener(event) {
      const target = event.target
      let x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx
      let y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy

      //   target.style.transform = "translateX(" + x + "px, " + y + "px)"
      target.style.transform = "translateX(" + x + "px)"

      // update the posiion attributes
      target.setAttribute("data-x", x)
      target.setAttribute("data-y", y)
    }

    function reset() {
      scaleElement.style.transform = "scale(1)"

      angleScale.angle = 0
      angleScale.scale = 1
    }

    // this function is used later in the resizing and gesture demos
    // window.dragMoveListener = dragMoveListener
  }, [])

  return (
    <>
      <GameLandscapeStyles ref={dragRef}>
        <div className="landscape-background-container draggable scale-element">
          <img src={background} alt="" />
        </div>
      </GameLandscapeStyles>
    </>
  )
}
