import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import EmployeeList from './EmployeeList';
export default function Main(props) {
    const { dataProp } = props;
    //console.log(dataProp);
    return (
        <div className="main">
            <Switch>
                <Route exact path="/">
                    <p>anasayfa</p>
                </Route>
                <Route exact path="/employeelist">
                    <EmployeeList dataProp={dataProp}></EmployeeList>
                </Route>
            </Switch>
        </div>
    )
}