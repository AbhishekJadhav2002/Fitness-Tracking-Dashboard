import './User-row.styles.css';
import PieChartDonut from './Components/Charts/PieChart';
// import HorizontalBar from './Components/Charts/HorizontalBars';
import TargetSetter from './Components/TargetSetter';
import { SchedulingDateIcon, TargetDateIcon, BellIcon } from '../../assets/Icons';

export default function UserRow({ userData }) {
    const dateObject = [new Date(userData.Workout.performedDate).toDateString().split(' '), new Date(userData.Workout.scheduledDate).toDateString().split(' ')];

    return (
        <div className="user-row dashboard-table-columns-widths">
            <div className="user-row-intro">
                <img src={require(`../../assets/Images/${userData.userId}.png`)} alt="profile" />
                <span>
                    <h4>{userData.name}</h4>
                    <p>{userData.email}</p>
                </span>
            </div>
            <div className="user-row-steps">
                <span>
                    <PieChartDonut
                        data={[userData.Steps[0].stepsWalked, userData.Steps[1].stepsTarget]}
                        colors={['#7FD18C', '#ffffff']}
                    />
                    <div>
                        <h3>{userData.Steps[0].stepsWalked ?? 0}</h3>
                        <p>walked</p>
                    </div>
                </span>
                <span>
                    <TargetSetter data={{ "initialTargetValue": userData.Steps[0].stepsWalked, "factor": 500 }} />
                </span>
            </div>
            <div className="user-row-workout">
                <span>
                    <div>
                        <SchedulingDateIcon />
                        <time>{[dateObject[0][2], dateObject[0][1]].join(' ')}
                        </time>
                    </div>
                    <div className={new Date(userData.Workout.scheduledDate) < new Date() ? "date-red" : ""} >
                        <TargetDateIcon />
                        <time>{[dateObject[1][2], dateObject[1][1]].join(' ')}
                        </time>
                    </div>
                </span>
                <span>!</span>
            </div>
            <div className="user-row-nutrition">
                <span>
                    <PieChartDonut
                        data={[userData.Nutrition[3].proteinTarget, userData.Nutrition[5].fatTarget, userData.Nutrition[7].carbTarget]}
                        colors={['#F45C84', '#F5C90F', '#03C7FC']}
                    />
                    <div>
                        <h3>{userData.Nutrition[0].calorieIntake ?? 0}</h3>
                        <p>calories</p>
                    </div>
                </span>
                <span>
                    <TargetSetter data={{ "initialTargetValue": userData.Nutrition[0].calorieIntake, "factor": 400 }} />
                </span>
            </div>
            <div className="user-row-notification">
                <span><BellIcon /></span>
            </div>
        </div>
    )
}