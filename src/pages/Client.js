import * as CateringService from '../services/CateringService';
import Button from '@mui/material/Button';
import {useNavigate } from "react-router-dom";
import { CateringTable } from '../components/CateringTable';

export const Client =() => {
    const navigate = useNavigate();

    function addUser(){
        navigate("/add")
    }

    return(
        <>
            <Button variant="outlined" onClick={e => addUser()}>Add User</Button>
            <CateringTable />
        </>
    )
}