import clsx from 'clsx';

import style from './Button.module.css';

function Button({primary}){

    const classes = clsx(style.btn,{
        [style.primary]: primary
    })
    return (
        <>
       
        <button className={classes}> Click Me!</button>
        </>
    );
}

export default Button;