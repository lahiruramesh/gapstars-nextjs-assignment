import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {useRouter} from 'next/router';

// Check damage report status by Reference
export default function Status() {

    const router = useRouter();
    const [ref, setRef] = React.useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push('/result?refId=' + ref);
    }
    return(
        <Paper variant="outlined" sx={{ my: { xs: 12, md: 4 }, p: { xs: 2, md: 3 }, mx: {md: 12} }}>  
            <form onSubmit={handleSubmit} method="GET">
            <Grid item xs={6} sm={6}>
                <TextField
                    required
                    id="search"
                    name="search"
                    label="Enter your reference"
                    fullWidth
                    autoComplete="search"
                    variant="standard"
                    onChange={(e)=>{setRef(e.target.value)}}
                />
                  <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, ml: 1 }}
                >
                  Search
                </Button>
            </Grid>
            </form>
        </Paper>
    )
}

