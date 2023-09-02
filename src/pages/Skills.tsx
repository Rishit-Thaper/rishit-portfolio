import {TbBrandCpp,TbBrandTypescript,TbSql} from 'react-icons/tb'
import {FaJava} from 'react-icons/fa'
import {IoLogoJavascript,IoLogoCss3,IoLogoNodejs,IoLogoSass} from 'react-icons/io'
import {TfiHtml5} from 'react-icons/tfi'
import {SiMongodb,SiExpress, SiReact, SiPostman} from 'react-icons/si'
import {BsGit} from 'react-icons/bs'

export default function Skills() {
  return (
    <div className='skills'>
      
      <div className="skill-section">
        
        <div className="skill-grid">
          
          <div className="languages skill-div">
            <h3>Languages</h3>
            <div className="skill-icons">
              <TbBrandCpp className="icon" />
              <FaJava className="icon" />
            </div>
          </div>

          <div className="development skill-div">
            <h3>Frontend</h3>
            <div className="skill-icons">
              <TfiHtml5 className="icon" />
              <IoLogoCss3 className="icon" />
              <IoLogoSass className="icon" />
              <IoLogoJavascript className="icon" />
              <TbBrandTypescript className="icon" />
              <SiReact className="icon" />
            </div>
          </div>
          
          <div className="database skill-div">
            <h3>Backend</h3>
            <div className="skill-icons">
              <IoLogoNodejs className="icon" />
              <SiExpress className="icon" />
              <TbSql className="icon" />
              <SiMongodb className="icon" />
            </div>
          </div>

          <div className="tools skill-div">
            <h3>Tools</h3>
            <div className="skill-icons">
              <SiPostman className="icon" />
              <BsGit className="icon" />
            </div>
          </div>
          
        </div>
      
      </div>
    
    </div>
  )
}
