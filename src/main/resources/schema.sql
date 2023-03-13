-- item

CREATE TABLE item(
    id integer PRIMARY KEY,
    name varchar NOT NULL,
    price integer,
    sell_price integer
);

INSERT INTO item(id, name, price, sell_price) VALUES(1, 'Potion', 100, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(2, 'Potion+', null, 100);
INSERT INTO item(id, name, price, sell_price) VALUES(3, 'Hi-Potion', 500, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(4, 'Hi-Potion+', null, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(5, 'X-Potion', 5000, 2500);
INSERT INTO item(id, name, price, sell_price) VALUES(6, 'Mega-Potion', 10000, 5000);
INSERT INTO item(id, name, price, sell_price) VALUES(7, 'Phoenix Down', 500, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(8, 'Mega Phoenix', 10000, 5000);
INSERT INTO item(id, name, price, sell_price) VALUES(9, 'Elixir', 50000, 2500);
INSERT INTO item(id, name, price, sell_price) VALUES(10, 'Megalixir', null, 5000);
INSERT INTO item(id, name, price, sell_price) VALUES(11, 'Antidote', 100, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(12, 'Soft', 100, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(13, 'Eye Drops', 100, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(14, 'Echo Screen', 100, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(15, 'Holy Water', 100, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(16, 'Remedy', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(17, 'Remedy+', null, 1000);
INSERT INTO item(id, name, price, sell_price) VALUES(18, 'Aura Stone', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(19, 'Death Stone', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(20, 'Holy Stone', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(21, 'Flare Stone', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(22, 'Meteor Stone', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(23, 'Ultima Stone', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(24, 'Gysahl Greens', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(25, 'Phoenix Pinion', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(26, 'Friendship', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(27, 'Hero-trial', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(28, 'Hero', null, 5000);
INSERT INTO item(id, name, price, sell_price) VALUES(29, 'Holy War-trial', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(30, 'Holy War', null, 10000);
INSERT INTO item(id, name, price, sell_price) VALUES(31, 'Shell Stone', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(32, 'Protect Stone', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(33, 'Tent', 1000, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(34, 'Pet House', 1000, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(35, 'Cottage', 1800, 450);
INSERT INTO item(id, name, price, sell_price) VALUES(36, 'Normal Ammo', 20, 1);
INSERT INTO item(id, name, price, sell_price) VALUES(37, 'Shotgun Ammo', 40, 2);
INSERT INTO item(id, name, price, sell_price) VALUES(38, 'Dark Ammo', 300, 15);
INSERT INTO item(id, name, price, sell_price) VALUES(39, 'Fire Ammo', 500, 25);
INSERT INTO item(id, name, price, sell_price) VALUES(40, 'Demolition Ammo', 800, 40);
INSERT INTO item(id, name, price, sell_price) VALUES(41, 'Fast Ammo', 100, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(42, 'AP Ammo', null, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(43, 'Pulse Ammo', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(44, 'G-Potion', 200, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(45, 'G-Hi-Potion', 600, 150);
INSERT INTO item(id, name, price, sell_price) VALUES(46, 'G-Mega-Potion', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(47, 'G-Returner', 500, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(48, 'Rename Card', null, 25);
INSERT INTO item(id, name, price, sell_price) VALUES(49, 'Amnesia Greens', 1000, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(50, 'HP-J Scroll', 10000, 2500);
INSERT INTO item(id, name, price, sell_price) VALUES(51, 'Str-J Scroll', 10000, 2500);
INSERT INTO item(id, name, price, sell_price) VALUES(52, 'Vit-J Scroll', 10000, 2500);
INSERT INTO item(id, name, price, sell_price) VALUES(53, 'Mag-J Scroll', 10000, 2500);
INSERT INTO item(id, name, price, sell_price) VALUES(54, 'Spr-J Scroll', 10000, 2500);
INSERT INTO item(id, name, price, sell_price) VALUES(55, 'Spd-J Scroll', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(56, 'Luck-J Scroll', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(57, 'Aegis Shield', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(58, 'Elem Atk', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(59, 'Elem Guard', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(60, 'Status Atk', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(61, 'Status Guard', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(62, 'Rosetta Stone', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(63, 'Magic Scroll', 5000, 1250);
INSERT INTO item(id, name, price, sell_price) VALUES(64, 'GF Scroll', 5000, 1250);
INSERT INTO item(id, name, price, sell_price) VALUES(65, 'Draw Scroll', 5000, 1250);
INSERT INTO item(id, name, price, sell_price) VALUES(66, 'Item Scroll', 5000, 1250);
INSERT INTO item(id, name, price, sell_price) VALUES(67, 'Gambler Spirit', null, 1250);
INSERT INTO item(id, name, price, sell_price) VALUES(68, 'Healing Ring', null, 2500);
INSERT INTO item(id, name, price, sell_price) VALUES(69, 'Phoenix Spirit', null, 2500);
INSERT INTO item(id, name, price, sell_price) VALUES(70, 'Med Kit', null, 2500);
INSERT INTO item(id, name, price, sell_price) VALUES(71, 'Bomb Spirit', null, 5000);
INSERT INTO item(id, name, price, sell_price) VALUES(72, 'Hungry Cookpot', null, 5000);
INSERT INTO item(id, name, price, sell_price) VALUES(73, 'Mog''s Amulet', null, 1250);
INSERT INTO item(id, name, price, sell_price) VALUES(74, 'Steel Pipe', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(75, 'Star Fragment', null, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(76, 'Energy Crystal', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(77, 'Samantha Soul', null, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(78, 'Healing Mail', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(79, 'Silver Mail', null, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(80, 'Gold Armor', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(81, 'Diamond Armor', null, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(82, 'Regen Ring', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(83, 'Giant''s Ring', 20000, 5000);
INSERT INTO item(id, name, price, sell_price) VALUES(84, 'Gaea''s Ring', null, 7500);
INSERT INTO item(id, name, price, sell_price) VALUES(85, 'Strength Love', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(86, 'Power Wrist', 20000, 5000);
INSERT INTO item(id, name, price, sell_price) VALUES(87, 'Hyper Wrist', null, 7500);
INSERT INTO item(id, name, price, sell_price) VALUES(88, 'Turtle Shell', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(89, 'Orihalcon', 20000, 5000);
INSERT INTO item(id, name, price, sell_price) VALUES(90, 'Adamantine', null, 7500);
INSERT INTO item(id, name, price, sell_price) VALUES(91, 'Rune Armlet', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(92, 'Force Armlet', 20000, 5000);
INSERT INTO item(id, name, price, sell_price) VALUES(93, 'Magic Armlet', null, 7500);
INSERT INTO item(id, name, price, sell_price) VALUES(94, 'Circlet', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(95, 'Hypno Crown', 20000, 5000);
INSERT INTO item(id, name, price, sell_price) VALUES(96, 'Royal Crown', null, 7500);
INSERT INTO item(id, name, price, sell_price) VALUES(97, 'Jet Engine', null, 5000);
INSERT INTO item(id, name, price, sell_price) VALUES(98, 'Rocket Engine', null, 7500);
INSERT INTO item(id, name, price, sell_price) VALUES(99, 'Moon Curtain', null, 10000);
INSERT INTO item(id, name, price, sell_price) VALUES(100, 'Steel Curtain', null, 10000);
INSERT INTO item(id, name, price, sell_price) VALUES(101, 'Glow Curtain', null, 10000);
INSERT INTO item(id, name, price, sell_price) VALUES(102, 'Accelerator', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(103, 'Monk''s Code', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(104, 'Knight''s Code', null, 10000);
INSERT INTO item(id, name, price, sell_price) VALUES(105, 'Doc''s Code', null, 10000);
INSERT INTO item(id, name, price, sell_price) VALUES(106, 'Hundred Needles', null, 10000);
INSERT INTO item(id, name, price, sell_price) VALUES(107, 'Three Stars', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(108, 'Ribbon', null, 25000);
INSERT INTO item(id, name, price, sell_price) VALUES(109, 'M-Stone Piece', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(110, 'Magic Stone', null, 12);
INSERT INTO item(id, name, price, sell_price) VALUES(111, 'Wizard Stone', null, 20);
INSERT INTO item(id, name, price, sell_price) VALUES(112, 'Ochu Tentacle', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(113, 'Healing Water', null, 25);
INSERT INTO item(id, name, price, sell_price) VALUES(114, 'Cockatrice Pinion', null, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(115, 'Zombie Powder', null, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(116, 'Lightweight', null, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(117, 'Sharp Spike', null, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(118, 'Screw', null, 25);
INSERT INTO item(id, name, price, sell_price) VALUES(119, 'Saw Blade', null, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(120, 'Mesmerize Blade', null, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(121, 'Vampire Fang', null, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(122, 'Fury Fragment', null, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(123, 'Betrayal Sword', null, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(124, 'Sleep Powder', null, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(125, 'Life Ring', null, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(126, 'Dragon Fang', null, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(127, 'Bomb Fragment', null, 25);
INSERT INTO item(id, name, price, sell_price) VALUES(128, 'Red Fang', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(129, 'Arctic Wind', null, 25);
INSERT INTO item(id, name, price, sell_price) VALUES(130, 'North Wind', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(131, 'Dynamo Stone', null, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(132, 'Shear Feather', null, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(133, 'Venom Fang', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(134, 'Steel Orb', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(135, 'Moon Stone', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(136, 'Dino Bone', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(137, 'Windmill', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(138, 'Dragon Skin', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(139, 'Fish Fin', null, 25);
INSERT INTO item(id, name, price, sell_price) VALUES(140, 'Dragon Fin', null, 25);
INSERT INTO item(id, name, price, sell_price) VALUES(141, 'Silence Powder', null, 25);
INSERT INTO item(id, name, price, sell_price) VALUES(142, 'Poison Powder', null, 25);
INSERT INTO item(id, name, price, sell_price) VALUES(143, 'Dead Spirit', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(144, 'Chef''s Knife', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(145, 'Cactus Thorn', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(146, 'Shaman Stone', null, 1250);
INSERT INTO item(id, name, price, sell_price) VALUES(147, 'Fuel', 3000, 750);
INSERT INTO item(id, name, price, sell_price) VALUES(148, 'Pet Nametag', null, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(149, 'Chocobo''s Tag', null, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(150, 'LuvLuv G', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(151, 'Spider Web', null, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(152, 'Coral Fragment', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(153, 'Curse Spike', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(154, 'Black Hole', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(155, 'Water Crystal', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(156, 'Missile', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(157, 'Mystery Fluid', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(158, 'Running Fire', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(159, 'Inferno Fang', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(160, 'Malboro Tentacle', null, 100);
INSERT INTO item(id, name, price, sell_price) VALUES(161, 'Whisper', null, 100);
INSERT INTO item(id, name, price, sell_price) VALUES(162, 'Laser Cannon', null, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(163, 'Barrier', null, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(164, 'Power Generator', null, 200);
INSERT INTO item(id, name, price, sell_price) VALUES(165, 'Dark Matter', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(166, 'HP Up', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(167, 'Str Up', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(168, 'Vit Up', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(169, 'Mag Up', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(170, 'Spr Up', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(171, 'Spd Up', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(172, 'Luck Up', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(173, 'The Girl Next Door', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(174, 'Weapons Mon 1st', 50000, 25000);
INSERT INTO item(id, name, price, sell_price) VALUES(175, 'Weapons Mon Mar', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(176, 'Weapons Mon Apr', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(177, 'Weapons Mon May', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(178, 'Weapons Mon Jun', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(179, 'Weapons Mon Jul', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(180, 'Weapons Mon Aug', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(181, 'Combat King 001', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(182, 'Combat King 002', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(183, 'Combat King 003', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(184, 'Combat King 004', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(185, 'Combat King 005', 30000, 15000);
INSERT INTO item(id, name, price, sell_price) VALUES(186, 'Pet Pals Vol. 1', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(187, 'Pet Pals Vol. 2', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(188, 'Pet Pals Vol. 3', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(189, 'Pet Pals Vol. 4', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(190, 'Pet Pals Vol. 5', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(191, 'Pet Pals Vol. 6', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(192, 'Occult Fan I', 35000, 17500);
INSERT INTO item(id, name, price, sell_price) VALUES(193, 'Occult Fan II', 35000, 17500);
INSERT INTO item(id, name, price, sell_price) VALUES(194, 'Occult Fan III', null, 17500);
INSERT INTO item(id, name, price, sell_price) VALUES(195, 'Occult Fan IV', null, 20000);
INSERT INTO item(id, name, price, sell_price) VALUES(196, 'Sorceress'' Letter', null, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(197, 'Solomon Ring', null, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(198, 'Magical Lamp', null, 125);

-- weapon

CREATE TABLE weapon(
    id integer PRIMARY KEY,
    name varchar NOT NULL,
    price integer,
    str integer NOT NULL,
    hit integer NOT NULL
);

INSERT INTO weapon(id, name, price, str, hit) VALUES(1, 'Revolver', 100, 11, 255);
INSERT INTO weapon(id, name, price, str, hit) VALUES(2, 'Shear Trigger', 200, 14, 255);
INSERT INTO weapon(id, name, price, str, hit) VALUES(3, 'Cutting Trigger', 400, 18, 255);
INSERT INTO weapon(id, name, price, str, hit) VALUES(4, 'Flame Saber', 600, 20, 255);
INSERT INTO weapon(id, name, price, str, hit) VALUES(5, 'Twin Lance', 800, 22, 255);
INSERT INTO weapon(id, name, price, str, hit) VALUES(6, 'Punishment', 1000, 24, 255);
INSERT INTO weapon(id, name, price, str, hit) VALUES(7, 'Lion Heart', 2000, 30, 255);
INSERT INTO weapon(id, name, price, str, hit) VALUES(8, 'Pinwheel', 100, 11, 0);
INSERT INTO weapon(id, name, price, str, hit) VALUES(9, 'Valkyrie', 200, 14, 2);
INSERT INTO weapon(id, name, price, str, hit) VALUES(10, 'Rising Sun', 400, 18, 4);
INSERT INTO weapon(id, name, price, str, hit) VALUES(11, 'Cardinal', 800, 24, 5);
INSERT INTO weapon(id, name, price, str, hit) VALUES(12, 'Shooting Star', 1000, 28, 8);
INSERT INTO weapon(id, name, price, str, hit) VALUES(13, 'Chain Whip', 100, 12, 0);
INSERT INTO weapon(id, name, price, str, hit) VALUES(14, 'Slaying Tail', 200, 15, 1);
INSERT INTO weapon(id, name, price, str, hit) VALUES(15, 'Red Scorpion', 400, 20, 2);
INSERT INTO weapon(id, name, price, str, hit) VALUES(16, 'Save the Queen', 800, 25, 4);
INSERT INTO weapon(id, name, price, str, hit) VALUES(17, 'Metal Knuckle', 100, 12, 0);
INSERT INTO weapon(id, name, price, str, hit) VALUES(18, 'Maverick', 200, 15, 1);
INSERT INTO weapon(id, name, price, str, hit) VALUES(19, 'Gauntlet', 400, 20, 3);
INSERT INTO weapon(id, name, price, str, hit) VALUES(20, 'Ehrgeiz', 800, 25, 5);
INSERT INTO weapon(id, name, price, str, hit) VALUES(21, 'Flail', 100, 12, 0);
INSERT INTO weapon(id, name, price, str, hit) VALUES(22, 'Morning Star', 200, 15, 1);
INSERT INTO weapon(id, name, price, str, hit) VALUES(23, 'Crescent Wish', 400, 20, 2);
INSERT INTO weapon(id, name, price, str, hit) VALUES(24, 'Strange Vision', 800, 25, 255);
INSERT INTO weapon(id, name, price, str, hit) VALUES(25, 'Valiant', 100, 12, 0);
INSERT INTO weapon(id, name, price, str, hit) VALUES(26, 'Ulysses', 200, 15, 3);
INSERT INTO weapon(id, name, price, str, hit) VALUES(27, 'Bismarck', 400, 20, 5);
INSERT INTO weapon(id, name, price, str, hit) VALUES(28, 'Exeter', 800, 25, 10);
INSERT INTO weapon(id, name, price, str, hit) VALUES(29, 'Machine Gun', null, 14, 0);
INSERT INTO weapon(id, name, price, str, hit) VALUES(30, 'Katal', null, 13, 0);
INSERT INTO weapon(id, name, price, str, hit) VALUES(31, 'Harpoon', null, 16, 0);
INSERT INTO weapon(id, name, price, str, hit) VALUES(32, 'Hyperion', null, 12, 0);

CREATE TABLE weapon_remodel(
    id integer PRIMARY KEY,
    weapon_id integer NOT NULL,
    item_id integer NOT NULL,
    quantity integer NOT NULL,
    FOREIGN KEY (weapon_id) REFERENCES weapon(id),
    FOREIGN KEY (item_id) REFERENCES item(id)
);

-- Revolver
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(1, 1, 109, 6);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(2, 1, 118, 2);

-- Shear Trigger
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(3, 2, 74, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(4, 2, 118, 4);

-- Cutting Trigger
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(5, 3, 120, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(6, 3, 118, 8);

-- Flame Saber
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(7, 4, 123, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(8, 4, 88, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(9, 4, 118, 4);

-- Twin Lance
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(10, 5, 136, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(11, 5, 128, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(12, 5, 118, 12);

-- Punishment
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(13, 6, 144, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(14, 6, 75, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(15, 6, 88, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(16, 6, 118, 8);

-- Lion Heart
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(17, 7, 90, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(18, 7, 126, 4);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(19, 7, 43, 12);

-- Pinwheel
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(20, 8, 109, 3);

-- Valkyrie
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(21, 9, 132, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(22, 9, 110, 1);

-- Rising Sun
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(23, 10, 119, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(24, 10, 118, 8);

-- Cardinal
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(25, 11, 114, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(26, 11, 120, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(27, 11, 117, 1);

-- Shooting Star
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(28, 12, 137, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(29, 12, 82, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(30, 12, 92, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(31, 12, 76, 2);

-- Chain Whip
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(32, 13, 109, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(33, 13, 151, 1);

-- Slaying Tail
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(34, 14, 110, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(35, 14, 117, 1);

-- Red Scorpion
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(36, 15, 112, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(37, 15, 138, 2);

-- Save the Queen
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(38, 16, 160, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(39, 16, 117, 4);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(40, 16, 76, 4);

-- Metal Knuckle
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(41, 17, 139, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(42, 17, 109, 4);

-- Maverick
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(43, 18, 140, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(44, 18, 151, 1);

-- Gauntlet
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(45, 19, 138, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(46, 19, 122, 1);

-- Ehrgeiz
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(47, 20, 90, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(48, 20, 138, 4);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(49, 20, 122, 1);

-- Flail
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(50, 21, 109, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(51, 21, 127, 1);

-- Morning Star
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(52, 22, 134, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(53, 22, 117, 2);

-- Crescent Wish
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(54, 23, 159, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(55, 23, 125, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(56, 23, 117, 4);

-- Strange Vision
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(57, 24, 90, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(58, 24, 75, 3);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(59, 24, 153, 2);

-- Valiant
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(60, 25, 74, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(61, 25, 118, 4);

-- Ulysses
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(62, 26, 74, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(63, 26, 127, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(64, 26, 118, 2);

-- Bismarck
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(65, 27, 74, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(66, 27, 131, 4);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(67, 27, 118, 8);

-- Exeter
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(68, 28, 136, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(69, 28, 135, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(70, 28, 75, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(71, 28, 118, 18);
