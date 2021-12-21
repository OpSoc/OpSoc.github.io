import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1 className="logo" style={{textAlign: "center"}}>O P E N | S O C I E T Y</h1>
      </header>
      <div className="content">
        <p>
          An open source project working to crowdsource and democratize data 
          <br />
          exploration on the monopolies of influence around us.
        </p>
        <ul className="actions">
          <li>
            <a href="#one" name="Get Started" className="button next scrolly">
              Learn About the Project
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
