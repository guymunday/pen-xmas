import * as React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import corner from "../assets/corner-svg.svg"
import TermsAndMusic from "./TermsAndMusic"

export const PopupStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
  padding: 50px;
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
    max-width: 300px;
    margin: auto;
    padding: 5px;
    background: var(--off-white);
    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.8));
    text-align: center;
    -ms-overflow-style: none;
    scrollbar-width: none;
    .popup-inner::-webkit-scrollbar {
      display: none;
    }
    .popup-content > *:not(:last-child) {
      margin-bottom: 20px;
    }
    .popup-corner {
      display: block;
      position: absolute;
      width: 25px;
      height: 25px;
      pointer-events: none;
      &.popup-corner-1 {
        top: -25px;
        left: -25px;
      }
      &.popup-corner-2 {
        top: -25px;
        right: -25px;
        transform: rotate(90deg);
      }
      &.popup-corner-3 {
        bottom: -25px;
        right: -25px;
        transform: rotate(180deg);
      }
      &.popup-corner-4 {
        bottom: -25px;
        left: -25px;
        transform: rotate(270deg);
      }
    }
    .popup-fake-padding {
      display: block;
      position: absolute;
      background: var(--off-white);
      &.popup-fake-padding-1 {
        height: 25px;
        width: 100%;
        top: -25px;
        left: 0;
      }
      &.popup-fake-padding-2 {
        width: 25px;
        height: 100%;
        top: 0;
        right: -25px;
      }
      &.popup-fake-padding-3 {
        height: 25px;
        width: 100%;
        bottom: -25px;
        left: 0;
      }
      &.popup-fake-padding-4 {
        width: 25px;
        height: 100%;
        top: 0;
        left: -25px;
      }
    }
  }
`

export default function Popup({ children, ...rest }) {
  return (
    <>
      <PopupStyles {...rest}>
        <motion.div
          className="popup-inner"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="popup-content">
            {children}
            <TermsAndMusic />
          </div>
          <object
            data={corner}
            type="image/svg+xml"
            className="popup-corner popup-corner-1"
          />
          <object
            data={corner}
            type="image/svg+xml"
            className="popup-corner popup-corner-2"
          />
          <object
            data={corner}
            type="image/svg+xml"
            className="popup-corner popup-corner-3"
          />
          <object
            data={corner}
            type="image/svg+xml"
            className="popup-corner popup-corner-4"
          />
          <span className="popup-fake-padding popup-fake-padding-1" />
          <span className="popup-fake-padding popup-fake-padding-2" />
          <span className="popup-fake-padding popup-fake-padding-3" />
          <span className="popup-fake-padding popup-fake-padding-4" />
        </motion.div>
      </PopupStyles>
    </>
  )
}
