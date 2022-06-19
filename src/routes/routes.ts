import { lazy, LazyExoticComponent } from 'react'
import LazyPage1 from "../01-lazyload/pages/LazyPage1";
import LazyPage2 from "../01-lazyload/pages/LazyPage2";
import LazyPage3 from "../01-lazyload/pages/LazyPage3";
import NoLazy from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element

interface Route {
    to : string ,
    path : string,
    Component :React.LazyExoticComponent<JSXComponent> | JSXComponent,
    name? : string 
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyPage1"*/'../01-lazyload/layout/LazyLayout'))



export const routes : Route[]= [
    {
        to : '/lazyload/*',
        path : '/lazyload/',
        Component : LazyLayout,
        name : 'LazyLayout'
    },
     {
        to : '/no-lazy',
        path : 'no-lazy ',
        Component : NoLazy,
        name : 'no Lazy'
    },
   
]