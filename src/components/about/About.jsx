import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>new graduation</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>try to find clients</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>? projects</small>
            </article>

          </div>
          
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, beatae vel? Temporibus qui ab mollitia rem suscipit. Quasi necessitatibus nihil inventore odit ducimus sint, laboriosam minus vero debitis, consequatur molestias.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
        
      </div>
    </section>
  )
}

export default About