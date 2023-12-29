import classes from './Button.module.css'

const Button = () => {
    return (
        <div className={classes.container}>
            <div className={classes.btn}><a href="#">Read more 1</a></div>
            <div className={classes.btn}><a href="#" >Read more 2</a></div>
        </div>
    );
}

export default Button