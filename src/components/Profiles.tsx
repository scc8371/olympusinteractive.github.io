import React from 'react'
import "../styles/Profiles.css"
import assets from "../assets"
import Button from "../components/Button"
import Panel from "../components/Panel"
import Header from "../components/Header"

const Profiles = () => {
  return (
    <div className="profiles" id="profiles-section">
      <>
        <Header subtitle="The Olympians">Team</Header>

        <div className="team-showcase">
          <Panel imageSource={"https://placehold.co/700x750"} title="Justin Looman" tag="display">Team Lead / UI Design</Panel>
          <Panel imageSource={"https://placehold.co/700x750"} title="Sami Chamberlain" tag="display">Lead Programmer</Panel>
          <Panel imageSource={"https://placehold.co/700x750"} title="William Jeon" tag="display">Technical Artist</Panel>
          <Panel imageSource={"https://placehold.co/700x750"} title="Iain Roach" tag="display">Programmer / Game Designer</Panel>
          <Panel imageSource={"https://placehold.co/700x750"} title="Kai Stone" tag="display">2D / 3D Artist</Panel>
          <Panel imageSource={"https://placehold.co/700x750"} title="Claire Wang" tag="display">2D Artist</Panel>
          <Panel imageSource={"https://placehold.co/700x750"} title="Trevor Strickland" tag="display">Audio Designer</Panel>
        </div>
      </>
    </div>
  )
}

export default Profiles