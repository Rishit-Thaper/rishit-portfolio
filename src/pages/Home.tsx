import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../App.scss'
export default function Home() {

  return (
    <>
      <div className='Home'>
      <div className="homeContent">
        <p id='hi'>Hi, My name is</p>
        <h1>Rishit</h1>
        <h2>Full Stack Developer</h2>
        <p>I'm a full stack web app developer based in India. I help clients to build dynamic and exquisite websites from scratch.</p>
        <NavLink to="/contact"><button>Get in Touch</button></NavLink>
      </div>
    </div>
    </>
  )
}
