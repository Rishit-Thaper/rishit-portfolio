import myPic from '../assets/about.jpg'
export default function About() {
  return (
    <div className="about">
      <div className="about-section">
        <h1>Beyond the Username: My Authentic Self</h1>
        <div className="about-grid">
          <img src={myPic} alt="myPic" />
          <div className="about-content">
            <p>Greetings! I am a Full Stack Developer, navigating a boundless expanse of innovation.</p>
            <ul>
              <li>Expanding skills with NodeJS, ExpressJS, and cutting-edge modules.</li>
              <li>Equipped with C++, Java, and JavaScript foundations.</li>
              <li>Keen-eyed for details, committed to exceptional results.</li>
              <li>Self-taught graphic designer and video editor.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  )
}
