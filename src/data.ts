import assets from "./assets.ts"
import { faXTwitter, faInstagram, faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default {
    "projects": [
        {
            "name": "Ninjas on Trampolines",
            "desc": "temp description",
            "dates": "August 2023 - Present",
            "image": assets['ninjas-gif'],
            "link": "https://store.steampowered.com/app/2893990/Ninjas_on_Trampolines/",
            "hero": true
        },
        {
            "name": "project2",
            "desc": "desc2",
            "dates": "dates2",
            "image": "https://via.placeholder.com/1920x1080",
            "link": ".",
            "hero": false
        }
    ],
    "team": [
        {
            "name": "Justin Looman",
            "role": "Producer",
            "portrait": assets['justin-image']
        },
        {
            "name": "Sami Chamberlain",
            "role": "Lead Programmer",
            "portrait": assets['sami-image']
        },
        {
            "name": "William Jeon",
            "role": "Technical Artist",
            "portrait": assets['will-image']
        },
        {
            "name": "Iain Roach",
            "role": "Programmer",
            "portrait": assets['iain-image']
        },
        {
            "name": "Kai Stone",
            "role": "3D / 2D Artist",
            "portrait": assets['placeholder-person']
        },
        {
            "name": "Claire Wang",
            "role": "2D Artist",
            "portrait": assets['placeholder-person']
        },
        {
            "name": "Trevor Strickland",
            "role": "Audio Designer",
            "portrait": assets['placeholder-person']
        }
    ],
    "socialIcons" : [
        { link: 'https://x.com/olympusinteract', icon_definition: faXTwitter },
        { link: 'https://www.instagram.com/invites/contact/?igsh=cdbzbtkpqup9&utm_content=vjpjm40', icon_definition: faInstagram },
        { link: 'https://discord.gg/DgFe8qdCYG', icon_definition: faDiscord },
        { link: 'https://www.youtube.com/@OlympusInteractive', icon_definition: faYoutube }
      ]
};