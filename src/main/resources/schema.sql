-- item

CREATE TABLE item(
    id integer PRIMARY KEY,
    name varchar NOT NULL,
    price integer,
    sell_price integer
);

INSERT INTO item(id, name, price, sell_price) VALUES(0, '', null, null);
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
INSERT INTO item(id, name, price, sell_price) VALUES(18, 'Hero-trial', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(19, 'Hero', null, 5000);
INSERT INTO item(id, name, price, sell_price) VALUES(20, 'Holy War-trial', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(21, 'Holy War', null, 10000);
INSERT INTO item(id, name, price, sell_price) VALUES(22, 'Shell Stone', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(23, 'Protect Stone', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(24, 'Aura Stone', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(25, 'Death Stone', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(26, 'Holy Stone', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(27, 'Flare Stone', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(28, 'Meteor Stone', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(29, 'Ultima Stone', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(30, 'Gysahl Greens', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(31, 'Phoenix Pinion', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(32, 'Friendship', null, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(33, 'Tent', 1000, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(34, 'Pet House', 1000, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(35, 'Cottage', 1800, 450);
INSERT INTO item(id, name, price, sell_price) VALUES(36, 'G-Potion', 200, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(37, 'G-Hi-Potion', 600, 150);
INSERT INTO item(id, name, price, sell_price) VALUES(38, 'G-Mega-Potion', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(39, 'G-Returner', 500, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(40, 'Rename Card', null, 25);
INSERT INTO item(id, name, price, sell_price) VALUES(41, 'Amnesia Greens', 1000, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(42, 'HP-J Scroll', 10000, 2500);
INSERT INTO item(id, name, price, sell_price) VALUES(43, 'Str-J Scroll', 10000, 2500);
INSERT INTO item(id, name, price, sell_price) VALUES(44, 'Vit-J Scroll', 10000, 2500);
INSERT INTO item(id, name, price, sell_price) VALUES(45, 'Mag-J Scroll', 10000, 2500);
INSERT INTO item(id, name, price, sell_price) VALUES(46, 'Spr-J Scroll', 10000, 2500);
INSERT INTO item(id, name, price, sell_price) VALUES(47, 'Spd-J Scroll', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(48, 'Luck-J Scroll', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(49, 'Aegis Shield', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(50, 'Elem Atk', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(51, 'Elem Guard', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(52, 'Status Atk', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(53, 'Status Guard', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(54, 'Rosetta Stone', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(55, 'Magic Scroll', 5000, 1250);
INSERT INTO item(id, name, price, sell_price) VALUES(56, 'GF Scroll', 5000, 1250);
INSERT INTO item(id, name, price, sell_price) VALUES(57, 'Draw Scroll', 5000, 1250);
INSERT INTO item(id, name, price, sell_price) VALUES(58, 'Item Scroll', 5000, 1250);
INSERT INTO item(id, name, price, sell_price) VALUES(59, 'Gambler Spirit', null, 1250);
INSERT INTO item(id, name, price, sell_price) VALUES(60, 'Healing Ring', null, 2500);
INSERT INTO item(id, name, price, sell_price) VALUES(61, 'Phoenix Spirit', null, 2500);
INSERT INTO item(id, name, price, sell_price) VALUES(62, 'Med Kit', null, 2500);
INSERT INTO item(id, name, price, sell_price) VALUES(63, 'Bomb Spirit', null, 5000);
INSERT INTO item(id, name, price, sell_price) VALUES(64, 'Hungry Cookpot', null, 5000);
INSERT INTO item(id, name, price, sell_price) VALUES(65, 'Mog''s Amulet', null, 1250);
INSERT INTO item(id, name, price, sell_price) VALUES(66, 'Steel Pipe', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(67, 'Star Fragment', null, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(68, 'Energy Crystal', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(69, 'Samantha Soul', null, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(70, 'Healing Mail', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(71, 'Silver Mail', null, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(72, 'Gold Armor', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(73, 'Diamond Armor', null, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(74, 'Regen Ring', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(75, 'Giant''s Ring', 20000, 5000);
INSERT INTO item(id, name, price, sell_price) VALUES(76, 'Gaea''s Ring', null, 7500);
INSERT INTO item(id, name, price, sell_price) VALUES(77, 'Strength Love', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(78, 'Power Wrist', 20000, 5000);
INSERT INTO item(id, name, price, sell_price) VALUES(79, 'Hyper Wrist', null, 7500);
INSERT INTO item(id, name, price, sell_price) VALUES(80, 'Turtle Shell', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(81, 'Orihalcon', 20000, 5000);
INSERT INTO item(id, name, price, sell_price) VALUES(82, 'Adamantine', null, 7500);
INSERT INTO item(id, name, price, sell_price) VALUES(83, 'Rune Armlet', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(84, 'Force Armlet', 20000, 5000);
INSERT INTO item(id, name, price, sell_price) VALUES(85, 'Magic Armlet', null, 7500);
INSERT INTO item(id, name, price, sell_price) VALUES(86, 'Circlet', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(87, 'Hypno Crown', 20000, 5000);
INSERT INTO item(id, name, price, sell_price) VALUES(88, 'Royal Crown', null, 7500);
INSERT INTO item(id, name, price, sell_price) VALUES(89, 'Jet Engine', null, 5000);
INSERT INTO item(id, name, price, sell_price) VALUES(90, 'Rocket Engine', null, 7500);
INSERT INTO item(id, name, price, sell_price) VALUES(91, 'Moon Curtain', null, 10000);
INSERT INTO item(id, name, price, sell_price) VALUES(92, 'Steel Curtain', null, 10000);
INSERT INTO item(id, name, price, sell_price) VALUES(93, 'Glow Curtain', null, 10000);
INSERT INTO item(id, name, price, sell_price) VALUES(94, 'Accelerator', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(95, 'Monk''s Code', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(96, 'Knight''s Code', null, 10000);
INSERT INTO item(id, name, price, sell_price) VALUES(97, 'Doc''s Code', null, 10000);
INSERT INTO item(id, name, price, sell_price) VALUES(98, 'Hundred Needles', null, 10000);
INSERT INTO item(id, name, price, sell_price) VALUES(99, 'Three Stars', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(100, 'Ribbon', null, 25000);
INSERT INTO item(id, name, price, sell_price) VALUES(101, 'Normal Ammo', 20, 1);
INSERT INTO item(id, name, price, sell_price) VALUES(102, 'Shotgun Ammo', 40, 2);
INSERT INTO item(id, name, price, sell_price) VALUES(103, 'Dark Ammo', 300, 15);
INSERT INTO item(id, name, price, sell_price) VALUES(104, 'Fire Ammo', 500, 25);
INSERT INTO item(id, name, price, sell_price) VALUES(105, 'Demolition Ammo', 800, 40);
INSERT INTO item(id, name, price, sell_price) VALUES(106, 'Fast Ammo', 100, 5);
INSERT INTO item(id, name, price, sell_price) VALUES(107, 'AP Ammo', null, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(108, 'Pulse Ammo', null, 250);
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
INSERT INTO item(id, name, price, sell_price) VALUES(127, 'Spider Web', null, 50);
INSERT INTO item(id, name, price, sell_price) VALUES(128, 'Coral Fragment', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(129, 'Curse Spike', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(130, 'Black Hole', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(131, 'Water Crystal', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(132, 'Missile', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(133, 'Mystery Fluid', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(134, 'Running Fire', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(135, 'Inferno Fang', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(136, 'Malboro Tentacle', null, 100);
INSERT INTO item(id, name, price, sell_price) VALUES(137, 'Whisper', null, 100);
INSERT INTO item(id, name, price, sell_price) VALUES(138, 'Laser Cannon', null, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(139, 'Barrier', null, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(140, 'Power Generator', null, 200);
INSERT INTO item(id, name, price, sell_price) VALUES(141, 'Dark Matter', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(142, 'Bomb Fragment', null, 25);
INSERT INTO item(id, name, price, sell_price) VALUES(143, 'Red Fang', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(144, 'Arctic Wind', null, 25);
INSERT INTO item(id, name, price, sell_price) VALUES(145, 'North Wind', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(146, 'Dynamo Stone', null, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(147, 'Shear Feather', null, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(148, 'Venom Fang', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(149, 'Steel Orb', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(150, 'Moon Stone', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(151, 'Dino Bone', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(152, 'Windmill', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(153, 'Dragon Skin', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(154, 'Fish Fin', null, 25);
INSERT INTO item(id, name, price, sell_price) VALUES(155, 'Dragon Fin', null, 25);
INSERT INTO item(id, name, price, sell_price) VALUES(156, 'Silence Powder', null, 25);
INSERT INTO item(id, name, price, sell_price) VALUES(157, 'Poison Powder', null, 25);
INSERT INTO item(id, name, price, sell_price) VALUES(158, 'Dead Spirit', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(159, 'Chef''s Knife', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(160, 'Cactus Thorn', null, 75);
INSERT INTO item(id, name, price, sell_price) VALUES(161, 'Shaman Stone', null, 1250);
INSERT INTO item(id, name, price, sell_price) VALUES(162, 'Fuel', 3000, 750);
INSERT INTO item(id, name, price, sell_price) VALUES(163, 'The Girl Next Door', null, 12500);
INSERT INTO item(id, name, price, sell_price) VALUES(164, 'Sorceress'' Letter', null, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(165, 'Chocobo''s Tag', null, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(166, 'Pet Nametag', null, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(167, 'Solomon Ring', null, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(168, 'Magical Lamp', null, 125);
INSERT INTO item(id, name, price, sell_price) VALUES(169, 'HP Up', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(170, 'Str Up', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(171, 'Vit Up', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(172, 'Mag Up', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(173, 'Spr Up', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(174, 'Spd Up', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(175, 'Luck Up', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(176, 'LuvLuv G', null, 250);
INSERT INTO item(id, name, price, sell_price) VALUES(177, 'Weapons Mon 1st', 50000, 25000);
INSERT INTO item(id, name, price, sell_price) VALUES(178, 'Weapons Mon Mar', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(179, 'Weapons Mon Apr', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(180, 'Weapons Mon May', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(181, 'Weapons Mon Jun', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(182, 'Weapons Mon Jul', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(183, 'Weapons Mon Aug', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(184, 'Combat King 001', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(185, 'Combat King 002', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(186, 'Combat King 003', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(187, 'Combat King 004', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(188, 'Combat King 005', 30000, 15000);
INSERT INTO item(id, name, price, sell_price) VALUES(189, 'Pet Pals Vol. 1', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(190, 'Pet Pals Vol. 2', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(191, 'Pet Pals Vol. 3', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(192, 'Pet Pals Vol. 4', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(193, 'Pet Pals Vol. 5', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(194, 'Pet Pals Vol. 6', 1000, 500);
INSERT INTO item(id, name, price, sell_price) VALUES(195, 'Occult Fan I', 35000, 17500);
INSERT INTO item(id, name, price, sell_price) VALUES(196, 'Occult Fan II', 35000, 17500);
INSERT INTO item(id, name, price, sell_price) VALUES(197, 'Occult Fan III', null, 17500);
INSERT INTO item(id, name, price, sell_price) VALUES(198, 'Occult Fan IV', null, 20000);

-- weapon

CREATE TABLE weapon(
    id integer PRIMARY KEY,
    name varchar NOT NULL,
    price integer,
    str integer NOT NULL,
    hit integer NOT NULL
);

INSERT INTO weapon(id, name, price, str, hit) VALUES(0, 'Revolver', 100, 11, 255);
INSERT INTO weapon(id, name, price, str, hit) VALUES(1, 'Shear Trigger', 200, 14, 255);
INSERT INTO weapon(id, name, price, str, hit) VALUES(2, 'Cutting Trigger', 400, 18, 255);
INSERT INTO weapon(id, name, price, str, hit) VALUES(3, 'Flame Saber', 600, 20, 255);
INSERT INTO weapon(id, name, price, str, hit) VALUES(4, 'Twin Lance', 800, 22, 255);
INSERT INTO weapon(id, name, price, str, hit) VALUES(5, 'Punishment', 1000, 24, 255);
INSERT INTO weapon(id, name, price, str, hit) VALUES(6, 'Lion Heart', 2000, 30, 255);
INSERT INTO weapon(id, name, price, str, hit) VALUES(7, 'Metal Knuckle', 100, 12, 98);
INSERT INTO weapon(id, name, price, str, hit) VALUES(8, 'Maverick', 200, 15, 99);
INSERT INTO weapon(id, name, price, str, hit) VALUES(9, 'Gauntlet', 400, 20, 101);
INSERT INTO weapon(id, name, price, str, hit) VALUES(10, 'Ehrgeiz', 800, 25, 103);
INSERT INTO weapon(id, name, price, str, hit) VALUES(11, 'Valiant', 100, 12, 105);
INSERT INTO weapon(id, name, price, str, hit) VALUES(12, 'Ulysses', 200, 15, 108);
INSERT INTO weapon(id, name, price, str, hit) VALUES(13, 'Bismarck', 400, 20, 110);
INSERT INTO weapon(id, name, price, str, hit) VALUES(14, 'Exeter', 800, 25, 115);
INSERT INTO weapon(id, name, price, str, hit) VALUES(15, 'Chain Whip', 100, 12, 103);
INSERT INTO weapon(id, name, price, str, hit) VALUES(16, 'Slaying Tail', 200, 15, 104);
INSERT INTO weapon(id, name, price, str, hit) VALUES(17, 'Red Scorpion', 400, 20, 105);
INSERT INTO weapon(id, name, price, str, hit) VALUES(18, 'Save the Queen', 800, 25, 107);
INSERT INTO weapon(id, name, price, str, hit) VALUES(19, 'Pinwheel', 100, 11, 99);
INSERT INTO weapon(id, name, price, str, hit) VALUES(20, 'Valkyrie', 200, 14, 101);
INSERT INTO weapon(id, name, price, str, hit) VALUES(21, 'Rising Sun', 400, 18, 103);
INSERT INTO weapon(id, name, price, str, hit) VALUES(22, 'Cardinal', 800, 24, 104);
INSERT INTO weapon(id, name, price, str, hit) VALUES(23, 'Shooting Star', 1000, 28, 107);
INSERT INTO weapon(id, name, price, str, hit) VALUES(24, 'Flail', 100, 12, 98);
INSERT INTO weapon(id, name, price, str, hit) VALUES(25, 'Morning Star', 200, 15, 99);
INSERT INTO weapon(id, name, price, str, hit) VALUES(26, 'Crescent Wish', 400, 20, 100);
INSERT INTO weapon(id, name, price, str, hit) VALUES(27, 'Strange Vision', 800, 25, 255);
INSERT INTO weapon(id, name, price, str, hit) VALUES(28, 'Hyperion', null, 12, 255);
INSERT INTO weapon(id, name, price, str, hit) VALUES(29, 'None', null, 20, 97);
INSERT INTO weapon(id, name, price, str, hit) VALUES(30, 'Machine Gun', null, 14, 103);
INSERT INTO weapon(id, name, price, str, hit) VALUES(31, 'Katal', null, 13, 102);
INSERT INTO weapon(id, name, price, str, hit) VALUES(32, 'Harpoon', null, 16, 98);

CREATE TABLE weapon_remodel(
    id integer PRIMARY KEY,
    weapon_id integer NOT NULL,
    item_id integer NOT NULL,
    quantity integer NOT NULL,
    FOREIGN KEY (weapon_id) REFERENCES weapon(id),
    FOREIGN KEY (item_id) REFERENCES item(id)
);

-- Revolver
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(1, 0, 109, 6);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(2, 0, 118, 2);

-- Shear Trigger
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(3, 1, 66, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(4, 1, 118, 4);

-- Cutting Trigger
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(5, 2, 120, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(6, 2, 118, 8);

-- Flame Saber
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(7, 3, 123, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(8, 3, 80, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(9, 3, 118, 4);

-- Twin Lance
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(10, 4, 151, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(11, 4, 143, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(12, 4, 118, 12);

-- Punishment
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(13, 5, 159, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(14, 5, 67, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(15, 5, 80, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(16, 5, 118, 8);

-- Lion Heart
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(17, 6, 82, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(18, 6, 126, 4);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(19, 6, 108, 12);


-- Metal Knuckle
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(41, 7, 154, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(42, 7, 109, 4);

-- Maverick
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(43, 8, 155, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(44, 8, 127, 1);

-- Gauntlet
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(45, 9, 153, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(46, 9, 122, 1);

-- Ehrgeiz
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(47, 10, 82, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(48, 10, 153, 4);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(49, 10, 122, 1);


-- Valiant
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(60, 11, 66, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(61, 11, 118, 4);

-- Ulysses
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(62, 12, 66, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(63, 12, 127, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(64, 12, 118, 2);

-- Bismarck
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(65, 13, 66, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(66, 13, 146, 4);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(67, 13, 118, 8);

-- Exeter
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(68, 14, 151, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(69, 14, 150, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(70, 14, 67, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(71, 14, 118, 18);


-- Chain Whip
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(32, 15, 109, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(33, 15, 127, 1);

-- Slaying Tail
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(34, 16, 110, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(35, 16, 117, 1);

-- Red Scorpion
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(36, 17, 112, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(37, 17, 153, 2);

-- Save the Queen
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(38, 18, 136, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(39, 18, 117, 4);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(40, 18, 68, 4);


-- Pinwheel
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(20, 19, 109, 3);

-- Valkyrie
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(21, 20, 147, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(22, 20, 110, 1);

-- Rising Sun
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(23, 21, 119, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(24, 21, 118, 8);

-- Cardinal
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(25, 22, 114, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(26, 22, 120, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(27, 22, 117, 1);

-- Shooting Star
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(28, 23, 152, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(29, 23, 82, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(30, 23, 84, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(31, 23, 68, 2);


-- Flail
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(50, 24, 109, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(51, 24, 127, 1);

-- Morning Star
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(52, 25, 149, 2);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(53, 25, 117, 2);

-- Crescent Wish
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(54, 26, 135, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(55, 26, 125, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(56, 26, 117, 4);

-- Strange Vision
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(57, 27, 82, 1);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(58, 27, 67, 3);
INSERT INTO weapon_remodel(id, weapon_id, item_id, quantity) VALUES(59, 27, 153, 2);
