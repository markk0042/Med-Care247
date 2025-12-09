import './Policies.css'

function Policies() {
  const policies = [
    {
      id: 1,
      title: 'Appeals and Procedure',
      description: 'Our appeals and procedure policy outlines the process for handling appeals and complaints.',
      file: '/policies/MedCare247 Appeals and Procedure.pdf',
      downloadName: 'MedCare247 Appeals and Procedure.pdf'
    },
    {
      id: 2,
      title: 'Policy Document',
      description: 'Our comprehensive policy document covering company policies and procedures.',
      file: '/policies/MedCare247 POLICY DOCUMENT.pdf',
      downloadName: 'MedCare247 POLICY DOCUMENT.pdf'
    }
  ]

  const handleDownload = (policy) => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a')
    link.href = policy.file
    link.download = policy.downloadName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="policies">
      <section className="policies-hero">
        <div className="container">
          <h1>Policies</h1>
          <p className="hero-subtitle">
            Access and download our company policies and procedures
          </p>
        </div>
      </section>

      <section className="policies-content">
        <div className="container">
          <div className="policies-intro">
            <p>
              At MedCare247, we are committed to transparency and compliance. 
              Below you can find and download our key policy documents.
            </p>
          </div>

          <div className="policies-grid">
            {policies.map((policy) => (
              <div key={policy.id} className="policy-card">
                <div className="policy-card-content">
                  <h2>{policy.title}</h2>
                  <p>{policy.description}</p>
                </div>
                <button
                  className="btn btn-primary policy-download-btn"
                  onClick={() => handleDownload(policy)}
                >
                  <span>📄</span>
                  Download PDF
                </button>
              </div>
            ))}
          </div>

          <div className="policies-note">
            <p>
              <strong>Note:</strong> These documents are in PDF format. 
              You will need a PDF reader to view them. If you have any questions 
              about our policies, please <a href="/contact">contact us</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Policies

