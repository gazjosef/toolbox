import React from 'react'

export const Output = () => {
    return (
        <div className="output">
            <h1>Output</h1>
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
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
