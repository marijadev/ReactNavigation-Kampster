import { Forum } from "./newsfeed/Forum";
import { InfoTabla } from "./newsfeed/InfoTabla";
import { BizEdu } from "./newsfeed/BizEdu";
import { SviKursevi } from "./ponudaKurseva/SviKursevi";
import { Akcija } from "./ponudaKurseva/Akcija";
import { Edupass } from "./ponudaKurseva/Edupass";
import { Pregled } from "./ucenje/Pregled";
import { StartujUcenje } from "./ucenje/StartujUcenje";
import { Aktivnosti } from "./ucenje/Aktivnosti";
import { Najkampsteri } from "./kampsteri/Najkampsteri";
import { KampGrupe } from "./kampsteri/KampGrupe";


export const NEWSFEED = 'newsfeed'; 
export const PONUDAKURSEVA = 'ponudaKurseva'; 
export const UCENJE = 'ucenje'; 
export const KAMPSTERI = 'kampsteri'; 

const navSwitch = {
    [NEWSFEED]: {
        name: 'Newsfeed',
        path: '/newsfeed',
        routes: [
            {
                path: '/forum',
                name: 'Forum',
                component: Forum
            },
            {
                path: '/info-tabla',
                name: 'Info Tabla',
                component: InfoTabla
            },
            {
                path: '/biz-edukacija',
                name: 'Biz & Edu',
                component: BizEdu
            }
        ]
    },
    [PONUDAKURSEVA]: {
        name: 'Ponuda Kurseva',
        path: '/ponuda-kurseva',
        routes: [
            {
                path: '/svi-kursevi',
                name: 'Svi kursevi',
                component: SviKursevi
            },
            {
                path: '/akcija',
                name: 'Akcija',
                component: Akcija
            },
            {
                path: '/edupass',
                name: 'Edupass',
                component: Edupass
            }
        ]
    },
    [UCENJE]: {
        name: 'Ucenje',
        path: '/ucenje',
        routes: [
            {
                path: '/pregled',
                name: 'Pregled',
                component: Pregled
            },
            {
                path: '/startuj-ucenje',
                name: 'Startuj ucenje',
                component: StartujUcenje
            },
            {
                path: '/aktivnosti',
                name: 'Aktivnosti',
                component: Aktivnosti
            }
        ]
    },
    [KAMPSTERI]: {
        name: 'Kampsteri',
        path: '/kampsteri',
        routes: [
            {
                path: '/najkampsteri',
                name: 'Najkampsteri',
                component: Najkampsteri
            },
            {
                path: '/kamp-grupe',
                name: 'Kamp Grupe',
                component: KampGrupe
            }
        ]
    }
}

export { navSwitch };