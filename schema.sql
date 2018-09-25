DROP DATABASE IF EXISTS authors;

CREATE DATABASE authors;

DROP DATABASE IF EXISTS tweets;

CREATE DATABASE tweets;



CREATE TABLE author (
  category VARCHAR(20) NOt Null,
  celeb VARCHAR(30) NOT NULL,
  handle VARCHAR(100) NOT NULL,
  NumTweets INTEGER(10) not null,
  primary key (celeb)
);

insert into author (category,celeb,handle,NumTweets) 
values ("Movie", "Kristen Bell", "@IMKristenBell",8274);

insert into author (category,celeb,handle,NumTweets) 
values ("Movie", "Jonah Hill", "@JonahHill",35);

insert into author (category,celeb,handle,NumTweets) 
values ("Movie", "Anna Kendrick", "@AnnaKendrick47",2284);

insert into author (category,celeb,handle,NumTweets) 
values ("Movie", "Ryan Reynolds", "@VancityReynolds",1100);

insert into author (category,celeb,handle,NumTweets) 
values ("Movie", "Leo Dicaprio", "@LeoDiCaprio",1391);

insert into author (category,celeb,handle,NumTweets) 
values ("Movie", "Jennifer Lawrence", "@JLdaily",3888);

insert into author (category,celeb,handle,NumTweets) 
values ("Movie", "Tom Cruise", "@TomCruise",11000);

insert into author (category,celeb,handle,NumTweets) 
values ("Movie", "Will Ferrell", "@WillFerrel",0);

insert into author (category,celeb,handle,NumTweets) 
values ("Movie", "Jason Statham", "@realjstatham",431);

insert into author (category,celeb,handle,NumTweets) 
values ("Movie", "Dwayne Johnson", "@TheRock",22100);

insert into author (category,celeb,handle,NumTweets) 
values ("Movie", "Megan Fox", "@meganfox",29);

insert into author (category,celeb,handle,NumTweets) 
values ("Movie", "Adam Sandler", "@AdamSandler",272);

insert into author (category,celeb,handle,NumTweets) 
values ("Movie", "Vin Diesel", "@vindiesel",21);

insert into author (category,celeb,handle,NumTweets) 
values ("Movie", "Jackie Chan", "@EyeOfJackieChan",2394);

insert into author (category,celeb,handle,NumTweets) 
values ("Movie", "Ashton Kutcher", "@aplusk",9959);

insert into author (category,celeb,handle,NumTweets) 
values ("Movie", "Lindsay Lohna", "@lindsaylohan",51);

insert into author (category,celeb,handle,NumTweets) 
values ("Sports", "Cristiano Ronaldo", "@Cristiano",3266);

insert into author (category,celeb,handle,NumTweets) 
values ("Sports", "LeBron James", "@KingJames",5947);

insert into author (category,celeb,handle,NumTweets) 
values ("Sports", "Neymar", "@neymarjr",41200);

insert into author (category,celeb,handle,NumTweets) 
values ("Sports", "Kobe Bryant", "@kobebryant",1541);

insert into author (category,celeb,handle,NumTweets) 
values ("Comedians", "Ellen DeGeneres", "@Ellen_Authentic",17400);

insert into author (category,celeb,handle,NumTweets) 
values ("Comedians", "Kevin Hart", "@KevinHart4real",37500);

insert into author (category,celeb,handle,NumTweets) 
values ("Comedians", "Jim Carrey", "@JimCarrey",4363);

insert into author (category,celeb,handle,NumTweets) 
values ("Comedians", "Ricky Gervais", "@rickygervais",51800);

insert into author (category,celeb,handle,NumTweets) 
values ("Comedians", "Russell Brand", "@rustyrockets",11500);

insert into author (category,celeb,handle,NumTweets) 
values ("Comedians", "Bill Maher", "@billmaher",4018);

insert into author (category,celeb,handle,NumTweets) 
values ("Music", "Katy Perry",  "@katyperry",9262);

insert into author (category,celeb,handle,NumTweets) 
values ("Music","Justin Bieber", "@justinbieber",30500);

insert into author (category,celeb,handle,NumTweets) 
values ("Music","Rihanna", "@rihanna",10200);

insert into author (category,celeb,handle,NumTweets) 
values ("Music","Taylor Swift", "@taylorswift13",100);

insert into author (category,celeb,handle,NumTweets) 
values ("Music","Ariana Grande", "@ArianaGrande",42400);

insert into author (category,celeb,handle,NumTweets) 
values ("Music", "Justin Timberlake", "@jtimberlake",4012);

insert into author (category,celeb,handle,NumTweets) 
values ("Music","Demi Lovato",  "@ddlovato",17100);

insert into author (category,celeb,handle,NumTweets) 
values ("Music","Selena Gomez", "@selenagomez",4368);

select * from author;