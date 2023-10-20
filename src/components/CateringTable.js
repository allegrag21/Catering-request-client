import { useEffect, useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate } from "react-router-dom";
import * as CateringService from '../services/CateringService';

import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from '@mui/material';

export const CateringTable = () => {
    const [clients, setclient]= useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        requestDataFromApi();
    }, []);

    function requestDataFromApi(){
        CateringService.getAllClients()
        .then(res => {
            setclient(res.data);
        })
    }

    function goToUpdate(id){
        navigate(`/update/${id}`);
    }

    function deleteclient (id){
        CateringService.deleteClient(id)
        .then(()=>{
            requestDataFromApi();
        })
    }

    return (
        <div >
            <Table sx={{minWidth:700}}>
                <TableHead sx={{}}>
                <TableRow>
                    <TableCell>
                        Id
                    </TableCell>                        
                    <TableCell>
                        First Name
                    </TableCell>
                    <TableCell>
                        Last Name
                    </TableCell>
                    <TableCell>
                        Email
                    </TableCell>
                    <TableCell>
                        eventDetails
                    </TableCell>
                    <TableCell align="right">
                        Actions
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        clients.map((client)=> {
                            return(
                                <TableRow
                                    hover
                                    key={client.id}
                                >
                                    <TableCell>
                                        {client.id}
                                    </TableCell>
                                    <TableCell>
                                        {client.firstName}
                                    </TableCell>
                                    <TableCell>
                                        {client.lastName}
                                    </TableCell>
                                    <TableCell>
                                        {client.email}
                                    </TableCell>
                                    <TableCell>
                                        {client.eventDetails}
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton component="a" onClick={()=> goToUpdate(client.id)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton component="a" onClick={()=> deleteclient(client.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ) 
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}