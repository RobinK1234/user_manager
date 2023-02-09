import React from "react";
import card from "../UI/card";
import Card from "../UI/card";
import styles from "./UserList.module.css"

const UsersList = (props) => {
    return (
        <Card className={styles.users}>
            <ul>
            {props.users.map((user) => (
                <li key={user.id}>{user.name} - {user.age} years old</li>
            ))}
            </ul>
        </Card>
    )
}

export default UsersList