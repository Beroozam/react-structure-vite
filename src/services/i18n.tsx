import i18next from "i18next"
import {initReactI18next} from "react-i18next"


// translation jsons
import translationEn from "languages/en/translation.json"
import translationFa from "languages/fa/translation.json"
import translationAr from "languages/ar/translation.json"

// other jsons file imports

const resources = {
    en:{
        translation:translationEn, // translation is main namespace useTranslation() any other name in this object needs specification
                                   // fore example
                                   // home:homeEn     would result in usage like this useTranslation("home")

    },
    fa:{
        translation:translationFa,

    },
    ar:{
        translation:translationAr,

    }
}

i18next
    .use(initReactI18next)
    .init({
        resources,
        lng:"en",// default language
    })