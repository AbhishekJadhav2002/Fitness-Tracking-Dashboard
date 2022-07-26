import DonutChart from 'react-donut-chart';

function PieChartDonut(props) {
    const stepsDataAsArray = props.data.map(eachValue => ({ value: eachValue }))

    return (
        <DonutChart
            data={stepsDataAsArray}
            className="donut-chart"
            height={100}
            width={100}
            colors={props.colors}
            legend={false}
        />
    )
}

export default PieChartDonut;