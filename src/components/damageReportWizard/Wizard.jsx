import * as React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomerDetails from './CustomerDetails';
import Photos from './Photos';
import VehicleInfo from './VehicleInfo';
import Summary from './Summary';

import { steps } from '../../config/global.constants';

import styles from './Wizard.module.css';

// Load Wizard Components
function getStepContent(step, {damageReportForm, setDamageReportForm}) {
    switch(step) {
        case 0: 
            return <VehicleInfo damageReportForm={damageReportForm} setDamageReportForm={setDamageReportForm} />;
        case 1:
            return <Photos damageReportForm={damageReportForm} setDamageReportForm={setDamageReportForm} />;
        case 2: 
            return <CustomerDetails damageReportForm={damageReportForm} setDamageReportForm={setDamageReportForm} />;
        case 3:
            return <Summary damageReportForm={damageReportForm} setDamageReportForm={setDamageReportForm} />;
        default:
            throw new Error('Unknown Step');       
    }
}

// Form Wizard
export default function FormWizard() {

    const [activeStep, setActiveStep] = React.useState(0);
    const [validationStatus, setValidationStatus] = React.useState(false);
    const [damageReportForm, setDamageReportForm] = React.useState({'uploads': []});
    const [reference, setReference] = React.useState(null);

    const submitData = () => {
      const requestOptions = {
        method: 'POST',
        data: damageReportForm,
      }
      fetch('/api/submit',requestOptions).then(data => setReference(data.uuid)).catch((err) => console.log(err));  
    }

    const handleNext = () => {
        setActiveStep(activeStep + 1);
        if(activeStep == 3) {
          submitData();
        }
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    }

    const handleHome = () => {
        setActiveStep(0);
        setDamageReportForm({'uploads': []});
        setReference(null);
    }

    return (
        <Paper variant="outlined" sx={{ my: { xs: 12, md: 4 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
          Vehicle Damage Report
        </Typography>
        <Stepper className="wizard-steps" activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for submission. 
              </Typography>
              <Typography variant="subtitle1">
                Your reference number is # {reference}.
              </Typography>
              <Button
                  variant="contained"
                  onClick={handleHome}
                  sx={{ mt: 3, ml: 1 }}
                >
                  Home
                </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, { damageReportForm, setDamageReportForm})}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                  disabled={validationStatus}
                >
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </React.Fragment>
      </Paper>
    )
}