module.exports = (req, res) => {
  console;
  return res.status(200).json({
    id: "1",
    type: "home",
    pageRecommended: [
      {
        id: "home-1",
        title: "Facing the Giants",
        duration: "1h 51m",
        tags: ["Buy", "Rent"],
        bannerUrl: "https://upload.wikimedia.org/wikipedia/en/7/7c/Facing_the_giants.jpg",
        titleUrl: "https://www.kendrickbrotherscatalogue.com/facingthegiants/_images/title.png",
        match: "100% Match",
        year: 2006,
        grade: "G",
        summary: `In 2003, Grant Taylor (Alex Kendrick) is the head football coach at Shiloh Christian Academy, and has yet to post a winning record in his six-year tenure. After his seventh season begins with a three-game losing streak, the players' fathers begin to agitate for his firing.`,
        starring: ["Alex Kendrick", "Shannen Fields", "Tracy Goode"],
        category: ["Action", "Comedy", "Drama"],
        trailerUrl:
          "https://imdb-video.media-imdb.com/vi3898409497/1434659607842-pgv4ql-1563433543633.mp4?Expires=1593065693&Signature=vQ196rEuW7NPIGk-Qzy1eqmOjhEZxf4vcs7NUL62K4zeOs9L2pELD4I5bFPAEGaUPaHokvArxwopIbJlgbf7OYbEZNxvukn~0Fbi6BeohQNgQFmTfz0zeLES~6iZLbkzxM73kSJ0n~ADe~by4z82NkDSkdStyUGCVEwNEhTkm-q9DYmVWb7fdc-LWHnHZQgfgBtKObONaHSOiAOrHgR8G5UzEs0rxkqk55667O2DqebysJulgbGNgz8bxT90BrQCFznU-bleb0mKkOLZt7X8KK2VMpcoo85FGrZR1BIamfOjSyKMMSzM03B~xxRha1h7vNMEb5Ph7oYDBs-xmFL4XQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
        trailerPoster: "https://i.ytimg.com/vi/-sUKoKQlEC4/maxresdefault.jpg",
      },
      {
        id: "home-2",
        title: "Fireproof",
        duration: "2h 2m",
        tags: ["Free", "Rent"],
        bannerUrl: "https://upload.wikimedia.org/wikipedia/en/b/b7/Fireproof_poster.jpg",
        titleUrl: "https://www.kendrickbrotherscatalogue.com/fireproof/_images/title.png",
        match: "100% Match",
        year: 2008,
        grade: "G",
        summary: `Married couple Caleb (Kirk Cameron), a fire captain, and Catherine Holt (Erin Bethea), a hospital administrator, are experiencing marital difficulties. At work, Caleb underscores the importance of never leaving one's partner behind, but at home, he and Catherine argue constantly.`,
        starring: ["Kirk Cameron", "Erin Bethea", "Ken Bevel"],
        category: ["Action", "Drama"],
        trailerUrl:
          "https://imdb-video.media-imdb.com/vi173933081/1434659607842-pgv4ql-1564515501851.mp4?Expires=1593065908&Signature=iX3Rc3YSXu2LX5Y5d4ODmFbQmw5a-H3SxmxnEhgEfCNFwuVmtizklg4y2OZKe1~kYwoQgQg9zVA-2X-GTiazYdTER4sv6q76N6XJ~j4qUjH8ouOgEG75yFT5gdCr4odGDGZU0Ot66Qo-N6tApESSIfbb8YlFYdMbAa~uOOiGHhWP~LWsbFkqYyHvEkpLbU8v3UToYocMEfI6p6itXDSnoCJS6ceuK6jzmA8D8oaGUFXPStn10Hda9r-2iLzXoSwa7m6eRmw09yVBcqMsw07QpcWM89GjEnxZNVfR7zL0~3hBDRNLhtDVDl7CWuJ053xrlNrvI~xohQ3JLreLuP~D6g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
        trailerPoster: "https://images.justwatch.com/backdrop/11009023/s1440/fireproof",
      },
      {
        id: "home-3",
        title: "Heaven is for Real",
        duration: "1h 51m",
        tags: ["Watch free with ads"],
        bannerUrl:
          "https://upload.wikimedia.org/wikipedia/en/b/b8/Heavenisforrealtheaterposter.jpg",
        titleUrl:
          "https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/TsSRXvDuraoJ7apdkH6tsHhf-ZQ/AAAABffJu6OKCrq5hecDLED3gVJodRoaRKBfQ6a_IubO6cQpodWqzlTqu4sUZuyE3g_z-gGcrddb67EePgIXJIV3mrHT3C0r4hkN_pP5.png?r=181",
        match: "100% Match",
        year: 2014,
        grade: "G",
        summary: `Four-year-old Colton Burpo (Connor Corum) is the son of Todd Burpo (Greg Kinnear), pastor of Crossroads Wesleyan Church in Imperial, Nebraska. Colton says he experienced Heaven during an emergency surgery.`,
        starring: [
          "Greg Kinnear",
          "Kelly Reilly",
          "Connor Corum",
          "Margo Martindale",
          "Thomas Haden Church",
        ],
        category: ["Comedy", "Drama"],
        trailerUrl:
          "https://imdb-video.media-imdb.com/vi3802708505/1434659607842-pgv4ql-1564057645003.mp4?Expires=1593066110&Signature=LMUU1UItTcpCIXFuVgXokN9nEtX1DpKrPinm295~hzLL1fzFOV250jHqJt8oZOdFj1qYtOKT7tYtWAQHY3WeG7YpnQWsNFWPu-rfdEe8yd3SZtMJ4wYvh5qWpgQJS9-uAzJyfRcjrHAxUhIyRcT~gTIz0Hxz6pi3MK~BKLHVGNsc6VkqRa18bdNJx3yTa3sSoEBn-byHORfMbHP8LzzFuK5M0HPAyVhlLIpqwtlkJQ0SDhv71q9Ik4FQcyFuZzd4dHbR4vEA8kHt4a6fWeq1EjmMinz310HW70BfMXDtY~N6tH4R7QqimU1mptFSnKoIAukkHWmPY40lRmAlct8TPw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
        trailerPoster:
          "https://img.washingtonpost.com/rf/image_480w/2010-2019/WashingtonPost/2014/04/07/Style/Images/DF-08806.jpg?uuid=_DKUVL6UEeOxld0MEXQFLA",
      },
    ],
    categoryList: [
      {
        id: "recommended",
        title: "Recommended for you",
        list: [
          {
            id: "recommended-1",
            title: "Edge of Tomorrow",
            duration: "1h 53m",
            tags: ["Rent"],
            bannerUrl: "https://upload.wikimedia.org/wikipedia/en/f/f9/Edge_of_Tomorrow_Poster.jpg",
            titleUrl: "https://upload.wikimedia.org/wikipedia/fr/0/00/Edge_of_Tomorrow_Logo.png",
            match: "95% Match",
            year: 2014,
            grade: "PG-13",
            summary: `In 2015, aliens called "Mimics" arrive in Germany via an asteroid and swiftly conquer most of continental Europe.`,
            starring: ["Tom Cruise", "Emily Blunt"],
            category: ["Action", "Exciting", "Thrilling"],
            trailerUrl:
              "https://imdb-video.media-imdb.com/vi3591679257/MV5BMjAwMDg0NTU2N15BMTFeQW1wNF5BbWU4MDY5MTYxODEx.mp4?Expires=1593104329&Signature=StF0L6w8R4IKbb6g5uk3z-yYAVz4BCzhn98z~kV74LEjPatkgOIIK9OiteMPUP01BgtQwRA5V0ckve5~FFigGsjSuaL~Fl8zT6HjsW8aBjcqXuJip5b~uxHa0vAE2npce6VUXhJzOdGXcoRRuNntFRx2hzBxsf8IqcDaKkYe9ocdNoPyFWkJalv8VmuzZ6P4IQ-ddQN1jKJskyj8X41qUkO48xgEVfGepwgSJGr1X17AJpbeK1t5kn7AyGRdxOgEDJMFigh4zoWKr~-BC0BQsU9ij-boVPi~suv5L2mTqFvYpNq16B~ZVotx3SlEjI9EIHsKiIqATigWXJbxuMAKdA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
            trailerPoster:
              "https://i2.wp.com/thespool.net/wp-content/uploads/2019/06/Edge-of-Tomorrow-Wallpapers.jpg?fit=1920%2C1231&ssl=1",
          },
          {
            id: "recommended-2",
            title: "Captain Marvel",
            duration: "2h 4m",
            tags: ["Watch free with ads"],
            bannerUrl: "https://upload.wikimedia.org/wikipedia/en/8/85/Captain_Marvel_poster.jpg",
            titleUrl: "https://i.ya-webdesign.com/images/captain-marvel-logo-png-3.png",
            match: "100% Match",
            year: 2019,
            grade: "PG-13",
            summary: `In 1995, on the Kree Empire's capital planet of Hala, Starforce member Vers suffers from amnesia and recurring nightmares involving an older woman.`,
            starring: ["Brie Larson", "Samuel L. Jackson"],
            category: ["Fantasy"],
            trailerUrl:
              "https://imdb-video.media-imdb.com/vi4235180569/1434659607842-pgv4ql-1550682793575.mp4?Expires=1593104426&Signature=m60Jr8k8MJ467voFHFQPpP0AQ9MMIii4eCTLvQEMEzKWyKD2~ynPpFsGmOKZ5hpy7PYQyOkv~fNwd6HlNEae66JyO~q~ePMlG3FiPD9TPN3vJ1vCLwQwo3QB4Uo~ROmEHctzk-BzzaX79m8wXgbkUFPQZbmx18OiyZ5B~mCurndFSA4BxfGmtc80uXKVYThVsMrWkjT3g6fJ3ePqxypI6J5ekkqGzL94OwGgJRy~FJYMaGrxvykA3-JwPuLj3OEMfCOferi-W2o-reGx-TkqFXsehMIDN2nYEMv1M9Qa~c32a~n1NxBZAAFIiUTm8-~b~8tWR4~axrL08LPhGoMG-Q__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
            trailerPoster:
              "https://cdn.vox-cdn.com/thumbor/8IFRoO9CNIxNRjqpO4q4Vm-PC0E=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15585530/CaptainMarvel5c1d2766eb7f0.jpg",
          },
          {
            id: "recommended-3",
            title: "Hacksaw Ridge",
            duration: "2h 19m",
            tags: ["Free"],
            bannerUrl: "https://upload.wikimedia.org/wikipedia/en/8/8a/Hacksaw_Ridge_poster.png",
            titleUrl:
              "https://fanart.tv/fanart/movies/324786/hdmovielogo/hacksaw-ridge-57f3aa7d75c8c.png",
            match: "100% Match",
            year: 2016,
            grade: "PG-13",
            summary: `In rural 1920s Virginia, the young Desmond Doss nearly kills his little brother Hal while roughhousing. This event and his Seventh-day Adventist upbringing reinforce Desmond's belief in the commandment "Thou shalt not kill".`,
            starring: ["Andrew  Garfield", "Sam Worthington"],
            category: ["Action"],
            trailerUrl:
              "https://imdb-video.media-imdb.com/vi2608248601/1434659607842-pgv4ql-1469716635759.mp4?Expires=1593018233&Signature=rHEi6qQR7qi9Qi~b0a1Kvsd~vJKVgiiz9cCfOUQcAtCrYoTkwOQ32qsIwEr7gE2N-0EVp4sujXL99L6WRQgSeAUCfY7NkG2Kg4mS7XI8Ndx~xCnGyuZ1TWoto32jCpB7oK3OKDDSY~z1Q2H0sJVkK9WVIYS9Tu4uWw0TxlnIjran1bhqoP6RfzGK~rYc7SZWBJMMWtNSN4rymZ7JXfJ5YbOXMhsV0ybRAqD0u4ZXCTiJr86n102U8LUBry3tlioc5uyq2WwuQcdIq9trcutg4-7zlh-5tXgWzyKZkvDMw7Y8PMo~uhX2slLXikt7gYjsKoQXsdkk9siTEOSKEqFoww__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
            trailerPoster: "https://pbs.twimg.com/media/Cv4D_CTWIAAw3b8.jpg",
          },
          {
            id: "recommended-4",
            title: "Sintel",
            duration: "14m 48s",
            tags: ["Free"],
            bannerUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Sintel_poster.jpg",
            titleUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sintel_The_Game_Logo_Small.svg/2560px-Sintel_The_Game_Logo_Small.svg.png",
            match: "95% Match",
            year: 2010,
            grade: "G",
            summary: `The main character, Sintel, is attacked while traveling through a wintry mountainside. After defeating her attacker and taking his spear, she finds refuge in a shaman's hut`,
            starring: ["Halina Reijin", "Thom Hoffman"],
            category: ["Action", "Thrilling"],
            trailerUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
            trailerPoster: "https://media.w3.org/2010/05/sintel/poster.png",
          },
          {
            id: "recommended-5",
            title: "Courageous",
            duration: "2h 10m",
            tags: ["Buy"],
            bannerUrl: "https://upload.wikimedia.org/wikipedia/en/3/3b/Courageous_Cover.JPG",
            titleUrl: "https://www.kendrickbrotherscatalogue.com/courageous/_images/title.png",
            match: "100% Match",
            year: 2011,
            grade: "G",
            summary: `In 2011, when his truck is stolen at a gas station, Nathan Hayes (Ken Bevel) chases it and manages to reclaim the truck but the criminal gets away. Though he is injured, he crawls back to his truck, and sees that his little baby boy in the back is okay.`,
            starring: ["Alex Kendrick", "Ken Bevel", "Kevin Downes"],
            category: ["Comedy", "Action"],
            trailerUrl:
              "https://imdb-video.media-imdb.com/vi2077596697/MV5BMTM1OTY3MzEwNF5BMTFeQW1wNF5BbWU3MDU0MDQzMDY@.mp4?Expires=1593018606&Signature=GdYg-PN~IMzJuH6g8Kg1rC~DcHOOIeS9ys7TBqJq8EdOFQ5xxrGJS0HWpbTLxMB6-J2KktQPMVwPEJ2sBoSLeGvDy1MX6bu3K4cwZyNW4PPe6l31FeYZhqiSAFXZzypQgSt3aC8GVkN81dyrRGr-OAEqFrj0287BQ1fWDYBX67hTj5cjzNWmbd8keGtUxIGl~RdCux7Lz3U6fD0OC9b74znZnJcymUDctZvZniOKAtwQeDeYzpuypJZaGZLmy~SJbWnDBews5hmysReUcisj-6HFh9ROoNz5v5p7rn6LQBSqgfZvtprC8-9pouMufrzpK~7NCE92ih-hNSn4tD5K4w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
            trailerPoster: "https://i.ytimg.com/vi/70MVn1q-yyM/maxresdefault.jpg",
          },
        ],
      },
      {
        id: "kidsRecommended",
        title: "Recommended for kids",
        list: [
          {
            id: "kidsRecommended-1",
            title: "Sintel",
            duration: "14m 48s",
            tags: ["Free"],
            bannerUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Sintel_poster.jpg",
            titleUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sintel_The_Game_Logo_Small.svg/2560px-Sintel_The_Game_Logo_Small.svg.png",
            match: "95% Match",
            year: 2010,
            grade: "G",
            summary: `The main character, Sintel, is attacked while traveling through a wintry mountainside. After defeating her attacker and taking his spear, she finds refuge in a shaman's hut`,
            starring: ["Halina Reijin", "Thom Hoffman"],
            category: ["Action", "Thrilling"],
            trailerUrl: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
            trailerPoster: "https://media.w3.org/2010/05/sintel/poster.png",
          },
          {
            id: "kidsRecommended-2",
            title: "Big Buck Bunny",
            duration: "9m 56s",
            tags: ["Buy"],
            bannerUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/1024px-Big_buck_bunny_poster_big.jpg",
            titleUrl: "https://en.wikifur.com/w/images/0/08/Big_Buck_Bunny_logo.png",
            match: "100% Match",
            year: 2008,
            grade: "G",
            summary: `The plot follows a day in the life of Big Buck Bunny, during which time he meets three bullying rodents: Frank the flying squirrel (the leader), Rinky the red squirrel, and Gimera the chinchilla (his sidekicks).`,
            starring: [
              "Big Buck Bunny",
              "Frank the flying squirrel",
              "Rinky the red squirrel",
              "Gimera the chinchilla",
            ],
            category: ["Comedy", "Fantasy"],
            trailerUrl: "https://media.w3.org/2010/05/bunny/trailer.ogv",
            trailerPoster: "https://media.w3.org/2010/05/bunny/poster.png",
          },
        ],
      },
      {
        id: "featuredOnNetflix",
        title: "Featured on Netflix",
        list: [
          {
            id: "featuredOnNetflix-1",
            title: "Captain America: The First Avenger",
            duration: "2h 4m",
            tags: ["Rent"],
            bannerUrl:
              "https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg",
            titleUrl: "https://i.ya-webdesign.com/images/captain-america-civil-war-logo-png.png",
            match: "95% Match",
            year: 2011,
            grade: "PG-13",
            summary: `In the present day, scientists in the Arctic uncover an old, frozen aircraft. In March 1942, Nazi officer Johann Schmidt and his men steal a mysterious relic called the Tesseract,[N 2] which possesses untold powers, from the town of Tønsberg in German-occupied Norway.`,
            starring: ["Chris Evans", "Tommy Lee Jones"],
            category: ["Action", "Exciting", "Thrilling"],
            trailerUrl:
              "https://imdb-video.media-imdb.com/vi2912787481/MV5BODg3OTkyOTI2Ml5BMTFeQW1wNF5BbWU3MDI5MzIyNzU@.mp4?Expires=1593019330&Signature=pSAjy46H8iUSnInoiyN69q4UGj2Ufc9Y2KfceNqROLZG~KrQQXgBKBqTugX-fqd8B2ZG7mT2jxhbVVHxeERfK0scB2asi8Zw~b~N0NKH9tYqAzAVOx8~qowdoS96-fGnuAKc8E12RG~kvMEj6f2gkiaKuYCEpF5ySX5Sh5YrPeLQwC08Zz72yfniEHTM2LQeYtbEyqNqUMyEdQJ9D~v0Fwe2t9~rASp3CiqiT1U1uja4WIhEjJiQ78W6jD1XiESCQRvB7GsAtMiiXl1uXS7-gRvDsveiodUxu7EdobTt8syyt5~~uao7yDd6D6ii9jFqVJGy-bW~mQFzjIzj6sYXSg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
            trailerPoster:
              "https://cdn1.thr.com/sites/default/files/imagecache/768x433/2011/07/fb-fx-0072_a_l.jpg",
          },
          {
            id: "featuredOnNetflix-2",
            title: "Iron Man 2",
            duration: "2h 4m",
            tags: ["Watch free with ads"],
            bannerUrl: "https://upload.wikimedia.org/wikipedia/en/e/ed/Iron_Man_2_poster.jpg",
            titleUrl:
              "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman2_lob_log_03_0.png",
            match: "100% Match",
            year: 2010,
            grade: "PG-13",
            summary: `In Russia, the media covers Tony Stark's disclosure of his identity as Iron Man. Ivan Vanko, whose father, Anton Vanko, has just died, sees this and begins building a miniature arc reactor similar to Stark's.`,
            starring: ["Robert Downey Jr.", "Gwyneth Paltrow"],
            category: ["Fantasy", "Action"],
            trailerUrl:
              "https://imdb-video.media-imdb.com/vi2256077849/MV5BNWU5NGRjNzctNGFhZS00YjlkLWJmOWUtZDAzMzI1YWVjNDYzXkExMV5BbXA0XkFpbWRiLWV0cy10cmFuc2NvZGU@.mp4?Expires=1593019573&Signature=JBP41mBaX6nqIwQAK1N-ynyRz49OBAuPgtSdkW~YJlpHKfrxSFpJ1G-nyHW2tDOjew0UJt3HBa7tgxDgPVOQKPQDoWKF8to26oz-TmiboBZqD20xZ5nl1q7vqSmYgDR8FgIEn7s2L7UPZVgGfq2FXtvuBrlAcjKWAoJKBOKcXs2qPoOxNuNnSBdxSmthRAt4CLGd7xyffdofBog6H1AzIPs906fgXSMJAoXyL5d0J3IM~9zYLt5LgbwgDAReVDKKtCHUOxrC4zMUynYpIcamY~RAH6GRgnA6IpfmtjKsI2yg~EqdNUKT4xDuaGBIpXcf2Bc03rbKBDBYkHPymv1aHA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
            trailerPoster: "https://miro.medium.com/max/4096/1*BX3hgiOqRznnXEhXHRMy5A.jpeg",
          },
          {
            id: "featuredOnNetflix-3",
            title: "Hulk",
            duration: "1h 52m",
            tags: ["Free"],
            bannerUrl:
              "https://upload.wikimedia.org/wikipedia/en/8/88/The_Incredible_Hulk_poster.jpg",
            titleUrl:
              "https://img.pngio.com/hd-marvel-cinematic-universe-movie-logos-album-on-imgur-the-incredible-hulk-logo-png-700_176.png",
            match: "100% Match",
            year: 2008,
            grade: "PG-13",
            summary: `At Culver University in Virginia, General Thaddeus "Thunderbolt" Ross meets with Dr. Bruce Banner, the colleague and boyfriend of his daughter Betty, regarding an experiment that Ross claims is meant to make humans immune to gamma radiation.`,
            starring: ["Edward Norton", "Liv Tyler"],
            category: ["Action"],
            trailerUrl:
              "https://imdb-video.media-imdb.com/vi1726152985/MV5BMjI2MTI2NjMyOV5BMTFeQW1wNF5BbWU3MDQ2ODczMzM@.mp4?Expires=1593020157&Signature=SW4LyeAfkDeAjPuVaxfV9BX0FBdo0dkH3Yx~~25ZoIuQ0LhixrkAJrpk2bvO0iKv26ZUSn3kd~L9PsLw7wYJ7ONzAxndU4zp4qZ9LK1lZQtO7Vf0gqOvi3WnikiCr~TBcKEcbcffvmFxlkNs8zaPxjNT6-C9XRCAi-LFtoP6os3lySbOa4oTNEdl9XaOq~8fDUsNZxEC0jXj99wX-x4gl74Me6xBu0YdTHtH8DrZadLYRDqCTQBXqkH9QWpVgLx~-KMJV~-pcDXQaph2DTXMmx4mLYWeh1Ro5mhNolPF0awYIJSP8guo9MRkXPapImqD8~3Gk7OJm2znE4hbS4Xx6g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
            trailerPoster:
              "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/the-incredible-hulk-revisited-1-700x297.jpg",
          },
          {
            id: "featuredOnNetflix-4",
            title: "Thor",
            duration: "1h 54m",
            tags: ["Free"],
            bannerUrl: "https://upload.wikimedia.org/wikipedia/en/f/fc/Thor_poster.jpg",
            titleUrl: "https://i.ya-webdesign.com/images/thor-movie-logo-png-5.png",
            match: "95% Match",
            year: 2011,
            grade: "PG-13",
            summary: `In 965 AD, Odin, king of Asgard, wages war against the Frost Giants of Jotunheim and their leader Laufey, to prevent them from conquering the nine realms, starting with Earth.`,
            starring: ["Chris Hemsworth", "Natalie Portman"],
            category: ["Action", "Thrilling"],
            trailerUrl:
              "https://imdb-video.media-imdb.com/vi1431476761/MV5BOGRmOTI0ODktM2VlMy00YzZjLWFlMzAtNGMxNzdjOWRjOTQ1XkExMV5BbXA0XkFpbWRiLWV0cy10cmFuc2NvZGU@.mp4?Expires=1593019940&Signature=Gu--b1tgZLDw05pj1RmsR6usLVRCCVk94svMViKr7BOos1muytTjiiwa5T8ULF6vh7E28AJ0vh2b1PQ5R4szwJV8BKYpD5Q~Ml7zGXFoOiAhwQ2h6dtS4eZa3xKrHUnsjcrvXH6PU6sRYlH6Znsfbouq9FxgUqZLpZu1EZ~psGVuMFMe6gvV0rK04mMm6YqHViZM12JhfUIW0syayWx5nIt7B63kOT-ztQFJWS3v6KQARGuJ03ctRP4q40AKYeANqIWKQDyuikFBt29K5SO0qfp63qc50Ehd37w5PKRCf9~-~KE1CrEFz8ytmYMzUbMBCrHfoh9dNhASM410j22Zow__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
            trailerPoster:
              "https://static.wixstatic.com/media/f732fa_23cbd07c0a5e42b08c1238c500f8379b~mv2.jpg/v1/fit/w_2500,h_1330,al_c/f732fa_23cbd07c0a5e42b08c1238c500f8379b~mv2.jpg",
          },
          {
            id: "featuredOnNetflix-5",
            title: "The Avengers",
            duration: "2h 23m",
            tags: ["Buy"],
            bannerUrl:
              "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
            titleUrl:
              "https://pluspng.com/img-png/avengers-logo-png-marvel-the-hulk-thor-iron-man-captain-america-black-widow-nick-fury-text-font-1516.png",
            match: "100% Match",
            year: 2012,
            grade: "PG-13",
            summary: `The Asgardian Loki encounters the Other, the leader of an extraterrestrial race known as the Chitauri. In exchange for retrieving the Tesseract, a powerful energy source of unknown potential, the Other promises Loki an army with which he can subjugate Earth.`,
            starring: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"],
            category: ["Comedy", "Action"],
            trailerUrl:
              "https://imdb-video.media-imdb.com/vi1891149081/MV5BMjE0NjU2NDE3MF5BMTFeQW1wNF5BbWU3MDE4OTg1MDg@.mp4?Expires=1593020424&Signature=JGoWQd-N~lhnixZOMCWr8CAxAqRu3DrwNwFv5VKUYvMREvhMZli5B1b8J3UmHSmh5pzn6prpgf-roG7DYYx~iQ5zFDpEof3EqjoRQ2vV0UrtJX8ZMtXddk1IQ9r-VONkWLv~CXjjMIAz~dFsHZiNkftzmOk~QxE-oH6qpzuYkgMs7PT4UlbqO4xiSUkFYqmKBIfSFmLD9NKTCm3YbmFtQhFDwUaXQqg0WrAWuceRmKbYl46NPpFMfkzrDBXX26amrF02TzYozmKH0pcy5k9Q-tGlaoonTjW-WebY0Ub1pctbSdYd4R56pnf9Rfnhacup5FlRIMI6W2mjEuwpeojmNw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
            trailerPoster:
              "https://www.fanman.me/wp-content/uploads/2018/04/Road-to-Avengers-Infinity-War-Recap-The-Avengers-2012.jpg",
          },
        ],
      },
    ],
  });
};
