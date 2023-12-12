CREATE TABLE Champions (
    Nom VARCHAR(50),
    Atk_Spd DECIMAL(3, 2),
    Damage_1 INT,
    Damage_2 INT,
    Damage_3 INT,
    Portee INT,
    Vie_1 INT,
    Vie_2 INT,
    Vie_3 INT,
    Mana INT,
    Armor INT,
    MR INT
);

INSERT INTO Champions (Nom, Atk_Spd, Damage_1, Damage_2, Damage_3, Portee, Vie_1, Vie_2, Vie_3, Mana, Armor, MR)
VALUES
    ('Zed', 0.95, 75, 135, 243, 1, 1000, 1800, 3240, 50, 60, 60),
    ('Kayn', 0.95, 75, 135, 243, 1, 1200, 2160, 3888, 50, 70, 70),
    ('Yorick', 0.8, 88, 158, 285, 1, 1050, 1890, 3402, 110, 60, 60),
    ('Qiyana', 0.9, 75, 135, 243, 1, 1050, 1890, 3402, 40, 60, 60),
    ('Viego', 0.85, 75, 135, 243, 1, 1000, 1800, 3240, 120, 65, 65),
    ('Jhin', 0.9, 70, 126, 227, 4, 850, 1530, 2754, 50, 30, 30),
    ('Akali True Damage', 0.9, 70, 126, 227, 1, 1100, 1980, 3564, 60, 65, 65),
    ('Ezreal', 0.85, 70, 126, 227, 4, 700, 1260, 2268, 40, 30, 30),
    ('Lucian', 0.9, 65, 117, 211, 4, 850, 1530, 2754, 125, 30, 30),
    ('Illaoi', 0.8, 70, 126, 227, 1, 1050, 1890, 3402, 150, 70, 70),
    ('Caitlyn', 0.8, 70, 126, 227, 4, 700, 1260, 2268, 90, 30, 30),
    ('Yone', 0.8, 65, 117, 211, 1, 800, 1440, 2592, 70, 40, 40),
    ('Akali K/DA', 0.85, 60, 108, 194, 1, 950, 1710, 3078, 50, 50, 50),
    ('Jax', 0.85, 55, 99, 178, 1, 750, 1350, 2430, 120, 35, 35),
    ('Urgot', 0.75, 60, 108, 194, 2, 750, 1350, 2430, 20, 45, 45),
    ('Riven', 0.75, 60, 108, 194, 1, 800, 1440, 2592, 100, 40, 40),
    ('Samira', 0.7, 60, 108, 194, 4, 600, 1080, 1944, 100, 20, 20),
    ('Miss Fortune', 0.75, 55, 99, 178, 4, 650, 1170, 2106, 60, 20, 20),
    ('Kaisa', 0.75, 55, 99, 178, 5, 600, 1080, 1944, 30, 20, 20),
    ('Aphelios', 0.75, 55, 99, 178, 4, 600, 1080, 1944, 135, 20, 20),
    ('Thresh', 0.65, 60, 108, 194, 1, 1000, 1800, 3240, 160, 60, 60),
    ('Poppy', 0.65, 60, 108, 194, 1, 1000, 1800, 3240, 100, 65, 65),
    ('Mordekaiser', 0.65, 60, 108, 194, 1, 850, 1530, 2754, 120, 55, 55),
    ('Sett', 0.7, 55, 99, 178, 1, 950, 1710, 3078, 90, 45, 45),
    ('Garen', 0.7, 55, 99, 178, 1, 750, 1350, 2430, 90, 45, 45),
    ('Yasuo', 0.75, 50, 90, 162, 1, 600, 1080, 1944, 50, 40, 40),
    ('Ziggs', 0.8, 45, 81, 148, 4, 800, 1440, 2592, 75, 40, 40),
    ('Blitzcrank', 0.6, 60, 108, 194, 1, 1000, 1800, 3240, 120, 60, 60),
    ('Gnar', 0.65, 55, 99, 178, 2, 700, 1260, 2268, 70, 45, 45),
    ('Twisted Fate', 0.75, 45, 81, 148, 4, 700, 1260, 2268, 105, 30, 30),
    ('Corki', 0.7, 48, 86, 156, 4, 450, 810, 1458, 60, 15, 15),
    ('Vi', 0.6, 55, 99, 178, 1, 650, 1170, 2106, 80, 40, 40),
    ('Tahm Kench', 0.55, 60, 108, 194, 1, 650, 1170, 2106, 0, 35, 35),
('Pantheon', 0.6, 55, 99, 178, 1, 750, 1350, 2430, 60, 45, 45),
('Zac', 0.65, 50, 90, 162, 1, 1000, 1800, 3240, 160, 60, 60),
('Olaf', 0.65, 50, 90, 162, 1, 650, 1170, 2106, 0, 35, 35),
('Ekko', 0.65, 50, 90, 162, 1, 850, 1530, 2754, 125, 40, 40),
('Ahri', 0.8, 40, 72, 130, 4, 700, 1260, 2268, 30, 30, 30),
('Twitch', 0.7, 45, 81, 148, 4, 550, 990, 1782, 70, 20, 20),
('Jinx', 0.7, 45, 81, 148, 4, 450, 810, 1458, 50, 15, 15),
('Evelynn', 0.7, 45, 81, 148, 1, 550, 990, 1782, 90, 35, 35),
('Taric', 0.55, 55, 99, 178, 1, 650, 1170, 2106, 140, 40, 40),
('Neeko', 0.6, 50, 90, 162, 1, 850, 1530, 2754, 90, 50, 50),
('Nami', 0.75, 40, 72, 130, 4, 450, 810, 1458, 75, 15, 15),
('KSante', 0.6, 50, 90, 162, 1, 650, 1170, 2106, 40, 40, 40),
('Karthus', 0.75, 40, 72, 130, 4, 700, 1260, 2268, 120, 30, 30),
('Gragas', 0.6, 50, 90, 162, 1, 750, 1350, 2430, 80, 45, 45),
('Amumu', 0.65, 45, 81, 148, 1, 900, 1620, 2916, 45, 55, 55),
('Vex', 0.7, 40, 72, 130, 4, 700, 1260, 2268, 75, 20, 20),
('Seraphine', 0.7, 40, 72, 130, 4, 550, 990, 1782, 60, 25, 25),
('Senna', 0.7, 40, 72, 130, 4, 600, 1080, 1944, 90, 20, 20),
('Lux', 0.7, 40, 72, 130, 4, 700, 1260, 2268, 75, 20, 20),
('Lulu', 0.7, 40, 72, 130, 4, 650, 1170, 2106, 40, 20, 20),
('Katarina', 0.7, 40, 72, 130, 2, 650, 1170, 2106, 60, 35, 35),
('Bard', 0.7, 40, 72, 130, 4, 550, 990, 1782, 60, 20, 20),
('Lillia', 0.55, 50, 90, 162, 1, 600, 1080, 1944, 140, 40, 40),
('Kayle', 0.75, 35, 63, 113, 4, 550, 990, 1782, 30, 20, 20),
('Annie', 0.65, 40, 72, 130, 4, 450, 810, 1458, 50, 20, 20),
('Kennen', 0.6, 40, 72, 130, 2, 650, 1170, 2106, 90, 40, 40),
('Sona', 0.85, 5, 9, 16, 5, 850, 1530, 2754, 170, 40, 40);