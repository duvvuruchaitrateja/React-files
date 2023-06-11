import React,{component} from 'react'
import employees from './Data'
class Employee extends React.Component{
    employees=employees
    render(){
        return(
            <div>
                <pre>{JSON.stringify(this.employees)}</pre>
                <div className="container">
                    <div className="row">
                        <div className='col-md-6'>
                            <table className='table table-hover'>
                                <thead className='bg-primary text-white'>
                                    <tr>
                                      <th>id</th>
                                      <th>name</th>
                                      <th>email</th>
                                      <th>gender</th>
                                    </tr>

                                </thead>l
                                <tbody>
                                    {
                                        employees.map((employee,index)=>{
                                            return<tr key={index}>
                                                   <td>{employee.id}</td>
                                                   <td>{employee.name}</td>
                                                   <td>{employee.email}</td>
                                                   <td>{employee.gender}</td>
                                                </tr>
                                        } )
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