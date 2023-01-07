import fuji from './assets/fuji.png'
import norway from './assets/norway.png'
import sydney from './assets/sydney.png'



const arr = [
    {
        id: 1,
        title: "Mount Fuji",
        location: "Japan",
        link:'https://www.google.com/maps/place/Fuji+Da%C4%9F%C4%B1/@35.3606247,138.7186086,15z/data=!3m1!4b1!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634',
        startDate: "12 Jan, 2021",
        endDate: "24 Jan, 2021",
        text: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        img: fuji

    },
    {
        id: 2,
        title: "Sydney Opera House",
        location: "Australia",
        link:'https://www.google.com/maps/place/Sidney+Opera+Binas%C4%B1/@-33.8567844,151.213108,17z/data=!3m2!4b1!5s0x6b12ae67d234a27f:0xd6d4e9380ca1e32f!4m5!3m4!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967',
        startDate: "27 May, 2021",
        endDate: "8 Jun, 2021",
        text: "Mount The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
        img: sydney


    },
    {
        id: 3,
        title: "Geirangerfjord",
        location: "Norway",
        link: "https://www.google.com/maps/place/Geirangerfjord/@62.104831,7.0051739,12z/data=!3m1!4b1!4m5!3m4!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817",
        startDate: "01 Oct, 2021",
        endDate: "18 Nov, 2021",
        text: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
        img: norway


    }
]

export default arr