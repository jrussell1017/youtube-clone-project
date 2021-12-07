export const AboutTeam = ({ member }) => {
    const { firstName, lastName, title } = member;
    let name = `${firstName} ${lastName}`;

    return (
        <article className="team-info">
            <h3>{name}</h3>
            <h4>{title}</h4>
        </article>
    );
};

export default AboutTeam;