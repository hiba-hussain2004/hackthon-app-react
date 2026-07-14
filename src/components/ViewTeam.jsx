import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewTeam = () => {
    const [data,changeData]=useState([])

    const fetchData =()=>{

        axios.get("http://localhost:3002/view-team").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()

    }
    useEffect(
        ()=>{
            fetchData()
        },[]
    )

  return (
    <div>
        <h2 className="text-center mb-4">View Lab Entry</h2>
        <table className="table table-bordered table-striped table-hover">
  <thead className="table-dark">
    <tr>
      <th>Team ID</th>
      <th>Team Name</th>
      <th>Team Leader</th>
      <th>Leader Email</th>
      <th>Leader Phone</th>
      <th>College Name</th>
      <th>No. of Members</th>
      <th>Project Title</th>
      <th>Problem Statement Track</th>
      <th>Technology Stack</th>
      <th>Mentor Name</th>
      <th>Registration Date</th>
      <th>Table / Station No.</th>
    </tr>
  </thead>

  <tbody>
    {data.map((value, index) => (
      <tr key={index}>
        <td>{value.team_id}</td>
        <td>{value.team_name}</td>
        <td>{value.team_leader_name}</td>
        <td>{value.leader_email}</td>
        <td>{value.leader_phone}</td>
        <td>{value.college_name}</td>
        <td>{value.number_of_numbers}</td>
        <td>{value.project_title}</td>
        <td>{value.project_statement_track}</td>
        <td>{value.technology_stack}</td>
        <td>{value.mentor_name}</td>
        <td>{value.registration_date}</td>
        <td>{value.table}</td>
      </tr>
    ))}
  </tbody>
</table>




    </div>
  )
}

export default ViewTeam