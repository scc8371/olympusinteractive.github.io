import React from 'react'
import "../styles/Games.css"
import assets from "../assets"
import Button from "../components/Button"
import Panel from "../components/Panel"

const Games = () => {
  return (
    <div className="games">
      <>
        <div className="game-header">
          <h1>Games</h1>
          <h3>OUR MYTHOS</h3>
        </div>

        <Panel imageSource={assets["logo-no-background"]} title="Ninjas on Trampolines" dates="August 2023 - Present" tag="hero" buttonText='Learn More!'>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</Panel>

        <div className="games-showcase">
        <Panel imageSource={assets["logo-no-background"]} title="Ninjas on Trampolines" dates="August 2023 - Present" buttonText='Learn More!'>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</Panel>
        <Panel imageSource={assets["logo-no-background"]} title="Ninjas on Trampolines" dates="August 2023 - Present" buttonText='Learn More!'>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</Panel>
        <Panel imageSource={assets["logo-no-background"]} title="Ninjas on Trampolines" dates="August 2023 - Present" buttonText='Learn More!'>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</Panel>
        
        </div>
      </>
    </div>
  )
}

export default Games