import React, {useState, Fragment, useRef} from "react";

import styles from './AddUser.module.css'
import Button from "../UI/button";
import Card from "../UI/card"
import Error from "../UI/Error";

const AddUser = (props) => {
    const nameInputRef = useRef()
    const ageInputRef = useRef()
    const [error, setError] = useState()



    const addUserHandler = (event) => {
        event.preventDefault()
        const enteredUsername = nameInputRef.current.value
        const enteredAge = ageInputRef.current.value



        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError( {
                title: 'Invalid input',
                message: 'Enter a valid name or age'
            })
            return
        }
        if(enteredAge < 1){
            setError({
                title: 'Invalid input',
                message: 'Enter a valid age (over 1)'
            })
            return
        }
        props.onAddUser(enteredUsername, enteredAge)
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    }

        const usernameChangeHandler = (event) => {
           setEnteredUsername(event.target.value)
     }

 const ageChangeHandler = (event) => {
  setEnteredAge(event.target.value)





    }
    const errorHandler = () => {
        setError( null)
    }

    return (
        <Fragment>
            {error && (
                <Error
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}/>)}



        <Card className={styles.add_user}>

            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    ref={nameInputRef}
                    />
                <label htmlFor="age">Age (Years)</label>
                <input
                    id="age"
                    type="number"
                    ref={ageInputRef}
                    />
                <Button type="submit">Add User</Button>
            </form>

        </Card>
        </Fragment>
    )
}

export default AddUser