export const CandidateProfile = () => {
    const name = "Peter Parker"
    const role = "web Developer"
    const experience = 5;
    const isAvailable = true;
    return <>
        <h2> {name} </h2>
        
        <p> {role} with {experience} years of Experience..</p>
        <p>Started in {2025-experience}</p>
        <p>Status: {isAvailable ? "Available for hire" : "Not Available"}</p>
        <p>Contact: {name.toLowerCase().replace(" ", "")}+@gmail.com</p>
        
    </>
}