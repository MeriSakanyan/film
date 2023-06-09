import React, { useState } from 'react'
import { Outlet } from "react-router-dom"
import {ThemeProvider}  from 'styled-components';
import {dark, light} from '../../Theme/Theme';
import Header from '../Header/Header';
import MainCarousel from '../MainCarousel/MainCarousel';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import MoviesSection from '../Main/MoviesSection/MoviesSection';
import GlobalStyles from '../../styles/GlobalStyles';

function Layout({hasSidebar = true}) {
    const [theme, setTheme] = useState("dark");
    const isDarkThem = theme === "dark";

    const toggleTheme = () => {
      setTheme(isDarkThem ? "light" : "dark");
    }
    
  return (
    <ThemeProvider theme = {isDarkThem ? dark : light}>
        <GlobalStyles />
        <Header toggleTheme = { toggleTheme } isDarkThem = { isDarkThem }/>
        <MainCarousel/>
        <Main>
            <Outlet />
            {hasSidebar && <MoviesSection />}
        </Main>
        <Footer />
    </ThemeProvider>
  )
}

export default Layout