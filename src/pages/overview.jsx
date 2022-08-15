import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Overview() {

  const [isLoading ,setLoading] = React.useState(false);
  const [damageReports, setDamageRepors] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/getReport').then(res => res.json(res)).then((data) => {
        setDamageRepors(data); 
        setLoading(false)
    });
  }, []);

  if (isLoading) return <p>Loading...</p>
  if (!damageReports) return <p>No Damage Reports</p>

  return (
    <Paper variant="outlined" sx={{ my: { xs: 12, md: 4 }, p: { xs: 2, md: 3 } }}>  
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Vehicle Number</TableCell>
            <TableCell align="right">Engine Number</TableCell>
            <TableCell align="right">Chassis Number</TableCell>
            <TableCell align="right">Customer Name</TableCell>
            <TableCell align="right">NIC</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Mobile</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {damageReports.map((row) => (
            <TableRow
              key={row.uuid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.vehicleNumber}
              </TableCell>
              <TableCell align="right">{row.engineNo}</TableCell>
              <TableCell align="right">{row.chassisNo}</TableCell>
              <TableCell align="right">{row.firstName} {row.lastName}</TableCell>
              <TableCell align="right">{row.nicNo}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.mobile}</TableCell>
              <TableCell align="right">{row.addressNo}, {row.street01}, {row.street02}, {row.city}</TableCell>
              <TableCell align="right">{row.photos}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
  );
}
