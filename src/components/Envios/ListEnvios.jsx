import React from 'react'
import { Container, Table } from 'react-bootstrap'
import EnvioItem from './EnvioItem'
import NavbarComponent from '../navbar/Navbar'

function ListEnvios(){

    const sends = [ 
        {
        id:345654,
        date:"2022/09/21",
        city:"Medellin",
        address:"Cl 54 #08-32",
        status:"Enviado"
        },
        {
            id:345655,
            date:"2022/09/21",
            city:"Medellin",
            address:"Cl 54 #08-32",
            status:"Enviado"
        }
    ]

    return(
        <>
            <NavbarComponent />
            <Container className='mt-5'>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Fecha</th>
                            <th>Ciudad Entrega</th>
                            <th>Direccion</th>
                            <th>Estado</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <EnvioItem sends={sends} key="" />
                    </tbody>
                </Table>
            </Container>
        </>
    )

}

export default ListEnvios