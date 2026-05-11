import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {/* Professional training and education take priority for a student profile */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Science Student</h4>
                <h5>Sambhram (Affiliated to VTU)</h5>
              </div>
              <h3>2023–2027</h3>
            </div>
            <p>
              Pursuing a B.E. in Computer Science at Visvesvaraya Technological University. 
              Focusing on full-stack development, database design, and machine learning architectures.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Engineer & Project Architect</h4>
                <h5>Rakt-Connect (Group Project)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Served as lead engineer for a blockchain-powered blood supply chain system. 
              Architected the system using Hyperledger Fabric to ensure secure and transparent donor verification.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
