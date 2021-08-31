import en_us from "./en";
import fa_ir from "./fa";

const lang = localStorage.getItem("lang") ? localStorage.getItem("lang") : "en";

export {lang}

const direction = {
    fa: "rtl",
    en: "ltr"
}
const getDirection = () => {
    return direction[lang]
}
export {getDirection}

const fonts = {
    fa : "IRANSans",
    en : 'Mulish'
}

const getFonts = ()=>{
    return fonts[lang]
}

export {getFonts}

const translate = {
    fa : fa_ir,
    en : en_us
}
const getTranslate = ()=>{
    return translate[lang]
}
export {getTranslate}