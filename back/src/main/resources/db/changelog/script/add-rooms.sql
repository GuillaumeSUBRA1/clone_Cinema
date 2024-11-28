INSERT INTO room (id, name, seats) VALUES
(1, 'Salle Napoléon', 150),
(2, 'Salle Cléopâtre', 120),
(3, 'Salle Jules César', 200),
(4, 'Salle Alexandre le Grand', 180),
(5, 'Salle Jeanne d’Arc', 160),
(6, 'Salle Léonard de Vinci', 140),
(7, 'Salle Marie Curie', 210),
(8, 'Salle Albert Einstein', 190),
(9, 'Salle Abraham Lincoln', 220),
(10, 'Salle William Shakespeare', 230),
(11, 'Salle Winston Churchill', 240),
(12, 'Salle Florence Nightingale', 250)
on conflict do nothing;
