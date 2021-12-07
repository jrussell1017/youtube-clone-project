import { Component } from "react";
import AboutTeam from "./AboutTeam";

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
        const { team } = this.props
        const teamList = team.map((member) => (
            <AboutTeam key={member.id} member={member} />
        ))
        console.log("")
        return(
            <section className="about-team">
             <h1>About Us</h1>
             <div className="teams-info">{teamList}</div>
            </section>
        )
    }
}

export default AboutPage;