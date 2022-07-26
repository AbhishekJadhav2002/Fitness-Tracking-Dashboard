import { useState } from 'react';
import './TargetSetter.styles.css';

function TargetSetter({ data }) {
    const [target, setTarget] = useState(data.initialTargetValue ?? 0)

    const addToTarget = () => setTarget(previousTarget => previousTarget + data.factor ?? 1)

    const subtractFromTarget = () => setTarget(previousTarget => (previousTarget > 0) ? (previousTarget - data.factor ?? 1) : 0)

    return (
        <span className="target-setter">
            <button className="target-setter-buttons" onClick={addToTarget} value="+">+</button>
            <div className="target-setter-target-value">
                <h3>{target / 1000 >= 1 ? `${(target / 1000).toFixed(1)}K` : target}</h3>
                <p>target</p>
            </div>
            <button className="target-setter-buttons" onClick={subtractFromTarget} value="-">-</button>
        </span>
    )
}

export default TargetSetter;