/* CREATE ALBUMS TABLE */
DROP TABLE IF EXISTS albums;
CREATE TABLE albums(
  id INTEGER,
  artist_id INTEGER,
  title VARCHAR(100),
  year INTEGER,
  image VARCHAR(255)
);


/* CREATE ARTISTS TABLE */
DROP TABLE IF EXISTS artists;
CREATE TABLE artists(
  id INTEGER,
  name VARCHAR(100),
  genre VARCHAR(100),
  image VARCHAR(255)
);


/* CREATE SONGS TABLE */
DROP TABLE IF EXISTS songs;
CREATE TABLE songs(
  id INTEGER,
  title VARCHAR(100),
  album_id INTEGER,
  length INTEGER,
  track_no INTEGER
);
