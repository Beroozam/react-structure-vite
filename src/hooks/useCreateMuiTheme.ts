import {useTranslation} from "react-i18next";
import {createTheme} from "@mui/material/styles";

export default function useCreateMuiTheme(){
  const {i18n:{dir,language}} = useTranslation()

  // Configuration for rtl theme
  const textFieldRight = dir() === 'rtl' ? {
    '& label':{transformOrigin: "top right",left:"auto",right:"30px"},
    '& fieldset legend':{textAlign:"right"},
    '& .MuiAutocomplete-endAdornment':{left:"0 !important",right:"auto !important"},
    '& .MuiInputBase-root.MuiAutocomplete-inputRoot':{paddingRight:"12px !important"}
  } : {}
  const typographyFontFamilyPersian = language === 'fa'?{fontFamily:"iransans, sans-serif"}:{fontFamily:"iransans, Roboto, Helvetica, Arial, sans-serif"}
  const theme = createTheme({
    typography:typographyFontFamilyPersian,
    components:{
      MuiTextField:{
        styleOverrides:{root:{...textFieldRight}}
      }
    }
  });
  return theme
};