
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import './Employee.css';
export default function Employee(props) {
    const { employeeProp } = props;
    return (
        <div className="employee" key={employeeProp.id}>
            <Card
                className="shadow-sm my-2"
                style={{
                    width: "18rem",
            }}>
                <img src={employeeProp.avatar} alt={employeeProp.first_name} />
                <CardBody>
                    <CardTitle tag="h5">{employeeProp.first_name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {employeeProp.email}
                    </CardSubtitle>
                </CardBody>
            </Card>
        </div>
    )
}