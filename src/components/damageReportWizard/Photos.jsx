import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageList, { ImageListItem, TextField, Button } from '@mui/material';

// Photos upload section in Wizard
export default function Photos(props) {

  const [uploadFile, setUploadFile] = React.useState();

  const onChangeHandler = (e) => {
    let form = {...props.damageReportForm};
    form[e.target.name] = e.target.value;
    props.setDamageReportForm(form);
  }  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(uploadFile);
    let formData = new FormData();
    formData.append('image', uploadFile[0]);
    const requestOptions = {
      method: 'POST',
      body: formData,


    }
    fetch('/api/upload', requestOptions).then((response) => response.text())
    .then((result) => {
      let form = {...props.damageReportForm};
      form['photos'] = [...form['photos'], JSON.parse(result)];
      props.setDamageReportForm(form);
    })
    .catch((error) => console.log("error", error));
    
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Upload Photos
      </Typography>
      <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        
        <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              component="label"
            >
              Select File
              <input
                type="file"
                hidden
                id="photo"
                name="photo"
                onChange={(e)=>{setUploadFile(e.target.files)}}
              />
            </Button>
          </Grid>  
          <Grid item xs={12} sm={6}>
              <TextField
                  required
                  onChange={onChangeHandler}
                  id="photosDescription"
                  name="photosDescription"
                  label="photosDescription"
                  fullWidth
                  autoComplete="photosDescription"
                  variant="standard"
                  value={props.damageReportForm.photosDescription}
              />
          </Grid>
          <Grid item xs={12} sm={6}>
          <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, ml: 1 }}
            >
              Upload
            </Button>
          </Grid>
          
      </Grid>
      </form> 
    </React.Fragment>
  );
}