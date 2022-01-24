import React from "react";
import classes from './UserList.module.css'

import Card from "../UI/Card";
const UserList = props => {

    return (
       <Card className={classes.users}>
           <ul>
               <li>{props.username}</li>
                <li>{props.age}</li>
           </ul>
       </Card>
    )


}

export default UserList