import styles from '../styles/Home.module.css'
import Card from '../components/Card'

const name = "Demis";

export default function Home() {
  return (
      <main className={styles.main}>
        <container className={styles.container}>
        <header className={styles.header}>
        <img
          src="./images/profile.jpg"
          alt="profile-picture"
          className={styles.headerImage}
        />
        <div className={styles.headerDescription}>
          <h1>{name}</h1>
          {/* <div className="dot"></div> */}
          <p>My name is {name}. I'm a web developer from Amsterdam. <br></br>React out to me @ contact@demis.io</p>
        </div> 
      </header>

      <div className={styles.resume}>
        <h2>Familair with:</h2>
        <li>- JavaScript</li>
        <li>- React JS</li>
        <li>- NextJS</li>
        <li>- PHP (Laravel)</li>
        <li>- HTML</li>
        <li>- CSS</li>
        <li>- WordPress</li>
        <li>- CraftCMS</li>
        <hr></hr>

        <h2>I've worked at:</h2>
        <Card 
        image="https://via.placeholder.com/200"
        name="The Next Web (a Financial Times company"
        job="Web Development Intern"
        duration="FEB 2020 - NOV 2020" 
        description="TNW attracts millions of visitors/readers to their tech blog & subbrands. I've been involved in refactoring code, fixing bugs, testing & more. Technologies used: JavaScript, PHP, CSS, Tailwind CSS, HTML , CraftCMS, Docker & Git." />
        <Card
         image="https://via.placeholder.com/200"
         name="SumUp"
         job="Customer Support"
         duration="AUG 2019 - FEB 2020"
         description="At SumUp, I was responsible for helping merchants with issues (troubleshooting). This was done through e-mail and on the phone." />
        <Card 
        image="https://via.placeholder.com/200"
        name="agenZy"
        job="Developer & Design Intern"
        duration="APR 2019 - SEPT 2019"
        description="I have worked on the new website of agenZy. I was responsible for the design and coding of the website. I reported directly to the CEO of the company. I enjoyed working on this project, since the main website of a company is one of the first impressions that potential clients see." />
        <Card
        image="https://via.placeholder.com/200"
        job="Technology Support Specialist"
        duration="JUL 2018 - DEC 2018"
        name="Mijndomein" description="During my time at Mijndomein, it was my duty to help (200K+) customers with technical questions/problems." />
        <Card
        image="https://via.placeholder.com/200"
        job="Web Developer (temporarily"
        duration="APR 2018 - MAY 2018"
        name="Qnoop" description="I was responsible for building a new webshop that attracts visitors, to buy their sustainable socks. They sell their socks in 11+ countries in Europe. You can see the result: https://qnoop.com. I used WordPress, WooCommerce, and several plugins for this project." />
        <Card
        image="https://via.placeholder.com/200"
        job="Design Intern"
        duration="NOV 2017" 
        name="WeTransfer" description="I did a short internship at the design studio of WeTransfer. I have worked on a WeTransfer wallpaper and I have interviewed several WeTransfer employees about their role and experience at WeTransfer (which I then processed in a blog). I directly reported to the Creative Director." />
      </div>  
      </container>
      <footer className={styles.footer}>
        © Demis Struiksma
      </footer>
      </main>

  )
}
