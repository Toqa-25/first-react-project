import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import projectsData from './../../../draftTest.json' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Test = () => {
  const param = useParams()
   let projectsName = param.id
   let projectsName = param.id
  const [selectedProjects , setSelectedProjects ] = useState()
  console.log(projectsData[projectsName])
  console.log(projectsName)
 
  return (
    <div className="container">
      Test
      <div className="Projects-items mains">
      {projectsData.map((item) => {
        return (
          <div className="flex-column project-item">
            <h4 className="capitalize project-name">
              {item.projectName} 
              
            </h4>          
          </div>
            )
          })}
      </div>
      
      
    </div>
  )
}

export default Test