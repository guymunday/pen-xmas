import * as React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { PopupStyles } from "./Popup"
import corner from "../assets/corner-svg.svg"
import TermsAndMusic from "./TermsAndMusic"

const FakePopupStyles = styled(PopupStyles)`
  position: absolute;
`

export default function FakePopup({ loading, children, ...rest }) {
  return (
    <>
      <FakePopupStyles {...rest}>
        <motion.div
          className="popup-inner"
          initial={{ scale: 0 }}
          animate={{ scale: loading ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="popup-content">{children}<TermsAndMusic/></div>
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
      </FakePopupStyles>
    </>
  )
}
