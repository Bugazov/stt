import {lazy} from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    //@ts-ignore
   resolve(import('./AboutPage'))
}));
