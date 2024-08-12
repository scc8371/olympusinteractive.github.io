import React, { ReactNode } from 'react'
import "../styles/Footer.css"
import IconList from './IconList'

interface Props {
  logoLink: string
}

const Footer: React.FC<Props> = ({ logoLink }) => {
  return (
    <>
      <div className="footer">
        <div className="panel panel-default">
          <div className="panel-body">
            <img className="footer-brand" src={logoLink}></img>
            <IconList></IconList>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer