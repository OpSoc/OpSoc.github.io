import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import Banner from '../components/Banner'
import Layout from '../components/Layout'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Open Society"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h1>A b o u t</h1>
                  <p>About the Project</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h1>M i s s i o n</h1>
                  <p>Goals and Vision</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h1>O p e n &ensp;C h a r t e r</h1>
                  <p>Project Charter Documentation</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h1>R o a d m a p</h1>
                  <p>Where we are / What to expect</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h1>C o n t a c t</h1>
                  <p>Reach out with any thoughts,<br />
                  inquiries, and/or suggestions.</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h1>T a k e &ensp;P a r t</h1>
                  <p>How you can help</p>
                </header>
              </Link>
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Massa libero</h2>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
                Pellentesque condimentum sem. In efficitur ligula tate urna.
                Maecenas laoreet massa vel lacinia pellentesque lorem ipsum
                dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et
                sagittis libero. Mauris aliquet magna magna sed nunc rhoncus
                amet pharetra et feugiat tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link
                    aria-label="Link to Landing Page"
                    to="/landing"
                    className="button next"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
