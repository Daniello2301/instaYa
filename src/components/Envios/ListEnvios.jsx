import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import NavbarComponent from "../navbar/Navbar";
import Cookies from "universal-cookie";
import * as API from '../../services/send-services'

import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi"
const cookies = new Cookies();

function ListEnvios() {

    const token = cookies.get("TOKEN");

    const [sends, setSends] = useState([]);

    const getSends = async() => {
        const configuration = {
            headers: {
                'Authorization': `${token}`,
            }
        }
        try {
            if(token){
                await API.getAllSends(configuration)
                .then((response ) => {
                    console.log(response); 
                    setSends(response);
                })
                .catch( (error) => {
                    console.log(error);
                });
            }else{
                window.location.href = "/login"
            }
        } catch (error) {
            console.log(error);            
        }
    }

    useEffect(() => {
        getSends()
    },[])


  return (
    <>
      <NavbarComponent />
      <Container>
        <Table className="sends_list">
            <thead>
                <tr>
                    <th>Código de envio</th>
                    <th>Fecha</th>
                    <th>Ciudad de entrega</th>
                    <th>Direccion de entrega</th>
                    <th>Persona de entrega</th>
                    <th>Estado</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
                {
                    sends.map(map => 
                        <tr key={map._id}>
                            <td> {map.codeSend} </td>
                            <td> {map.dateSend} </td>
                            <td> {map.cityUserDelivery} </td>
                            <td> {map.addressUserDelivery} </td>
                            <td> {map.nameUserDelivery} </td>
                            <td> {map.status} </td>
                            <td> <Link to={"/edit"} className="btn btn-secondary" > <BiEdit/> </Link> </td>
                        </tr>)
                }
            </tbody>
        </Table>
      </Container>
    </>
  )
}

export default ListEnvios;
