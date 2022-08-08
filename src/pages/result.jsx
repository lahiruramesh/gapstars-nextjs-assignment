import React from 'react';
import { useRouter } from 'next/router';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PhotoGallery from '../components/PhotoGallery';

export default function result() {

    const {query} = useRouter();

    const [resultData, setResultData] = React.useState({status: 0});
    console.log('query', query.refId);
    React.useEffect(() => {
        if(query.refId) {
            let url = '/api/findbyRef?refId=' + query.refId;
            console.log(url);
            fetch(url).then(res => res.json(res)).then(data => {
                console.log('daata', data);
                setResultData(data);
            })
        }
       
    }, [query.refId]);


    if(resultData.status == 0) {
        return (<Typography variant="h4" gutterBottom>
                Reference ID: {query.refId} Not Found
            </Typography>)
    }


    return(
        <Paper variant="outlined" sx={{ my: { xs: 12, md: 4 }, p: { xs: 2, md: 3 }, mx: {md: 12} }}>
            <Typography variant="h4" gutterBottom>
                Reference ID: {query.refId}
            </Typography>
            
            <Grid container xs={12} spacing={2}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: '100%' }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Vehicle Number</TableCell>
                            <TableCell>{resultData.data.vehicleNumber}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Engine Number</TableCell>
                            <TableCell>{resultData.data.engineNo}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Chassis Number</TableCell>
                            <TableCell>{resultData.data.chassisNo}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Customer Name</TableCell>
                            <TableCell>{resultData.data.firstName} {resultData.data.lastName}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>NIC/Passport</TableCell>
                            <TableCell>{resultData.data.nicNo}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell>{resultData.data.email}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Mobile</TableCell>
                            <TableCell>{resultData.data.mobile}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Address</TableCell>
                            <TableCell>{resultData.data.addressNo},{resultData.data.street01},
                            {resultData.data.street02},{resultData.data.city}</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
            </TableContainer>
            </Grid>
            <Grid container xs={12} spacing={2}>
                <PhotoGallery />
            </Grid>
        </Paper>
    )
}