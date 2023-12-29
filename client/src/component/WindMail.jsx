
import classes from './WindMain.module.css'
import background0 from './image/image1.jpg'
import background1 from './image/image2.jpg'
import background2 from './image/image3.jpg'
import background3 from './image/image4.jpeg'




const WindMain = () => {
    return (
        <>
            <div className={classes.wrapper}>
                <div style={{ backgroundImage: "url(" + background0 + ")" }}></div>
                <div style={{ backgroundImage: "url(" + background1 + ")" }}></div>
                <div style={{ backgroundImage: "url(" + background2 + ")" }}></div>
                <div style={{ backgroundImage: "url(" + background3 + ")" }}></div>
            </div>
        </>

    );
}

export default WindMain