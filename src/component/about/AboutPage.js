import { Component } from "react";
import AboutTeam from "./AboutTeam";
import { team } from "../../data/team.js" 

class AboutPage extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         name: "",
    //     }
    // }

    // teamInfo = ({ team }) => {
    //     const { firstName, lastName } = team;
    //     let name = `${firstName} ${lastName}`
    //     this.setState({
    //         name: name,
    //     })
    // }

    render() {
        const teamList = team.map((member) => (
            <AboutTeam key={member.id} member={member} />
        ))
        return(
            <section className="about-team">
             <h1>About Us</h1>
             <div className="teams-info">{teamList}</div>
            </section>
        )
    }
}

export default AboutPage;