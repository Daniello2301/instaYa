import React from "react"

import {NavLink} from 'react-router-dom'

function EnvioItem({ sends }){
    return(
        <>

            {
                sends.map((send) => {
                    return (
                        <tr>
                            <td> {send.id} </td>
                            <td> {send.date} </td>
                            <td> {send.city} </td>
                            <td> {send.address} </td>
                            <td> {send.status} </td>
                            <td> <NavLink to={`/EditSend`} className="btn btn-warning" > Edit </NavLink> </td> 
                        </tr>

                    )
                })
            }
        </>
    )
}

export default EnvioItem