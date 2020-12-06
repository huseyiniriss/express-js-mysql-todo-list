CREATE DATABASE IF NOT EXISTS `exspresstodolist` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `exspresstodolist`;

CREATE TABLE `todolist` (
  `id` int AUTO_INCREMENT PRIMARY KEY,
  `description` varchar(1000) DEFAULT NULL,
  `completed` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
