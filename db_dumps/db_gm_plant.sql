-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_gm
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `plant`
--

DROP TABLE IF EXISTS `plant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `plant` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `exaggeration_cycle` bigint(20) DEFAULT NULL,
  `fertilization_cycle` bigint(20) DEFAULT NULL,
  `garden_id` bigint(20) DEFAULT NULL,
  `hydration_cycle` bigint(20) DEFAULT NULL,
  `is_exaggerated` bit(1) NOT NULL,
  `is_fertilized` bit(1) NOT NULL,
  `is_hydrated` bit(1) NOT NULL,
  `is_medicine` bit(1) NOT NULL,
  `last_exaggeration` datetime DEFAULT NULL,
  `last_fertilization` datetime DEFAULT NULL,
  `last_hydration` datetime DEFAULT NULL,
  `last_medicine` datetime DEFAULT NULL,
  `medicine_cycle` bigint(20) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKcw2n4eicj34f84v0j18galwds` (`garden_id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plant`
--

LOCK TABLES `plant` WRITE;
/*!40000 ALTER TABLE `plant` DISABLE KEYS */;
INSERT INTO `plant` VALUES (1,'2018-11-14 23:15:20','2018-11-28 22:56:40','na balkonie',21600000,21600000,1,21600000,_binary '\0',_binary '\0',_binary '\0',_binary '\0','2018-11-25 22:20:41','2018-11-25 22:20:41','2018-11-25 22:20:41','2018-11-25 22:20:41',21600000,'Kaktus','tst'),(11,'2018-11-29 12:34:41','2018-12-01 15:27:52',NULL,0,864000000,2,86400000,_binary '\0',_binary '',_binary '\0',_binary '\0','2018-11-29 12:34:41','2018-11-29 12:34:41','2018-11-29 12:34:41','2018-11-29 12:34:41',0,'Marchewka',NULL),(7,'2018-11-18 21:06:37','2018-12-03 13:51:05',NULL,0,259200000,3,86400000,_binary '',_binary '\0',_binary '',_binary '\0','2018-12-03 13:51:05','2018-11-22 22:12:44','2018-12-03 13:51:05','2018-11-18 21:06:37',43200000,'Grusza',NULL),(6,'2018-11-18 21:00:01','2018-11-29 19:01:24','2-letnia',0,0,3,21600000,_binary '\0',_binary '\0',_binary '\0',_binary '\0','2018-11-18 21:00:01','2018-11-18 21:00:01','2018-11-29 12:35:19','2018-11-18 21:00:01',0,'Jabłonka',NULL),(8,'2018-11-26 21:33:32','2018-11-27 09:45:40','Polna',43200000,21600000,4,21600000,_binary '\0',_binary '\0',_binary '\0',_binary '\0','2018-11-26 21:33:32','2018-11-26 21:33:32','2018-11-26 21:38:35','2018-11-26 21:33:32',0,'Stokrotka',NULL),(9,'2018-11-27 23:24:47','2018-12-03 14:05:27','2 hektary',0,15724800000,5,0,_binary '\0',_binary '',_binary '\0',_binary '\0','2018-12-03 14:05:27','2018-11-27 23:24:47','2018-11-27 23:24:47','2018-11-27 23:24:47',0,'Ziemniaki',NULL),(10,'2018-11-29 12:33:15','2018-12-01 15:28:00',NULL,86400000,0,5,0,_binary '\0',_binary '\0',_binary '\0',_binary '','2018-11-29 12:33:15','2018-11-29 12:33:25','2018-11-29 12:33:25','2018-11-29 12:33:15',1814400000,'Kukurydza',NULL),(12,'2018-11-29 12:47:18','2018-11-29 12:47:18',NULL,0,1209600000,7,86400000,_binary '\0',_binary '',_binary '',_binary '\0','2018-11-29 12:47:18','2018-11-29 12:47:18','2018-11-29 12:47:18','2018-11-29 12:47:18',0,'Tulipan',NULL),(13,'2018-11-29 19:03:28','2018-12-02 20:17:55',NULL,60000,60000,12,60000,_binary '\0',_binary '\0',_binary '\0',_binary '\0','2018-12-02 20:11:33','2018-12-02 20:11:24','2018-12-02 20:11:15','2018-12-02 20:11:36',60000,'Cebula',NULL);
/*!40000 ALTER TABLE `plant` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-03 14:09:30
