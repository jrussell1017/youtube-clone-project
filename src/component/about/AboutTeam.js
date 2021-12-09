const AboutTeam = ({ member }) => {
    const { firstName, lastName, title, profilePicture, description } = member;
    let name = `${firstName} ${lastName}`;

    return (
        <article className="team-info">
            <h3>{name}</h3>
            <h4>{title}</h4>
            <img src={profilePicture} alt="profile-pic"/>
            <h5>Bio</h5>
            <p>{description}</p>
        </article>
    );
};

export default AboutTeam;