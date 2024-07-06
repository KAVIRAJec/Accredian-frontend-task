import React from "react"
import {
    Grid,
    makeStyles,
    Card,
    CardContent,
    MenuItem,
    InputLabel,
    Select,
    Button,
    FormControl,
} from "@material-ui/core"

import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { TextField } from "formik-material-ui"
import { Alert, AlertTitle, Box } from "@mui/material"
import useForm from "hooks/useForm"
import LoadingButton from '@mui/lab/LoadingButton';

const useStyle = makeStyles((theme) => ({
    padding: {
        padding: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1),
    },
}))

//Data
const initialValues = {
    name: "",
    contact: "",
    gender: "",
    email: "",
    referral_code: "",
}

//validation schema
let validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    contact: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    referral_code: Yup.string().required("Required"),
})

const UserForm = () => {
    const classes = useStyle();
    const { loading, handleForm, errorMessage } = useForm();

    const onSubmit = (values) => {
        console.log(values);
        handleForm(values);

    }

    return (
        <Grid container justify="center" spacing={1}>
            <Grid item md={20}>
                <Card className={classes.padding}>
                    {errorMessage && (
                        <Alert severity={errorMessage.toLowerCase().includes("failed") || errorMessage.toLowerCase().includes("error") || errorMessage.toLowerCase().includes("exist") ? "error" : "success"}>
                            <AlertTitle>{errorMessage}</AlertTitle>
                        </Alert>)}

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}>
                        {({ dirty, isValid, values, handleChange, handleBlur }) => {
                            return (
                                <Form>
                                    <CardContent>
                                        <Grid item container spacing={1} justify="center">
                                            <Grid item xs={12} md={12} lg={10}>
                                                <Field
                                                    label="Name"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="name"
                                                    value={values.name}
                                                    component={TextField}
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={12} lg={10}>
                                                <FormControl fullWidth variant="outlined">
                                                    <InputLabel id="demo-simple-select-outlined-label">
                                                        Gender
                                                    </InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-outlined-label"
                                                        id="demo-simple-select-outlined"
                                                        label="Gender"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.gender}
                                                        name="gender">
                                                        <MenuItem>None</MenuItem>
                                                        <MenuItem value="Male">Male</MenuItem>
                                                        <MenuItem value="Female">Female</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} md={6} lg={10}>
                                                <Field
                                                    label="Contact"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="contact"
                                                    type="tel"
                                                    value={values.contact}
                                                    component={TextField}
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6} lg={10}>
                                                <Field
                                                    label="Email"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="email"
                                                    value={values.email}
                                                    component={TextField}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={8} lg={6}>
                                                <Field
                                                    label="Referral_code"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="referral_code"
                                                    value={values.referral_code}
                                                    type="text"
                                                    component={TextField}
                                                />
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <Box display="flex" justifyContent="center" alignItems="center">

                                        {!loading ? (<Button
                                            loading={1}
                                            disabled={!dirty || !isValid}
                                            variant="contained"
                                            color="primary"
                                            type="Submit"
                                            className={classes.button}>
                                            REGISTER
                                        </Button>) : (<LoadingButton
                                            loading
                                            disabled={!dirty || !isValid}
                                            variant="contained"
                                            color="primary"
                                            type="Submit"
                                            className={classes.button}>
                                            REGISTER
                                        </LoadingButton>)}
                                    </Box>
                                </Form>
                            )
                        }}
                    </Formik>
                </Card>
            </Grid>
        </Grid>
    )
}

export default UserForm
