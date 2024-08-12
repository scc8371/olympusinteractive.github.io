import React from 'react'
import "../styles/Profiles.css"
import assets from "../assets"
import Button from "../components/Button"
import Panel from "../components/Panel"
import Header from "../components/Header"
import data from "../data.ts"

const Profiles = () => {
  return (
    <div className="profiles" id="profiles-section">
      <>

        <Header subtitle="The Olympians">Team</Header>

        <div className="team-showcase">
          {
            data.team.map(member => {
              return <Panel imageSource={member.portrait} title={member.name} tag="display">{member.role}</Panel>
            })
          }
        </div>
      </>
    </div>
  )
}

export default Profiles