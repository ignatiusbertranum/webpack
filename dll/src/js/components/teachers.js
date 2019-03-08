import React, { Component } from 'react'
import Teacher from './teacher.js'
import '../../css/teachers.scss'

class Teachers extends Component {
    render() {
      return (
        <ul className="Teachers">
          {this.props.data.teachers.map((teacherData) => {
            return <Teacher key={teacherData.twitter}{...teacherData} />
          })         
          }
          <Teacher />        
        </ul>
      )
    }
  }

  export default Teachers