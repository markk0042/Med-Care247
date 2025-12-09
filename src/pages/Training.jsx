import { useState } from 'react'
import './Training.css'

function Training() {
  const [expandedCourse, setExpandedCourse] = useState(null)

  const courses = [
    {
      id: 1,
      title: 'Level 3 Award in Education and Training (AET)',
      shortTitle: 'Level 3 Award in Education and Training',
      image: '/teaching.jpg',
      description: 'The purpose of this FAQ Level 3 Award in Education and Training is to provide the learner with the skills, knowledge and understanding required to work in the teaching profession. The introduction gives an insight into the roles, responsibilities and relationships in education and training, how to plan and deliver teaching sessions and how to assess and give constructive feedback.',
      duration: {
        entryRequirements: 'There are no formal qualification entry requirements that a learner must have completed before taking this qualification and no requirement for learners to have prior skills, knowledge or understanding.',
        ageRequirement: 'You must be over 19 years old.',
        tqt: '120 hours',
        gl: '48 hours',
        credits: '12'
      },
      price: '£490 exc. vat'
    },
    {
      id: 2,
      title: 'FAQ Level 3 Certificate in Assessing Vocational Achievement (CAVA)',
      shortTitle: 'FAQ Level 3 Certificate in Assessing Vocational Achievement',
      image: '/learning.jpeg',
      description: 'The purpose of this FAQ Level 3 Certificate in Assessing Vocational Achievement is to provide the learner with the skills, knowledge, and understanding required to assess occupational competence in the work environment, as well as assessing vocationally related achievement in environments other than the workplace (i.e., a workshop, classroom or other training environment).',
      duration: {
        entryRequirements: 'There are no formal qualification entry requirements that a learner must have completed before taking this qualification and no requirement for learners to have prior skills, knowledge or understanding.',
        ageRequirement: 'You must be over 19 years old.',
        tqt: '150 hours',
        gl: '84 hours',
        credits: '15'
      },
      price: '£290 exc. vat'
    },
    {
      id: 3,
      title: 'Level 3 Safe Administration of Lifesaving Medication (SALM) RQF',
      shortTitle: 'Level 3 Safe Administration of Lifesaving Medication (SALM) RQF',
      image: '/injection1.png',
      description: 'The QA Level 3 Award in the Safe Administration of Lifesaving Medication (RQF) is a regulated and nationally recognised qualification specifically designed for prehospital care providers who have a specific responsibility at work to be able to safely administer and monitor the effects of medication. During the course candidates will learn about the common types of life saving medication and their potential side effects. They will also learn how to determine a patient\'s condition and how to assess, monitor and review the effects of medication once it has been administered. Successful candidates will leave the course equipped with all of the knowledge, skills and competencies needed to administer lifesaving medication safely and effectively in a prehospital environment.',
      courseDuration: '30 hours',
      price: '£240 inc VAT',
      whatsCovered: [
        'Legislation, guidelines, policies and protocols.',
        'Administering lifesaving medication Common types of lifesaving medication, including:',
        'Their effects and potential side effects.',
        'Physiological measurements before and after administering lifesaving medication',
        'Common adverse reactions.',
        'Different drug routes for the administration of lifesaving medication.',
        'Determining a patient\'s condition to help distinguish the correct lifesaving medication.',
        'Demonstrating the safe and effective administration of lifesaving medication in a prehospital environment.',
        'Assessing, monitoring and reviewing the effects of lifesaving medication.'
      ],
      entryRequirements: [
        'Be at least 18 years old on the first day of the training and',
        'Be employed by a CQC registered organisation (or overseas equivalent) and',
        'Have successfully completed the Qualsafe Level 4 Certificate in First Response Emergency Care (RQF) or a QA recognised equivalent.'
      ],
      courseType: 'salm'
    },
    {
      id: 4,
      title: 'First Aid',
      shortTitle: 'First Aid',
      image: '/firstaid.jpg',
      description: 'MedCare247 are able to deliver a number of First Aid related qualifications to meet your training needs.',
      courseType: 'firstaid',
      coursesOffered: [
        'Emergency First Aid at Work (1 Day)',
        'First Aid at Work (3 Days)',
        'First Aid at Work (Requalification) (2 Days)',
        'Paediatric First Aid',
        'Citizen Aid',
        'Basic Life Support & Automated External Defibrillation (BLS/AED)'
      ],
      costInfo: 'If you are interested in undertaking one of our First Aid courses, for group bookings or to discuss delivery at your premises, please get in touch with us at info@medcare247.co.uk. You can find all upcoming courses in the section below.'
    },
    {
      id: 5,
      title: 'Qualsafe Level 6 Diploma in Paramedic Practice',
      shortTitle: 'Qualsafe Level 6 Diploma in Paramedic Practice',
      image: '/paramedic-hero.jpeg',
      description: 'This qualification comprises 3 mandatory components with a Total Qualification Time (TQT) of 1200 hours.',
      courseType: 'paramedic',
      comingSoon: true,
      comingSoonText: 'Coming soon late 2026',
      structure: {
        tqt: '1200 hours',
        maxCompletionTime: '48 months',
        glh: '160 GLH',
        onlineStudy: '290 hours',
        selfDirectedStudy: '750 hours'
      },
      completionInfo: 'Learners must complete all assessments successfully within the registration period to achieve the qualification. The maximum time to complete this qualification, including referrals is 48 months.',
      tqtInfo: 'TQT is the total number of hours required for a Learner to achieve this qualification. It has 2 elements:',
      tqtElements: [
        'Guided Learning Hours (GLH) – GLH is the time a Learner is being taught and assessed under the immediate guidance or supervision of a Trainer/Assessor, which for this qualification is 160 GLH',
        'The number of hours a Learner will reasonably be likely to spend in preparation and study, including assessment, as directed by, but not under the immediate guidance or supervision of a Trainer, which for this qualification is 290 hours online directed study and 750 hours self-directed study and assignment completion'
      ]
    }
  ]

  const toggleCourse = (courseId) => {
    setExpandedCourse((prevExpanded) => {
      // If clicking the same course, close it. Otherwise, open the clicked course
      return prevExpanded === courseId ? null : courseId
    })
  }

  return (
    <div className="training">
      <section className="training-hero">
        <div className="container">
          <h1>Shape the future of the next generation.</h1>
          <p className="hero-subtitle">Take the next step in your career.</p>
          <p className="hero-description">
            Share Your Knowledge and Expertise with the Next Generation of Healthcare Professionals
          </p>
        </div>
      </section>

      <section className="training-content">
        <div className="container">
          {/* Training Equipment Section */}
          <div className="facilities-section">
            <h2>Our Facilities</h2>
            <p>
              Our training center is fully equipped with modern training equipment designed to enhance your learning experience. 
              Our spacious classrooms are equipped with a variety of tools and resources that enable us to simulate realistic 
              scenarios and provide hands-on learning opportunities. This immersive approach to training helps ensure that you 
              are fully prepared for real-world situations.
            </p>
          </div>

          {/* Training Courses - Alternating Layout */}
          {courses.map((course, index) => {
            const isEven = index % 2 === 1 // Even index (0-based) means image on right
            const isExpanded = expandedCourse === course.id

            return (
              <div key={course.id} className={`course-section-layout ${isEven ? 'reverse' : ''}`}>
                {/* Image Section */}
                <div className="course-image-section">
                  {course.image ? (
                    <img src={course.image} alt={course.title} className="course-image" />
                  ) : (
                    <div className="course-image-placeholder">
                      <span>Image Placeholder</span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="course-content-section">
                  <div className="course-content-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                      <h2>{course.title}</h2>
                      {course.comingSoon && (
                        <span className="coming-soon-badge">{course.comingSoonText || 'Coming Soon'}</span>
                      )}
                    </div>
                    {course.courseType !== 'firstaid' && course.courseType !== 'paramedic' && (
                      <div className="course-meta">
                        <p><strong>Course Duration:</strong> {course.courseType === 'salm' ? course.courseDuration : course.duration?.tqt || 'N/A'}</p>
                        <p><strong>Course Cost:</strong> {course.price}</p>
                      </div>
                    )}
                    {course.courseType === 'paramedic' && course.structure && (
                      <div className="course-meta">
                        <p><strong>Total Qualification Time (TQT):</strong> {course.structure.tqt}</p>
                        <p><strong>Maximum Completion Time:</strong> {course.structure.maxCompletionTime}</p>
                      </div>
                    )}
                  </div>

                  <div className="course-description">
                    <p>{course.description}</p>
                  </div>

                  <button 
                    className="btn btn-primary"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      toggleCourse(course.id)
                    }}
                  >
                    {isExpanded ? 'Show Less' : 'Learn More'}
                  </button>

                  {isExpanded && (
                    <div className="course-expanded-details">
                      {course.courseType === 'salm' ? (
                        <>
                          <div className="course-info-block">
                            <h4>What's Covered?</h4>
                            <ul className="course-requirements">
                              {course.whatsCovered.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="course-info-block">
                            <h4>Entry Requirements</h4>
                            <p>Learners must:</p>
                            <ul className="course-requirements">
                              {course.entryRequirements.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </>
                      ) : course.courseType === 'firstaid' ? (
                        <>
                          <div className="course-info-block">
                            <h4>What can we deliver?</h4>
                            <p>MedCare247 are able to deliver a number of First Aid related qualifications including:</p>
                            <ul className="course-requirements">
                              {course.coursesOffered.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="course-info-block">
                            <h4>Cost and Duration</h4>
                            <p>{course.costInfo}</p>
                          </div>
                        </>
                      ) : course.courseType === 'paramedic' ? (
                        <>
                          <div className="course-info-block">
                            <h4>Heading and Structure</h4>
                            <p>{course.description}</p>
                            <p>{course.completionInfo}</p>
                          </div>

                          <div className="course-info-block">
                            <h4>Total Qualification Time (TQT)</h4>
                            <p>{course.tqtInfo}</p>
                            <ul className="course-requirements">
                              <li><strong>Guided Learning Hours (GLH):</strong> {course.structure.glh}</li>
                              <li><strong>Online Directed Study:</strong> {course.structure.onlineStudy}</li>
                              <li><strong>Self-Directed Study and Assignment Completion:</strong> {course.structure.selfDirectedStudy}</li>
                            </ul>
                            <p style={{ marginTop: '1rem' }}><strong>Total TQT:</strong> {course.structure.tqt}</p>
                          </div>

                          <div className="course-info-block">
                            <h4>TQT Elements</h4>
                            <ul className="course-requirements">
                              {course.tqtElements.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="course-info-block">
                            <h4>What is {course.shortTitle}</h4>
                          </div>

                          <div className="course-info-block">
                            <h4>Course Duration</h4>
                            <p>{course.duration.entryRequirements}</p>
                            <ul className="course-requirements">
                              <li>{course.duration.ageRequirement}</li>
                              <li>The Total Qualification Time (TQT) for this qualification is: <strong>{course.duration.tqt}</strong></li>
                              <li>Guided Learning (GL) for this qualification is: <strong>{course.duration.gl}</strong></li>
                              <li>Minimum credits required to achieve the qualification: <strong>{course.duration.credits}</strong></li>
                            </ul>
                          </div>

                          <div className="course-info-block">
                            <h4>Entry Guidance and Restrictions</h4>
                            <p className="course-price">Course Price: <strong>{course.price}</strong></p>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Training

