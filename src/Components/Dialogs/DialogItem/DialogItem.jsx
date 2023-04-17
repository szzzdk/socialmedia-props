import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => { // компонента, которая может принимать через props динамические изменяющщие данные
    let path = "/dialogs/" + props.id;

    return (
        <div className = { s.dialogD}>
            <NavLink to={path}>
                <ul className={s.items}>
                    <li className={s.item}>
                        {props.name}
                    </li>
                </ul>
            </NavLink>
        </div>
    );
}

export default DialogItem;