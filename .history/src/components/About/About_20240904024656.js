import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import {reviews} from './Reviews.json'

const About = () => {
  console.log(reviews)
  return (
      <div className="container about">
        <h2 className="capitalize page-header">About me </h2>
        <div className="about-info">
          <p className=" capitalize desc coder-desc ">
            passionate frontend web developer with 3 years of experience creating user friendly websites
            <Link className="arrow-icon icon" to="./projects">
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" />             
            </Link>
          </p>
        </div>
        <div className="clients-reviews">
        {reviewseviews.map((item , index) => {
          return (
            <div className="review-img" key={index}>
              <img src={ require(`./../../images/reviews/${item.projectImg}`)} alt="" className="" />          
            </div>
              )
            })}
        </div>
      </div>
    
  )
}

export default About
