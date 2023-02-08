import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from "./NotFoundPage.module.scss"
const NotFoundPage = () => {
    return (
        <div className={classNames(styles.NotFoundPage)}>
            Страница не существует
            
        </div>
    );
};

export default NotFoundPage;