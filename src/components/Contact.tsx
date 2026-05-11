import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/arav-gupta-285115261"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — arav-gupta
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.E. in Computer Science, Visvesvaraya Technological University (VTU) — 2023–2027
            </p>
            <h4>Certifications & Training</h4>
            <p>Placement Training (60 Hours) — Genesis Training</p>
            <p>Java, SQL, & NoSQL Database Design — Vtricks Technologies</p>
            <p>Innovation & Design Thinking — COMED KARES</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/AravG7"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/arav-gupta-285115261"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://leetcode.com/u/aravg7"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LeetCode <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/arav_g7?igsh=YWxxa2FybnExdjVh"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Arav Gupta</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
