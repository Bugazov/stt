import { classNames } from "shared/lib/classNames/classNames";
import { FC } from "react";
import styles from "./PageError.module.scss";
import "./PageError.scss";

interface PageErrorProps {
  className?: string;
}
export const PageError: FC<PageErrorProps> = ({ className }) => {

  const reloadPage =()=>{
    location.reload()
  } 

  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      <div className="container2">
        <button onClick={reloadPage} className={styles.btn_reload}>Обновить страницу</button>
        <h1 className="first-four">4</h1>
        <div className="cog-wheel1">
          <div className="cog1">
            <div className="top"></div>
            <div className="down"></div>
            <div className="left-top"></div>
            <div className="left-down"></div>
            <div className="right-top"></div>
            <div className="right-down"></div>
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>

        <div className="cog-wheel2">
          <div className="cog2">
            <div className="top"></div>
            <div className="down"></div>
            <div className="left-top"></div>
            <div className="left-down"></div>
            <div className="right-top"></div>
            <div className="right-down"></div>
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>
        <h1 className="second-four">4</h1>
        <p className="wrong-para">Uh Oh! Page not found!</p>
      </div>
    </div>
  );
};

export default PageError;
