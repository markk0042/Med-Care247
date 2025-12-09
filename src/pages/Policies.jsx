import './Policies.css'

function Policies() {
  const policies = [
    {
      id: 1,
      title: 'Privacy Policy',
      description: 'Our privacy policy outlines how we collect, use, and protect your personal information.',
      file: '/policies/privacy-policy.pdf',
      downloadName: 'MedCare247-Privacy-Policy.pdf'
    },
    {
      id: 2,
      title: 'Terms and Conditions',
      description: 'Our terms and conditions govern the use of our services and website.',
      file: '/policies/terms-and-conditions.pdf',
      downloadName: 'MedCare247-Terms-and-Conditions.pdf'
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

