import React from 'react'
import {Link} from 'react-router-dom';
import clgweb from '../assets/clgWeb.png'
import dodiddone from '../assets/ddd.png'
import cruder from '../assets/cruder.png'
import yourlink from '../assets/yourLink.png'
export default function Projects() {

  const data = [
    {
      imgUrl: dodiddone,
      h4: "DoDidDone",
      p:"Task Management Application with JWT Authentication.",
      tech:"ReactJS, NodeJS, ExpressJS, JWT, MongoDb",
      link:"https://github.com/Rishit-Thaper/DoDidDone"
    },
    {
      imgUrl: yourlink,
      h4: "YourLink (Backend)",
      p:"Create a personal single link for your all platforms",
      tech:"NodeJS, ExpressJS, JWT, MongoDb",
      link:"https://github.com/Rishit-Thaper/YourLink"
    },
    {
      imgUrl: clgweb,
      h4: "Revamped College Website",
      tech:"ReactJS, Strapi CMS, Appscript",
      p:"Revamped college website with ReactJS and Strapi CMS ",
      link:"https://github.com/Rishit-Thaper/ace"
    },
    {
      imgUrl: cruder,
      h4: "CRUDer",
      p:"A CRUD Rest API demonstration designed",
      tech:"EJS, CSS, NodeJS, ExpressJS, MongoDb",
      link:"https://github.com/Rishit-Thaper/CRUDer"
    }
  ]


  return (
    <div className="projects">
      <div className="project-section">
        <div className="project-grid">
          
          {
            data.map(function(data){
              return(
                <div className="project">
                  <img src={data.imgUrl} alt={data.h4} />
                  <h4>{data.h4}</h4>
                  <p>{data.p}</p>
                  <p><span>Tech Stack:</span> {data.tech}</p>
                  {data.link && <button><Link to={data.link}>Repo Link</Link></button>}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
