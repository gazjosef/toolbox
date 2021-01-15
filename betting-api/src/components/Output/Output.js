import React from 'react'

export const Output = () => {
    return (
        <div className="output u-margin-bottom-medium">
            <table className="output__table">
                <thead>
                    <tr>
                    <th scope="col">Start Time</th>
                    <th scope="col">Team</th>
                    <th scope="col">Bookmaker</th>
                    <th scope="col">Odds</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td rowSpan="2">12:30 PM</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
