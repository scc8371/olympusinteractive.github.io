import React from 'react'
import "../styles/Profiles.css"
import assets from "../assets"
import Button from "../components/Button"
import Panel from "../components/Panel"
import Header from "../components/Header"

const Profiles = () => {
  return (
    <div className="profiles">
        <>
        <Header subtitle="The Olympians">Team</Header>

        <div className="team-showcase">
          <Panel imageSource={assets["logo-no-background"]} title="Sami Chamberlain" dates="Back-end Programmer" tag="display" buttonText='Learn More!'>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</Panel>
          <Panel imageSource={assets["logo-no-background"]} title="William Jeon" dates="Technical Artist" tag="display" buttonText='Learn More!'>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</Panel>
          <Panel imageSource={assets["logo-no-background"]} title="Justin Looman" dates="UI Designer" tag="display" buttonText='Learn More!'>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</Panel>
          <Panel imageSource={assets["logo-no-background"]} title="Iain Roach" dates="Programmer" tag="display" buttonText='Learn More!'>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</Panel>
          <Panel imageSource={assets["logo-no-background"]} title="Kai Stone" dates="Artist" tag="display" buttonText='Learn More!'>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</Panel>
          <Panel imageSource={assets["logo-no-background"]} title="Claire Wang" dates="Artist" tag="display" buttonText='Learn More!'>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</Panel>
          <Panel imageSource={assets["logo-no-background"]} title="Trevor Strickland" dates="Sound Artist" tag="display" buttonText='Learn More!'>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</Panel>

        </div>
        </>
    </div>
  )
}

export default Profiles