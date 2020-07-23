-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 23 Jul 2020 pada 15.19
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dumbflix`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `codemasterId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `password`, `codemasterId`, `createdAt`, `updatedAt`) VALUES
(1, 'one', 'one@gmail.com', '$2b$10$wZTVGN/Szy9Fax4nvzjoFefreRvm9RTGb0ZAKuGsUYXQh53CXRAii', 0, '2020-06-13 13:23:07', '2020-06-13 13:23:07');

-- --------------------------------------------------------

--
-- Struktur dari tabel `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Tv Shows', '2020-06-12 07:39:42', '2020-06-12 07:39:42'),
(2, 'Movies', '2020-06-12 07:41:09', '2020-06-12 07:41:09'),
(10, 'Anime', '2020-06-12 08:38:01', '2020-06-15 13:26:03');

-- --------------------------------------------------------

--
-- Struktur dari tabel `episodes`
--

CREATE TABLE `episodes` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `thumbnailFilm` varchar(255) DEFAULT NULL,
  `linkFilm` varchar(255) DEFAULT NULL,
  `filmId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `episodes`
--

INSERT INTO `episodes` (`id`, `title`, `thumbnailFilm`, `linkFilm`, `filmId`, `createdAt`, `updatedAt`) VALUES
(1, 'Episode 1 - game of throne', '94c75fa7d19a88a91934ca349663d82d.png', 'https://www.youtube.com/watch?v=7gQyk9DmtHg&list=PLvKSUO3IzggLlOktRRBUFMIebUS9TPZfs', 3, '2020-06-12 17:42:14', '2020-06-20 03:50:22'),
(3, 'Episode 2 - game of throne', '1aa6b9b47985e415c3404e40a7e35454.png', 'https://youtu.be/s7L2PVdrb_8', 3, '2020-06-13 08:09:30', '2020-06-13 08:09:30'),
(5, 'Episode 1 - the witcher', '078f816a540e651f0919fffcb3a4a9c1.png', 'https://youtu.be/_UbpAppogVI', 4, '2020-06-14 13:35:46', '2020-06-14 13:35:46'),
(6, 'Episode 2 - the witcher dong', '0fe0907052ab209cb9113ca5f4c8694d.png', 'https://youtu.be/McBr9-w2ZKQ', 4, '2020-06-14 13:36:25', '2020-06-14 14:08:36'),
(14, 'episode 1 - Naruto the last Movie', '6f19057e3c1aeb842b0fdf47f098b61a.jpg', 'https://youtu.be/a1oWFihytJw', 38, '2020-06-22 06:24:46', '2020-06-22 06:24:46'),
(16, 'Episode 3 - game of throne', 'e2be485a027647fe93aab911c0a365db.png', 'https://youtu.be/n4TdEdaMwo4', 3, '2020-06-22 09:34:36', '2020-06-22 09:34:36');

-- --------------------------------------------------------

--
-- Struktur dari tabel `films`
--

CREATE TABLE `films` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `thumbnailFilm` varchar(255) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `films`
--

INSERT INTO `films` (`id`, `title`, `thumbnailFilm`, `year`, `categoryId`, `description`, `createdAt`, `updatedAt`) VALUES
(3, 'Game of Throne', '762a9d0f0cd39d5c1bdc24d5a10ec837.png', 2011, 1, 'nice movie about kingdom war', '2020-06-12 13:23:22', '2020-06-12 13:23:22'),
(4, 'The Witcher', '866e16e99a722b2b16ef52d7775189ca.png', 2020, 1, 'based from games, tv movies about legendary witchers that hunt down monster and demon', '2020-06-12 14:03:05', '2020-06-12 14:03:05'),
(5, 'The Castlevania ', 'e6d1197747d854e2a5d8e590f5b795a3.png', 2019, 1, 'a movie that show dracula hunts for peace and freedom ', '2020-06-12 14:04:10', '2020-06-12 14:04:10'),
(6, 'Avenger the endgames ', '9138d98491d983f39aba66e6bec9c340.png', 2019, 2, 'a group of superheroes that trying save the world after dooms event that made half of living creature disappeared', '2020-06-12 14:05:34', '2020-06-12 14:05:34'),
(7, 'The Dark Knight ', '959aa769a5d12de76beb40ae2b3f16e4.png', 2012, 2, 'a hero that back to Gotham , and save the city once again after 7 years disappeared from the world', '2020-06-12 14:06:40', '2020-06-12 15:38:45'),
(16, 'Panji Manusia Millenium', 'c01e7a31faea335801e660acc3db3f49.png', 2014, 1, 'kisah superhero Indonesia bernama Panji', '2020-06-14 12:52:50', '2020-06-14 12:52:50'),
(17, 'Panji Manusia Millenium', '87b8f9fa29ba45f2ad338c7cfb08dba1.png', 2014, 1, 'kisah superhero Indonesia bernama Panji', '2020-06-14 12:55:27', '2020-06-14 12:55:27'),
(18, 'Panji Manusia Millenium', 'd0417be2ef9eb279f0a94f814a490d35.png', 2014, 1, 'kisah superhero Indonesia bernama Panji', '2020-06-14 12:58:05', '2020-06-14 12:58:05'),
(21, 'Panji Manusia Millenium', '6480dee60b853b30e03a8f2a99fc0ff9.png', 2014, 1, 'kisah superhero Indonesia bernama Panji', '2020-06-15 06:03:23', '2020-06-15 06:03:23'),
(22, 'Panji Manusia Millenium 22', 'f770f4b20d59b689595438ea8f5df9d5.png', 2014, 1, 'kisah superhero Indonesia bernama Panji', '2020-06-15 06:06:01', '2020-06-15 16:45:00'),
(24, 'Persona 3', '2ff160e761a143b0420bcbae69aef91d.png', 2017, 1, 'animasi tentang super teenager magicians', '2020-06-21 09:39:10', '2020-06-21 09:39:10'),
(25, 'Money Heist', '69aab7cd0ad54644399329d919bc696b.png', 2019, 1, 'kisah sekumpulan pencuri profesional dengan kemampuan diatas orang biasa', '2020-06-21 09:48:44', '2020-06-21 09:48:44'),
(26, 'Suicide Squads', 'b2cb7a20471874490b242590375761a9.png', 2018, 2, 'sekumpulan superVillain yang dimanfaatkan oleh pemerintah untuk menyelamatkan dunia', '2020-06-21 11:47:28', '2020-06-21 11:47:28'),
(27, 'Joker ', 'b735e16ffb9f091a857465ae4ce40b6f.png', 2019, 2, 'kisah awal mula lahirnya superVillain jenius yang meneror gotham city sekaligus calon musuh utama dari batman', '2020-06-21 11:48:38', '2020-06-21 11:48:38'),
(28, 'Chernobyl ', '31d68234a73905f36c40554f76573f4d.png', 2016, 2, 'menceritakan sebuah tragedi meledaknya salah satu pabrik nuklir di Rusia', '2020-06-21 11:49:42', '2020-06-21 11:49:42'),
(29, 'Totoro 1997', '20af54649d580cd2ea083169069a610f.png', 1997, 2, 'anime jepang yang menceritakan sebuah petualangan anak-anak bertemu dengan banyak teman-teman yang berasal dari dunia berbeda', '2020-06-21 11:51:06', '2020-06-21 11:51:06'),
(38, 'Naruto The Last movie', '96a1e4e9eaf3844b0fb1c793ef111480.jpg', 2015, 2, '\nTwo years since the peace established in the aftermath of \nthe Fourth Ninja World War, the Sixth Hokage Kakashi Hatake \nnotices that the moon is nearing Earth and will soon collide with it. \nThe crisis is caused by Toneri Otsutsuki, a descendant of the S', '2020-06-22 06:24:46', '2020-06-22 06:24:46');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20200611113937-create-user.js'),
('20200612061524-create-category.js'),
('20200612061537-create-film.js'),
('20200612154818-create-episode.js'),
('20200613022740-create-transaction.js'),
('20200613122343-create-admin.js');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `startDate` date DEFAULT NULL,
  `dueDate` date DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `attache` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `transactions`
--

INSERT INTO `transactions` (`id`, `startDate`, `dueDate`, `userId`, `attache`, `status`, `createdAt`, `updatedAt`) VALUES
(1, '2020-06-12', '2020-09-12', 1, '029a4aeb8cae5fed5ec5b5aea66a9572.png', 'Pending', '2020-06-13 03:05:33', '2020-06-15 07:56:03'),
(4, '2020-06-12', '2020-07-12', 4, 'f0f980203deb6031346204a4d19f9e2b.png', 'Approved', '2020-06-13 03:31:38', '2020-06-13 03:31:38'),
(5, '2020-06-12', '2020-07-12', 4, 'ab676ca3fc0dca717536b0d543c66775.png', 'Approved', '2020-06-13 03:34:00', '2020-06-13 05:03:53'),
(69, '2020-06-21', '2020-06-21', 1, '9946cfb958bf5989648e890af58d537f.jpg', 'Pending', '2020-06-21 16:59:24', '2020-06-21 16:59:24'),
(71, '2020-06-21', '2020-06-21', 7, '963d8ff9901797c44e58f5029fa480d1.jpg', 'Pending', '2020-06-21 17:01:21', '2020-06-21 17:01:21'),
(72, '2020-06-22', '2020-06-22', 1, 'f3cda02f6eef478c4353975ea3bd7502.jpg', 'Pending', '2020-06-22 06:21:00', '2020-06-22 06:21:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `subscribe` tinyint(1) DEFAULT NULL,
  `role` enum('user','admin','','') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `fullName`, `email`, `password`, `gender`, `phone`, `address`, `subscribe`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'Meliodas 66', 'meliodas@gmail.com', '$2b$10$9I0ZYalXIpyD4ijTLFL0NuDOlJ7oPTLphdqwy8I/gLKiNTpT7sUL6', 'male', 2147483647, 'barbarossa street no 21', 1, 'user', '2020-06-12 06:58:06', '2020-06-15 13:29:48'),
(4, 'Merlin', 'merlin@gmail.com', '$2b$10$gGsMTjPTdHEycFFaoNdMFedr05wB0tFQdgsHyXNrewaElq7SYQnjK', 'male', 2147483647, 'hamlet street no 7', 1, 'user', '2020-06-12 07:00:17', '2020-06-12 07:00:17'),
(7, 'Naruto', 'naruto@gmail.com', '$2b$10$yrEEj95WtF4DmXxJKe6UfOPt8mtyE2SzAgAYoAFJIOlDwp91j9nnq', 'male', 2147483647, 'konoha street no 1', 0, 'user', '2020-06-14 12:00:11', '2020-06-14 12:00:11'),
(8, 'Naruto', 'naruto@gmail.com', '$2b$10$OsLZZ.Cprqy4.LXXFLHE5.wYLaRYcO9lRdHxvc.JTiAUrT1WytN.O', 'male', 2147483647, 'konoha street no 1', 0, 'user', '2020-06-14 12:17:48', '2020-06-14 12:17:48'),
(9, 'Naruto', 'naruto@gmail.com', '$2b$10$urvmv1yyfs3uyPEqWAnaJuOXbrdM894tvPVnJo.QRcl2HmJ1p5R6S', 'male', 2147483647, 'konoha street no 1', 0, 'user', '2020-06-14 12:17:50', '2020-06-14 12:17:50'),
(10, 'Naruto', 'naruto@gmail.com', '$2b$10$r4EG8vjrqFBp6U8dpYFqa.1/JRzIfewJ131uij0CfX6MbLHnviwJ6', 'male', 2147483647, 'konoha street no 1', 0, 'user', '2020-06-14 12:17:53', '2020-06-14 12:17:53'),
(14, 'Narutotest', 'narutotest@gmail.com', '$2b$10$dEshZ5qdsI/CYTTAX.E3eevbb/C/QPo7esIxPVCmRU3ogeERda/FK', 'male', 2147483647, 'konoha street no 1', 0, 'user', '2020-06-15 13:17:43', '2020-06-15 13:17:43'),
(18, 'retyui', 'rico@yahoo.co.id', '$2b$10$U0CNJ5seLUgn4jSg/gurceNe/cRca2MpKezaroHqMJiobs3rJKxsG', 'Male', 2147483647, 'jl gubeng kertajaya XI no 17 Surabaya', 0, 'user', '2020-06-18 09:57:29', '2020-06-18 09:57:29'),
(19, 'erro', 'err77@yahoo.co.id', '$2b$10$VWOlv5/kbV7ozCJ9ZzUnJ.zD5MjNQYxTC6tSvb0zo7EyDyLq08QXq', 'Male', 2147483647, 'jl gubeng kertajaya XXXI no 17 Surabaya', 0, 'user', '2020-06-20 05:10:00', '2020-06-20 05:10:00'),
(21, 'Ban', 'ban3@gmail.com', '$2b$10$UwnCVtlN6ZYVhm70XeNhWuu0UlZSunqSRvLhywT6iShD7C7ZvJjoa', 'Male', 2147483647, 'konoha street no 1', 0, 'admin', '2020-06-20 16:01:18', '2020-06-20 16:01:18'),
(22, 'Escanor', 'escanor@gmail.com', '$2b$10$wcZdfneFDc7GVsKlSV5sEuD93RhGqgSl9F5CnCmNR5EcUwGRZkLkW', 'Male', 2147483647, 'jl sulawesi no 123', 0, 'user', '2020-06-22 02:54:36', '2020-06-22 02:54:36'),
(24, 'erro23', 'erro23@gmail.com', '$2b$10$Zhb79kmWb8842WKOJt0Y7egLzdXVQrtZRQgTnzqiAL/6HMD2/mkK2', 'Female', 2147483647, 'jl sulawesi no 123', 0, 'user', '2020-06-22 06:17:43', '2020-06-22 06:17:43'),
(25, 'erro23', 'erro23@gmail.com', '$2b$10$8mbCZmj3WFA25.5Kh.IsIukzSo3fpu/fzG4OsdzyWzKBQW..mMoEq', 'Female', 2147483647, 'jl sulawesi no 123', 0, 'user', '2020-06-22 06:43:49', '2020-06-22 06:43:49'),
(26, 'erro23', 'erro23@gmail.com', '$2b$10$ttcY0h/kCRUj12e/NplFhevD1iSEDF/fbDWN8T11Q08hk18yNT1VG', 'Female', 1231231313, 'jl sulawesi no 123', 0, 'user', '2020-06-22 07:05:24', '2020-06-22 07:05:24');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `episodes`
--
ALTER TABLE `episodes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `filmId` (`filmId`);

--
-- Indeks untuk tabel `films`
--
ALTER TABLE `films`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indeks untuk tabel `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indeks untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `episodes`
--
ALTER TABLE `episodes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT untuk tabel `films`
--
ALTER TABLE `films`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT untuk tabel `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `episodes`
--
ALTER TABLE `episodes`
  ADD CONSTRAINT `episodes_ibfk_1` FOREIGN KEY (`filmId`) REFERENCES `films` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `films`
--
ALTER TABLE `films`
  ADD CONSTRAINT `films_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
