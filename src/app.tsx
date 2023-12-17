import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@mui/material/styles';
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import useCreateMuiTheme from "hooks/useCreateMuiTheme";
import {useTranslation} from "react-i18next";
import {RouterProvider} from "react-router-dom";
import Routes from "pages/routes";
import {backDropAction} from 'states/slice'
import {useAppDispatch, useAppSelector} from "states/reduxTypedHooks";

function App() {
    const {i18n:{dir}} = useTranslation()
    const isOpenBackDrop=useAppSelector(state => state.app.backdrop)
    const dispatch = useAppDispatch()
    const theme = useCreateMuiTheme()
    const router = Routes()
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
            <ToastContainer
                position={`${dir()==='rtl'?"bottom-right":"bottom-left"}`}
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={dir() === 'rtl'}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={isOpenBackDrop}
                onClick={()=>{dispatch(backDropAction(false))}}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </ThemeProvider>
    );
}

export default App;
