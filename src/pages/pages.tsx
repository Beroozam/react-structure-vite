import HomeMobile from 'pages/mobile/home'
import HomeDesktop from 'pages/desktop/home'
import AboutDesktop from 'pages/desktop/about'
import AboutMobile from 'pages/mobile/about'
import LoginMobile from 'pages/mobile/login'
import LoginDesktop from 'pages/desktop/login'
import {
    SharedLayout,
    SecondLayout
} from 'pages/layouts/layout'
import { useMediaQuery } from 'react-responsive';

function useResponsiveLayoutSelector(){
    const isMobile = useMediaQuery({maxWidth: 767,})

    return {
        home:isMobile ? <SharedLayout><HomeMobile /></SharedLayout> : <HomeDesktop />,
        about:isMobile ? <AboutMobile /> : <SecondLayout><AboutDesktop /></SecondLayout>,
        login:isMobile ? <LoginMobile /> : <LoginDesktop />,
    }
}

export default useResponsiveLayoutSelector