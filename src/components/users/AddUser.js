import React from "react";

import styles from './AddUser.module.css'
import Button from "../UI/button";
import Card from "../UI/card"

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault()
    }

    return (
        <Card className={styles.add_user}>

            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number"/>
                <Button type="submit">Add User</Button>
            </form>

        </Card>
    )
}

export default AddUser