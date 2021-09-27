import { Paper,Box,Grid, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { PersonAdd } from '@material-ui/icons'
import React, { useCallback, useState } from 'react'
import CellEditor from './CellEditor'

export default function Body({ darkState }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [address, setAddress] = useState('');
    
    const [personToSend, setPersonToSend] = useState({
      first_name: 'Mary',
      last_name: 'Wilson',
      gender: 'Female',
      age: 13,
      address: '3685 Rocky Glade, Showtucket, NU, X1E-9I0, CA, (867) 371-4215',
      country: {
        name: 'Ireland',
        code: 'IE',
      },
    });

    const handleAddPerson = useCallback(
        () => {
            const persone = {
                first_name: firstName,
                last_name: lastName,
                gender,
                age,
                address,
                country: {
                    name: country,
                    code: countryCode
                }
            }
            setPersonToSend(persone)
            setFirstName('');
            setLastName('');
            setGender('');
            setAge('');
            setCountry('');
            setCountryCode('');
            setAddress('');
        },
       [firstName,lastName,gender,age, address, country, countryCode],
    ) 

    return <>
        <Paper elevation={12}>
            <Box mt={12} p={3} pt={1}>
                <Grid container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box width={'90%'} p={3} pt={0}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <TextField
                                value={firstName}
                                onChange={e => {
                                    setFirstName(e.target.value);
                                }}
                                id="firstName"
                                label="First Name"
                                variant="standard"
                            />

                            <TextField
                                value={lastName}
                                onChange={e => {
                                    setLastName(e.target.value);
                                }}
                                id="lastName"
                                label="Last Name"
                                variant="standard"
                            />

                            <Box width={200}>
                                <FormControl fullWidth >
                                    <InputLabel id="gender-label">Gender</InputLabel>
                                    <Select
                                        labelId="gender-label"
                                        id="gender"
                                        value={gender}
                                        label="Gender"
                                        onChange={(e) => {
                                            setGender(e.target.value);
                                        }}
                                    >
                                        <MenuItem value={"Male"}>Male</MenuItem>
                                        <MenuItem value={"Female"}>Female</MenuItem>
                                        <MenuItem value={""}></MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        
                            <TextField
                                value={age}
                                onChange={e => {
                                    setAge(e.target.value);
                                }}
                                id="age"
                                label="Age"
                                variant="standard"
                            />
                        </Grid>
                        
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="baseline"
                        >

                            <TextField
                                value={country}
                                onChange={e => {
                                    setCountry(e.target.value);
                                }}
                                id="country"
                                label="Country"
                                variant="standard"
                            />

                            <TextField
                                value={countryCode}
                                onChange={e => {
                                    setCountryCode(e.target.value);
                                }}
                                id="countryCode"
                                label="Country Code"
                                variant="standard"
                            />

                            <TextField
                                value={address}
                                onChange={e => {
                                    setAddress(e.target.value);
                                }}
                                id="address"
                                label="Address"
                                variant="standard"
                            />
                        
                        
                            <Box width={200} mt={3}>
                                <Button
                                    fullWidth 
                                    variant="outlined"
                                    startIcon={<PersonAdd />}
                                    onClick={handleAddPerson}
                                    >
                                    Add person
                                </Button>
                            </Box>
                        </Grid>
                    </Box>

                    <CellEditor person={personToSend} darkState={darkState} />
                    
                </Grid>
            </Box>
        </Paper>
    </>
}
