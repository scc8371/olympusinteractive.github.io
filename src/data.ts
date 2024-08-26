import assets from "./assets.ts"
import { faXTwitter, faInstagram, faDiscord, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default {
    "projects": [
        {
            "name": "Ninjas on Trampolines",
            "desc": "A 2-4 player platform fighter where players paint their enemies into the stage.",
            "dates": "August 2023 - Present",
            "image": assets['ninjas-gif'],
            "link": "https://store.steampowered.com/app/2893990/Ninjas_on_Trampolines/",
            "hero": true
        },
        {
            "name": "Nebulicious",
            "desc": "Made for Society of Play's Hexcode Jam 3. A cooking game where you drive a UFO around a planet to get resources.",
            "dates": "January 2024",
            "image": assets['nebulicious-gif'],
            "link": "https://willyjeon.itch.io/nebulicious",
            "hero": false
        },
        {
            "name": "Helpless",
            "desc": "Made for Pirate Software Jam 14. An experience taking inspiration from the artpiece 'Can't Help Myself'.",
            "dates": "January 2024",
            "image": assets['helpless-gif'],
            "link": "https://ifaicgu.itch.io/helpless",
            "hero": false
        },
        {
            "name": "Icarus VR",
            "desc": "A virtual reality archery simulation with fast-paced motions.",
            "dates": "March 2023 - May 2023",
            "image": assets['icarus-gif'],
            "link": "https://sciencedoge.itch.io/icarus-vr",
            "hero": false
        },
        {
            "name": "Doodle Day",
            "desc": "Made in under 24 hours as a prototype for Wolfjam 2023. Awarded at the end of the competition as a winner.",
            "dates": "November 2023",
            "image": assets['doodle-gif'],
            "link": "https://prestosilver.itch.io/d-day",
            "hero": false
        }
    ],
    "team": [
        {
            "name": "Justin Looman",
            "role": "Producer",
            "portrait": assets['justin-image'],
            "socials": [
                {
                    "link": "https://www.justinlooman.com",
                    "icon_definition": faGlobe
                }
            ]
        },
        {
            "name": "Sami Chamberlain",
            "role": "Lead Programmer",
            "portrait": assets['sami-image'],
            "socials": [
                {
                    "link": "https://www.samichamberlain.com",
                    "icon_definition": faGlobe
                }
            ]
        },
        {
            "name": "William Jeon",
            "role": "Technical Artist",
            "portrait": assets['will-image'],
            "socials": [
                {
                    "link": "https://www.williamjeon.dev",
                    "icon_definition": faGlobe
                }
            ]
        },
        {
            "name": "Iain Roach",
            "role": "Programmer",
            "portrait": assets['iain-image'],
            "socials": [
                {
                    "link": "https://www.iainroach.com",
                    "icon_definition": faGlobe
                }
            ]
        },
        {
            "name": "Kai Stone",
            "role": "3D / 2D Artist",
            "portrait": assets['kai-image'],
            "socials": [
                {
                    "link": "https://rocktobot.carrd.co/",
                    "icon_definition": faGlobe
                },
            ]
        },
        {
            "name": "Claire Wang",
            "role": "2D Artist",
            "portrait": assets['placeholder-person'],
            "socials": [
      
            ]
        },
        {
            "name": "Trevor Strickland",
            "role": "Audio Designer",
            "portrait": assets['trevor-image'],
            "socials": [
       
            ]
        }
    ],
    "socialIcons": [
        { link: 'https://x.com/olympusinteract', icon_definition: faXTwitter },
        { link: 'https://www.instagram.com/invites/contact/?igsh=cdbzbtkpqup9&utm_content=vjpjm40', icon_definition: faInstagram },
        { link: 'https://discord.gg/DgFe8qdCYG', icon_definition: faDiscord },
        { link: 'https://www.youtube.com/@OlympusInteractive', icon_definition: faYoutube }
    ]
};