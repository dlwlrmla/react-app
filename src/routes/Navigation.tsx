import { BrowserRouter, Navigate } from "react-router-dom"
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { Suspense } from "react";
import LazyPage1 from "../01-lazyload/pages/LazyPage1";
import LazyPage2 from "../01-lazyload/pages/LazyPage2";
import LazyPage3 from "../01-lazyload/pages/LazyPage3";
import logo from '../logo.svg'
import { routes } from "./routes";


const Navigation = () => {
  return (
    <>
    <Suspense fallback={<span>Loading...</span>}>    
    <BrowserRouter>
     <div className="main-layout">
        <nav>
            <img src={logo} alt="React logo" />
        <ul>
            {
                routes.map( route => (
                    <li key={route.to}>
                        <NavLink to={route.to} className={({ isActive }) => isActive ?  'nav-active' : ''} >{route.name}</NavLink>
                    </li>
                ))
            }
        </ul>
        </nav>

        <Routes>
        {
            routes.map( route => (
                <Route path={route.to} key={route.to} element={<route.Component/>}  />
            ))
        } 
        <Route path ="/*" element={<Navigate to={routes[0].to} replace /> } />
        </Routes>

     </div>
     </BrowserRouter>
     </Suspense>

    </>
  )
}

export default Navigation