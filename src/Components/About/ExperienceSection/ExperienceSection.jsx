import React from 'react'
import './ExperienceSection.scss';


function ExperienceSection({periodStart, periodEnd, name, description}) {
  return (
    <>
        <div className="experience-section-wrapper">
            <div className="period">
                <span>{periodStart} - {periodEnd}</span>
            </div>
            <div className="name">
                <span>{name}</span>
            </div>
            <div className="description">
                <span>{description}</span>
            </div>
        </div>
    </>
  )
}

export default ExperienceSection