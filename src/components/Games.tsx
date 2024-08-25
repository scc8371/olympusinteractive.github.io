import "../styles/Games.css"
import Panel from "../components/Panel"
import Header from "../components/Header"

import data from "../data.ts"
import Divider from "./Divider.tsx"

const Games = () => {
  return (
    <div className="games has-bg-img" id="games-section">
      <>
        <Header subtitle="Our Mythos">Games</Header>

        {
          data.projects.map(p => {
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
              data.projects.map(p => {
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
      <Divider hasBgImage={false} color="primary" position="absolute"></Divider>
     
    </div>

    
  )
}

export default Games