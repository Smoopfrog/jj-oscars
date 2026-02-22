-- 2026 Oscars (98th Academy Awards) – migration
-- Ceremony: March 15, 2026. Nominee year = 2026, winners TBD (false).

BEGIN;

-- Ensure sequence is ahead of existing ids (handles restored/manual data)
SELECT setval(pg_get_serial_sequence('categories', 'id'), COALESCE((SELECT max(id) FROM categories), 1));

-- New category for 2026 (skip if already present)
INSERT INTO categories (name, title_source)
SELECT 'Casting', 'subtitle'
WHERE NOT EXISTS (SELECT 1 FROM categories WHERE name = 'Casting');

-- Ensure movies sequence is ahead of existing ids
SELECT setval(pg_get_serial_sequence('movies', 'id'), COALESCE((SELECT max(id) FROM movies), 1));

-- 2026 movies (all referenced by nominees below)
INSERT INTO movies (title, nomination_year) VALUES
('Marty Supreme', 2026),
('One Battle after Another', 2026),
('Blue Moon', 2026),
('Sinners', 2026),
('The Secret Agent', 2026),
('Hamnet', 2026),
('If I Had Legs I''d Kick You', 2026),
('Song Sung Blue', 2026),
('Sentimental Value', 2026),
('Bugonia', 2026),
('Weapons', 2026),
('Frankenstein', 2026),
('Arco', 2026),
('Elio', 2026),
('KPop Demon Hunters', 2026),
('Little Amélie or the Character of Rain', 2026),
('Zootopia 2', 2026),
('Diane Warren: Relentless', 2026),
('Viva Verdi!', 2026),
('Train Dreams', 2026),
('F1', 2026),
('Avatar: Fire and Ash', 2026),
('Kokuho', 2026),
('The Smashing Machine', 2026),
('The Ugly Stepsister', 2026),
('Sirāt', 2026),
('The Alabama Solution', 2026),
('Come See Me in the Good Light', 2026),
('Cutting through Rocks', 2026),
('Mr. Nobody against Putin', 2026),
('The Perfect Neighbor', 2026),
('All the Empty Rooms', 2026),
('Armed Only with a Camera: The Life and Death of Brent Renaud', 2026),
('Children No More: "Were and Are Gone"', 2026),
('The Devil Is Busy', 2026),
('Perfectly a Strangeness', 2026),
('It Was Just an Accident', 2026),
('The Voice of Hind Rajab', 2026),
('Butterfly', 2026),
('Forevergreen', 2026),
('The Girl Who Cried Pearls', 2026),
('Retirement Plan', 2026),
('The Three Sisters', 2026),
('Butcher''s Stain', 2026),
('A Friend of Dorothy', 2026),
('Jane Austen''s Period Drama', 2026),
('The Singers', 2026),
('Two People Exchanging Saliva', 2026),
('Jurassic World Rebirth', 2026),
('The Lost Bus', 2026)
ON CONFLICT (title) DO NOTHING;

-- 2026 nominees (nominee_year = 2026, winner = false)
INSERT INTO nominees (category_id, name, movie_id, nominee_year, winner)
SELECT c.id, n.name, m.id, 2026, false
FROM (VALUES
  -- Actor in a Leading Role (1)
  ('Actor in a Leading Role', 'Timothée Chalamet', 'Marty Supreme'),
  ('Actor in a Leading Role', 'Leonardo DiCaprio', 'One Battle after Another'),
  ('Actor in a Leading Role', 'Ethan Hawke', 'Blue Moon'),
  ('Actor in a Leading Role', 'Michael B. Jordan', 'Sinners'),
  ('Actor in a Leading Role', 'Wagner Moura', 'The Secret Agent'),
  -- Actor in a Supporting Role (2)
  ('Actor in a Supporting Role', 'Benicio Del Toro', 'One Battle after Another'),
  ('Actor in a Supporting Role', 'Jacob Elordi', 'Frankenstein'),
  ('Actor in a Supporting Role', 'Delroy Lindo', 'Sinners'),
  ('Actor in a Supporting Role', 'Sean Penn', 'One Battle after Another'),
  ('Actor in a Supporting Role', 'Stellan Skarsgård', 'Sentimental Value'),
  -- Actress in a Leading Role (3)
  ('Actress in a Leading Role', 'Jessie Buckley', 'Hamnet'),
  ('Actress in a Leading Role', 'Rose Byrne', 'If I Had Legs I''d Kick You'),
  ('Actress in a Leading Role', 'Kate Hudson', 'Song Sung Blue'),
  ('Actress in a Leading Role', 'Renate Reinsve', 'Sentimental Value'),
  ('Actress in a Leading Role', 'Emma Stone', 'Bugonia'),
  -- Actress in a Supporting Role (4)
  ('Actress in a Supporting Role', 'Elle Fanning', 'Sentimental Value'),
  ('Actress in a Supporting Role', 'Inga Ibsdotter Lilleaas', 'Sentimental Value'),
  ('Actress in a Supporting Role', 'Amy Madigan', 'Weapons'),
  ('Actress in a Supporting Role', 'Wunmi Mosaku', 'Sinners'),
  ('Actress in a Supporting Role', 'Teyana Taylor', 'One Battle after Another'),
  -- Animated Feature Film (5)
  ('Animated Feature Film', 'Ugo Bienvenu, Félix de Givry, Sophie Mas and Natalie Portman', 'Arco'),
  ('Animated Feature Film', 'Madeline Sharafian, Domee Shi, Adrian Molina and Mary Alice Drumm', 'Elio'),
  ('Animated Feature Film', 'Maggie Kang, Chris Appelhans and Michelle L.M. Wong', 'KPop Demon Hunters'),
  ('Animated Feature Film', 'Maïlys Vallade, Liane-Cho Han, Nidia Santiago and Henri Magalon', 'Little Amélie or the Character of Rain'),
  ('Animated Feature Film', 'Jared Bush, Byron Howard and Yvett Merino', 'Zootopia 2'),
  -- Animated Short Film (6)
  ('Animated Short Film', 'Florence Miailhe and Ron Dyens', 'Butterfly'),
  ('Animated Short Film', 'Nathan Engelhardt and Jeremy Spears', 'Forevergreen'),
  ('Animated Short Film', 'Chris Lavis and Maciek Szczerbowski', 'The Girl Who Cried Pearls'),
  ('Animated Short Film', 'John Kelly and Andrew Freedman', 'Retirement Plan'),
  ('Animated Short Film', 'Konstantin Bronzit', 'The Three Sisters'),
  -- Casting (new category)
  ('Casting', 'Nina Gold', 'Hamnet'),
  ('Casting', 'Jennifer Venditti', 'Marty Supreme'),
  ('Casting', 'Cassandra Kulukundis', 'One Battle after Another'),
  ('Casting', 'Gabriel Domingues', 'The Secret Agent'),
  ('Casting', 'Francine Maisler', 'Sinners'),
  -- Cinematography (7)
  ('Cinematography', 'Dan Laustsen', 'Frankenstein'),
  ('Cinematography', 'Darius Khondji', 'Marty Supreme'),
  ('Cinematography', 'Michael Bauman', 'One Battle after Another'),
  ('Cinematography', 'Autumn Durald Arkapaw', 'Sinners'),
  ('Cinematography', 'Adolpho Veloso', 'Train Dreams'),
  -- Costume Design (8)
  ('Costume Design', 'Deborah L. Scott', 'Avatar: Fire and Ash'),
  ('Costume Design', 'Kate Hawley', 'Frankenstein'),
  ('Costume Design', 'Malgosia Turzanska', 'Hamnet'),
  ('Costume Design', 'Miyako Bellizzi', 'Marty Supreme'),
  ('Costume Design', 'Ruth E. Carter', 'Sinners'),
  -- Directing (9)
  ('Directing', 'Chloé Zhao', 'Hamnet'),
  ('Directing', 'Josh Safdie', 'Marty Supreme'),
  ('Directing', 'Paul Thomas Anderson', 'One Battle after Another'),
  ('Directing', 'Joachim Trier', 'Sentimental Value'),
  ('Directing', 'Ryan Coogler', 'Sinners'),
  -- Documentary Feature Film (10)
  ('Documentary Feature Film', 'Andrew Jarecki and Charlotte Kaufman', 'The Alabama Solution'),
  ('Documentary Feature Film', 'Ryan White, Jessica Hargrave, Tig Notaro and Stef Willen', 'Come See Me in the Good Light'),
  ('Documentary Feature Film', 'Sara Khaki and Mohammadreza Eyni', 'Cutting through Rocks'),
  ('Documentary Feature Film', 'David Borenstein, Pavel Talankin, Helle Faber and Alžběta Karásková', 'Mr. Nobody against Putin'),
  ('Documentary Feature Film', 'Geeta Gandbhir, Alisa Payne, Nikon Kwantu and Sam Bisbee', 'The Perfect Neighbor'),
  -- Documentary Short Film (11)
  ('Documentary Short Film', 'Joshua Seftel and Conall Jones', 'All the Empty Rooms'),
  ('Documentary Short Film', 'Craig Renaud and Juan Arredondo', 'Armed Only with a Camera: The Life and Death of Brent Renaud'),
  ('Documentary Short Film', 'Hilla Medalia and Sheila Nevins', 'Children No More: "Were and Are Gone"'),
  ('Documentary Short Film', 'Christalyn Hampton and Geeta Gandbhir', 'The Devil Is Busy'),
  ('Documentary Short Film', 'Alison McAlpine', 'Perfectly a Strangeness'),
  -- Film Editing (12)
  ('Film Editing', 'Stephen Mirrione', 'F1'),
  ('Film Editing', 'Ronald Bronstein and Josh Safdie', 'Marty Supreme'),
  ('Film Editing', 'Andy Jurgensen', 'One Battle after Another'),
  ('Film Editing', 'Olivier Bugge Coutté', 'Sentimental Value'),
  ('Film Editing', 'Michael P. Shawver', 'Sinners'),
  -- International Feature Film (13)
  ('International Feature Film', 'Brazil', 'The Secret Agent'),
  ('International Feature Film', 'France', 'It Was Just an Accident'),
  ('International Feature Film', 'Norway', 'Sentimental Value'),
  ('International Feature Film', 'Spain', 'Sirāt'),
  ('International Feature Film', 'Tunisia', 'The Voice of Hind Rajab'),
  -- Live Action Short Film (19)
  ('Live Action Short Film', 'Meyer Levinson-Blount and Oron Caspi', 'Butcher''s Stain'),
  ('Live Action Short Film', 'Lee Knight and James Dean', 'A Friend of Dorothy'),
  ('Live Action Short Film', 'Julia Aks and Steve Pinder', 'Jane Austen''s Period Drama'),
  ('Live Action Short Film', 'Sam A. Davis and Jack Piatt', 'The Singers'),
  ('Live Action Short Film', 'Alexandre Singh and Natalie Musteata', 'Two People Exchanging Saliva'),
  -- Makeup and Hairstyling (14)
  ('Makeup and Hairstyling', 'Mike Hill, Jordan Samuel and Cliona Furey', 'Frankenstein'),
  ('Makeup and Hairstyling', 'Kyoko Toyokawa, Naomi Hibino and Tadashi Nishimatsu', 'Kokuho'),
  ('Makeup and Hairstyling', 'Ken Diaz, Mike Fontaine and Shunika Terry', 'Sinners'),
  ('Makeup and Hairstyling', 'Kazu Hiro, Glen Griffin and Bjoern Rehbein', 'The Smashing Machine'),
  ('Makeup and Hairstyling', 'Thomas Foldberg and Anne Cathrine Sauerberg', 'The Ugly Stepsister'),
  -- Music (Original Score) (15)
  ('Music (Original Score)', 'Jerskin Fendrix', 'Bugonia'),
  ('Music (Original Score)', 'Alexandre Desplat', 'Frankenstein'),
  ('Music (Original Score)', 'Max Richter', 'Hamnet'),
  ('Music (Original Score)', 'Jonny Greenwood', 'One Battle after Another'),
  ('Music (Original Score)', 'Ludwig Goransson', 'Sinners'),
  -- Music (Original Song) (16)
  ('Music (Original Song)', 'Dear Me - Music and Lyric by Diane Warren', 'Diane Warren: Relentless'),
  ('Music (Original Song)', 'Golden - Music and Lyric by EJAE, Mark Sonnenblick, Joong Gyu Kwak, Yu Han Lee, Hee Dong Nam, Jeong Hoon Seo and Teddy Park', 'KPop Demon Hunters'),
  ('Music (Original Song)', 'I Lied To You - Music and Lyric by Raphael Saadiq and Ludwig Goransson', 'Sinners'),
  ('Music (Original Song)', 'Sweet Dreams Of Joy - Music and Lyric by Nicholas Pike', 'Viva Verdi!'),
  ('Music (Original Song)', 'Train Dreams - Music by Nick Cave and Bryce Dessner; Lyric by Nick Cave', 'Train Dreams'),
  -- Best Picture (17)
  ('Best Picture', 'Ed Guiney & Andrew Lowe, Yorgos Lanthimos, Emma Stone and Lars Knudsen, Producers', 'Bugonia'),
  ('Best Picture', 'Chad Oman, Brad Pitt, Dede Gardner, Jeremy Kleiner, Joseph Kosinski and Jerry Bruckheimer, Producers', 'F1'),
  ('Best Picture', 'Guillermo del Toro, J. Miles Dale and Scott Stuber, Producers', 'Frankenstein'),
  ('Best Picture', 'Liza Marshall, Pippa Harris, Nicolas Gonda, Steven Spielberg and Sam Mendes, Producers', 'Hamnet'),
  ('Best Picture', 'Eli Bush, Ronald Bronstein, Josh Safdie, Anthony Katagas and Timothée Chalamet, Producers', 'Marty Supreme'),
  ('Best Picture', 'Adam Somner, Sara Murphy and Paul Thomas Anderson, Producers', 'One Battle after Another'),
  ('Best Picture', 'Emilie Lesclaux, Producer', 'The Secret Agent'),
  ('Best Picture', 'Maria Ekerhovd and Andrea Berentsen Ottmar, Producers', 'Sentimental Value'),
  ('Best Picture', 'Zinzi Coogler, Sev Ohanian and Ryan Coogler, Producers', 'Sinners'),
  ('Best Picture', 'Marissa McMahon, Teddy Schwarzman, Will Janowitz, Ashley Schlaifer and Michael Heimler, Producers', 'Train Dreams'),
  -- Production Design (18)
  ('Production Design', 'Tamara Deverell; Set Decoration: Shane Vieau', 'Frankenstein'),
  ('Production Design', 'Fiona Crombie; Set Decoration: Alice Felton', 'Hamnet'),
  ('Production Design', 'Jack Fisk; Set Decoration: Adam Willis', 'Marty Supreme'),
  ('Production Design', 'Florencia Martin; Set Decoration: Anthony Carlino', 'One Battle after Another'),
  ('Production Design', 'Hannah Beachler; Set Decoration: Monique Champagne', 'Sinners'),
  -- Sound (20)
  ('Sound', 'Gareth John, Al Nelson, Gwendolyn Yates Whittle, Gary A. Rizzo and Juan Peralta', 'F1'),
  ('Sound', 'Greg Chapman, Nathan Robitaille, Nelson Ferreira, Christian Cooke and Brad Zoern', 'Frankenstein'),
  ('Sound', 'José Antonio García, Christopher Scarabosio and Tony Villaflor', 'One Battle after Another'),
  ('Sound', 'Chris Welcker, Benjamin A. Burtt, Felipe Pacheco, Brandon Proctor and Steve Boeddeker', 'Sinners'),
  ('Sound', 'Amanda Villavieja, Laia Casanovas and Yasmina Praderas', 'Sirāt'),
  -- Visual Effects (21)
  ('Visual Effects', 'Joe Letteri, Richard Baneham, Eric Saindon and Daniel Barrett', 'Avatar: Fire and Ash'),
  ('Visual Effects', 'Ryan Tudhope, Nicolas Chevallier, Robert Harrington and Keith Dawson', 'F1'),
  ('Visual Effects', 'David Vickery, Stephen Aplin, Charmaine Chan and Neil Corbould', 'Jurassic World Rebirth'),
  ('Visual Effects', 'Charlie Noble, David Zaretti, Russell Bowen and Brandon K. McLaughlin', 'The Lost Bus'),
  ('Visual Effects', 'Michael Ralla, Espen Nordahl, Guido Wolter and Donnie Dean', 'Sinners'),
  -- Writing (Adapted Screenplay) (22)
  ('Writing (Adapted Screenplay)', 'Will Tracy', 'Bugonia'),
  ('Writing (Adapted Screenplay)', 'Guillermo del Toro', 'Frankenstein'),
  ('Writing (Adapted Screenplay)', 'Chloé Zhao & Maggie O''Farrell', 'Hamnet'),
  ('Writing (Adapted Screenplay)', 'Paul Thomas Anderson', 'One Battle after Another'),
  ('Writing (Adapted Screenplay)', 'Clint Bentley & Greg Kwedar', 'Train Dreams'),
  -- Writing (Original Screenplay) (23)
  ('Writing (Original Screenplay)', 'Robert Kaplow', 'Blue Moon'),
  ('Writing (Original Screenplay)', 'Jafar Panahi; Script collaborators - Nader Saïvar, Shadmehr Rastin, Mehdi Mahmoudian', 'It Was Just an Accident'),
  ('Writing (Original Screenplay)', 'Ronald Bronstein & Josh Safdie', 'Marty Supreme'),
  ('Writing (Original Screenplay)', 'Eskil Vogt, Joachim Trier', 'Sentimental Value'),
  ('Writing (Original Screenplay)', 'Ryan Coogler', 'Sinners')
) AS n(cat_name, name, movie_title)
JOIN categories c ON c.name = n.cat_name
JOIN movies m ON m.title = n.movie_title AND m.nomination_year = 2026;

COMMIT;
