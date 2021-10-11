import * as React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const PopupStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll;
  background: rgba(0, 0, 0, 0.6);
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
  .popup-inner {
    position: relative;
    max-width: 350px;
    margin: auto;
    padding: 20px;
    background: #fff;
    overflow: auto;
    text-align: center;
    -ms-overflow-style: none;
    scrollbar-width: none;
    .popup-inner::-webkit-scrollbar {
      display: none;
    }
    > * {
      margin-bottom: 20px;
    }
    .popup-corner {
      display: block;
      background: transparent;
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: blue 1px solid;
      box-shadow: 0 0 0 60px #ccc;
    }
  }
`

export default function Popup({ children, ...rest }) {
  return (
    <>
      <PopupStyles {...rest}>
        <motion.div
          className="popup-inner"
          initial={{ scale: 0.3 }}
          animate={{ scale: 1 }}
        >
          {children}
        </motion.div>
      </PopupStyles>
    </>
  )
}
