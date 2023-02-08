import React from 'react';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import { Header } from 'widgets/Header';
import Loader from 'shared/ui/Loader/Loader';


const App = () => {
   const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Header/>
           <AppRouter/>
           
        </div>
    );
};

export default App;
