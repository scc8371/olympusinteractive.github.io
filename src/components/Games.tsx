import React, { useState } from 'react'
import "../styles/Games.css"
import assets from "../assets"
import Button from "../components/Button"
import Panel from "../components/Panel"
import Header from "../components/Header"

import projects from "../projects"

const Games = () => {
  return (
    <div className="games" id="games-section">
      <>
        <Header subtitle="Our Mythos">Games</Header>

        {
          projects.projects.map(p => {
            if (p.hero == true) {
              return <Panel
                key={p.name}
                imageSource={p.image}
                title={p.name}
                dates={p.dates}
                tag="hero"
                buttonText="Learn More!"
                link={p.link}>
                {p.desc}
              </Panel>
            }
          })
        }

        <div className="games-showcase">
          <>
            {
              projects.projects.map(p => {
                if (p.hero == false) {
                  return <Panel
                    key={p.name}
                    imageSource={p.image}
                    title={p.name}
                    dates={p.dates}
                    tag="display"
                    buttonText="Learn More!">
                    {p.desc}
                  </Panel>
                }
              })
            }
          </>
        </div>
      </>
    </div>
  )
}

export default Games