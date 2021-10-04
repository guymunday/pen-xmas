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
    /* position: relative;
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
    } */

    width: 250px;
    height: 100px;
    background: #ccc;
    border: 2px solid #000;
    position: relative;
    div {
      position: absolute;
      top: 0;
      overflow: hidden;
      width: 15px;
      height: 100%;
    }
    div:after {
      content: "";
      background: #000;
      width: 2px;
      height: 75px;
      position: absolute;
      top: 12.5px;
    }
    div:first-of-type {
      left: -14px;
    }
    div:first-of-type:after {
      left: 0;
    }
    div:last-of-type {
      right: -14px;
    }
    div:last-of-type:after {
      right: 0;
    }
    span {
      display: block;
      width: 30px;
      height: 30px;
      background: transparent;
      position: absolute;
      bottom: -20px;
      right: -20px;
      border: 2px solid #000;
      border-radius: 25px;
      box-shadow: 0 0 0 60px #ccc;
    }
    div:first-of-type span {
      left: -20px;
    }
    div:first-of-type span:first-child {
      top: -20px;
    }
    div:first-of-type span:last-child {
      bottom: -20px;
    }
    div:last-of-type span {
      right: -20px;
    }
    div:last-of-type span:first-child {
      top: -20px;
    }
    div:last-of-type span:last-child {
      bottom: -20px;
    }
  }
`

export default function Popup({ children, ...rest }) {
  return (
    <>
      <PopupStyles {...rest}>
        {/* <motion.div
          className="popup-inner"
          initial={{ scale: 0.3 }}
          animate={{ scale: 1 }}
        >
          <span className="popup-corner popup-corner-1" />
          <span className="popup-corner popup-corner-2" />
          <span className="popup-corner popup-corner-3" />
          <span className="popup-corner popup-corner-4" />
          {children}
        </motion.div> */}

        <div className="popup-inner">
          <div>
            <span></span>
            <span></span>
          </div>
          {children}
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </PopupStyles>
    </>
  )
}
