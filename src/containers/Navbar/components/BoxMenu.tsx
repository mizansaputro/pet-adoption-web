import React, { FC } from "react";
import { BoxMenuInterface } from "../interface";

const BoxMenu: FC<BoxMenuInterface> = ({text}) => {
    return (
        <li>
           {text} 
        </li>
    )
};

export default BoxMenu;
