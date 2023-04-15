import React, { useState } from "react"
import "../style/HoverText.css"

const HoverText = ({ children, messageElement }) => {
  const [showMessage, setShowMessage] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseEnter = () => {
    setShowMessage(true)
  }

  const handleMouseLeave = () => {
    setShowMessage(false)
  }

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  const messageStyle = {
    left: `${position.x + 10}px`,
    top: `${position.y + 5}px`,
  }

  return (
    <>
      <span
        className="hoverText"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {children}
      </span>
      {showMessage && (
        <div className="hoverText-message" style={messageStyle}>
          {messageElement}
        </div>
      )}
    </>
  )
}

export default HoverText
