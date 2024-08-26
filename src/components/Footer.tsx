import React from 'react'
import "../styles/Footer.css"
import IconList from './IconList'
import data from "../data.ts"

interface Props {
  logoLink: string
}

const Footer: React.FC<Props> = ({ logoLink }) => {
  return (
    <>
      <div className="footer">
        <div className="panel panel-default footer-panel">
          <div className="panel-body">
            <img className="footer-brand" src={logoLink}></img>
            <IconList icons={data.socialIcons}></IconList>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer