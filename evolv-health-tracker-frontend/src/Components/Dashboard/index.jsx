import './Dashboard.styles.css';
import { UserData } from '../UserData';
import UserRow from './User Row';
import { RunningIcon, GymIcon, NutritionIcon } from '../assets/Icons';

function Dashboard() {
    const userRows = UserData.map((userData, index) => (
        <UserRow key={index} userData={userData} />
    ))

    return (
        <div className='dashboard'>
            <div className='dashboard-headers dashboard-table-columns-widths'>
                <div></div>
                <div><RunningIcon />Steps</div>
                <div><GymIcon />Workout</div>
                <div><NutritionIcon />Calories</div>
                <div></div>
            </div>
            {userRows}
        </div>
    )
}

export { Dashboard };