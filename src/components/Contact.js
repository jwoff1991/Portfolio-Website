import { Link } from "react-router-dom"
import '../styles/contact.css'



function Contact() {
    return (
        <div className="contact-div">
            <h1>Contact</h1>
            Enjoyed my work? Have any questions? Just wanna connect? Feel free to reach out to me on any of the socials below:
            <br></br>
            <div className="contat-socials-div">
            GitHub: <Link to='https://github.com/jwoff1991' target='_blank'>https://github.com/jwoff1991 </Link>
            <br></br>
            LinkedIn: <Link to="https://www.linkedin.com/in/jonathanbwofford/" target="_blank">https://www.linkedin.com/in/jonathanbwofford/</Link>
            <br></br>
            Email:
            <br></br>
            jonathanbrodie91@gmail.com
            </div>
        </div>
    )
}

export default Contact
