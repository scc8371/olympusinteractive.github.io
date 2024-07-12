import React, { ReactNode } from 'react'
import "../styles/Footer.css"

interface Props {
  logoLink: string
  children?: ReactNode
}

const Footer: React.FC<Props> = ({ logoLink, children }) => {
  return (
    <>
      <div className="footer">
        <div className="panel panel-default">
          <div className="panel-body">
            <img className="footer-brand" src={logoLink}></img>
            <div id="footer-logos">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer