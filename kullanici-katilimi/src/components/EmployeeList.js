import Employee from "./Employee"
import './EmployeeList.css';
export default function EmployeeList(props) {
    const { dataProp } = props
    return (
        <div className="employee-area">
            <h2> EMPLOYEE LIST </h2>
            <div className="employeeList">
                {
                    dataProp.map((employee) => {
                        return (
                            <Employee employeeProp={employee} key={employee.id}></Employee>
                        )
                    })
                }
            </div>
        </div>
    )
}