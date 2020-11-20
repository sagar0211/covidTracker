import React from "react"

class Summary extends React.Component {
    render() {
        const { summary, currentDate } = this.props;
        return (


            <div className="row">

                <div className="NewConfirmed">
                    <h4>Today's Confirmed Cases</h4>
                    <h2>{summary.NewConfirmed}</h2>
                    <h5>{new Date(currentDate).toDateString()}</h5>
                </div>

                <div className="TotalConfirmed">
                    <h4>Total Confirmed Cases</h4>
                    <h2>{summary.TotalConfirmed}</h2>
                    <h5>{new Date(currentDate).toDateString()}</h5>
                </div>

                <div className="NewDeaths">
                    <h4>Today's Death count</h4>
                    <h2>{summary.NewDeaths}</h2>
                    <h5>{new Date(currentDate).toDateString()}</h5>
                </div>

                <div className="TotalDeaths">
                    <h4>Total Death count</h4>
                    <h2>{summary.TotalDeaths}</h2>
                    <h5>{new Date(currentDate).toDateString()}</h5>
                </div>

                <div className="NewRecovered">
                    <h4>Today's Recovered cases</h4>
                    <h2>{summary.NewRecovered}</h2>
                    <h5>{new Date(currentDate).toDateString()}</h5>

                </div>

                <div className="TotalRecovered">
                    <h4>Total Recovered Cases</h4>
                    <h2>{summary.TotalRecovered}</h2>
                    <h5>{new Date(currentDate).toDateString()}</h5>
                </div>

            </div>
        )
    }
}

export default Summary;