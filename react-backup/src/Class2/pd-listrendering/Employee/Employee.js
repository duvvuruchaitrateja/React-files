import React, { Component } from 'react'
import Employees from './data'
  class Employee extends Component {
    Employees=Employees
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.employees)}</pre>
        <div  className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>email</th>
                                <th>gender</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                Employees.map((employee,index )=>{
                                    return <tr key={index}>
                                        <td>{employee.id}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.gender}</td>

                                    </tr>
                                }
                                )
                            }
                        </tbody>

                    </table>

                </div>
             </div>
        </div>
      </div>
    )
  }
}
export default Employee
