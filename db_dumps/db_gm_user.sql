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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `confirmation_token` varchar(255) DEFAULT NULL,
  `active` bit(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKsb8bbouer5wak8vyiiy4pf2bx` (`username`),
  UNIQUE KEY `UKob8kqyqqgmefl0aco34akdtpe` (`email`),
  UNIQUE KEY `UK_t8tbwelrnviudxdaggwr1kd9b` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'nowak@qw.pl','adam','$2a$10$6WuwAlfjEHC7ZLOCubMEcOJLDe1m6Yg6sXLtlQFZVzubIzfT9yXPa','USER','adamn',NULL,_binary '\0'),(2,'lukasz@broll.pl','Łukasz Broll','$2a$10$6i9h4XK.SU8MvFOizX/W9urj9MPose5ZHDUrQ35jTbTTtKw.GO6qC','USER','pluser',NULL,_binary ''),(3,'adam@kowalski.pl','Adam Kowalski','$2a$10$DUxHN/Tfz3hzxfUJhmGbQOtaULljlfU/TMzeeCL51gDCXEKPrN8rK','USER','akowalski',NULL,_binary '\0'),(4,'adam@nowak.pl','Adam nowak','$2a$10$TDiKCNXEHj3KnznhpkpO8O7CZzO.VRv9lo63oMnOnW.RClTXkZrGq','USER','anowak','18469c64-0221-4679-a04d-5276d8ded738',_binary '\0'),(5,'kala@marnica.pl','Kałamarnica','$2a$10$Cuf6BDjhWqMdPsGjEmf11up5MOcPN7j9wHvfdDxRmiP6oPC5yv2Cq','USER','kalamarnica',NULL,_binary '\0'),(6,'karol@karol','Karol','$2a$10$XcVMdl/ujqtdJRDZ3HajZ.5OYcm9AIM.YDQmrImbeKBnizcTJ59eG','USER','karolek',NULL,_binary '\0'),(7,'Ania@kon.pl','Ania Koń','$2a$10$qaxyYh3a4avDC0VVcNoz/uGobhoQzaMgO1OXh7HmK4Xo6u4Sa/Imu','USER','aniakon',NULL,_binary '\0'),(58,'m3036106@nwytg.net','Maciek','$2a$10$B98zX/ugG1sY/Z.oowYQIuZzOuNc8IP9GESXVKbVUYwO94Ty0lyvO','USER','maciek','98e33d46-80c2-4d12-af5d-f899f5edeea1',_binary '\0'),(56,'pluser_pl@windowslive.com','Łukasz Broll','$2a$10$CsYIKFgmlD5BeDNG79EhvO2IWWd.Bizi4RsHTUvjln.OP0wtMx3x6','USER','qwerty','6fef7d5d-63ad-4ad8-bd7f-530baae2eb1f',_binary ''),(57,'fdg@ggtfd','fdgdsfgd','$2a$10$qZ.m.9FLh5a/xak/SZTkkeUm3Ors3pfsrVVLgQudAYL7XSlfFHBNW','USER','111111','9e256bdb-00e0-4cc5-98fe-6483b405d628',_binary '\0');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-03 14:09:31
