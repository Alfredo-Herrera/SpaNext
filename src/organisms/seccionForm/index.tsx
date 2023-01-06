import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import emailjs from 'emailjs-com';
import { useFormik as FORMIK } from 'formik';
import { FC, useState } from 'react';
import { PropsPage } from '../../../interfaces';
import { DATA_SCHEMA } from '../../../schemas/FormYump';
import ButtonCustom from '../../atoms/ButtonCustom';
import { Texts } from './help';

const SeccionForm: FC<PropsPage> = ({ isMobile }) => {
  const fields: string[] = ['firstName', 'lastName', 'email', 'phone'];
  const [openAlert, setOpenAlert] = useState({
    view: false,
    error: '',
    type: 'success',
  });
  const { handleSubmit, errors, touched, getFieldProps } = FORMIK({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    onSubmit: async (values, { resetForm }) => {
      emailjs
        .send(
          'default_service',
          'template_iq9y3gt',
          values,
          'GfmX0SFkv2WMELGTr'
        )
        .then((response) => {
          if (response.status === 200) {
            setOpenAlert({
              view: true,
              error: 'El formulario se envió correctamente.',
              type: 'success',
            });
            resetForm();
          }
        })
        .catch(() => {
          setOpenAlert({
            view: true,
            error:
              'Ocurrio un error al enviar el formulario, intente más tarde.',
            type: 'error',
          });
        });
    },
    validationSchema: DATA_SCHEMA,
  });

  const PROPS_SIZE = {
    type: 'text',
    fullWidth: true,
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert({
      view: false,
      error: '',
      type: 'success',
    });
  };

  return (
    <>
      <Snackbar
        open={openAlert.view}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={openAlert.type === 'error' ? 'error' : 'success'}
          sx={{ width: '100%' }}
        >
          {openAlert.error}
        </Alert>
      </Snackbar>
      <Grid container sx={{ width: isMobile ? '100%' : '40%' }}>
        <Grid
          item
          xs={12}
          sx={{ display: 'flex', marginTop: '20px', justifyContent: 'center' }}
        >
          <Typography variant="h4">Contactanos</Typography>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '20px' }}>
          <form onSubmit={handleSubmit}>
            {fields.map((field, index: number) => {
              const key = `${index}-${field}`;
              return (
                <Grid item key={key} sx={{ margin: '10px' }}>
                  <Typography variant="h6">
                    {Texts.form[field as keyof typeof Texts.form].title}
                  </Typography>
                  <TextField
                    {...PROPS_SIZE}
                    placeholder={
                      Texts.form[field as keyof typeof Texts.form].placeholder
                    }
                    {...getFieldProps(field)}
                    error={
                      touched[field as keyof typeof touched] &&
                      Boolean(errors[field as keyof typeof errors])
                    }
                    helperText={
                      touched[field as keyof typeof touched] &&
                      errors[field as keyof typeof errors]
                    }
                  />
                </Grid>
              );
            })}
            <Box
              sx={{
                margin: '20px 10px 20px 10px',
              }}
            >
              <ButtonCustom variant="contained" fullWidth type="submit">
                Enviar
              </ButtonCustom>
            </Box>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default SeccionForm;
