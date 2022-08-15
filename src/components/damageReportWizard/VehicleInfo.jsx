import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

// Vehicle Info section in Wizard
export default function VehicleInfo(props) {

  const onChangeHandler = (e) => {
    let form = {...props.damageReportForm};
    form[e.target.name] = e.target.value;
    props.setDamageReportForm(form);
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Vehicle Details
      </Typography>
      <form method='post' action='api/vehicleInfo'>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                onChange={onChangeHandler}
                id="vehicleNumber"
                name="vehicleNumber"
                label="Vehicle Number"
                fullWidth
                autoComplete="vehicleNumber"
                variant="standard"
                value={props.damageReportForm.vehicleNumber}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                onChange={onChangeHandler}
                id="chassisNo"
                name="chassisNo"
                label="Chassis No."
                fullWidth
                autoComplete="chassisNo"
                variant="standard"
                value={props.damageReportForm.chassisNo}
            />
            </Grid>

            <Grid item xs={12} sm={6}>
            <TextField
                required
                onChange={onChangeHandler}
                id="engineNo"
                name="engineNo"
                label="Engine Number"
                fullWidth
                autoComplete="engineNo"
                variant="standard"
                value={props.damageReportForm.engineNo}
            />
            </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}