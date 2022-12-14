import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

// Customer details section in Wizard
export default function CustomerDetails(props) {

  const onChangeHandler = (e) => {
    let form = {...props.damageReportForm};
    form[e.target.name] = e.target.value;
    props.setDamageReportForm(form);
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contact Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={onChangeHandler}
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={props.damageReportForm.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={onChangeHandler}
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={props.damageReportForm.lastName}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={onChangeHandler}
            id="nicNo"
            name="nicNo"
            label="NIC / Passport"
            fullWidth
            autoComplete="nicNo"
            variant="standard"
            value={props.damageReportForm.nicNo}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={onChangeHandler}
            id="mobile"
            name="mobile"
            label="Mobile"
            fullWidth
            autoComplete="mobile"
            variant="standard"
            value={props.damageReportForm.mobile}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={onChangeHandler}
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
            value={props.damageReportForm.email}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={onChangeHandler}
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={props.damageReportForm.address1}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={onChangeHandler}
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={props.damageReportForm.address2}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={onChangeHandler}
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={props.damageReportForm.city}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}