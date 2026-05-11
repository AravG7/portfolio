import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Software Engineer</h4>
                <h5>Web & Mobile Development</h5>
              </div>
              <h3>2024–PRESENT</h3>
            </div>
            <p>
              Architecting end-to-end solutions using Next.js 15, Flutter, and Supabase. 
              Automating workflows with Gemini 1.5 Pro and Claude 3.5 APIs, 
              enhancing operational efficiency for diverse clients.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Engineer & Architect</h4>
                <h5>Rakt-Connect (Blockchain)</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Led the architecture of a permissioned blockchain network using Hyperledger Fabric. 
              Optimized system throughput for 1,000+ concurrent requests on GKE and automated donor verification via smart contracts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sambhram Institute of Tech</h4>
                <h5>VTU Bengaluru</h5>
              </div>
              <h3>2023-27</h3>
            </div>
            <p>
              Pursuing B.E. in Computer Science. Focused on Distributed Systems, 
              Microservices, and Generative AI orchestration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
