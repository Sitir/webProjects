-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Czas generowania: 09 Maj 2019, 21:49
-- Wersja serwera: 5.7.24
-- Wersja PHP: 7.2.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `app`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Products`
--

CREATE TABLE `Products` (
  `product_id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` float NOT NULL,
  `qunatity` int(11) NOT NULL,
  `code` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `Products`
--

INSERT INTO `Products` (`product_id`, `name`, `price`, `qunatity`, `code`, `user_id`) VALUES
(1, 'product1', 23.42, 4, 'D3FS2092C2DZYQBV4', 1),
(2, 'product2', 11.99, 15, 'YSBSY479DSA2BH5DAS0SD9', 1),
(3, 'tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem', 21.85, 9, '1924A5FB-717E-4B30-DF97-D34800B651E1', 1),
(4, 'consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem,', 57.48, 5, '73F3E228-18FF-C575-D9F6-12965FBA2119', 1),
(5, 'vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu.', 57.99, 1, '80745881-175B-63AA-DF1A-FBA7F19FBB48', 1),
(6, 'diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat.', 75.06, 15, 'DBBF3861-1ECC-33DA-EBE5-A895C03824C6', 1),
(7, 'Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum', 15.26, 10, 'B8EE1EED-6C2E-CA5D-131A-1C98B99D6F97', 1),
(8, 'rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem', 76.52, 9, '8D33DDC3-2086-D78F-0636-BB801AF8DFB8', 1),
(9, 'nunc sed pede. Cum sociis natoque penatibus et magnis dis', 81.19, 3, '2DFA7CA9-F5B5-C700-61C4-1D61F91081FD', 1),
(10, 'auctor, velit eget laoreet posuere, enim nisl elementum purus, accumsan', 218.61, 11, 'D8C9474D-734A-3862-3A06-762C470E4667', 1),
(11, 'Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus', 274.46, 13, '908ECE0D-4D04-4860-CD3C-B62A30F5716F', 1),
(12, 'id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor,', 166.63, 8, '9D8B9FD5-18AF-7998-8740-C74A482A774C', 1),
(13, 'vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque', 42.34, 14, 'E253ADB6-00A0-28C7-2E33-4F7ECE122EF5', 1),
(14, 'ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna.', 227.5, 6, '5D28A925-612C-E374-2974-F6444F2BE360', 1),
(15, 'adipiscing elit. Aliquam auctor, velit eget laoreet posuere, enim nisl', 17.42, 11, 'C990F073-5354-7785-940F-0617D39352C8', 1),
(16, 'Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae', 205.42, 4, '25F07F0B-7D2A-C805-E842-D0829A318F70', 1),
(17, 'non enim. Mauris quis turpis vitae purus gravida sagittis. Duis', 291.64, 6, '1D554387-B623-83DE-7F55-0A56714C9D56', 1),
(18, 'imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit,', 75.36, 8, 'B7F73D2E-AF75-1AF9-EE42-ADDA1CB41C92', 1),
(19, 'amet ante. Vivamus non lorem vitae odio sagittis semper. Nam', 252.88, 1, '92B837C3-A9B0-C846-8623-B84D139DFE32', 1),
(20, 'risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt,', 153.64, 12, 'C7E3ED26-697A-39ED-35E1-C8376EC0807B', 1),
(21, 'congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum', 275.14, 9, '27090E97-9969-7975-6112-79CE31D6227E', 1),
(22, 'aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend', 151.15, 7, 'FE4E9ED0-527F-4F29-769D-106FC79923EA', 1),
(23, 'consequat, lectus sit amet luctus vulputate, nisi sem semper erat,', 269.01, 14, 'EA8FD8BA-87D8-3038-6740-F8F5D7B7C499', 1),
(24, 'Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean', 21.42, 2, 'E0F25349-0CBD-19A9-C4C1-21CA03F5180E', 1),
(25, 'volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean', 132.11, 5, 'D39D4C1F-D4B0-4DF5-0F46-2E93498FE1C2', 1),
(26, 'Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate,', 264.1, 8, '222BE3C2-B5DB-3B9B-C777-F2EA08A35126', 1),
(27, 'eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris', 119.54, 3, '39904F08-4815-C996-BCD6-8DB44DC6DF78', 1),
(28, 'Proin vel arcu eu odio tristique pharetra. Quisque ac libero', 72.44, 5, '6A76FF9D-643E-1A90-2BC1-A05A6D056E1C', 1),
(29, 'ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate,', 91.81, 9, '6AE40804-5AF3-F8BC-2363-194034B1DEF4', 1),
(30, 'at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum', 5.42, 10, '9DAC9073-4D5B-A70A-02A1-E90A777D93F8', 1),
(31, 'Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper', 103.97, 13, 'F4DE0FFD-6C40-8263-907F-B2CEBAB69D50', 1),
(32, 'lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet', 283.25, 2, 'B8EF2EC7-FB8A-EDC2-3043-5D40B5F98450', 1),
(33, 'Aliquam auctor, velit eget laoreet posuere, enim nisl elementum purus,', 132.24, 1, '24D0DB45-14E5-E0A2-52F2-2BAB5EB46A25', 1),
(34, 'augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna', 251.13, 5, 'CF855F71-39F5-5E0F-35EF-56728CA3042F', 1),
(35, 'malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas,', 54.02, 7, 'EACA4B61-000C-7219-5C5A-4D39C33FBC84', 1),
(36, 'luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi', 43.29, 5, 'E1F1D2A2-CE4B-0DA8-9A53-180AB1EA2405', 1),
(37, 'Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus', 44.47, 8, 'D517E566-BFD0-0145-F2D5-FD4068AF5C5F', 1),
(38, 'viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis,', 76.84, 5, 'AB05B02A-A6A4-00F2-A4F2-1971043B55BD', 1),
(39, 'Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet,', 216.15, 14, 'AA8BA698-AAC1-AFC2-C91F-0ED820964A42', 1),
(40, 'velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque', 53.21, 7, '46BCBC89-51BE-BCA0-E85B-7C7D14819849', 1),
(41, 'porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris', 175.64, 3, 'AB086E43-AEF3-3291-338E-F018CA2CC082', 1),
(42, 'gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie', 27, 15, 'A20A8707-BDCE-ECF2-5A79-763FFA7C1ED6', 1),
(43, 'sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo', 117.02, 5, '997D97B1-67D8-EFB6-98BD-DBD757BB2A5F', 1),
(44, 'vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim.', 159.41, 5, '7DB3EAAE-02F6-2797-4E1F-13B4AF4958DC', 1),
(45, 'Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies', 38.38, 8, '17639F98-7D71-C7D5-8D32-31750531B7AC', 1),
(46, 'nibh enim, gravida sit amet, dapibus id, blandit at, nisi.', 52.81, 6, '1E4433F9-F7C9-A0D4-8E5C-5A1BF3424EF4', 1),
(47, 'In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas.', 159.64, 2, '538361C7-9611-CAF5-DBB4-9E92D4B68ADA', 1),
(48, 'Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh', 179.6, 10, 'FB5A0992-E1F9-9CF5-6552-9432DA08BEBF', 1),
(49, 'at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada', 41.65, 10, '88627AFF-F758-CE03-FCD9-276D549C8296', 1),
(50, 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur', 268.7, 5, '1F764475-6764-2669-A31E-E33DE59EAFF8', 1),
(51, 'Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla', 186.4, 1, 'E8D27CEC-1282-7E8F-D487-809497116013', 1),
(52, 'non justo. Proin non massa non ante bibendum ullamcorper. Duis', 78.61, 9, '84496763-6B6D-5FD8-9C12-032FD38DF3FF', 1),
(53, 'tellus justo sit amet nulla. Donec non justo. Proin non', 216.43, 9, '2D9A66B0-52A6-4FC5-2ABC-2FF0426111C2', 1),
(54, 'faucibus orci luctus et ultrices posuere cubilia Curae; Donec tincidunt.', 3.53, 10, '084C5633-E9C8-E0B1-B7D3-611CCAC97865', 1),
(55, 'netus et malesuada fames ac turpis egestas. Fusce aliquet magna', 56.28, 10, '750858ED-3A53-5F66-2C52-C1A8AC649B8A', 1),
(56, 'Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo', 169.84, 4, 'A22C77BD-8436-6A48-20F3-43CB18A3E515', 1),
(57, 'Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra', 211.6, 1, '90B20659-7FFE-9FCF-C3D2-DC5E2BCF89DC', 1),
(58, 'ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor', 48.17, 8, '0BBAA01C-5350-19FB-0648-89CE8B2B558E', 1),
(59, 'urna, nec luctus felis purus ac tellus. Suspendisse sed dolor.', 269.84, 8, '1C12CDF4-1D8F-DA97-7576-86D2ABBB4FBE', 1),
(60, 'Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae,', 203.2, 9, 'FB7ABBCF-A15E-C815-59D4-006F1B2647BB', 1),
(61, 'ac turpis egestas. Fusce aliquet magna a neque. Nullam ut', 280.73, 14, '6CB3AEC2-A10C-176F-98C5-D0EBD2D1CFCA', 1),
(62, 'In ornare sagittis felis. Donec tempor, est ac mattis semper,', 244.75, 9, '70816A1F-4E3B-AF16-27D3-DEB664F01344', 1),
(63, 'in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris', 168.35, 6, 'A00D68F4-FF6E-6973-C45D-9E1073E72442', 1),
(64, 'pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus', 143.99, 15, '027553CB-2F3B-E6CE-2BDE-30FA4D43256E', 1),
(65, 'Fusce aliquet magna a neque. Nullam ut nisi a odio', 72.94, 13, '5904B871-F5C1-45C3-3570-D1122CBE848E', 1),
(66, 'amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat', 231.13, 7, '192C3C27-6DBC-D215-582C-FFAC7B18D56A', 1),
(67, 'quam quis diam. Pellentesque habitant morbi tristique senectus et netus', 267.43, 1, '4BA47FFA-5ED9-09CA-1AEE-5B77415ED0B4', 1),
(68, 'convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula', 115.61, 3, '7A620C59-0B20-9229-B575-9CD6AE3CB3B0', 1),
(69, 'lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor', 259.61, 1, '3CC54E8F-ED80-DD5D-D661-17E65E365EC2', 1),
(70, 'cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut,', 23.93, 14, 'DBCFC6F9-5288-940F-62D2-78F0633FE814', 1),
(71, 'In nec orci. Donec nibh. Quisque nonummy ipsum non arcu.', 209.31, 11, '0EEA01A8-1536-3D86-978D-B00F6AA56578', 1),
(72, 'vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac', 160.37, 4, '897E3BC1-D50D-32DF-043B-53676599A29B', 1),
(73, 'et, eros. Proin ultrices. Duis volutpat nunc sit amet metus.', 228.3, 4, 'CC044BA4-9BED-08D8-A84F-EED686E8AA88', 1),
(74, 'in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit', 182.06, 13, 'E13F61FD-C096-357C-37D1-500A66995280', 1),
(75, 'tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec', 31.13, 10, '64A84101-10ED-2D9D-35F1-FC69527EFDF3', 1),
(76, 'aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam', 164.58, 11, '3CA38729-76DF-3B5F-8DFC-FD1544E8D68A', 1),
(77, 'Class aptent taciti sociosqu ad litora torquent per conubia nostra,', 279.39, 13, '4876C16C-BD30-4122-0948-580AC14A986E', 1),
(78, 'orci, consectetuer euismod est arcu ac orci. Ut semper pretium', 58.26, 9, 'EDD36193-AD71-B90D-69CB-8414261BC3CD', 1),
(79, 'Ut semper pretium neque. Morbi quis urna. Nunc quis arcu', 276.58, 11, 'C4AF273A-4610-FCD3-63D9-C1FC3F7E7AFB', 1),
(80, 'pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero', 84.28, 13, '046EF1BE-B491-CF5C-E33A-1ABA78E94A9B', 1),
(81, 'velit eget laoreet posuere, enim nisl elementum purus, accumsan interdum', 241.44, 2, '4C3A73E2-362A-FC9F-31EB-8677479DE7AE', 1),
(82, 'Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo', 90.86, 12, '953AF626-7874-0266-ACAF-0741688850C0', 1),
(83, 'ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et', 59.96, 11, '70F4988B-8DC6-5479-C98C-AF448EEA5BA7', 1),
(84, 'sodales purus, in molestie tortor nibh sit amet orci. Ut', 29.26, 6, '9A6D7CA8-D098-059B-889A-87C6DF54F597', 1),
(85, 'quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod', 298.9, 8, 'CEECF090-0ED8-70DC-8EF2-A1CBC16A6B42', 1),
(86, 'consequat enim diam vel arcu. Curabitur ut odio vel est', 218.69, 2, 'F7372176-322E-5DCD-EC2A-D093513F2A18', 1),
(87, 'consectetuer euismod est arcu ac orci. Ut semper pretium neque.', 78.31, 8, '60E6F9A7-5CD7-3364-F70D-8005B284BC32', 1),
(88, 'lectus convallis est, vitae sodales nisi magna sed dui. Fusce', 258.28, 4, '8E0A4904-E375-6BBA-B676-F5ADFA5ED364', 1),
(89, 'sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit', 96.86, 14, '273F2EE5-E5C4-419B-04FB-25FDDD628F31', 1),
(90, 'Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat', 221.91, 13, '365A74B6-32F4-F54C-7EE0-73AB4F77A463', 1),
(91, 'aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae', 167.64, 12, '181E013C-47F9-12DD-45D1-7BD49E240163', 1),
(92, 'parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique', 264.04, 3, '3594B918-992A-63F7-6CD4-370B66C7A1C3', 1),
(93, 'Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla', 237.54, 6, 'E88E1189-7B73-1B94-9064-903DE6D2EBB9', 1),
(94, 'at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam', 253.72, 7, 'F9AA15FE-91BC-FD71-9035-6F968EAF2F9E', 1),
(95, 'nulla at sem molestie sodales. Mauris blandit enim consequat purus.', 107.9, 7, '9CA27F37-72F9-1678-F278-22E697E4242C', 1),
(96, 'nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in', 167.26, 2, '7B4C023A-5C1D-2597-E985-AA4DA5525162', 1),
(97, 'a, aliquet vel, vulputate eu, odio. Phasellus at augue id', 177.78, 8, 'A082072D-1AE6-363B-661F-612B40AAFFB8', 1),
(98, 'eget laoreet posuere, enim nisl elementum purus, accumsan interdum libero', 201.7, 13, '2F67DB33-A532-2574-7533-CCF939C93272', 1),
(99, 'eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed', 68.43, 8, '2CE1E9D4-5A90-610A-8C5E-1933DD301EBC', 1),
(100, 'faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor', 2.42, 15, 'ECF5B4F9-B0A3-5579-C6BA-5A85EB90855C', 1),
(101, 'Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc', 221.68, 14, '79F5D590-22C9-A713-A1DB-9BA612970EB6', 1),
(102, 'Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat.', 145.44, 15, 'DFABF732-5B56-3DD6-1F82-5EA2B1C9EC12', 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `Users`
--

CREATE TABLE `Users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `role` text NOT NULL,
  `created` datetime NOT NULL,
  `ip` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `Users`
--

INSERT INTO `Users` (`user_id`, `name`, `surname`, `role`, `created`, `ip`) VALUES
(1, 'Mike', 'Johnson', 'superuser', '2019-05-14 12:15:39', '');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeksy dla tabeli `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `Products`
--
ALTER TABLE `Products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT dla tabeli `Users`
--
ALTER TABLE `Users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `Products`
--
ALTER TABLE `Products`
  ADD CONSTRAINT `Products_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Products` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
