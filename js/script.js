const dados_jogos = [
    {
        title: "sonic frontiers",
        score: "8",
        data: "19/jan/2025",
        url: "https://www.metacritic.com/game/sonic-frontiers/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1237320/library_600x900_2x.jpg?t=1697492509",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },

    {
        title: "milk outside a bag of milk outside a bag of milk",
        score: "7",
        data: "18/jan/2025",
        url: "https://www.metacritic.com/game/milk-inside-a-bag-of-milk-inside-a-bag-of-milk-and-2022/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1604000/library_600x900_2x.jpg?t=1658078710",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },

    {
        title: "supernormal",
        score: "6",
        data: "09/jan/2025",
        url: "https://www.metacritic.com/game/supernormal/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/2532430/library_600x900_2x.jpg?t=1702852585",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },

    {
        title: "a way out",
        score: "8",
        data: "23/dez/2024",
        url: "https://www.metacritic.com/game/a-way-out/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1222700/library_600x900_2x.jpg?t=1598570429",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "condemned: criminal origins",
        score: "7",
        data: "21/dez/2024",
        url: "https://www.metacritic.com/game/condemned-criminal-origins/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/4720/library_600x900_2x.jpg?t=1602509899",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "suicide squad: kill the justice league",
        score: "7",
        data: "2024",
        url: "https://www.metacritic.com/game/suicide-squad-kill-the-justice-league/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/315210/library_600x900_2x.jpg?t=1733763083",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "sonic generations",
        score: "8",
        data: "30/nov/2024",
        url: "https://www.metacritic.com/game/sonic-generations/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/71340/library_600x900_2x.jpg?t=1669906676",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "layers of fear (2016)",
        score: "8",
        data: "25/nov/2024",
        url: "https://www.metacritic.com/game/layers-of-fear-2015/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/391720/library_600x900_2x.jpg?t=1732796781",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "gotham knights",
        score: "7",
        data: "17/nov/2024",
        url: "https://www.metacritic.com/game/gotham-knights/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1496790/library_600x900_2x.jpg?t=1669857264",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "void whispers",
        score: "5",
        data: "14/nov/2024",
        url: "https://www.metacritic.com/game/void-whispers/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/2885580/library_600x900_2x.jpg?t=1713357365",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "the windows are gone",
        score: "6",
        data: "12/nov/2024",
        url: "https://www.metacritic.com/game/the-windows-are-gone/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/2590250/library_600x900_2x.jpg?t=1694719869",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "poppy playtime",
        score: "7",
        data: "12/nov/2024",
        url: "https://www.metacritic.com/game/poppy-playtime-chapter-1/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1721470/library_600x900_2x.jpg?t=1710185475",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "recore: definitive edition",
        score: "4",
        data: "11/nov/2024",
        url: "https://www.metacritic.com/game/recore-definitive-edition/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/537450/library_600x900_2x.jpg?t=1667851354",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "don't be afraid",
        score: "8",
        data: "09/nov/2024",
        url: "https://www.metacritic.com/game/dont-be-afraid/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/760410/library_600x900_2x.jpg?t=1706730354",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "darksiders warmastered edition",
        score: "7",
        data: "27/out/2024",
        url: "https://www.metacritic.com/game/darksiders-warmastered-edition/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/462780/library_600x900_2x.jpg?t=1561964442",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "bioshock remastered",
        score: "8",
        data: "19/set/2024",
        url: "https://www.metacritic.com/game/bioshock/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/409710/library_600x900_2x.jpg?t=1568739568",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "castlevania: lords of shadow - mirror of fate",
        score: "8",
        data: "13/set/2024",
        url: "https://www.metacritic.com/game/castlevania-lords-of-shadow-mirror-of-fate/",
        img: "https://cdn2.steamgriddb.com/thumb/79f9295a63aa81a4ba0865ea39530248.png",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "castlevania: lords of shadow 2",
        score: "7",
        data: "13/set/2024",
        url: "https://www.metacritic.com/game/castlevania-lords-of-shadow-2/",
        img: "https://cdn2.steamgriddb.com/thumb/1d120c86144523926d4f638bab708ca8.jpg",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "castlevania: lords of shadow",
        score: "9",
        data: "08/set/2024",
        url: "https://www.metacritic.com/game/castlevania-lords-of-shadow-ultimate-edition/",
        img: "https://cdn2.steamgriddb.com/thumb/920f6af4188c97b6c0e6e01abb9a0411.jpg",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "escape memoirs: mini stories",
        score: "7",
        data: "04/set/2024",
        url: "https://www.metacritic.com/game/escape-memoirs-mini-stories/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/2098350/library_600x900_2x.jpg?t=1692014995",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "devil may cry 5",
        score: "9",
        data: "21/abr/2024",
        url: "https://www.metacritic.com/game/devil-may-cry-5/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/601150/library_600x900_2x.jpg?t=1671156456",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "metal gear rising: revengence",
        score: "9",
        data: "04/abr/2024",
        url: "https://www.metacritic.com/game/metal-gear-rising-revengeance/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/235460/library_600x900_2x.jpg?t=1677658058",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "transformers: devastation",
        score: "8",
        data: "23/mar/2024",
        url: "https://www.metacritic.com/game/transformers-devastation/",
        img: "https://cdn2.steamgriddb.com/thumb/3cd38c8f478db495cb80f5a51b4fdad2.jpg",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "binary domain",
        score: "7",
        data: "19/mar/2024",
        url: "https://www.metacritic.com/game/binary-domain/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/203750/library_600x900_2x.jpg?t=1602857969",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "batman: the telltale series",
        score: "8",
        data: "16/mar/2024",
        url: "https://www.metacritic.com/search/batman%20the%20telltale%20series/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/498240/library_600x900_2x.jpg?t=1686747234",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "sleeping dogs",
        score: "8",
        data: "15/mar/2024",
        url: "https://www.metacritic.com/game/sleeping-dogs/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/307690/library_600x900_2x.jpg?t=1457602473",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "firewatch",
        score: "9",
        data: "11/fev/2024",
        url: "https://www.metacritic.com/game/firewatch/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/383870/library_600x900_2x.jpg?t=1732002466",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "marvel's spider-man",
        score: "9",
        data: "2023",
        url: "https://www.metacritic.com/game/marvels-spider-man/",
        img: "https://cdn2.steamgriddb.com/thumb/1bc38477bc1f540837e39eb0b8dbb520.jpg",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "toy story 3: the video game",
        score: "6",
        data: "04/mai/2023",
        url: "https://www.metacritic.com/game/toy-story-3/",
        img: "https://cdn2.steamgriddb.com/thumb/2ed792f39611e03f115b0f26930305af.jpg",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "resident evil 5",
        score: "7",
        data: "mar/2023",
        url: "https://www.metacritic.com/game/resident-evil-5/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/21690/library_600x900_2x.jpg?t=1677549529",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "dying light",
        score: "8",
        data: "mar/2023",
        url: "https://www.metacritic.com/game/dying-light/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/239140/library_600x900_2x.jpg?t=1724176184",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "final fantasy XV",
        score: "10",
        data: "fev/2023",
        url: "https://www.metacritic.com/game/final-fantasy-xv/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/637650/library_600x900_2x.jpg?t=1719537079",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "resident evil village",
        score: "7",
        data: "dez/2022",
        url: "https://www.metacritic.com/game/resident-evil-village/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1196590/library_600x900_2x.jpg?t=1666762266",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "the suicide of rachel foster",
        score: "9",
        data: "03/dez/2022",
        url: "https://www.metacritic.com/game/the-suicide-of-rachel-foster/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1057750/library_600x900_2x.jpg?t=1633615694",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "resident evil 3",
        score: "6",
        data: "2022",
        url: "https://www.metacritic.com/game/resident-evil-3/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/952060/library_600x900_2x.jpg?t=1632278659",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "resident evil 7: biohazard",
        score: "8",
        data: "dez/2021",
        url: "https://www.metacritic.com/game/resident-evil-7-biohazard/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/418370/library_600x900_2x.jpg?t=1582692054",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "monster hunter: world",
        score: "10",
        data: "2021",
        url: "https://www.metacritic.com/game/monster-hunter-world/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/582010/library_600x900_2x.jpg?t=1709234846",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "resident evil",
        score: "9",
        data: "11/mai/2020",
        url: "https://www.metacritic.com/game/resident-evil-remake/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/304240/library_600x900_2x.jpg?t=1581666701",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "resident evil 2 (2019)",
        score: "8",
        data: "2020",
        url: "https://www.metacritic.com/game/resident-evil-2/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/883710/library_600x900_2x.jpg?t=1671156445",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "grand theft auto V",
        score: "8",
        data: "dez/2019",
        url: "https://www.metacritic.com/game/grand-theft-auto-v/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/library_600x900_2x.jpg?t=1734720322",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "batman: arkham knight",
        score: "9",
        data: "2018",
        url: "https://www.metacritic.com/game/batman-arkham-knight/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/208650/library_600x900_2x.jpg?t=1681938905",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "assassin's creed III",
        score: "9",
        data: "2018",
        url: "https://www.metacritic.com/game/assassins-creed-iii/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/208480/library_600x900_2x.jpg?t=1499851511",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "assassin's creed: revelations",
        score: "7",
        data: "2018",
        url: "https://www.metacritic.com/game/assassins-creed-revelations/",
        img: "https://cdn2.steamgriddb.com/thumb/105fb0578a9e90c458f69bad63c38709.png",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "assassin's creed: brotherhood",
        score: "9",
        data: "2018",
        url: "https://www.metacritic.com/game/assassins-creed-brotherhood/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/48190/library_600x900_2x.jpg?t=1495542779",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "assassin's creed II",
        score: "8",
        data: "2018",
        url: "https://www.metacritic.com/game/assassins-creed-ii/",
        img: "https://cdn2.steamgriddb.com/thumb/30a53d130bbe822d676ababadbd3fffd.jpg",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "lego marvel super heros",
        score: "7",
        data: "2017",
        url: "https://www.metacritic.com/game/lego-marvel-super-heroes/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/249130/library_600x900_2x.jpg?t=1681924144",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "inside",
        score: "9",
        data: "15/nov/2016",
        url: "https://www.metacritic.com/game/inside/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/304430/library_600x900_2x.jpg?t=1725363298",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "limbo",
        score: "8",
        data: "2015",
        url: "https://www.metacritic.com/game/limbo/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/48000/library_600x900_2x.jpg?t=1644930388",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "batman: arkham origins",
        score: "9",
        data: "2014",
        url: "https://www.metacritic.com/game/batman-arkham-origins/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/209000/library_600x900_2x.jpg?t=1681234708",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "tomb raider",
        score: "8",
        data: "27/dez/2013",
        url: "https://www.metacritic.com/game/tomb-raider/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/203160/library_600x900_2x.jpg?t=1709833975",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "batman: arkham city",
        score: "9",
        data: "2012",
        url: "https://www.metacritic.com/game/batman-arkham-city/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/200260/library_600x900_2x.jpg?t=1681938688",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
    {
        title: "batman: arkham asylum",
        score: "8",
        data: "2011",
        url: "https://www.metacritic.com/game/batman-arkham-asylum/",
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/35140/library_600x900_2x.jpg?t=1681938564",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio aut debitis ipsum! Quia ut perferendis delectus accusantium, fuga vel pariatur officia amet quidem architecto minima? Quasi dolore consequuntur quas?",
    },
];

const games = document.getElementById("games");

function criarElemento(tagName, classe = "", texto = "") {
    const elemento = document.createElement(tagName);
    if (classe) {
        classe = classe.replace(/ /g, "_")
        classe.split(" ").forEach(cls => elemento.classList.add(cls));
    }
    if (texto) {
        elemento.appendChild(document.createTextNode(texto));
    }
    return elemento;
}

dados_jogos.forEach(jogo => {
    const game_name = criarElemento("div", jogo.title, "");
    const div_top = criarElemento("div", "top");
    const div_title = criarElemento("div", "title");
    const a_title = criarElemento("a", "", "");
    const h2 = criarElemento("h2", "", jogo.title);
    const score = criarElemento("h3", "score", jogo.score);
    const nota = criarElemento("span", "", "/10");
    const data = criarElemento("h3", "data", jogo.data);
    const div_content = criarElemento("div", "content");
    const a_content = criarElemento("a", "", "");
    const img = criarElemento("img", "", "");
    const p = criarElemento("p", "", jogo.p);

    a_title.href = jogo.url;
    a_title.target = "_blank";

    a_title.appendChild(h2);

    a_content.href = jogo.url;
    a_content.target = "_blank";

    a_content.appendChild(img);

    img.src = jogo.img

    score.appendChild(nota)

    div_title.appendChild(a_title);

    div_top.appendChild(div_title);
    div_top.appendChild(score);
    div_top.appendChild(data);

    div_content.appendChild(a_content);
    div_content.appendChild(p);

    game_name.appendChild(div_top);
    game_name.appendChild(div_content);

    games.appendChild(game_name)

});