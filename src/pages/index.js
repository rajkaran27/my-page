import * as React from "react"
import { Link } from 'gatsby'
import Home from './Home'
import { Fade } from "react-awesome-reveal"
import '../styles/index.css'

import ProjectBox from "../components/ProjectBox"


const IndexPage = () => {
  return (
    <main>
      <nav className="navbar">
        <a className="navbar-brand">Rajkaran</a>
        <a className="navbar-right">Github</a>
        <a>Contact</a>
      </nav>

      <div id="content">
        <Fade className="contentbox">
          <div id="intro" className="container">
            <p>Hi, my name is</p>
            <h1>Rajkaran</h1>
            <p>and I am an Information Technology student at Singapore Polytechnic.</p>
          </div>
        </Fade>
        <Fade className="contentbox">
          <div className="container" id="about">
            <h2>About Me</h2>
            <div>
              <div className="col-md-6">
                <p>Hello! My name is Rajkaran and I am currently studying in Singapore Polytechnic. I am about to enter the second year of my education in Singapore Polytechnic.</p>
              </div>
              <div className="col-md-6">
                <img src="../images/myimg.jpg"></img>
              </div>
            </div>
          </div>
        </Fade>
        <Fade className="contentbox">
          <div className="container">
            <h2>My Learning</h2>
            <p>Modules I have taken over the years.</p>
          </div>
        </Fade>
        <Fade className="contentbox">
          <div className="container" id="projects">
            <h2>My Projects</h2>
            <p>School and personal projects.</p>
            <div id="boxes">
              <ProjectBox href="https://github.com/rajkaran27/DVD-Rental-page" title="DVD Rental Page" desc="BED" lang1="Express" lang2="NodeJS" />
              <ProjectBox href="https://github.com/rajkaran27/Java-Comic-Rental" title="Comic Rental Page" desc="JPRG" lang1="Java" />
              <ProjectBox href="https://github.com/rajkaran27/FOP" title="Membership Management System" desc="FOP" lang1="Javascript" />
              <ProjectBox href="https://github.com/rajkaran27/FirstReactApp" title="Budget Application" desc="MAD" lang1="React Native" />
            </div>
          </div>
        </Fade>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
