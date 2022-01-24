import React, { useState } from "react";

import Card from "../UI/Card"
import Button from "../UI/Button";
import classes from './AddUser.module.css'

const AddUsers = (props) => {

    const [entredUsername, setEnterdUsername] = useState('')
    const [entredAge, setEntredAge] = useState('')

    const usernameChangeHandler = (e) => {
        setEnterdUsername(e.target.value)

    }
    const ageChangeHandler = (e) => {
        setEntredAge(e.target.value)
    }
    return (
        <Card className={classes.input}>
            <form >

                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={entredUsername} onChange={usernameChangeHandler} />

                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number" value={entredAge} onChange={ageChangeHandler} />

                <Button type="submit" onClick={props.addUserHandler(entredUsername, entredAge)}> Add User</Button>

            </form>
        </Card>
    )
}

export default AddUsers