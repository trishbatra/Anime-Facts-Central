console.log("hi")
const animeData = [
    {
      id: 1,
      name: "Attack on Titan",
      img: "https://flxt.tmsimg.com/assets/p10701949_b_v8_ah.jpg",
      description: "Attack on Titan is a popular anime series that takes place in a world where humanity lives inside cities surrounded by enormous walls due to the Titans, gigantic humanoid creatures who devour humans seemingly without reason. The story follows Eren Yeager, who vows to exterminate the Titans after a Titan brings about the destruction of his hometown and the death of his mother."
    },
    {
      id: 2,
      name: "Death Note",
      img: "https://occ-0-4606-3646.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQXVNt1TmF9Vud7rfZD-QsU3pvASK--j3MQoxWgS1WbtYOjgfBz_RN_fizIKuLe5k1IIma44X30xANI8V7UFD-Xb4lEucCzeX-LO4gQJctxPDxpLQBcz5R9T.jpg?r=eeb",
      description: "Death Note is a popular anime series that follows Light Yagami, a high school student who discovers a mysterious notebook that has the power to kill anyone whose name is written in it. Light decides to use the notebook to rid the world of criminals and becomes known as 'Kira', a vigilante who is both feared and revered."
    },
    {
      id: 3,
      name: "One Piece",
      img: "https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
      description: "One Piece is a popular anime series that follows Monkey D. Luffy, a young pirate with rubber-like abilities who sets out on a journey to find the legendary One Piece treasure and become the Pirate King. Along the way, Luffy and his crew encounter a variety of other pirates, Marines, and other powerful opponents."
    },
    {
      id: 4,
      name: "Fullmetal Alchemist: Brotherhood",
      img: "https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
      description: "Brothers Edward and Alphonse Elric search for the Philsopher's Stone, hoping to restore their bodies, which were lost when they attempted to use their alchemy skills to resurrect their deceased mother. Edward, who lost only limbs, joins the State Military, which gives him the freedom"
    },
    {
        id: 5,
        name: "Naruto",
        img: "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
        description: "Naruto is a popular anime series that follows Naruto Uzumaki, a young ninja with a dream of becoming the Hokage, the leader of his village. Along with his friends and mentors, Naruto goes on various missions and battles against a variety of opponents, including other ninjas and powerful beings called Tailed Beasts."
      },
      {
        id: 6,
        name: "My Hero Academia",
        img: "https://i.pinimg.com/736x/0f/7f/ee/0f7feeb4655ffc029d1b9823bafb2ff8.jpg",
        description: "My Hero Academia is a popular anime series that takes place in a world where most people have superpowers, called 'Quirks'. The story follows Izuku Midoriya, a young boy without a Quirk who idolizes the world's greatest hero and eventually gains his own Quirk, attending a school for aspiring heroes."
      },
      {
        id: 7,
        name: "Demon Slayer: Kimetsu no Yaiba",
        img: "https://m.media-amazon.com/images/M/MV5BZjZjNzI5MDctY2Y4YS00NmM4LTljMmItZTFkOTExNGI3ODRhXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
        description: "Demon Slayer: Kimetsu no Yaiba is a popular anime series that follows Tanjiro Kamado, a young boy who becomes a demon slayer after his family is slaughtered by demons and his younger sister, Nezuko, is turned into one. Tanjiro sets out on a quest to turn his sister back into a human and avenge his family."
      },
      {
        id: 8,
        name: "Hunter x Hunter",
        img: "https://m.media-amazon.com/images/M/MV5BZjNmZDhkN2QtNDYyZC00YzJmLTg0ODUtN2FjNjhhMzE3ZmUxXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_FMjpg_UX1000_.jpg",
        description: "Hunter x Hunter is a popular anime series that follows Gon Freecss, a young boy who sets out to become a Hunter, a licensed profession for individuals who specialize in finding rare and valuable items, creatures, and information. Along with his friends, Gon goes on various adventures and battles against powerful opponents."
      },
      {
        id: 9,
        name: "Sword Art Online",
        img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/04/Sword-Art-Online.jpg",
        description: "Sword Art Online is a popular anime series that takes place in a virtual reality MMORPG game where players use a headset to enter the game world. The story follows Kirito, one of the game's beta testers, as he and thousands of other players become trapped inside the game and must fight their way to the top of a tower to escape."
      },
      {
        id: 10,
        name: "Cowboy Bebop",
        img: "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
        description: "Cowboy Bebop is a popular anime series that takes place in a future where humans have colonized the solar system and follows a group of bounty hunters who travel the galaxy in their spaceship, the Bebop. The series has a unique blend of genres, including science fiction, noir, western, and jazz music."
      },
      {
        id: 11,
        name: "Dragon Ball Z",
        img: "https://m.media-amazon.com/images/M/MV5BMGMyOThiMGUtYmFmZi00YWM0LWJiM2QtZGMwM2Q2ODE4MzhhXkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_FMjpg_UX1000_.jpg",
        description: "Dragon Ball Z is a popular anime series that follows the adventures of Goku, a powerful warrior who protects the Earth from various villains and threats. Along with his friends and family, Goku battles against powerful enemies using his superhuman strength, agility, and the ability to harness energy, known as 'ki'."
      },
      {
        id: 12,
        name: "bleach",
        img: "https://m.media-amazon.com/images/M/MV5BZjE0YjVjODQtZGY2NS00MDcyLThhMDAtZGQwMTZiOWNmNjRiXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
        description: "Ichigo Kurosaki never asked for the ability to see ghosts -- he was born with the gift. When his family is attacked by a Hollow -- a malevolent lost soul -- Ichigo becomes a Soul Reaper, dedicating his life to protecting the innocent and helping the tortured spirits themselves find peace."
      },
      {
        id: 13,
        name: "gintama",
        img: "https://m.media-amazon.com/images/M/MV5BMDkxZTJjZTEtMDRjMy00Yzk1LWI5YjItMjIwYmVlYzhlZWZhXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_FMjpg_UX1000_.jpg",
        description: "Gintama is a Japanese manga series written and illustrated by Hideaki Sorachi. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from December 2003 to September 2018, later in Jump Giga from December 2018 to February 2019, and finished on the Gintama app, where it ran from May to June 2019."
      },
      {
        id: 14,
        name: "jujutsu kaisen",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy1NvyUaAL8UMRPYQZNRSgFbBsMvkrDGY5Vnp8Rzw5m2XLjBZgHVLyEGWLXdBHsaGpDR4&usqp=CAU",
        description: "Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since March 2018, with its chapters collected and published in 22 tankōbon volumes as of March 2023."
      }
]
const animeFacts = [
    {
      animeName: "One Piece",
      facts: [
        "One Piece is a Japanese manga and anime series created by Eiichiro Oda.",
        "The series follows the adventures of Monkey D. Luffy and his pirate crew, the Straw Hat Pirates, as they search for the ultimate treasure known as One Piece.",
        "One Piece has been serialized in Weekly Shōnen Jump since 1997 and has been collected into 98 tankōbon volumes as of February 2021.",
        "The anime adaptation of One Piece began airing in 1999 and is still ongoing, with over 900 episodes released as of 2021.",
        "One Piece is one of the best-selling manga series of all time, with over 480 million copies sold worldwide as of 2021.",
        "The series has been adapted into multiple films and TV specials, as well as video games and other merchandise.",
        "One Piece has been praised for its engaging story, well-developed characters, and unique world-building.",
        "The series has also been criticized for its pacing and occasional use of filler episodes."
      ]
    },
    {
      animeName: "Naruto",
      facts: [
        "Naruto is a Japanese manga and anime series created by Masashi Kishimoto.",
        "The series follows the story of Naruto Uzumaki, a young ninja with a dream of becoming the Hokage, the leader of his village.",
        "Naruto has been serialized in Weekly Shōnen Jump since 1999 and has been collected into 72 tankōbon volumes as of November 2014.",
        "The anime adaptation of Naruto aired from 2002 to 2007 and consisted of 220 episodes.",
        "Naruto has been licensed for distribution in North America by Viz Media and is available for streaming on Crunchyroll and Hulu.",
        "The series has been adapted into multiple films and spin-off manga series, including Naruto: Shippuden and Boruto: Naruto Next Generations.",
        "Naruto has been praised for its well-developed characters, engaging story, and themes of perseverance and friendship.",
        "The series has also been criticized for its occasional pacing issues and overuse of certain narrative tropes."
      ]
    },
    {
      animeName: "Attack on Titan",
      facts: [
        "Attack on Titan was first published as a manga in 2009.",
        "The anime adaptation of Attack on Titan premiered in 2013 and has since become one of the most popular anime series.",
        "Attack on Titan is set in a world where humans live inside cities surrounded by enormous walls as a defense against the Titans, humanoid creatures that devour humans seemingly without reason.",
        "The main character of Attack on Titan is Eren Yeager, a young boy who dreams of leaving the safety of the walls and exploring the world outside.",
        "The creator of Attack on Titan, Hajime Isayama, has stated that the story is influenced by his own experiences growing up in a rural town in Japan.",
        "Attack on Titan is known for its intense action scenes and complex characters, as well as its exploration of themes such as freedom, sacrifice, and the nature of humanity.",
        "The fourth and final season of the Attack on Titan anime premiered in 2020, and the manga is also nearing its conclusion.",
        "Attack on Titan has won numerous awards, including Best Director and Best Score at the 3rd Anime Critics Awards in 2013."
      ]
    },
    {
      animeName: "Dragon Ball Z",
      facts: [
        "Dragon Ball Z is a Japanese anime television series produced by Toei Animation.",
        "The series follows the adventures of Goku and his friends as they defend the Earth against various villains.",
        "Dragon Ball Z is the second part of the Dragon Ball manga series, which was created by Akira Toriyama.",
        "The series aired in Japan from 1989 to 1996 and consists of 291 episodes.",
        "Dragon Ball Z has been dubbed in multiple languages and has been broadcast in over 80 countries worldwide.",
        "The series has also been adapted into several films, including Dragon Ball Z: Resurrection 'F' and Dragon Ball Super: Broly.",
        "Dragon Ball Z has been a major influence on popular culture and has been referenced in numerous other media, including video games, music, and television shows.",
        "The series has also inspired a number of spin-off manga and anime series, such as Dragon Ball GT and Dragon Ball Super."
      ]
    },
    {
      animeName: "Fullmetal Alchemist: Brotherhood",
      facts: [
        "Fullmetal Alchemist: Brotherhood is the second anime adaptation of the Fullmetal Alchemist manga, and is often considered to be a more faithful adaptation than the first anime series.",
        "The Fullmetal Alchemist manga was first published in 2001 and ran until 2010, with a total of 27 volumes.",
        "The story of Fullmetal Alchemist: Brotherhood follows two brothers, Edward and Alphonse Elric, who attempt to use alchemy to bring their dead mother back to life and pay a heavy price for their mistake.",
        "Fullmetal Alchemist: Brotherhood is known for its complex characters, intricate plot, and exploration of themes such as morality, sacrifice, and the consequences of power.",
        "The English voice actors for Edward and Alphonse Elric are Vic Mignogna and Maxey Whitehead, respectively.",
        "Fullmetal Alchemist: Brotherhood won several awards, including Best Animation at the 2009 Tokyo International Anime Fair.",
        "The Fullmetal Alchemist: Brotherhood anime premiered in 2009 and ran for a total of 64 episodes.",
        "The creator of Fullmetal Alchemist, Hiromu Arakawa, also created the manga Silver Spoon and the series Hero Tales."
      ]
    },
    {
      animeName: "Death Note",
      facts: [
        "The author of Death Note, Tsugumi Ohba, has never revealed his true identity.",
        "Death Note was first serialized in the Weekly Shonen Jump magazine in 2003 and ended in 2006.",
        "The original Death Note manga series consists of 12 volumes.",
        "Death Note has been adapted into an anime series, live-action films, and a TV drama.",
        "In the Death Note anime, Light's voice actor, Mamoru Miyano, actually wrote and performed the ending theme song for the show's second season.",
        "In the original Japanese version of Death Note, the character of L was voiced by Kappei Yamaguchi.",
        "Death Note has been banned in China due to its perceived glorification of vigilante justice.",
        "The Death Note anime won the Best TV Animation Award at the 2007 Tokyo International Anime Fair.",
      ]
    },
    {
        animeName: "My Hero Academia",
        facts: [
            "The creator of MHA, Kohei Horikoshi, was influenced by American superhero comics, especially Marvel Comics.",
            "The series was initially rejected by Weekly Shonen Jump before it was finally accepted.",
            "All Might's signature move, the United States of Smash, was inspired by a scene from the 1978 Superman movie.",
            "MHA is known for its unique and creative character designs, which often reflect the characters' quirks and personalities.",
            "The character of Izuku Midoriya was named after Horikoshi's favorite actor, Yuki Midorikawa.",
            "MHA has been adapted into multiple anime seasons, movies, and video games.",
            "The Japanese government has used MHA characters to promote tourism in the country.",
            "MHA has been praised for its positive messages about friendship, hard work, and perseverance."
        ]
      },
      {
        animeName: "Hunter x Hunter",
        facts: [
            "Hunter x Hunter is written and illustrated by Yoshihiro Togashi, who also created Yu Yu Hakusho.",
            "The series has been serialized in Weekly Shonen Jump since 1998, with numerous hiatuses due to Togashi's health issues.",
            "Hunter x Hunter has been adapted into multiple anime series, OVAs, and movies.",
            "The main character, Gon Freecss, was inspired by Togashi's love for fishing.",
            "The character of Killua Zoldyck was inspired by a friend of Togashi's who enjoyed playing video games.",
            "The world of Hunter x Hunter is filled with complex and intricate power systems, including Nen and Hatsu.",
            "The series explores themes of friendship, betrayal, and personal growth.",
            "The manga has sold over 78 million copies worldwide as of 2021."
        ]
      },
      {
        animeName: "Sword Art Online",
        facts: [
            "Sword Art Online was written by Reki Kawahara and illustrated by abec.",
            "The series follows the adventures of Kirito, a gamer who becomes trapped in a virtual reality MMORPG called Sword Art Online.",
            "The anime has been adapted into multiple seasons, movies, and video games.",
            "Sword Art Online has been praised for its action, animation, and music.",
            "The series has explored themes of virtual reality, technology, and human relationships.",
            "Sword Art Online has been criticized for its treatment of female characters and for its pacing in some arcs.",
            "The character of Kirito was inspired by Kawahara's own experiences as a gamer"
        ]
      },
      {
        animeName: "Cowboy Bebop",
        facts: [
            "Cowboy Bebop was created by Shinichirō Watanabe and was produced by Sunrise.",
            "The series has been praised for its animation, music, and storytelling.",
            "Cowboy Bebop is a space western that follows a group of bounty hunters traveling on the spaceship Bebop.",
            "The main character, Spike Spiegel, was inspired by actor Yusaku Matsuda and musician Yutaka Ozaki.",
            "The series explores themes of existentialism, loneliness, and the human condition.",
            "Cowboy Bebop has been adapted into a manga series, multiple video games, and a live-action Netflix series.",
            "The anime has won multiple awards and has been featured in numerous 'best anime' lists.",
            "The iconic ending theme song, 'The Real Folk Blues,' was sung by Mai Yamane."
        ]
      },
      {
        animeName: "Demon Slayer: Kimetsu no Yaiba",
        facts: [
            "Demon Slayer is a Japanese manga series written and illustrated by Koyoharu Gotouge.",
            "The series follows the story of a young boy named Tanjiro Kamado, who becomes a demon slayer after his family is attacked and his younger sister Nezuko is turned into a demon.",
            "Demon Slayer has been serialized in Weekly Shōnen Jump since February 2016 and has been collected into 23 tankōbon volumes as of December 2020.",
            "The anime adaptation of Demon Slayer aired from April to September 2019 and consisted of 26 episodes.",
            "The anime adaptation has been licensed by Aniplex of America and is available for streaming on Hulu, Crunchyroll, and FunimationNow.",
            "A feature film sequel to the anime, titled Demon Slayer: Mugen Train, was released in Japan in October 2020 and became the highest-grossing anime film of all time.",
            "Demon Slayer has won several awards, including the 2020 Anime of the Year award at the Crunchyroll Anime Awards and the Best Anime at the 2019 Newtype Anime Awards.",
            "The popularity of Demon Slayer has led to a variety of merchandise, such as toys, figures, and clothing, as well as collaborations with other franchises and events."
        ]
      },
      {
        animeName: "bleach",
        facts: [
          'Ichigo wasn\'t the first character that Kubo created. It was Rukia. Kubo felt like drawing a shinigami wearing a kimono, thus, Rukia was created.',
          'Ichigo\'s English Voice Actor Was A Power Ranger',
          'When Shonen Jump initially turned down Bleach, Kubo grew discouraged. The creator of DBZ, Akira Toriyama, sent a letter of encouragement and Bleach was later accepted.',
          'Out of the 366 episode in Bleach, 165 episodes (45%) are filler.',
          'Tite Kubo Incorporated His Love Of Fashion Into Bleach',
          'Ichigo Only Truly Killed One Major Enemy: the Fullbringer Ginjo',
          'Ichigo claims his name come from "Ichi" meaning first prize and "Go" meaning guardian angel. However, his dad told him, his name means "He who protects".',
          'The word Bleach is said to refer to the color "white," evincing monochrome vibes in contrast with the Shinigami\'s black garments. This is the direct, and most believable, explanation for the origin of the name, but there remains another possibility.',
          'Originally, Kisuke Urahara was meant to be the villain of bleach with Aizen being killed off when he was faking his death.',
          'Orihime has said "Kurosaki-kun" roughly over 800 times in the whole anime. She\'s said "kun" over 1000 times.',
          'Yoruichi\'s character original name was going to be Kuroneko, which means "Black cat". However, Kubo didn\'t want to take any risks of sparking racial comments, so he changed the name.'
        ]
      },
      {
        animeName: "gintama",
        facts: [
          'The original title of the series was Yorozuya Gin-chan.',
          'Sakata Gintoki had a completely different last name and character design in original drafts.',
          'For Sakata Gintoki’s creation Hideaki Sorachi also used a popular Japanese folk tale.',
          'Sakata Gintoki wore scooter goggles all the time.',
          'Shimura Shinpachi was planned to be part of the Shinsengumi.',
          'Shimura Shinpachi’s name contains "Hachi" which means 8.',
          'Kagura knows Chinese.',
          'Kagura is the first Shonen Jump heroine to vomit.',
          'Sadaharu’s voice actor voices another Gintama character.',
          'Hideaki Sorachi wanted to do the series based on the Shinsengumi.',
          'Kondo Isao has a weak anal sphincter.',
          'Hijikata Toushirou’s voice actor voices a couple of swordsmen.',
          'Okita Sougo is based on a captain of the first unit of the Shinsengumi',
          'Gintoki has the same birthday with the famous Naruto Uzumaki of Naruto.'
        ]
      },
      {
        animeName: "jujutsu kaisen",
        facts: [
          "Gojo can cast domain expansion multiple times a day, while others are limited to only once a day",
          "According to the author of Jujutsu Kaisen, Ryomen Sukuna never had a wife or children",
          "So far there are only 4 Shamans or Jujutsu users who are on a special level. That is Gojo Satoru, Geto Suguru, Yuta     Okkotsu and Tsukumo Yuki",
          "Gege Sensei had planned to kill Yuji after Sukuna ripped out his heart in the manga if Shonen Jump didn't go smoothly",
          "The Zenin family home is derived from an architectural museum in Tokyo called Kodakarayu",
          "At a young age, Toji would get thrown into a group of cursed spirits, the scar on his lip is a result of that",
          "The eye within Gojo's domain expansion is that of a black hole, or at the least, resembles a black hole",
          "Ever since Gojo was born, cursed spirits and cursed users hid in the shadows due to Gojo possessing both the six eyes     and the limitless cursed technique",
          "Mahito likes Perry the Platypus from the animated series Phineas and Ferb that's why he made Junpei like that",
          "Gojo's six eyes, also known as Rikugan, reduces Gojo's cursed energy consumption allowing him to never run out of     cursed energy"
        ]
      }
    ];
    
  
let gridContianer = document.querySelector(".grid-container")
animeData.map((elem)=> {
    let theDiv = document.createElement("div")
    let head = document.createElement("h2")
    let btn = document.createElement("button")
    btn.setAttribute("class", "btn")
    btn.setAttribute("name", `${elem.name}`)
    head.innerHTML = elem.name 
    btn.innerText = "Click to get facts"
    let img = document.createElement("img")
    img.setAttribute("src", `${elem.img}`)
    let para = document.createElement("p")
    para.innerHTML = elem.description
    theDiv.setAttribute("class", "grid-item")
    theDiv.appendChild(head)
    theDiv.appendChild(img)
    theDiv.appendChild(para)
    theDiv.appendChild(btn)
    gridContianer.appendChild(theDiv)
})
function check(naam){
    animeFacts.forEach(element => {
        if(naam == element.animeName){
            localStorage.setItem("facts", JSON.stringify(element))
            window.location = "http://localhost:5500/facts.html";
        }else{
            console.log("Not found")
        }
    });
}
let a = document.getElementsByClassName("btn")
for(let i = 0 ; i < a.length; i++){
    a[i].addEventListener("click", ()=>{
        check(a[i].name)
    })
}