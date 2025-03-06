-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: streaming
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `album`
--

DROP TABLE IF EXISTS `album`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `album` (
  `album_id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `indate` datetime(6) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `artist_id` int DEFAULT NULL,
  PRIMARY KEY (`album_id`),
  KEY `FKmwc4fyyxb6tfi0qba26gcf8s1` (`artist_id`),
  CONSTRAINT `FKmwc4fyyxb6tfi0qba26gcf8s1` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`artist_id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `album`
--

LOCK TABLES `album` WRITE;
/*!40000 ALTER TABLE `album` DISABLE KEYS */;
INSERT INTO `album` VALUES (1,'방탄소년단의 정규 4집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al1.jpg','2020-02-21 00:00:00.000000','MAP OF THE SOUL: 7',1),(2,'아이유의 정규 5집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al2.jpg','2021-03-25 00:00:00.000000','LILAC',2),(3,'블랙핑크의 첫 번째 정규 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al3.jpg','2020-10-02 00:00:00.000000','THE ALBUM',3),(4,'엑소의 스페셜 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al4.jpg','2021-06-07 00:00:00.000000','DON’T FIGHT THE FEELING',4),(5,'트와이스의 정규 3집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al5.jpg','2021-11-12 00:00:00.000000','Formula of Love: O+T=<3',5),(6,'세븐틴의 정규 4집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al6.jpg','2022-05-27 00:00:00.000000','Face the Sun',6),(7,'NCT DREAM의 정규 2집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al7.jpg','2022-03-28 00:00:00.000000','Glitch Mode',7),(8,'레드벨벳의 미니 9집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al8.jpg','2022-03-21 00:00:00.000000','The ReVe Festival 2022 - Feel My Rhythm',8),(9,'에이핑크의 정규 2집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al9.jpg','2022-02-14 00:00:00.000000','HORN',9),(10,'마마무의 미니 12집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al10.jpg','2022-10-11 00:00:00.000000','MIC ON',10),(11,'스트레이키즈의 미니 7집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al11.jpg','2022-10-07 00:00:00.000000','MAXIDENT',11),(12,'ITZY의 미니 5집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al12.jpg','2022-07-15 00:00:00.000000','CHECKMATE',12),(13,'뉴진스의 데뷔 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al13.jpg','2022-08-01 00:00:00.000000','New Jeans',13),(14,'르세라핌의 미니 2집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al14.jpg','2022-10-17 00:00:00.000000','ANTIFRAGILE',14),(15,'제이홉의 첫 번째 솔로 믹스테이프','https://d9k8tjx0yo0q5.cloudfront.net/image/al15.jpg','2018-03-02 00:00:00.000000','HOPE WORLD',15),(16,'지코의 정규 1집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al16.jpg','2019-11-30 00:00:00.000000','THINKING',16),(17,'박재범의 정규 2집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al17.jpg','2016-10-20 00:00:00.000000','EVERYTHING YOU WANTED',17),(18,'선미의 미니 2집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al18.jpg','2018-09-04 00:00:00.000000','Warning',18),(19,'태연의 정규 3집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al19.jpg','2022-02-14 00:00:00.000000','INVU',19),(20,'이하이의 정규 3집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al20.jpg','2021-09-09 00:00:00.000000','4 ONLY',20),(21,'크러쉬의 미니 2집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al21.jpg','2020-10-20 00:00:00.000000','with HER',21),(22,'헤이즈의 미니 7집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al22.jpg','2021-06-08 00:00:00.000000','HAPPEN',22),(23,'창모의 정규 1집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al23.jpg','2019-10-25 00:00:00.000000','Boyhood',23),(24,'에픽하이의 정규 10집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al24.jpg','2022-02-14 00:00:00.000000','Epik High Is Here 下',36),(25,'비오의 정규 1집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al25.jpg','2021-12-10 00:00:00.000000','The Off-Season',24),(26,'에드시런의 정규 5집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al26.jpg','2021-10-29 00:00:00.000000','Equals',25),(27,'테일러 스위프트의 정규 10집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al27.jpg','2022-10-21 00:00:00.000000','Midnights',26),(28,'저스틴 비버의 정규 6집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al28.jpg','2021-03-19 00:00:00.000000','Justice',27),(29,'드레이크의 정규 6집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al29.jpg','2021-09-03 00:00:00.000000','Certified Lover Boy',28),(30,'아델의 정규 4집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al30.jpg','2021-11-19 00:00:00.000000','30',29),(31,'빌리 아일리시의 정규 2집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al31.jpg','2021-07-30 00:00:00.000000','Happier Than Ever',30),(32,'더 위켄드의 정규 5집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al32.jpg','2022-01-07 00:00:00.000000','Dawn FM',31),(33,'아리아나 그란데의 정규 6집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al33.jpg','2020-10-30 00:00:00.000000','Positions',32),(34,'포스트 말론의 정규 4집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/a34.jpg','2022-06-03 00:00:00.000000','Twelve Carat Toothache',33),(35,'방탄소년단의 코로나19 팬데믹 속 위로를 담은 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al35.jpg','2020-11-20 00:00:00.000000','BE',1),(36,'아이유의 감성을 담은 미니 5집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al36.jpg','2019-11-18 00:00:00.000000','Love Poem',2),(37,'블랙핑크의 강렬한 카리스마를 담은 정규 2집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al37.jpg','2022-09-16 00:00:00.000000','BORN PINK',3),(38,'엑소의 중독성 강한 사운드를 담은 정규 6집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al38.jpg','2019-11-27 00:00:00.000000','Obsession',4),(39,'트와이스의 성숙한 매력을 담은 정규 2집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al39.jpg','2020-10-26 00:00:00.000000','Eyes Wide Open',5),(40,'세븐틴의 뜨거운 사랑을 담은 미니 9집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al40.jpg','2021-10-22 00:00:00.000000','Attacca',6),(41,'NCT 127의 강렬한 비트가 돋보이는 정규 3집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al41.jpg','2021-09-17 00:00:00.000000','Sticker',7),(42,'레드벨벳의 자신감 넘치는 여왕의 귀환을 담은 미니 6집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al42.jpg','2021-08-16 00:00:00.000000','Queendom',8),(43,'에이핑크의 성숙한 음악적 색깔을 담은 미니 8집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al43.jpg','2019-01-07 00:00:00.000000','Percent',9),(44,'마마무의 다채로운 음악을 담은 미니 10집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al44.jpg','2020-11-03 00:00:00.000000','Travel',10),(45,'스트레이키즈의 독창적인 세계관을 담은 미니 6집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al45.jpg','2022-03-18 00:00:00.000000','ODDINARY',11),(46,'ITZY의 첫 정규 앨범으로, 강렬한 퍼포먼스가 특징','https://d9k8tjx0yo0q5.cloudfront.net/image/al46.jpg','2021-09-24 00:00:00.000000','Crazy In Love',12),(47,'뉴진스의 트렌디한 감성을 담은 미니 2집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al47.jpg','2023-07-21 00:00:00.000000','Get Up',13),(48,'르세라핌의 독창적인 스타일을 담은 정규 1집 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al48.jpg','2023-05-01 00:00:00.000000','UNFORGIVEN',14),(49,'제이홉의 강렬한 솔로 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al49.jpg','2022-07-15 00:00:00.000000','Jack In The Box',15),(50,'지코의 유쾌한 바이브를 담은 미니 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al50.jpg','2020-07-01 00:00:00.000000','RANDOM BOX',16),(51,'박재범의 감성적인 R&B 트랙이 돋보이는 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al51.jpg','2019-10-11 00:00:00.000000','Blue Tape',17),(52,'선미의 레트로 감성을 담은 싱글 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al52.jpg','2020-06-29 00:00:00.000000','pporappippam',18),(53,'태연의 색다른 음악적 시도를 담은 미니 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al53.jpg','2018-06-18 00:00:00.000000','Something New',19),(54,'이하이의 다양한 음악적 시도를 담은 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al54.jpg','2019-09-04 00:00:00.000000','SEXY4EVA',20),(55,'크러쉬의 감성적인 R&B 트랙이 돋보이는 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al55.jpg','2018-07-13 00:00:00.000000','WONDERLOST',21),(56,'헤이즈의 감미로운 보컬이 돋보이는 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al56.jpg','2020-12-04 00:00:00.000000','The Cloud Dream of the Nine',22),(57,'창모의 강렬한 힙합 감성을 담은 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al57.jpg','2018-05-29 00:00:00.000000','DARKROOM',23),(58,'에픽하이의 깊은 메시지를 담은 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al58.jpg','2021-01-18 00:00:00.000000','EPIK HIGH Is Here 上',36),(59,'비오의 감성적인 힙합 사운드를 담은 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al59.jpg','2022-06-10 00:00:00.000000','Summer Nostalgia',24),(60,'에드시런의 다양한 아티스트와 협업한 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al60.jpg','2019-07-12 00:00:00.000000','No.6 Collaborations Project',25),(61,'테일러 스위프트의 강렬한 팝 스타일을 담은 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al61.jpg','2017-11-10 00:00:00.000000','Reputation',26),(62,'저스틴 비버의 감미로운 R&B 사운드가 돋보이는 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al62.jpg','2020-02-14 00:00:00.000000','Changes',27),(63,'드레이크의 대표적인 히트곡들이 담긴 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al63.jpg','2018-06-29 00:00:00.000000','Scorpion',28),(64,'아델의 감성적인 발라드 히트곡이 담긴 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al64.jpg','2011-01-24 00:00:00.000000','21',29),(65,'빌리 아일리시의 독창적인 사운드를 담은 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al65.jpg','2019-03-29 00:00:00.000000','WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?',30),(66,'더 위켄드의 대표적인 히트곡들이 담긴 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al66.jpg','2016-11-25 00:00:00.000000','Starboy',31),(67,'아리아나 그란데의 감미로운 팝 & R&B 스타일을 담은 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al67.jpg','2018-08-17 00:00:00.000000','Sweetener',32),(68,'포스트 말론의 히트곡들이 담긴 앨범','https://d9k8tjx0yo0q5.cloudfront.net/image/al68.jpg','2018-04-27 00:00:00.000000','Beerbongs & Bentleys',33);
/*!40000 ALTER TABLE `album` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `allpage`
--

DROP TABLE IF EXISTS `allpage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `allpage` (
  `allpage_id` int NOT NULL AUTO_INCREMENT,
  `entity_id` int DEFAULT NULL,
  PRIMARY KEY (`allpage_id`)
) ENGINE=InnoDB AUTO_INCREMENT=471 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `allpage`
--

LOCK TABLES `allpage` WRITE;
/*!40000 ALTER TABLE `allpage` DISABLE KEYS */;
INSERT INTO `allpage` VALUES (1,1),(2,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10),(11,11),(12,12),(13,13),(14,14),(15,15),(16,16),(17,17),(18,18),(19,19),(20,20),(21,21),(22,22),(23,23),(24,24),(25,25),(26,26),(27,27),(28,28),(29,29),(30,30),(31,31),(32,32),(33,33),(34,34),(35,35),(36,36),(37,37),(38,38),(39,39),(40,40),(41,41),(42,42),(43,43),(44,44),(45,45),(46,46),(47,47),(48,48),(49,49),(50,50),(51,51),(52,52),(53,53),(54,54),(55,55),(56,56),(57,57),(58,58),(59,59),(60,60),(61,61),(62,62),(63,63),(64,64),(65,65),(66,66),(67,67),(68,68),(69,69),(70,70),(71,71),(72,72),(73,73),(74,74),(75,75),(76,76),(77,77),(78,78),(79,79),(80,80),(81,81),(82,82),(83,83),(84,84),(85,85),(86,86),(87,87),(88,88),(89,89),(90,90),(91,91),(92,92),(93,93),(94,94),(95,95),(96,96),(97,97),(98,98),(99,99),(100,100),(101,101),(102,102),(103,103),(104,104),(105,105),(106,106),(107,107),(108,108),(109,109),(110,110),(111,111),(112,112),(113,113),(114,114),(115,115),(116,116),(117,117),(118,118),(119,119),(120,120),(121,121),(122,122),(123,123),(124,124),(125,125),(126,126),(127,127),(128,128),(129,129),(130,130),(131,131),(132,132),(133,133),(134,134),(135,135),(136,136),(137,137),(138,138),(139,139),(140,140),(141,141),(142,142),(143,143),(144,144),(145,145),(146,146),(147,147),(148,148),(149,149),(150,150),(151,151),(152,152),(153,153),(154,154),(155,155),(156,156),(157,157),(158,158),(159,159),(160,160),(161,161),(162,162),(163,163),(164,164),(165,165),(166,166),(167,167),(168,168),(169,169),(170,170),(171,171),(172,172),(173,173),(174,174),(175,175),(176,176),(177,177),(178,178),(179,179),(180,180),(181,181),(182,182),(183,183),(184,184),(185,185),(186,186),(187,187),(188,188),(189,189),(190,190),(191,191),(192,192),(193,193),(194,194),(195,195),(196,196),(197,197),(198,198),(199,199),(200,200),(201,201),(202,202),(203,203),(204,204),(205,205),(206,206),(207,207),(208,208),(209,209),(210,210),(211,211),(212,212),(213,213),(214,214),(215,215),(216,216),(217,217),(218,218),(219,219),(220,220),(221,221),(222,222),(223,223),(224,224),(225,225),(226,226),(227,227),(228,228),(229,229),(230,230),(231,231),(232,232),(233,233),(234,234),(235,235),(236,236),(237,237),(238,238),(239,239),(240,240),(241,241),(242,242),(243,243),(244,244),(245,245),(246,246),(247,247),(248,248),(249,249),(250,250),(251,251),(252,252),(253,253),(254,254),(255,255),(256,256),(257,257),(258,258),(259,259),(260,260),(261,261),(262,262),(263,263),(264,264),(265,265),(266,266),(267,267),(268,268),(269,269),(270,270),(271,271),(272,272),(273,273),(274,274),(275,275),(276,276),(277,277),(278,278),(279,279),(280,280),(281,281),(282,282),(283,283),(284,284),(285,285),(286,286),(287,287),(288,288),(289,289),(290,290),(291,291),(292,292),(293,293),(294,294),(295,295),(296,296),(297,297),(298,298),(299,299),(300,300),(301,301),(302,302),(303,303),(304,304),(305,305),(306,306),(307,307),(308,308),(309,309),(310,310),(311,311),(312,312),(313,313),(314,314),(315,315),(316,316),(317,317),(318,318),(319,319),(320,320),(321,1),(322,2),(323,3),(324,4),(325,5),(326,6),(327,7),(328,8),(329,9),(330,10),(331,11),(332,12),(333,13),(334,14),(335,15),(336,16),(337,17),(338,18),(339,19),(340,20),(341,21),(342,22),(343,23),(344,24),(345,25),(346,26),(347,27),(348,28),(349,29),(350,30),(351,31),(352,32),(353,33),(354,34),(355,35),(356,36),(357,37),(358,38),(359,39),(360,40),(361,41),(362,42),(363,43),(364,44),(365,45),(366,46),(367,47),(368,48),(369,49),(370,50),(371,51),(372,52),(373,53),(374,54),(375,55),(376,56),(377,57),(378,58),(379,59),(380,60),(381,61),(382,62),(383,63),(384,64),(385,65),(386,66),(387,67),(388,68),(389,1),(390,2),(391,3),(392,4),(393,5),(394,6),(395,7),(396,8),(397,9),(398,10),(399,11),(400,12),(401,13),(402,14),(403,15),(404,16),(405,17),(406,18),(407,19),(408,20),(409,21),(410,22),(411,23),(412,24),(413,25),(414,26),(415,27),(416,28),(417,29),(418,30),(419,31),(420,32),(421,33),(422,34),(423,35),(424,36),(425,37),(426,38),(427,39),(428,40),(429,41),(430,42),(431,43),(432,44),(433,45),(434,46),(435,47),(436,48),(437,49),(438,50),(439,51),(440,52),(441,53),(442,54),(443,55),(444,56),(445,57),(446,58),(447,59),(448,60),(449,61),(450,62),(451,1),(452,2),(453,3),(454,4),(455,5),(456,6),(457,7),(458,8),(459,9),(460,10),(461,11),(462,12),(463,13),(464,14),(465,15),(466,16),(467,17),(468,18),(469,19),(470,20);
/*!40000 ALTER TABLE `allpage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `allpage_pagetype`
--

DROP TABLE IF EXISTS `allpage_pagetype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `allpage_pagetype` (
  `allpage_allpage_id` int NOT NULL,
  `pagetype` tinyint DEFAULT NULL,
  KEY `FKh9v97p049w27rd1ahicrclw2m` (`allpage_allpage_id`),
  CONSTRAINT `FKh9v97p049w27rd1ahicrclw2m` FOREIGN KEY (`allpage_allpage_id`) REFERENCES `allpage` (`allpage_id`),
  CONSTRAINT `allpage_pagetype_chk_1` CHECK ((`pagetype` between 0 and 3))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `allpage_pagetype`
--

LOCK TABLES `allpage_pagetype` WRITE;
/*!40000 ALTER TABLE `allpage_pagetype` DISABLE KEYS */;
INSERT INTO `allpage_pagetype` VALUES (1,0),(2,0),(3,0),(4,0),(5,0),(6,0),(7,0),(8,0),(9,0),(10,0),(11,0),(12,0),(13,0),(14,0),(15,0),(16,0),(17,0),(18,0),(19,0),(20,0),(21,0),(22,0),(23,0),(24,0),(25,0),(26,0),(27,0),(28,0),(29,0),(30,0),(31,0),(32,0),(33,0),(34,0),(35,0),(36,0),(37,0),(38,0),(39,0),(40,0),(41,0),(42,0),(43,0),(44,0),(45,0),(46,0),(47,0),(48,0),(49,0),(50,0),(51,0),(52,0),(53,0),(54,0),(55,0),(56,0),(57,0),(58,0),(59,0),(60,0),(61,0),(62,0),(63,0),(64,0),(65,0),(66,0),(67,0),(68,0),(69,0),(70,0),(71,0),(72,0),(73,0),(74,0),(75,0),(76,0),(77,0),(78,0),(79,0),(80,0),(81,0),(82,0),(83,0),(84,0),(85,0),(86,0),(87,0),(88,0),(89,0),(90,0),(91,0),(92,0),(93,0),(94,0),(95,0),(96,0),(97,0),(98,0),(99,0),(100,0),(101,0),(102,0),(103,0),(104,0),(105,0),(106,0),(107,0),(108,0),(109,0),(110,0),(111,0),(112,0),(113,0),(114,0),(115,0),(116,0),(117,0),(118,0),(119,0),(120,0),(121,0),(122,0),(123,0),(124,0),(125,0),(126,0),(127,0),(128,0),(129,0),(130,0),(131,0),(132,0),(133,0),(134,0),(135,0),(136,0),(137,0),(138,0),(139,0),(140,0),(141,0),(142,0),(143,0),(144,0),(145,0),(146,0),(147,0),(148,0),(149,0),(150,0),(151,0),(152,0),(153,0),(154,0),(155,0),(156,0),(157,0),(158,0),(159,0),(160,0),(161,0),(162,0),(163,0),(164,0),(165,0),(166,0),(167,0),(168,0),(169,0),(170,0),(171,0),(172,0),(173,0),(174,0),(175,0),(176,0),(177,0),(178,0),(179,0),(180,0),(181,0),(182,0),(183,0),(184,0),(185,0),(186,0),(187,0),(188,0),(189,0),(190,0),(191,0),(192,0),(193,0),(194,0),(195,0),(196,0),(197,0),(198,0),(199,0),(200,0),(201,0),(202,0),(203,0),(204,0),(205,0),(206,0),(207,0),(208,0),(209,0),(210,0),(211,0),(212,0),(213,0),(214,0),(215,0),(216,0),(217,0),(218,0),(219,0),(220,0),(221,0),(222,0),(223,0),(224,0),(225,0),(226,0),(227,0),(228,0),(229,0),(230,0),(231,0),(232,0),(233,0),(234,0),(235,0),(236,0),(237,0),(238,0),(239,0),(240,0),(241,0),(242,0),(243,0),(244,0),(245,0),(246,0),(247,0),(248,0),(249,0),(250,0),(251,0),(252,0),(253,0),(254,0),(255,0),(256,0),(257,0),(258,0),(259,0),(260,0),(261,0),(262,0),(263,0),(264,0),(265,0),(266,0),(267,0),(268,0),(269,0),(270,0),(271,0),(272,0),(273,0),(274,0),(275,0),(276,0),(277,0),(278,0),(279,0),(280,0),(281,0),(282,0),(283,0),(284,0),(285,0),(286,0),(287,0),(288,0),(289,0),(290,0),(291,0),(292,0),(293,0),(294,0),(295,0),(296,0),(297,0),(298,0),(299,0),(300,0),(301,0),(302,0),(303,0),(304,0),(305,0),(306,0),(307,0),(308,0),(309,0),(310,0),(311,0),(312,0),(313,0),(314,0),(315,0),(316,0),(317,0),(318,0),(319,0),(320,0),(321,1),(322,1),(323,1),(324,1),(325,1),(326,1),(327,1),(328,1),(329,1),(330,1),(331,1),(332,1),(333,1),(334,1),(335,1),(336,1),(337,1),(338,1),(339,1),(340,1),(341,1),(342,1),(343,1),(344,1),(345,1),(346,1),(347,1),(348,1),(349,1),(350,1),(351,1),(352,1),(353,1),(354,1),(355,1),(356,1),(357,1),(358,1),(359,1),(360,1),(361,1),(362,1),(363,1),(364,1),(365,1),(366,1),(367,1),(368,1),(369,2),(370,2),(371,2),(372,2),(373,2),(374,2),(375,2),(376,2),(377,2),(378,2),(379,2),(380,2),(381,2),(382,2),(383,2),(384,2),(385,2),(386,2),(387,2),(388,2),(389,2),(390,2),(391,2),(392,2),(393,2),(394,2),(395,2),(396,2),(397,2),(398,2),(399,2),(400,2),(401,2),(402,2),(403,2),(404,2),(405,2),(406,2),(407,2),(408,2),(409,2),(410,2),(411,2),(412,2),(413,2),(414,2),(415,2),(416,2),(417,2),(418,2),(419,2),(420,2),(421,2),(422,2),(423,2),(424,2),(425,2),(426,2),(427,2),(428,2),(429,2),(430,2),(431,2),(432,2),(433,2),(434,2),(435,2),(436,2),(437,2),(438,2),(439,2),(440,2),(441,2),(442,2),(443,2),(444,2),(445,2),(446,2),(447,2),(448,2),(449,2),(450,2),(451,3),(452,3),(453,3),(454,3),(455,3),(456,3),(457,3),(458,3),(459,3),(460,3),(461,3),(462,3),(463,3),(464,3),(465,3),(466,3),(467,3),(468,3),(469,3),(470,3);
/*!40000 ALTER TABLE `allpage_pagetype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artist`
--

DROP TABLE IF EXISTS `artist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `artist` (
  `artist_id` int NOT NULL AUTO_INCREMENT,
  `artist_name` varchar(255) DEFAULT NULL,
  `content` varchar(1000) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `debut` datetime(6) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`artist_id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artist`
--

LOCK TABLES `artist` WRITE;
/*!40000 ALTER TABLE `artist` DISABLE KEYS */;
INSERT INTO `artist` VALUES (1,'방탄소년단','방탄소년단은 대한민국의 7인조 보이 그룹입니다.','korea','2013-06-13 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/bts.jpg'),(2,'아이유','아이유는 대한민국의 싱어송라이터이자 배우입니다.','korea','2008-09-18 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/iu.jpg'),(3,'블랙핑크','블랙핑크는 YG엔터테인먼트 소속의 걸그룹입니다.','korea','2016-08-08 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/blackpink.jpg'),(4,'엑소','엑소는 SM엔터테인먼트 소속의 남성 아이돌 그룹입니다.','korea','2012-04-08 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/exo.jpg'),(5,'트와이스','트와이스는 JYP엔터테인먼트 소속의 9인조 걸그룹입니다.','korea','2015-10-20 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/twice.jpg'),(6,'세븐틴','세븐틴은 플레디스 엔터테인먼트 소속의 13인조 보이 그룹입니다.','korea','2015-05-26 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/seventeen.jpg'),(7,'NCT','NCT는 다양한 유닛으로 구성된 SM엔터테인먼트 소속 그룹입니다.','korea','2016-04-09 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/nct.jpg'),(8,'레드벨벳','레드벨벳은 SM엔터테인먼트 소속의 5인조 걸그룹입니다.','korea','2014-08-01 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/redvelvet.jpg'),(9,'에이핑크','에이핑크는 대한민국의 걸그룹으로 청순한 콘셉트로 사랑받았습니다.','korea','2011-04-19 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/apink.jpg'),(10,'마마무','마마무는 RBW 소속의 여성 4인조 보컬 그룹입니다.','korea','2014-06-19 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/mamamoo.jpg'),(11,'스트레이키즈','스트레이키즈는 JYP엔터테인먼트 소속의 보이 그룹입니다.','korea','2018-03-25 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/straykids.jpg'),(12,'ITZY','ITZY는 JYP엔터테인먼트 소속의 5인조 걸그룹입니다.','korea','2019-02-12 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/itzy.jpg'),(13,'뉴진스','뉴진스는 ADOR 소속의 5인조 걸그룹입니다.','korea','2022-07-22 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/newjeans.jpg'),(14,'르세라핌','르세라핌은 하이브 소속의 5인조 걸그룹입니다.','korea','2022-05-02 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/le_sserafim.jpg'),(15,'BTS 제이홉','제이홉은 방탄소년단의 멤버이며, 솔로 활동도 진행 중입니다.','korea','2018-03-02 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/jhope.jpg'),(16,'지코','지코는 블락비 출신의 래퍼이자 프로듀서입니다.','korea','2011-04-15 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/zico.jpg'),(17,'박재범','박재범은 AOMG의 설립자이자 싱어송라이터입니다.','korea','2008-09-04 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/jaypark.jpg'),(18,'선미','선미는 원더걸스 출신의 솔로 가수입니다.','korea','2007-02-10 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/sunmi.jpg'),(19,'태연','태연은 소녀시대의 리더이자 솔로 가수입니다.','korea','2007-08-05 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/taeyeon.jpg'),(20,'이하이','이하이는 독특한 음색을 가진 솔로 가수입니다.','korea','2012-11-04 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/leehi.jpg'),(21,'크러쉬','크러쉬는 대한민국의 R&B 가수입니다.','korea','2014-04-01 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/crush.jpg'),(22,'헤이즈','헤이즈는 감성적인 R&B 및 힙합 음악을 하는 싱어송라이터입니다.','korea','2015-03-29 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/heize.jpg'),(23,'창모','창모는 대한민국의 힙합 프로듀서이자 래퍼입니다.','korea','2016-07-23 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/changmo.jpg'),(24,'비오','비오는 대한민국의 래퍼이자 싱어송라이터입니다.','korea','2021-12-10 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/beo.jpg'),(25,'에드시런','에드시런은 영국의 싱어송라이터입니다.','united kingdom','2011-09-09 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/edsheeran.jpg'),(26,'테일러 스위프트','테일러 스위프트는 팝과 컨트리 음악을 오가는 아티스트입니다.','united states','2006-10-24 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/taylorswift.jpg'),(27,'저스틴 비버','저스틴 비버는 팝 음악계에서 큰 인기를 얻은 가수입니다.','canada','2009-11-17 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/justinbieber.jpg'),(28,'드레이크','드레이크는 캐나다 출신의 래퍼이자 프로듀서입니다.','canada','2006-05-15 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/drake.jpg'),(29,'아델','아델은 감성적인 보컬로 유명한 영국의 가수입니다.','united kingdom','2008-01-28 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/adele.jpg'),(30,'billie eilish','빌리 아일리시는 독특한 음악 스타일을 가진 팝 가수입니다.','united states','2017-08-11 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/billieeilish.jpg'),(31,'the weeknd','더 위켄드는 R&B 기반의 감성적인 음악을 하는 가수입니다.','canada','2011-03-21 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/theweeknd.jpg'),(32,'ariana grande','아리아나 그란데는 미국의 팝 가수이자 배우입니다.','united states','2013-08-30 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/arianagrande.jpg'),(33,'post malone','포스트 말론은 힙합과 록을 섞은 독창적인 스타일의 가수입니다.','united states','2015-02-04 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/postmalone.jpg'),(34,'싸이','싸이는 글로벌 히트곡 \"강남스타일\"로 유명한 가수입니다.','korea','2001-01-18 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/psy.jpg'),(35,'비','비는 솔로 가수이자 배우로도 활동하는 아티스트입니다.','korea','2002-04-28 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/rain.jpg'),(36,'에픽하이','에픽하이는 대한민국의 대표적인 힙합 그룹입니다.','korea','2003-10-23 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/epikhigh.jpg'),(37,'다이나믹 듀오','다이나믹 듀오는 대한민국의 힙합 듀오입니다.','korea','2004-05-17 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/dynamicduo.jpg'),(38,'유키스','유키스는 한류를 이끈 보이그룹 중 하나입니다.','korea','2008-08-28 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/ukiss.jpg'),(39,'씨엔블루','씨엔블루는 밴드형 아이돌로 유명한 그룹입니다.','korea','2010-01-14 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/cnblue.jpg'),(40,'FT아일랜드','FT아일랜드는 대한민국의 5인조 록 밴드입니다.','korea','2007-06-07 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/ftisland.jpg'),(41,'젝스키스','젝스키스는 1세대 아이돌로 많은 인기를 얻었습니다.','korea','1997-04-15 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/sechskies.jpg'),(42,'H.O.T.','H.O.T.는 대한민국의 1세대 아이돌 그룹입니다.','korea','1996-09-07 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/hot.jpg'),(43,'god','god는 감성적인 음악으로 많은 사랑을 받은 그룹입니다.','korea','1999-01-13 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/god.jpg'),(44,'원더걸스','원더걸스는 \"Nobody\"로 글로벌 히트를 기록한 걸그룹입니다.','korea','2007-02-10 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/wondergirls.jpg'),(45,'카라','카라는 일본에서도 큰 인기를 얻은 걸그룹입니다.','korea','2007-03-29 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/kara.jpg'),(46,'비스트','비스트는 감성적인 음악과 퍼포먼스로 사랑받은 그룹입니다.','korea','2009-10-16 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/beast.jpg'),(47,'하이라이트','하이라이트는 비스트에서 새롭게 출발한 그룹입니다.','korea','2017-03-20 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/highlight.jpg'),(48,'인피니트','인피니트는 칼군무로 유명한 대한민국의 보이그룹입니다.','korea','2010-06-09 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/infinite.jpg'),(49,'틴탑','틴탑은 화려한 퍼포먼스로 사랑받는 보이그룹입니다.','korea','2010-07-10 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/teentop.jpg'),(50,'B1A4','B1A4는 감성적인 음악을 선보이는 보이그룹입니다.','korea','2011-04-23 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/b1a4.jpg'),(51,'블락비','블락비는 개성 강한 음악과 콘셉트로 유명한 그룹입니다.','korea','2011-04-15 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/blockb.jpg'),(52,'AOA','AOA는 댄스와 밴드 콘셉트를 모두 소화한 걸그룹입니다.','korea','2012-07-30 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/aoa.jpg'),(53,'라붐','라붐은 청순하고 발랄한 콘셉트의 걸그룹입니다.','korea','2014-08-28 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/laboum.jpg'),(54,'우주소녀','우주소녀는 SF적 세계관을 가진 걸그룹입니다.','korea','2016-02-25 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/wjsn.jpg'),(55,'프로미스나인','프로미스나인은 청량한 음악으로 사랑받는 걸그룹입니다.','korea','2018-01-24 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/fromis9.jpg'),(56,'로켓펀치','로켓펀치는 활기찬 콘셉트의 걸그룹입니다.','korea','2019-08-07 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/rocketpunch.jpg'),(57,'드림캐쳐','드림캐쳐는 록 사운드를 기반으로 한 걸그룹입니다.','korea','2017-01-13 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/dreamcatcher.jpg'),(58,'골든차일드','골든차일드는 활기찬 퍼포먼스로 사랑받는 그룹입니다.','korea','2017-08-28 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/goldenchild.jpg'),(59,'온앤오프','온앤오프는 감성적인 음악과 독특한 콘셉트로 사랑받는 보이그룹입니다.','korea','2017-08-03 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/onf.jpg'),(60,'펜타곤','펜타곤은 다양한 음악적 시도를 하는 그룹입니다.','korea','2016-10-10 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/pentagon.jpg'),(61,'더보이즈','더보이즈는 뛰어난 퍼포먼스를 가진 보이그룹입니다.','orea','2017-12-06 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/theboyz.jpg'),(62,'SF9','SF9은 세련된 퍼포먼스와 음악으로 사랑받는 그룹입니다.','korea','2016-10-05 00:00:00.000000','https://d9k8tjx0yo0q5.cloudfront.net/image/sf9.jpg');
/*!40000 ALTER TABLE `artist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `cart_id` int NOT NULL AUTO_INCREMENT,
  `member_userid` varchar(255) DEFAULT NULL,
  `music_id` int DEFAULT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `FKejuk4lebauc9ialo3xfgajylj` (`member_userid`),
  KEY `FKrcn4cx371p9po6clrdpvwfct3` (`music_id`),
  CONSTRAINT `FKejuk4lebauc9ialo3xfgajylj` FOREIGN KEY (`member_userid`) REFERENCES `member` (`member_id`) ON DELETE CASCADE,
  CONSTRAINT `FKrcn4cx371p9po6clrdpvwfct3` FOREIGN KEY (`music_id`) REFERENCES `music` (`music_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (2,'abc3',320),(3,'abc2',292),(4,'abc1',180),(5,'test',21),(7,'abc3',11),(8,'abc2',73),(9,'abc1',13),(10,'test',163),(12,'abc3',196),(13,'abc2',247),(14,'abc1',9),(15,'test',261),(17,'abc3',162),(18,'abc2',179),(19,'abc1',86),(20,'test',216),(22,'abc3',250),(23,'abc2',72),(24,'abc1',247),(25,'test',60),(27,'abc3',166),(28,'abc2',236),(29,'abc1',44),(30,'test',149),(32,'abc3',56),(33,'abc2',44),(34,'abc1',49),(35,'test',112),(37,'abc3',128),(38,'abc2',41),(39,'abc1',141),(40,'test',261),(42,'abc3',109),(43,'abc2',136),(44,'abc1',35),(45,'test',84),(47,'abc3',41),(48,'abc2',220),(49,'abc1',19),(50,'test',72);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gift`
--

DROP TABLE IF EXISTS `gift`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gift` (
  `gift_id` int NOT NULL AUTO_INCREMENT,
  `active` bit(1) DEFAULT NULL,
  `gift_date` datetime(6) DEFAULT NULL,
  `gift_from` varchar(255) DEFAULT NULL,
  `gift_name` varchar(255) DEFAULT NULL,
  `gift_to` varchar(255) DEFAULT NULL,
  `membership_category` varchar(255) DEFAULT NULL,
  `membership_download_count` int DEFAULT NULL,
  `membership_name` varchar(255) DEFAULT NULL,
  `membership_period` int DEFAULT NULL,
  PRIMARY KEY (`gift_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gift`
--

LOCK TABLES `gift` WRITE;
/*!40000 ALTER TABLE `gift` DISABLE KEYS */;
INSERT INTO `gift` VALUES (1,_binary '\0','2025-02-27 15:20:01.187018','test','무제한 듣기 1개월','abc1','streaming',0,'무제한 듣기 1개월',1);
/*!40000 ALTER TABLE `gift` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `like_id` int NOT NULL AUTO_INCREMENT,
  `allpage_id` int DEFAULT NULL,
  `member_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`like_id`),
  KEY `FKphi9opfla2vtyfjeakf6khiu6` (`allpage_id`),
  KEY `FKa4vkf1skcfu5r6o5gfb5jf295` (`member_id`),
  CONSTRAINT `FKa4vkf1skcfu5r6o5gfb5jf295` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FKphi9opfla2vtyfjeakf6khiu6` FOREIGN KEY (`allpage_id`) REFERENCES `allpage` (`allpage_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES (2,1,'abc3'),(3,1,'abc2'),(4,1,'abc1'),(5,1,'test'),(7,2,'abc3'),(8,2,'abc2'),(9,2,'abc1'),(10,2,'test'),(12,3,'abc3'),(13,3,'abc2'),(14,3,'abc1'),(15,3,'test'),(17,4,'abc3'),(18,4,'abc2'),(19,4,'abc1'),(20,4,'test'),(22,5,'abc3'),(23,5,'abc2'),(24,5,'abc1'),(25,5,'test'),(27,6,'abc3'),(28,6,'abc2'),(29,6,'abc1'),(30,6,'test'),(32,7,'abc3'),(33,7,'abc2'),(34,7,'abc1'),(35,7,'test'),(37,8,'abc3'),(38,8,'abc2'),(39,8,'abc1'),(40,8,'test'),(42,9,'abc3'),(43,9,'abc2'),(44,9,'abc1'),(45,9,'test'),(47,10,'abc3'),(48,10,'abc2'),(49,10,'abc1'),(50,10,'test'),(69,466,'test'),(70,451,'test'),(72,169,'test'),(73,411,'test'),(74,389,'test'),(77,110,'test'),(78,42,'3936484235');
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `member_id` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `address_detail` varchar(255) DEFAULT NULL,
  `address_extra` varchar(255) DEFAULT NULL,
  `birth` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `indate` datetime DEFAULT CURRENT_TIMESTAMP,
  `introduction` varchar(255) DEFAULT NULL,
  `member_key` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nickname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `zip_code` int DEFAULT NULL,
  PRIMARY KEY (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES ('3936484235',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2025-02-27 17:05:42',NULL,'c2025ac1-548d-4a79-a3ed-864b77ae4f51',NULL,'이윤형','$2a$10$OkaDRq1jMiydiPksqkst1.JrnQ2tHNKVq3AXvo4ws4nQg6/5fuZk.',NULL,'kakao',NULL),('abc1','abc1','abc1','abc1','1991-11-23','abc1@abc.com','male','https://d9k8tjx0yo0q5.cloudfront.net/image/pf2.jpg','1919-11-12 00:00:01','ㅎ2ㅎ2ㅎ3','0b2566ea-a11b-4d24-894b-9131b93cbfe6','허내강','노예','$2a$10$Ca.sJyltjJPpeJef2sfLAefkioRAoXJmrJGE5qmrH6rOukQnZchBO','010-3333-4444','',55323),('abc2','abc2','abc2','abc2','1991-11-24','abc2@abc.com','male','https://d9k8tjx0yo0q5.cloudfront.net/image/pf3.jpg','1919-11-12 00:00:02','ㅎ2ㅎ2ㅎ4','0b2566ea-a11b-4d24-894b-9131b93cbfeh','류인형','갓인형','$2a$10$Ca.sJyltjJPpeJef2sfLAefkioRAoXJmrJGE5qmrH6rOukQnZchBO','010-4444-5555','',12345),('abc3','abc3','abc3','abc3','1991-11-25','abc3@abc.com','male','https://d9k8tjx0yo0q5.cloudfront.net/image/pf4.jpg','1919-11-12 00:00:03','ㅎ2ㅎ2ㅎ5','0b2566ea-a11b-4d24-894b-9131b93cbfe9','강성일','갓성일','$2a$10$Ca.sJyltjJPpeJef2sfLAefkioRAoXJmrJGE5qmrH6rOukQnZchBO','010-5555-6666','',13234),('test','test','test','test','1991-11-22','test@abc.com','female','https://d9k8tjx0yo0q5.cloudfront.net/image/pf1.jpg','1919-11-12 00:00:00','ㅎ2ㅎ2ㅎ2','0b2566ea-a11b-4d24-894b-9131b93cbfed','노하나','갓하나','$2a$10$Ca.sJyltjJPpeJef2sfLAefkioRAoXJmrJGE5qmrH6rOukQnZchBO','010-2222-3333','',12341);
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member_member_role_list`
--

DROP TABLE IF EXISTS `member_member_role_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member_member_role_list` (
  `member_member_id` varchar(255) NOT NULL,
  `member_role_list` tinyint DEFAULT NULL,
  KEY `FKnjkpfkm2akst91klvj5tsn18c` (`member_member_id`),
  CONSTRAINT `FKnjkpfkm2akst91klvj5tsn18c` FOREIGN KEY (`member_member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `member_member_role_list_chk_1` CHECK ((`member_role_list` between 0 and 1))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member_member_role_list`
--

LOCK TABLES `member_member_role_list` WRITE;
/*!40000 ALTER TABLE `member_member_role_list` DISABLE KEYS */;
INSERT INTO `member_member_role_list` VALUES ('test',0),('test',1),('abc1',0),('abc1',1),('abc2',0),('abc2',1),('abc3',0),('abc3',1),('3936484235',0);
/*!40000 ALTER TABLE `member_member_role_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member_recent_musics`
--

DROP TABLE IF EXISTS `member_recent_musics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member_recent_musics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `member_id` varchar(255) DEFAULT NULL,
  `music_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK4qk44de2ywi2yh3mlata85dfr` (`member_id`),
  KEY `FKbqduw7tf8s5qjipdi22auob14` (`music_id`),
  CONSTRAINT `FK4qk44de2ywi2yh3mlata85dfr` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FKbqduw7tf8s5qjipdi22auob14` FOREIGN KEY (`music_id`) REFERENCES `music` (`music_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=169 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member_recent_musics`
--

LOCK TABLES `member_recent_musics` WRITE;
/*!40000 ALTER TABLE `member_recent_musics` DISABLE KEYS */;
INSERT INTO `member_recent_musics` VALUES (1,'test',180),(3,'abc3',83),(4,'abc2',40),(5,'abc1',273),(6,'test',282),(8,'abc3',181),(9,'abc2',96),(10,'abc1',258),(11,'test',41),(13,'abc3',234),(14,'abc2',313),(15,'abc1',222),(16,'test',170),(18,'abc3',85),(19,'abc2',196),(20,'abc1',84),(21,'test',150),(23,'abc3',129),(24,'abc2',104),(25,'abc1',133),(32,'test',31),(34,'abc3',288),(35,'abc2',249),(36,'abc1',61),(37,'test',197),(39,'abc3',222),(40,'abc2',300),(41,'abc1',195),(42,'test',73),(44,'abc3',279),(45,'abc2',134),(46,'abc1',153),(47,'test',44),(49,'abc3',268),(50,'abc2',139),(51,'abc1',209),(52,'test',308),(54,'abc3',127),(55,'abc2',132),(56,'abc1',276),(63,'test',24),(65,'abc3',220),(66,'abc2',27),(67,'abc1',114),(68,'test',170),(70,'abc3',107),(71,'abc2',292),(72,'abc1',178),(73,'test',13),(75,'abc3',180),(76,'abc2',62),(77,'abc1',90),(78,'test',263),(80,'abc3',285),(81,'abc2',202),(82,'abc1',156),(83,'test',175),(85,'abc3',216),(86,'abc2',187),(87,'abc1',285),(94,'test',224),(96,'abc3',6),(97,'abc2',201),(98,'abc1',25),(99,'test',160),(101,'abc3',263),(102,'abc2',101),(103,'abc1',34),(104,'test',187),(106,'abc3',83),(107,'abc2',154),(108,'abc1',203),(109,'test',231),(111,'abc3',110),(112,'abc2',196),(113,'abc1',11),(114,'test',105),(116,'abc3',218),(117,'abc2',256),(118,'abc1',306),(125,NULL,79),(126,NULL,33),(127,NULL,228),(128,NULL,260),(129,NULL,42),(130,NULL,302),(131,NULL,315),(133,'test',169),(134,'test',42),(139,'3936484235',42),(140,'3936484235',42),(141,'3936484235',42),(142,'3936484235',42),(143,'3936484235',42),(144,'3936484235',42),(145,'3936484235',42),(146,'3936484235',42),(147,'3936484235',42),(148,'3936484235',42),(149,'3936484235',42),(150,'3936484235',260),(151,'3936484235',42),(152,'3936484235',125),(153,'3936484235',125),(154,'3936484235',125),(155,'3936484235',125),(156,'3936484235',33),(157,'3936484235',33),(158,'3936484235',33),(159,'3936484235',33),(160,'3936484235',33),(161,'3936484235',42),(162,'3936484235',281),(163,'3936484235',260),(164,'3936484235',46),(165,'3936484235',260),(166,'3936484235',5),(167,'3936484235',125),(168,'3936484235',110);
/*!40000 ALTER TABLE `member_recent_musics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `membership`
--

DROP TABLE IF EXISTS `membership`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `membership` (
  `membership_id` int NOT NULL AUTO_INCREMENT,
  `active` bit(1) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `discount` int NOT NULL,
  `download_count` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `period` int NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`membership_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `membership`
--

LOCK TABLES `membership` WRITE;
/*!40000 ALTER TABLE `membership` DISABLE KEYS */;
INSERT INTO `membership` VALUES (1,_binary '','streaming','첫 구독 1개월 50% 할인',50,0,'무제한 듣기',1,8000),(2,_binary '','download',NULL,0,5,'MP3 5곡 다운로드',12,3000),(3,_binary '','gift','15% 할인',15,0,'무제한 듣기 12개월',12,96000),(4,_binary '','gift',NULL,0,0,'무제한 듣기 1개월',1,8000),(5,_binary '','streaming','4년 내내 18% 할인',18,0,'모바일 무제한 듣기 - 대학생',1,7000),(6,_binary '','streaming','1개월 50% 할인 프로모션',50,0,'모바일 무제한 듣기',1,7000),(7,_binary '','download','10% 할인',10,10,'MP3 10곡 다운로드',12,6000);
/*!40000 ALTER TABLE `membership` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `membership_user`
--

DROP TABLE IF EXISTS `membership_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `membership_user` (
  `membership_user_id` int NOT NULL AUTO_INCREMENT,
  `active` bit(1) DEFAULT NULL,
  `download_count` int DEFAULT NULL,
  `end_date` datetime(6) DEFAULT NULL,
  `membership_category` varchar(255) DEFAULT NULL,
  `membership_name` varchar(255) DEFAULT NULL,
  `membership_period` int DEFAULT NULL,
  `start_date` datetime(6) DEFAULT NULL,
  `member_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`membership_user_id`),
  KEY `FKgkejtjeeefoo2vol4upuflxkj` (`member_id`),
  CONSTRAINT `FKgkejtjeeefoo2vol4upuflxkj` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `membership_user`
--

LOCK TABLES `membership_user` WRITE;
/*!40000 ALTER TABLE `membership_user` DISABLE KEYS */;
INSERT INTO `membership_user` VALUES (1,_binary '',0,'2025-03-27 15:19:17.687997','streaming','무제한 듣기',1,'2025-02-27 15:19:17.687997','test'),(2,_binary '',0,'2025-03-28 21:02:36.946372','streaming','무제한 듣기',1,'2025-02-28 21:02:36.946372','3936484235');
/*!40000 ALTER TABLE `membership_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `music`
--

DROP TABLE IF EXISTS `music`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `music` (
  `music_id` int NOT NULL AUTO_INCREMENT,
  `bucket_path` varchar(255) DEFAULT NULL,
  `content` varchar(1000) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `lyrics` varchar(255) DEFAULT NULL,
  `mood` varchar(255) DEFAULT NULL,
  `play_count` int DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `title_music` bit(1) DEFAULT NULL,
  `track_number` int DEFAULT NULL,
  `album_id` int DEFAULT NULL,
  `artist_id` int DEFAULT NULL,
  PRIMARY KEY (`music_id`),
  KEY `FK1gpg5o9xo7gkxeietx17guu2g` (`album_id`),
  KEY `FK9yrhmoc1hty1eff973ofs5cjc` (`artist_id`),
  CONSTRAINT `FK1gpg5o9xo7gkxeietx17guu2g` FOREIGN KEY (`album_id`) REFERENCES `album` (`album_id`),
  CONSTRAINT `FK9yrhmoc1hty1eff973ofs5cjc` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`artist_id`)
) ENGINE=InnoDB AUTO_INCREMENT=321 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `music`
--

LOCK TABLES `music` WRITE;
/*!40000 ALTER TABLE `music` DISABLE KEYS */;
INSERT INTO `music` VALUES (1,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','세븐틴의 강렬한 록 사운드','록','뜨거운 열정을 담아','happy',403,'HOT (Rock Ver.)',_binary '',1,6,6),(2,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','세븐틴의 헤비 록 스타일','록','너를 향한 마음이 폭발해','sad',123,'Crush (Heavy Rock)',_binary '\0',2,40,6),(3,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','세븐틴의 에너지 넘치는 록','록','운명에 맞서 싸워','angry',2135,'DON QUIXOTE (Rock Remix)',_binary '',1,6,6),(4,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','세븐틴의 잔잔한 록 발라드','록','조용히 흘러가는 시간','boring',432,'Pang! (Rock Ballad)',_binary '\0',3,40,6),(5,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','세븐틴의 어쿠스틱 록','록','재가 되어 흩어져','normal',155,'Ash (Acoustic Rock)',_binary '\0',3,6,6),(6,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','세븐틴의 록 스타일','록','너 없이 나 혼자','sad',85,'2 Minus 1 (Rock Ver.)',_binary '\0',4,40,6),(7,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','방탄소년단의 경쾌한 팝','팝','밝은 빛으로 세상을 채워','happy',2,'Dynamite',_binary '',1,35,1),(8,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','방탄소년단의 감성적인 팝','팝','시간은 흘러가지만','sad',1,'Life Goes On',_binary '\0',2,35,1),(9,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','블랙핑크의 대담한 팝','팝','강렬하게 물어뜯어','angry',8,'Pink Venom (Pop Ver.)',_binary '',1,37,3),(10,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','방탄소년단의 잔잔한 팝','팝','희미한 빛 속에서','boring',486,'Blue & Grey',_binary '\0',3,35,1),(11,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','아이유의 따뜻한 팝','팝','봄바람처럼 스쳐가','normal',444,'LILAC',_binary '',1,2,2),(12,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','트와이스의 팝 스타일','팝','사랑을 실험해','happy',12,'SCIENTIST',_binary '',1,5,5),(13,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','방탄소년단의 파워풀한 힙합','힙합&랩','내가 나를 이끌어','happy',2,'ON',_binary '',1,1,1),(14,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','방탄소년단의 깊은 힙합','힙합&랩','어둠 속 내 안의 나','sad',31,'Black Swan',_binary '\0',2,1,1),(15,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','NCT의 강렬한 힙합','힙합&랩','너를 붙잡고 싶어','angry',21,'Sticker',_binary '',1,41,7),(16,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','창모의 느린 힙합','힙합&랩','하늘을 날아올라','boring',123,'METEOR',_binary '',1,23,23),(17,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','에픽하이의 자연스러운 힙합','힙합&랩','내가 빛날 때','normal',231,'Rosario',_binary '',1,24,36),(18,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','스트레이키즈의 강렬한 힙합','힙합&랩','미친 듯이 달려','angry',51,'MANIAC',_binary '',1,45,11),(19,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','방탄소년단의 감미로운 재즈','재즈','어둠 속에서 빛을 찾아','sad',6,'Shadow - Jazz Ver.',_binary '',1,1,1),(20,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','스트레이키즈의 경쾌한 재즈','재즈','너를 사랑한다고 말해','happy',51,'CASE 143 (Jazz Pop)',_binary '',1,11,11),(21,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','르세라핌의 펑키 재즈','재즈','부서질수록 강해져','angry',2,'ANTIFRAGILE (Jazz Funk)',_binary '',1,14,14),(22,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','태연의 느린 재즈 발라드','재즈','너에게 끌려가','boring',13,'Gravity (Jazz Ballad)',_binary '\0',2,19,19),(23,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','이하이의 부드러운 재즈','재즈','즐거운 리듬 속에서','normal',54,'Jam',_binary '',1,54,20),(24,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','블랙핑크의 재즈 변주','재즈','강렬하게 끝내버려','angry',6854,'Shut Down (Jazz Remix)',_binary '',1,37,3),(25,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','레드벨벳의 클래식 스타일','클래식','리듬 속에서 춤을 춰','happy',52,'Feel My Rhythm',_binary '',1,8,8),(26,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','이하이의 감동적인 클래식','클래식','너만이 내 전부야','sad',85,'ONLY (Classical Remix)',_binary '',1,20,20),(27,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','르세라핌의 강렬한 클래식','클래식','용서받지 못할 나','angry',4,'UNFORGIVEN (Classical Strings)',_binary '',1,48,14),(28,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','ITZY의 잔잔한 클래식','클래식','미소 속에 숨겨진 비밀','boring',231,'Cheshire (Classical Piano)',_binary '\0',3,12,12),(29,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','박재범의 자연스러운 클래식','클래식','너와 함께 달리고 싶어','normal',21,'Drive (Classical Strings)',_binary '\0',3,17,17),(30,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','트와이스의 클래식 편곡','클래식','네 마음을 알고 싶어','happy',58,'Yes or No (Classical Strings)',_binary '\0',4,5,5),(31,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','엑소의 강렬한 전자음악','전자음악','너에게 집착해','angry',4,'Obsession',_binary '',1,38,4),(32,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','엑소의 신나는 전자음악','전자음악','느낌에 저항하지 마','happy',98,'Don’t Fight the Feeling',_binary '',1,4,4),(33,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','선미의 매혹적인 전자음악','전자음악','날 부르는 소리가 들려','sad',13,'Siren',_binary '',1,18,18),(34,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','NCT의 느린 전자음악','전자음악','시스템 오류 속에서','boring',65,'Glitch Mode',_binary '',1,7,7),(35,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','더 위켄드의 차분한 전자음악','전자음악','새로운 시작의 신호','normal',132,'Dawn FM',_binary '',1,32,31),(36,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','테일러 스위프트의 전자음악','전자음악','준비됐어?','angry',1,'…Ready For It?',_binary '',1,61,26),(37,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','뉴진스의 따뜻한 기타 리믹스','기타','너만 보면 설레어','happy',85,'Hype Boy (Guitar Remix)',_binary '',1,13,13),(38,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','제이홉의 감성적인 기타','기타','햇살처럼 따뜻해','sad',496,'Daylight (Acoustic Guitar)',_binary '\0',2,15,15),(39,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','선미의 파워풀한 기타 솔로','기타','날 부르는 강렬한 소리','angry',0,'Siren (Guitar Solo)',_binary '',1,18,18),(40,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','아이유의 느린 기타 연주','기타','즐거운 하루를 위한 멜로디','boring',4,'Jam Jam (Live Guitar Mix)',_binary '\0',2,2,2),(41,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','엑소의 자연스러운 기타','기타','너에게 다가가고 싶어','normal',1,'Love Me Like This (Acoustic Guitar)',_binary '\0',3,4,4),(42,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','NCT의 화려한 기타 솔로','기타','뜨거운 열정을 담은 솔로','happy',117,'HOT (Guitar Solo Ver.)',_binary '\0',2,7,7),(43,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','세븐틴의 록 스타일','록','행진하듯 앞으로','happy',1,'March (Rock Ver.)',_binary '\0',3,6,6),(44,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','세븐틴의 감성 록','록','너에게 전하고 싶어','sad',35,'To You (Rock Remix)',_binary '',1,40,6),(45,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','세븐틴의 강렬한 록','록','운명을 거슬러','angry',458,'FATE (Heavy Rock)',_binary '',1,6,6),(46,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','트와이스의 록 발라드','록','마지막 춤을 춰','boring',6,'Last Waltz (Rock Ballad)',_binary '\0',3,5,5),(47,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','포스트 말론의 록 사운드','록','나는 록스타처럼','normal',2,'rockstar',_binary '',1,68,33),(48,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','세븐틴의 어쿠스틱 록','록','열정 속에서','happy',1,'HOT (Acoustic Rock)',_binary '\0',2,6,6),(49,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','세븐틴의 록 솔로','록','너를 향한 외침','sad',0,'Crush (Rock Solo)',_binary '\0',2,40,6),(50,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','세븐틴의 라이브 록','록','전투 속으로','angry',854,'DON QUIXOTE (Live Rock)',_binary '',1,6,6),(51,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','세븐틴의 소프트 록','록','조용한 바람처럼','boring',68,'Pang! (Soft Rock)',_binary '\0',3,40,6),(52,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','세븐틴의 록 믹스','록','재가 되어 사라져','normal',2,'Ash (Rock Mix)',_binary '\0',3,6,6),(53,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','트와이스의 록 스타일','록','달빛 아래서','happy',1,'MOONLIGHT (Rock Ver.)',_binary '\0',2,5,5),(54,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','저스틴 비버의 경쾌한 팝','팝','너와 함께라면 달콤해','happy',2,'Peaches',_binary '',1,28,27),(55,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','태연의 감성적인 팝','팝','너 없이 나를 상상할 수 없어','sad',358,'INVU',_binary '',1,19,19),(56,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','블랙핑크의 강렬한 팝','팝','모든 걸 끝내버려','angry',4,'Shut Down',_binary '\0',2,37,3),(57,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','아이유의 잔잔한 팝','팝','너에게 전하는 시','boring',8,'Love Poem',_binary '',1,36,2),(58,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','아리아나 그란데의 자연스러운 팝','팝','너와 나의 자리','normal',6,'positions',_binary '',1,33,32),(59,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','ITZY의 밝은 팝','팝','자유롭게 날아올라','happy',51,'SNEAKERS',_binary '',1,12,12),(60,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','빌리 아일리시의 감성 팝','팝','너 없이 더 행복해','sad',32,'Happier Than Ever',_binary '',1,31,30),(61,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','테일러 스위프트의 강렬한 팝','팝','내가 문제야','angry',1,'Anti-Hero',_binary '',1,27,26),(62,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','아이유의 느린 팝','팝','꽃처럼 피어나','boring',856,'Blueming',_binary '\0',2,36,2),(63,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','박재범의 부드러운 팝','팝','너와 함께하고 싶어','normal',84,'All I Wanna Do',_binary '',1,17,17),(64,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','레드벨벳의 밝은 팝','팝','우리의 왕국에서','happy',8,'Queendom',_binary '',1,42,8),(65,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','제이홉의 밝은 힙합','힙합&랩','내 희망의 세계로','happy',78,'Hope World',_binary '',1,15,15),(66,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','지코의 감성 힙합','힙합&랩','나도 사람일 뿐이야','sad',746,'Human',_binary '',1,16,16),(67,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','제이홉의 강렬한 힙합','힙합&랩','더 강하게 나아가','angry',54,'MORE',_binary '',1,49,15),(68,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','제이홉의 느린 힙합','힙합&랩','꿈속을 떠돌아','boring',54,'Daydream',_binary '\0',2,15,15),(69,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','드레이크의 자연스러운 힙합','힙합&랩','모든 건 운명이야','normal',5,'God’s Plan',_binary '',1,63,28),(70,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','스트레이키즈의 강렬한 힙합','힙합&랩','독처럼 퍼져','angry',43,'VENOM',_binary '\0',2,45,11),(71,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','에픽하이의 감성 힙합','힙합&랩','모든 시작은 여기서','sad',12,'Lesson Zero',_binary '',1,58,36),(72,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','드레이크의 밝은 힙합','힙합&랩','너무 섹시해','happy',35,'Way 2 Sexy',_binary '',1,29,28),(73,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','NCT의 빠른 힙합','힙합&랩','불타는 속도로','angry',84,'Fire Truck',_binary '\0',2,7,7),(74,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','에픽하이의 느린 힙합','힙합&랩','진짜 이야기야','boring',68,'Based On True Story',_binary '\0',2,24,36),(75,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','지코의 자연스러운 힙합','힙합&랩','여름이 싫어','normal',74,'Summer Hate',_binary '',1,50,16),(76,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','방탄소년단의 경쾌한 재즈','재즈','밝은 리듬으로 춤을 춰','happy',6,'Dynamite (Jazz Ver.)',_binary '',1,35,1),(77,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','아이유의 감성 재즈','재즈','너에게 전하는 재즈 선율','sad',54,'Love Poem (Jazz Remix)',_binary '',1,36,2),(78,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','블랙핑크의 펑키 재즈','재즈','강렬하게 물어뜯는 재즈','angry',62,'Pink Venom (Jazz Funk)',_binary '',1,37,3),(79,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','방탄소년단의 느린 재즈','재즈','회색빛 속에서','boring',15,'Blue & Grey (Jazz Ballad)',_binary '\0',3,35,1),(80,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','이하이의 자연스러운 재즈','재즈','부드러운 재즈 속에서','normal',21,'H.S.K.T.',_binary '\0',3,20,20),(81,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','세븐틴의 퓨전 재즈','재즈','운명처럼 스며들어','happy',21,'FATE (Jazz Fusion)',_binary '',1,6,6),(82,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','이하이의 감미로운 재즈','재즈','너만이 내 전부야','sad',5,'ONLY (Jazz Ver.)',_binary '',1,20,20),(83,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','르세라핌의 강렬한 재즈','재즈','용서받지 못한 재즈','angry',4,'UNFORGIVEN (Jazz Remix)',_binary '',1,48,14),(84,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','에이핑크의 느린 재즈','재즈','추억 속으로 되감기','boring',869,'Rewind (Jazz Lounge)',_binary '\0',3,9,9),(85,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','지코의 자연스러운 재즈','재즈','사랑을 걸어볼까','normal',5,'Dare to Love (Jazz Ver.)',_binary '',1,16,16),(86,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','빌리 아일리시의 재즈','재즈','보사노바 리듬 속에서','happy',0,'Billie Bossa Nova',_binary '\0',2,31,30),(87,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','트와이스의 클래식 스타일','클래식','사랑을 실험하는 선율','happy',321,'SCIENTIST (Classical Remix)',_binary '',1,5,5),(88,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','태연의 감성 클래식','클래식','너에게 끌려가는 현악','sad',32,'Gravity (Classical Strings)',_binary '\0',2,19,19),(89,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','르세라핌의 강렬한 클래식','클래식','신화 속의 격정','angry',1,'Eve, Psyche & The Bluebeard’s wife (Classical)',_binary '\0',2,48,14),(90,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','빌리 아일리시의 느린 클래식','클래식','너 없이 더 행복한 피아노','boring',5,'Happier Than Ever (Classical Piano)',_binary '',1,31,30),(91,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','아이유의 자연스러운 클래식','클래식','봄바람처럼 흐르는 선율','normal',6,'LILAC (Classical Ver.)',_binary '',1,2,2),(92,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','레드벨벳의 밝은 클래식','클래식','우리의 왕국에서 울리는 현','happy',4,'Queendom (Classical Strings)',_binary '',1,42,8),(93,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','아이유의 감성 클래식','클래식','너에게 전하는 클래식 시','sad',521,'Love Poem (Classical Remix)',_binary '',1,36,2),(94,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','블랙핑크의 클래식 스타일','클래식','강렬하게 울리는 현악','angry',21,'Pink Venom (Classical Ver.)',_binary '',1,37,3),(95,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','방탄소년단의 느린 클래식','클래식','회색빛 속 피아노','boring',21,'Blue & Grey (Classical Piano)',_binary '\0',3,35,1),(96,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','방탄소년단의 자연스러운 클래식','클래식','밝은 빛으로 채운 현악','normal',2,'Dynamite (Classical Strings)',_binary '',1,35,1),(97,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','ITZY의 밝은 클래식','클래식','자유롭게 날아오르는 선율','happy',12,'SNEAKERS (Classical Remix)',_binary '',1,12,12),(98,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','트와이스의 강렬한 전자음악','전자음악','멈출 수 없어','happy',15,'I CAN’T STOP ME',_binary '',1,39,5),(99,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','더 위켄드의 감성 전자음악','전자음악','불타는 속도로','sad',4,'Gasoline',_binary '\0',2,32,31),(100,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','테일러 스위프트의 강렬한 전자음악','전자음악','네가 나를 이렇게 만들었어','angry',54,'Look What You Made Me Do',_binary '\0',2,61,26),(101,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','더 위켄드의 느린 전자음악','전자음악','나는 스타야','boring',6,'Starboy',_binary '',1,66,31),(102,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','르세라핌의 자연스러운 전자음악','전자음악','신화 속의 힘','normal',498,'The Hydra',_binary '\0',2,14,14),(103,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','ITZY의 신나는 전자음악','전자음악','빠르게 스쳐가','happy',2154,'SWIPE',_binary '\0',2,46,12),(104,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','빌리 아일리시의 감성 전자음악','전자음악','내가 나쁜 놈이야','sad',21,'bad guy',_binary '',1,65,30),(105,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','ITZY의 강렬한 전자음악','전자음악','속도를 올려','angry',21,'RACER',_binary '\0',2,12,12),(106,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','NCT의 느린 전자음악','전자음악','게임 속을 헤매','boring',5,'Arcade',_binary '\0',3,7,7),(107,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','빌리 아일리시의 자연스러운 전자음악','전자음악','너와의 끌림','normal',4,'Oxytocin',_binary '\0',3,31,30),(108,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','트와이스의 강렬한 전자음악','전자음악','천국 속 지옥','angry',7,'HELL IN HEAVEN',_binary '\0',2,39,5),(109,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','더 위켄드의 신나는 전자음악','전자음악','모든 걸 바쳐','happy',7,'Sacrifice',_binary '\0',3,32,31),(110,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','뉴진스의 밝은 기타 리믹스','기타','너에게 집중해','happy',10,'Attention (Guitar Remix)',_binary '',1,13,13),(111,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','태연의 감성 기타','기타','너에게 끌려가는 기타','sad',4444,'Gravity (Acoustic Guitar)',_binary '\0',2,19,19),(112,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','제이홉의 강렬한 기타','기타','불타는 열정의 솔로','angry',22,'Arson (Guitar Solo)',_binary '\0',2,49,15),(113,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','마마무의 느린 기타','기타','별빛 아래 느린 선율','boring',4,'Starry Night (Acoustic Guitar)',_binary '\0',2,10,10),(114,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','박재범의 자연스러운 기타','기타','몸이 부르는 소리','normal',62,'Body Call (Guitar Ver.)',_binary '',1,51,17),(115,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','뉴진스의 밝은 기타','기타','너 앞에서 수줍어','happy',1,'Super Shy (Guitar Remix)',_binary '',1,47,13),(116,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','이하이의 감성 기타','기타','너만이 내 전부야','sad',53,'ONLY (Acoustic Guitar)',_binary '',1,20,20),(117,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','르세라핌의 강렬한 기타','기타','부서질수록 강해지는 솔로','angry',83,'ANTIFRAGILE (Guitar Solo)',_binary '',1,14,14),(118,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','아이유의 느린 기타','기타','꽃처럼 피어나는 기타','boring',7,'Blueming (Guitar Mix)',_binary '\0',2,36,2),(119,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','태연의 자연스러운 기타','기타','새로운 시작의 선율','normal',32,'Something New (Guitar Ver.)',_binary '',1,53,19),(120,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','방탄소년단의 경쾌한 기타','기타','밝은 빛의 기타 사운드','happy',1,'Dynamite (Guitar Remix)',_binary '',1,35,1),(121,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','박재범의 감성 기타','기타','추억 속으로 돌아가','sad',458,'Rewind (Acoustic Guitar)',_binary '\0',2,51,17),(122,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','방탄소년단의 강렬한 록','록','나를 걸러낼 수 없어','happy',33,'Filter (Rock Ver.)',_binary '\0',3,1,1),(123,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','방탄소년단의 감성 록','록','어둠 속에서 울부짖어','sad',123,'Black Swan (Rock Remix)',_binary '\0',2,1,1),(124,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','방탄소년단의 파워풀 록','록','내가 나를 이끌어','angry',215,'ON (Heavy Rock)',_binary '',1,1,1),(125,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','방탄소년단의 느린 록','록','나만의 시간 속에서','boring',28,'My Time (Rock Ballad)',_binary '\0',4,1,1),(126,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','블랙핑크의 록 스타일','록','사랑에 아파','sad',32,'Lovesick Girls (Rock Ver.)',_binary '\0',2,1,1),(127,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','블랙핑크의 강렬한 록','록','어떻게 생각해?','angry',321,'How You Like That (Rock Remix)',_binary '',1,3,3),(128,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','트와이스의 신나는 록','록','멈출 수 없어','happy',321,'I CAN’T STOP ME (Rock Ver.)',_binary '',1,3,3),(129,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','엑소의 느린 록','록','너와의 낙원','boring',321,'Paradise (Rock Ballad)',_binary '\0',2,39,5),(130,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','엑소의 자연스러운 록','록','문제 속에서','normal',1015,'Trouble (Rock Mix)',_binary '\0',2,4,4),(131,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','뉴진스의 밝은 록','록','너만 보면 설레어','happy',895,'Hype Boy (Rock Ver.)',_binary '',1,38,4),(132,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','뉴진스의 강렬한 록','록','너에게 집중해','angry',12,'Attention (Heavy Rock)',_binary '',1,13,13),(133,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','뉴진스의 느린 록','록','달콤한 너에게','boring',231,'Cookie (Rock Ballad)',_binary '\0',3,13,13),(134,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','뉴진스의 자연스러운 록','록','너 앞에서 수줍어','normal',21,'Super Shy (Rock Remix)',_binary '',1,13,13),(135,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','아이유의 밝은 팝','팝','즐거운 하루를 위한 멜로디','happy',58,'Jam Jam',_binary '\0',2,47,13),(136,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','이하이의 감성 팝','팝','너만이 내 전부야','sad',65,'ONLY',_binary '',1,2,2),(137,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','르세라핌의 강렬한 팝','팝','부서질수록 강해져','angry',1,'ANTIFRAGILE',_binary '',1,20,20),(138,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','태연의 느린 팝','팝','너에게 끌려가','boring',32,'Gravity',_binary '\0',2,14,14),(139,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','태연의 자연스러운 팝','팝','새로운 시작을 위해','normal',0,'Something New',_binary '',1,19,19),(140,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','에드 시런의 경쾌한 팝','팝','너와 함께 떨려','happy',4,'Shivers',_binary '',1,53,19),(141,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','아델의 감성 팝','팝','나를 쉽게 대해줘','sad',76,'Easy On Me',_binary '',1,26,25),(142,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','아델의 강렬한 팝','팝','깊은 곳으로 굴러가','angry',846,'Rolling in the Deep',_binary '',1,30,29),(143,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','트와이스의 느린 팝','팝','달빛 아래서','boring',1,'MOONLIGHT',_binary '\0',2,64,29),(144,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','박재범의 자연스러운 팝','팝','너를 좋아해','normal',231,'Me Like Yuh',_binary '\0',2,5,5),(145,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','뉴진스의 밝은 팝','팝','너 앞에서 수줍어','happy',35,'Super Shy',_binary '',1,17,17),(146,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','뉴진스의 감성 팝','팝','아픔 속에서','sad',7,'Hurt',_binary '\0',3,47,13),(147,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','뉴진스의 강렬한 팝','팝','언제 도착해?','angry',0,'ETA',_binary '\0',2,13,13),(148,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','뉴진스의 자연스러운 팝','팝','빨리 와줘','normal',73,'ASAP',_binary '\0',3,47,13),(149,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','비오의 밝은 힙합','힙합&랩','바다를 향해 달려','happy',4,'Malibu',_binary '',1,47,13),(150,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','에픽하이의 감성 힙합','힙합&랩','미리 말하지 마','sad',444,'In Spoiler',_binary '\0',2,25,24),(151,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','드레이크의 강렬한 힙합','힙합&랩','칼처럼 날카롭게','angry',5,'Knife Talk',_binary '\0',2,58,36),(152,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','창모의 느린 힙합','힙합&랩','구름 위를 날아','boring',0,'Nimbus',_binary '\0',3,29,28),(153,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','지코의 자연스러운 힙합','힙합&랩','만화처럼 살아','normal',23,'Cartoon',_binary '\0',2,23,23),(154,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','스트레이키즈의 밝은 힙합','힙합&랩','너를 사랑한다고 말해','happy',23,'CASE 143',_binary '',1,50,16),(155,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','지코의 강렬한 힙합','힙합&랩','위험 속으로 뛰어들어','angry',4,'Daredevil',_binary '\0',2,11,11),(156,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','제이홉의 신나는 힙합','힙합&랩','하늘을 날아','happy',33,'Airplane',_binary '\0',3,16,16),(157,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','비오의 감성 힙합','힙합&랩','홀로 서 있는 늑대','sad',242,'Lone Wolf',_binary '\0',2,15,15),(158,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','NCT의 강렬한 힙합','힙합&랩','시원한 음료처럼','angry',245,'Lemonade',_binary '\0',2,59,24),(159,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','비오의 느린 힙합','힙합&랩','계속 세고 있어','boring',3,'Countin',_binary '\0',2,41,7),(160,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','포스트 말론의 자연스러운 힙합','힙합&랩','내 이름은 굳건해','normal',2,'Reputation',_binary '',1,25,24),(161,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','NCT의 라이브 힙합','힙합&랩','너를 붙잡고 싶어','happy',243,'Sticker (Live Ver.)',_binary '',1,34,33),(162,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','창모의 밝은 힙합','힙합&랩','휴일처럼 즐겨','happy',21,'Holyday',_binary '\0',2,41,7),(163,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','저스틴 비버의 경쾌한 재즈','팝','너와 함께라면 달콤해','happy',1,'Peaches (Jazz Ver.)',_binary '',1,23,23),(164,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','빌리 아일리시의 감성 재즈','재즈','너 없이 더 행복한 재즈','sad',0,'Happier Than Ever (Jazz Remix)',_binary '',1,28,27),(165,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','테일러 스위프트의 펑키 재즈','재즈','내가 문제라는 재즈','angry',735,'Anti-Hero (Jazz Funk)',_binary '',1,31,30),(166,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','아이유의 느린 재즈','재즈','꽃처럼 피어나는 재즈','boring',23,'Blueming (Jazz Ballad)',_binary '\0',2,27,26),(167,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','레드벨벳의 자연스러운 재즈','재즈','우리의 왕국에서 흐르는 재즈','normal',6,'Queendom (Jazz Ver.)',_binary '',1,36,2),(168,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','ITZY의 밝은 재즈','재즈','자유롭게 날아오르는 재즈','happy',859,'SNEAKERS (Jazz Pop)',_binary '',1,42,8),(169,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','태연의 감성 재즈','재즈','너 없이 나를 상상할 수 없는 재즈','sad',6,'INVU (Jazz Remix)',_binary '',1,12,12),(170,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','블랙핑크의 강렬한 재즈','재즈','어떻게 생각해? 재즈 스타일','angry',463,'How You Like That (Jazz Funk)',_binary '',1,19,19),(171,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','블랙핑크의 느린 재즈','재즈','사랑에 아픈 재즈','boring',21,'Lovesick Girls (Jazz Ballad)',_binary '\0',2,3,3),(172,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','박재범의 부드러운 재즈','재즈','너와 함께하고 싶은 재즈','normal',32,'All I Wanna Do (Jazz Ver.)',_binary '',1,3,3),(173,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','트와이스의 경쾌한 재즈','재즈','사랑을 실험하는 재즈','happy',1,'SCIENTIST (Jazz Pop)',_binary '',1,17,17),(174,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','아델의 감성 재즈','재즈','나를 쉽게 대해주는 재즈','sad',1,'Easy On Me (Jazz Remix)',_binary '',1,5,5),(175,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','아델의 강렬한 재즈','재즈','깊은 곳으로 굴러가는 재즈','angry',321,'Rolling in the Deep (Jazz Funk)',_binary '',1,30,29),(176,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','트와이스의 느린 재즈','재즈','달빛 아래 흐르는 재즈','boring',3,'MOONLIGHT (Jazz Ballad)',_binary '\0',2,64,29),(177,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','방탄소년단의 경쾌한 클래식','클래식','밝은 빛으로 채운 클래식','happy',32,'Dynamite (Classical Remix)',_binary '',1,5,5),(178,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','방탄소년단의 감성 클래식','클래식','어둠 속의 현악','sad',1,'Black Swan (Classical Strings)',_binary '\0',2,35,1),(179,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','방탄소년단의 강렬한 클래식','클래식','내가 나를 이끄는 선율','angry',12,'ON (Classical Ver.)',_binary '',1,1,1),(180,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','방탄소년단의 느린 클래식','클래식','나만의 시간 속 피아노','boring',4,'My Time (Classical Piano)',_binary '\0',4,1,1),(181,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','방탄소년단의 자연스러운 클래식','클래식','나를 걸러내는 현악','normal',23,'Filter (Classical Strings)',_binary '\0',3,1,1),(182,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','뉴진스의 밝은 클래식','클래식','너만 보면 설레는 선율','happy',132,'Hype Boy (Classical Remix)',_binary '',1,1,1),(183,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','뉴진스의 감성 클래식','클래식','너에게 집중하는 현악','sad',4,'Attention (Classical Strings)',_binary '',1,13,13),(184,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','뉴진스의 느린 클래식','클래식','달콤한 너에게 바치는 피아노','boring',43,'Cookie (Classical Piano)',_binary '\0',3,13,13),(185,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','뉴진스의 자연스러운 클래식','클래식','너 앞에서 수줍은 클래식','normal',5,'Super Shy (Classical Ver.)',_binary '',1,13,13),(186,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','블랙핑크의 강렬한 클래식','클래식','모든 걸 끝내는 현악','angry',32,'Shut Down (Classical Strings)',_binary '\0',2,47,13),(187,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','블랙핑크의 감성 클래식','클래식','사랑에 아픈 클래식','sad',321,'Lovesick Girls (Classical Remix)',_binary '\0',2,37,3),(188,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','트와이스의 밝은 클래식','클래식','멈출 수 없는 선율','happy',321,'I CAN’T STOP ME (Classical Ver.)',_binary '',1,3,3),(189,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','엑소의 느린 클래식','클래식','너와의 낙원 속 피아노','boring',321,'Paradise (Classical Piano)',_binary '\0',2,39,5),(190,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','엑소의 자연스러운 클래식','클래식','문제 속에서 흐르는 현악','normal',3213,'Trouble (Classical Strings)',_binary '\0',2,4,4),(191,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','NCT의 강렬한 전자음악','전자음악','너를 붙잡고 싶어','angry',213,'Sticker',_binary '',1,38,4),(192,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','NCT의 신나는 전자음악','전자음악','시원한 음료처럼','happy',12,'Lemonade',_binary '\0',2,41,7),(193,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','NCT의 빠른 전자음악','전자음악','불타는 속도로','angry',55,'Fire Truck',_binary '\0',2,41,7),(194,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','NCT의 느린 전자음악','전자음악','로딩 속에서','boring',56,'Buffering',_binary '\0',3,7,7),(195,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','NCT의 자연스러운 전자음악','전자음악','아침을 깨우는 소리','normal',56,'Breakfast',_binary '\0',3,7,7),(196,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','ITZY의 신나는 전자음악','전자음악','미친 듯이 달려','happy',77,'LOCO',_binary '',1,41,7),(197,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','빌리 아일리시의 감성 전자음악','전자음악','친구를 묻어','sad',77,'bury a friend',_binary '\0',2,46,12),(198,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','테일러 스위프트의 강렬한 전자음악','전자음악','내가 나쁜 짓을 했어','angry',222,'I Did Something Bad',_binary '\0',3,65,30),(199,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','트와이스의 느린 전자음악','전자음악','뭐라도 말해줘','boring',652,'Say Something',_binary '\0',3,61,26),(200,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','더 위켄드의 자연스러운 전자음악','전자음악','새로운 시작의 긴 여운','normal',3,'Dawn FM (Extended)',_binary '',1,39,5),(201,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','르세라핌의 강렬한 전자음악','전자음악','용서받지 못할 나','angry',3,'UNFORGIVEN',_binary '',1,32,31),(202,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','르세라핌의 신나는 전자음악','전자음악','신화 속의 격정','happy',21,'Eve, Psyche & The Bluebeard’s wife',_binary '\0',2,48,14),(203,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','르세라핌의 느린 전자음악','전자음악','돌아올 수 없는 곳','boring',123,'No-Return',_binary '\0',3,48,14),(204,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','선미의 감성 전자음악','전자음악','보라빛 밤 속으로','sad',53,'pporappippam',_binary '',1,48,14),(205,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','르세라핌의 자연스러운 전자음악','전자음악','미래로 달려가','normal',123,'Flash Forward',_binary '\0',3,52,18),(206,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','저스틴 비버의 밝은 기타','기타','너와 함께라면 달콤한 기타','happy',24,'Peaches (Guitar Remix)',_binary '',1,48,14),(207,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','아이유의 감성 기타','기타','너에게 전하는 기타 시','sad',33,'Love Poem (Acoustic Guitar)',_binary '',1,28,27),(208,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','블랙핑크의 강렬한 기타','기타','모든 걸 끝내는 솔로','angry',21,'Shut Down (Guitar Solo)',_binary '\0',2,36,2),(209,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','블랙핑크의 느린 기타','기타','사랑에 아픈 기타','boring',328,'Lovesick Girls (Guitar Mix)',_binary '\0',2,37,3),(210,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','레드벨벳의 자연스러운 기타','기타','우리의 왕국에서 흐르는 기타','normal',573,'Queendom (Acoustic Guitar)',_binary '',1,3,3),(211,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','트와이스의 밝은 기타','기타','사랑을 실험하는 기타','happy',12,'SCIENTIST (Guitar Remix)',_binary '',1,42,8),(212,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','아델의 감성 기타','기타','나를 쉽게 대해주는 기타','sad',321,'Easy On Me (Acoustic Guitar)',_binary '',1,5,5),(213,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','아델의 강렬한 기타','기타','깊은 곳으로 굴러가는 솔로','angry',123,'Rolling in the Deep (Guitar Solo)',_binary '',1,30,29),(214,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','빌리 아일리시의 느린 기타','기타','너 없이 더 행복한 기타','boring',35,'Happier Than Ever (Guitar Ver.)',_binary '',1,64,29),(215,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','에드 시런의 자연스러운 기타','기타','너와 함께 떨리는 기타','normal',33,'Shivers (Guitar Remix)',_binary '',1,31,30),(216,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','트와이스의 밝은 기타','기타','멈출 수 없는 기타 선율','happy',5,'I CAN’T STOP ME (Guitar Ver.)',_binary '',1,26,25),(217,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','방탄소년단의 감성 기타','기타','어둠 속에서 흐르는 기타','sad',87,'Black Swan (Guitar Remix)',_binary '\0',2,39,5),(218,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','방탄소년단의 강렬한 기타','기타','내가 나를 이끄는 솔로','angry',32,'ON (Guitar Solo)',_binary '',1,1,1),(219,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','방탄소년단의 느린 기타','기타','나만의 시간 속 기타','boring',1,'My Time (Acoustic Guitar)',_binary '\0',4,1,1),(220,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','방탄소년단의 자연스러운 기타','기타','나를 걸러내는 기타','normal',156,'Filter (Guitar Remix)',_binary '\0',3,1,1),(221,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','NCT의 신나는 록','록','시원한 음료처럼 흔들어','happy',8,'Lemonade (Rock Ver.)',_binary '\0',2,1,1),(222,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','NCT의 감성 록','록','불타는 속도로 굴러가','sad',75,'Fire Truck (Rock Remix)',_binary '\0',2,41,7),(223,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','NCT의 강렬한 록','록','너를 붙잡는 강렬한 소리','angry',1,'Sticker (Heavy Rock)',_binary '',1,7,7),(224,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','NCT의 느린 록','록','로딩 속에서 멈춘 시간','boring',555,'Buffering (Rock Ballad)',_binary '\0',3,41,7),(225,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','NCT의 자연스러운 록','록','아침을 깨우는 록 선율','normal',32,'Breakfast (Acoustic Rock)',_binary '\0',3,7,7),(226,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','스트레이키즈의 강렬한 록','록','미친 듯이 달리는 록','angry',12,'MANIAC (Rock Ver.)',_binary '',1,41,7),(227,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','스트레이키즈의 신나는 록','록','독처럼 퍼지는 록 사운드','happy',132,'VENOM (Rock Remix)',_binary '\0',2,45,11),(228,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','스트레이키즈의 느린 록','록','얼어붙은 순간 속에서','boring',436,'Freeze (Rock Ballad)',_binary '\0',3,45,11),(229,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','스트레이키즈의 감성 록','록','외로운 거리 위에서','sad',4,'Lonely St. (Acoustic Rock)',_binary '\0',3,45,11),(230,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','포스트 말론의 자연스러운 록','록','미친 듯한 록 사운드','normal',321,'Psycho (Rock Ver.)',_binary '\0',2,45,11),(231,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','포스트 말론의 강렬한 록','록','갇힌 공간에서 울부짖어','angry',21,'Cooped Up (Heavy Rock)',_binary '\0',2,68,33),(232,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','제이홉의 밝은 록','록','내 희망의 세계로 날아','happy',3,'Hope World (Rock Remix)',_binary '',1,34,33),(233,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','제이홉의 느린 록','록','꿈속을 떠도는 록 발라드','boring',84,'Daydream (Rock Ballad)',_binary '\0',2,15,15),(234,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','제이홉의 자연스러운 록','록','하늘을 나는 록 선율','normal',352,'Airplane (Acoustic Rock)',_binary '\0',3,15,15),(235,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','테일러 스위프트의 밝은 팝','팝','보라빛 안개 속에서','happy',18,'Lavender Haze',_binary '\0',2,15,15),(236,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','아델의 감성 팝','팝','마음껏 울어','sad',97,'Cry Your Heart Out',_binary '\0',2,27,26),(237,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','아리아나 그란데의 강렬한 팝','팝','더 이상 눈물은 없어','angry',0,'no tears left to cry',_binary '',1,30,29),(238,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','테일러 스위프트의 느린 팝','팝','해변 위 눈처럼','boring',5,'Snow On The Beach',_binary '\0',3,67,32),(239,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','아리아나 그란데의 자연스러운 팝','팝','너와 나의 계산','normal',32,'34+35',_binary '\0',2,27,26),(240,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','저스틴 비버의 밝은 팝','팝','곁에 있어줘','happy',1,'Stay',_binary '\0',3,33,32),(241,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','저스틴 비버의 감성 팝','팝','버텨줘','sad',111,'Hold On',_binary '\0',2,28,27),(242,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','스트레이키즈의 강렬한 팝','팝','너를 사랑한다고 말해','angry',313,'CASE 143',_binary '',1,28,27),(243,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','스트레이키즈의 느린 팝','팝','너의 비밀을 알려줘','boring',2,'Give Me Your TMI',_binary '\0',2,11,11),(244,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','스트레이키즈의 자연스러운 팝','팝','너의 맛을 느껴','normal',58,'Taste',_binary '\0',3,11,11),(245,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','마마무의 밝은 팝','팝','즐겁게 춤을 춰','happy',473,'Dingga',_binary '',1,11,11),(246,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','헤이즈의 감성 팝','팝','우연히 일어난 일','sad',53,'Happen',_binary '',1,44,10),(247,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','마마무의 강렬한 팝','팝','강렬하게 빛나','angry',777,'ILLELLA',_binary '',1,22,22),(248,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','마마무의 자연스러운 팝','팝','리듬에 맞춰','normal',132,'1,2,3 Eoi!',_binary '\0',2,10,10),(249,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','드레이크의 밝은 힙합','힙합&랩','내 감정 속에서','happy',13,'In My Feelings',_binary '\0',2,10,10),(250,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','에픽하이의 감성 힙합','힙합&랩','너에게 지옥을 빌어','sad',5,'Wish You Hell',_binary '\0',3,63,28),(251,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','드레이크의 강렬한 힙합','힙합&랩','모두가 나를 원해','angry',9,'Girls Want Girls',_binary '\0',3,58,36),(252,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','창모의 느린 힙합','힙합&랩','느린 심장 박동','boring',5,'Slow Heartbeat',_binary '\0',3,29,28),(253,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','지코의 자연스러운 힙합','힙합&랩','너는 할 수 없어','normal',321,'No You Can’t',_binary '\0',3,23,23),(254,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','스트레이키즈의 느린 힙합','힙합&랩','차분하게 즐겨','boring',569,'Chill',_binary '\0',3,50,16),(255,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','에픽하이의 신나는 힙합','힙합&랩','내가 빛나는 순간','happy',54,'Rosario (Live Ver.)',_binary '',1,11,11),(256,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','창모의 강렬한 힙합','힙합&랩','하늘을 가르는 소리','angry',321,'METEOR (Remix)',_binary '',1,24,36),(257,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','비오의 밝은 힙합','힙합&랩','여름의 추억 속으로','happy',56,'Summer Nostalgia',_binary '',1,23,23),(258,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','창모의 강렬한 힙합','힙합&랩','도망쳐 멀리','angry',2,'Runaway',_binary '',1,59,24),(259,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','창모의 감성 힙합','힙합&랩','어두운 방 속에서','sad',13,'Darkroom',_binary '\0',2,57,23),(260,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','창모의 느린 힙합','힙합&랩','악몽 속을 헤매','boring',10,'Nightmare',_binary '\0',3,57,23),(261,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','제이홉의 강렬한 힙합','힙합&랩','불을 질러','angry',6,'Arson',_binary '\0',2,57,23),(262,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','제이홉의 자연스러운 힙합','힙합&랩','만약에 내가','normal',0,'What If',_binary '\0',3,49,15),(263,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','저스틴 비버의 경쾌한 재즈','재즈','곁에 있어주는 재즈','happy',1,'Stay (Jazz Ver.)',_binary '\0',3,49,15),(264,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','저스틴 비버의 감성 재즈','재즈','버텨주는 재즈 선율','sad',99,'Hold On (Jazz Remix)',_binary '\0',2,28,27),(265,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','스트레이키즈의 강렬한 재즈','재즈','너를 사랑한다고 말하는 재즈','angry',1,'CASE 143 (Jazz Funk)',_binary '',1,28,27),(266,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','스트레이키즈의 느린 재즈','재즈','너의 비밀을 알려주는 재즈','boring',21,'Give Me Your TMI (Jazz Ballad)',_binary '\0',2,11,11),(267,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','스트레이키즈의 자연스러운 재즈','재즈','너의 맛을 느끼는 재즈','normal',21,'Taste (Jazz Ver.)',_binary '\0',3,11,11),(268,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','마마무의 밝은 재즈','재즈','즐겁게 춤추는 재즈','happy',21,'Dingga (Jazz Pop)',_binary '',1,11,11),(269,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','헤이즈의 감성 재즈','재즈','우연히 일어난 재즈 선율','sad',5,'Happen (Jazz Remix)',_binary '',1,44,10),(270,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','마마무의 강렬한 재즈','재즈','강렬하게 빛나는 재즈','angry',4,'ILLELLA (Jazz Funk)',_binary '',1,22,22),(271,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','마마무의 느린 재즈','재즈','리듬에 맞춘 느린 재즈','boring',79,'1,2,3 Eoi! (Jazz Ballad)',_binary '\0',2,10,10),(272,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','마마무의 자연스러운 재즈','재즈','별빛 아래 흐르는 재즈','normal',4,'Starry Night (Jazz Ver.)',_binary '\0',2,10,10),(273,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','테일러 스위프트의 밝은 재즈','재즈','보라빛 안개 속 재즈','happy',6,'Lavender Haze (Jazz Remix)',_binary '\0',2,10,10),(274,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','아델의 감성 재즈','재즈','마음껏 우는 재즈','sad',13,'Cry Your Heart Out (Jazz Ver.)',_binary '\0',2,27,26),(275,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','아리아나 그란데의 강렬한 재즈','재즈','눈물 없는 강렬한 재즈','angry',21,'no tears left to cry (Jazz Funk)',_binary '',1,30,29),(276,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','테일러 스위프트의 느린 재즈','재즈','해변 위 눈처럼 흐르는 재즈','boring',3,'Snow On The Beach (Jazz Ballad)',_binary '\0',3,67,32),(277,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','NCT의 밝은 클래식','클래식','시원한 음료처럼 흐르는 현악','happy',76,'Lemonade (Classical Strings)',_binary '\0',2,27,26),(278,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','NCT의 감성 클래식','클래식','불타는 속도의 피아노','sad',65,'Fire Truck (Classical Piano)',_binary '\0',2,41,7),(279,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','NCT의 강렬한 클래식','클래식','너를 붙잡는 클래식 선율','angry',23,'Sticker (Classical Ver.)',_binary '',1,7,7),(280,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','NCT의 느린 클래식','클래식','로딩 속에서 흐르는 피아노','boring',1,'Buffering (Classical Piano)',_binary '\0',3,41,7),(281,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','NCT의 자연스러운 클래식','클래식','아침을 깨우는 현악','normal',322,'Breakfast (Classical Strings)',_binary '\0',3,7,7),(282,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','스트레이키즈의 강렬한 클래식','클래식','미친 듯이 달리는 클래식','angry',231,'MANIAC (Classical Remix)',_binary '',1,41,7),(283,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','스트레이키즈의 신나는 클래식','클래식','독처럼 퍼지는 현악','happy',71,'VENOM (Classical Strings)',_binary '\0',2,45,11),(284,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','스트레이키즈의 느린 클래식','클래식','얼어붙은 순간 속 피아노','boring',13,'Freeze (Classical Piano)',_binary '\0',3,45,11),(285,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','스트레이키즈의 감성 클래식','클래식','외로운 거리 위의 클래식','sad',13,'Lonely St. (Classical Ver.)',_binary '\0',3,45,11),(286,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','제이홉의 밝은 클래식','클래식','내 희망의 세계로 흐르는 현악','happy',23,'Hope World (Classical Strings)',_binary '',1,45,11),(287,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','제이홉의 느린 클래식','클래식','꿈속을 떠도는 피아노','boring',233,'Daydream (Classical Piano)',_binary '\0',2,15,15),(288,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','제이홉의 자연스러운 클래식','클래식','하늘을 나는 클래식 선율','normal',10,'Airplane (Classical Remix)',_binary '\0',3,15,15),(289,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','제이홉의 강렬한 클래식','클래식','불을 질러 흐르는 현악','angry',49,'Arson (Classical Strings)',_binary '\0',2,15,15),(290,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','제이홉의 감성 클래식','클래식','만약에 내가 피아노로','sad',8,'What If (Classical Piano)',_binary '\0',3,49,15),(291,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','제이홉의 강렬한 전자음악','전자음악','더 강하게 나아가','angry',65,'MORE',_binary '',1,49,15),(292,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','제이홉의 신나는 전자음악','전자음악','멈추지 마','happy',4,'STOP',_binary '\0',3,49,15),(293,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','선미의 감성 전자음악','전자음악','날 부르는 강렬한 전자음','sad',321,'Siren (Electronic Remix)',_binary '',1,49,15),(294,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','선미의 느린 전자음악','전자음악','너에게 중독돼','boring',8,'Addict',_binary '\0',2,18,18),(295,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','선미의 자연스러운 전자음악','전자음악','검은 진주처럼 빛나','normal',7,'Black Pearl',_binary '\0',3,18,18),(296,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','엑소의 강렬한 전자음악','전자음악','너에게 집착하는 전자음','angry',66,'Obsession (Electronic Ver.)',_binary '',1,18,18),(297,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','엑소의 신나는 전자음악','전자음악','느낌에 저항하지 않는 리믹스','happy',586,'Don’t Fight the Feeling (Remix)',_binary '',1,38,4),(298,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','엑소의 감성 전자음악','전자음악','너에게 다가가고 싶어','sad',21,'Love Me Like This',_binary '\0',3,4,4),(299,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','엑소의 느린 전자음악','전자음악','상관없어','boring',56,'No Matter',_binary '\0',3,4,4),(300,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','엑소의 자연스러운 전자음악','전자음악','도망쳐 멀리','normal',21,'Runaway',_binary '\0',3,4,4),(301,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','ITZY의 강렬한 전자음악','전자음악','미친 듯이 달리는 리믹스','angry',323,'LOCO (Electronic Remix)',_binary '',1,4,4),(302,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','ITZY의 신나는 전자음악','전자음악','정말 운이 좋아','happy',44,'Sooo LUCKY',_binary '\0',3,46,12),(303,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','ITZY의 느린 전자음악','전자음악','거울 속 나를 봐','boring',21,'Mirror',_binary '\0',3,46,12),(304,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','더 위켄드의 감성 전자음악','전자음악','불타는 속도의 전자음','sad',23,'Gasoline (Electronic Ver.)',_binary '\0',2,46,12),(305,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','더 위켄드의 자연스러운 전자음악','전자음악','모든 천사가 무서워','normal',81,'Every Angel is Terrifying',_binary '\0',3,32,31),(306,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','테일러 스위프트의 밝은 기타','기타','보라빛 안개 속 기타','happy',21,'Lavender Haze (Guitar Remix)',_binary '\0',2,32,31),(307,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','아델의 감성 기타','기타','마음껏 우는 기타','sad',5,'Cry Your Heart Out (Acoustic Guitar)',_binary '\0',2,27,26),(308,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','아리아나 그란데의 강렬한 기타','기타','눈물 없는 강렬한 솔로','angry',91,'no tears left to cry (Guitar Solo)',_binary '',1,30,29),(309,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','테일러 스위프트의 느린 기타','기타','해변 위 눈처럼 흐르는 기타','boring',10,'Snow On The Beach (Guitar Ver.)',_binary '\0',3,67,32),(310,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','아리아나 그란데의 자연스러운 기타','기타','너와 나의 계산 속 기타','normal',10,'34+35 (Acoustic Guitar)',_binary '\0',2,27,26),(311,'https://d9k8tjx0yo0q5.cloudfront.net/music/m1.mp3','저스틴 비버의 밝은 기타','기타','곁에 있어주는 기타','happy',6,'Stay (Guitar Remix)',_binary '\0',3,33,32),(312,'https://d9k8tjx0yo0q5.cloudfront.net/music/m2.mp3','저스틴 비버의 감성 기타','기타','버텨주는 기타 선율','sad',5,'Hold On (Acoustic Guitar)',_binary '\0',2,28,27),(313,'https://d9k8tjx0yo0q5.cloudfront.net/music/m3.mp3','스트레이키즈의 강렬한 기타','기타','너를 사랑한다고 말하는 솔로','angry',7,'CASE 143 (Guitar Solo)',_binary '',1,28,27),(314,'https://d9k8tjx0yo0q5.cloudfront.net/music/m4.mp3','스트레이키즈의 느린 기타','기타','너의 비밀을 알려주는 기타','boring',9,'Give Me Your TMI (Guitar Ver.)',_binary '\0',2,11,11),(315,'https://d9k8tjx0yo0q5.cloudfront.net/music/m5.mp3','스트레이키즈의 자연스러운 기타','기타','너의 맛을 느끼는 기타','normal',8,'Taste (Acoustic Guitar)',_binary '\0',3,11,11),(316,'https://d9k8tjx0yo0q5.cloudfront.net/music/m6.mp3','마마무의 밝은 기타','기타','즐겁게 춤추는 기타','happy',22,'Dingga (Guitar Remix)',_binary '',1,11,11),(317,'https://d9k8tjx0yo0q5.cloudfront.net/music/m7.mp3','헤이즈의 감성 기타','기타','우연히 일어난 기타 선율','sad',555,'Happen (Acoustic Guitar)',_binary '',1,44,10),(318,'https://d9k8tjx0yo0q5.cloudfront.net/music/m8.mp3','마마무의 강렬한 기타','기타','강렬하게 빛나는 솔로','angry',42,'ILLELLA (Guitar Solo)',_binary '',1,22,22),(319,'https://d9k8tjx0yo0q5.cloudfront.net/music/m9.mp3','마마무의 느린 기타','기타','리듬에 맞춘 느린 기타','boring',12,'1,2,3 Eoi! (Guitar Ver.)',_binary '\0',2,10,10),(320,'https://d9k8tjx0yo0q5.cloudfront.net/music/m10.mp3','마마무의 자연스러운 기타','기타','여행 속에서 흐르는 기타','normal',54,'Travel',_binary '\0',3,10,10);
/*!40000 ALTER TABLE `music` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notice`
--

DROP TABLE IF EXISTS `notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notice` (
  `notice_id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) DEFAULT NULL,
  `indate` datetime DEFAULT CURRENT_TIMESTAMP,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`notice_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notice`
--

LOCK TABLES `notice` WRITE;
/*!40000 ALTER TABLE `notice` DISABLE KEYS */;
INSERT INTO `notice` VALUES (1,'서비스 점검 안내 - 3월 1일 오전 2시부터 4시까지 점검이 진행됩니다.','2025-02-16 15:16:50','서비스 점검 공지'),(2,'이벤트 당첨자 발표 - 2월 출석 이벤트 당첨자를 확인하세요!','2025-02-26 15:16:50','이벤트 당첨자 발표'),(3,'신규 업데이트 안내 - 스트리밍 품질이 향상되었습니다.','2025-02-27 15:16:50','업데이트 공지'),(4,'결제 시스템 점검 안내 - 3월 5일 오전 1시부터 3시까지 결제 기능이 일시 중단됩니다.','2025-02-26 15:16:50','결제 점검 공지'),(5,'신규 콘텐츠 추가 - 인기 드라마 및 영화가 추가되었습니다.','2025-02-21 15:16:50','신규 콘텐츠 안내'),(6,'고객센터 운영 시간 변경 - 평일 오전 9시부터 오후 6시까지 운영됩니다.','2025-02-01 15:16:50','고객센터 운영 변경'),(7,'앱 업데이트 공지 - 최신 버전으로 업데이트 후 이용해주세요.','2025-02-06 15:16:50','앱 업데이트 안내'),(8,'무료 체험 이벤트 시작 - 신규 가입자는 7일간 무료 체험이 가능합니다.','2025-02-27 15:16:50','무료 체험 이벤트'),(9,'서비스 장애 복구 안내 - 오전 10시 발생한 장애가 복구되었습니다.','2025-01-31 15:16:50','서비스 장애 복구'),(10,'이용약관 변경 안내 - 3월 10일부터 새로운 이용약관이 적용됩니다.','2025-02-11 15:16:50','이용약관 변경 공지');
/*!40000 ALTER TABLE `notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `paymenet_id` int NOT NULL AUTO_INCREMENT,
  `amount` int NOT NULL,
  `cancel_reason` varchar(255) DEFAULT NULL,
  `cancel_status` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `fail_reason` varchar(255) DEFAULT NULL,
  `gift_to_id` varchar(255) DEFAULT NULL,
  `is_paid` bit(1) NOT NULL,
  `membership_count` int DEFAULT NULL,
  `membership_user_id` int DEFAULT NULL,
  `order_id` varchar(255) NOT NULL,
  `order_name` varchar(255) NOT NULL,
  `pay_count` int DEFAULT NULL,
  `payment_key` varchar(255) DEFAULT NULL,
  `member_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`paymenet_id`),
  UNIQUE KEY `UKmf7n8wo2rwrxsd6f3t9ub2mep` (`order_id`),
  KEY `FK4pswry4r5sx6j57cdeulh1hx8` (`member_id`),
  CONSTRAINT `FK4pswry4r5sx6j57cdeulh1hx8` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,4000,NULL,NULL,'2025-02-27 15:18:52.879000',NULL,'',_binary '',0,0,'1-1740637121327','무제한 듣기',0,'tgen_20250227151852veZF9','test'),(2,8000,NULL,NULL,'2025-02-27 15:19:47.956000',NULL,'abc1',_binary '',0,0,'4-1740637180712','무제한 듣기 1개월',0,'tgen_20250227151948r7xV1','test'),(3,4000,NULL,NULL,'2025-02-28 21:01:56.804000',NULL,'',_binary '',0,0,'1-1740744114323','무제한 듣기',0,'tgen_20250228210157EgNg8','3936484235');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_music`
--

DROP TABLE IF EXISTS `payment_music`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_music` (
  `payment_id` int NOT NULL,
  `music_id` int DEFAULT NULL,
  KEY `FKfydamyw6frb04m7l4anata966` (`payment_id`),
  CONSTRAINT `FKfydamyw6frb04m7l4anata966` FOREIGN KEY (`payment_id`) REFERENCES `payment` (`paymenet_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_music`
--

LOCK TABLES `payment_music` WRITE;
/*!40000 ALTER TABLE `payment_music` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_music` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playcountlist`
--

DROP TABLE IF EXISTS `playcountlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playcountlist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `indate` datetime(6) NOT NULL,
  `member_id` varchar(255) DEFAULT NULL,
  `play_count` int NOT NULL,
  `music_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2yx4h7wu5cy2bgm8ipf6auvvb` (`music_id`),
  CONSTRAINT `FK2yx4h7wu5cy2bgm8ipf6auvvb` FOREIGN KEY (`music_id`) REFERENCES `music` (`music_id`)
) ENGINE=InnoDB AUTO_INCREMENT=144 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playcountlist`
--

LOCK TABLES `playcountlist` WRITE;
/*!40000 ALTER TABLE `playcountlist` DISABLE KEYS */;
INSERT INTO `playcountlist` VALUES (1,'2025-02-27 00:00:00.000000','abc4',320,236),(2,'2025-02-09 00:00:00.000000','abc3',850,257),(3,'2025-02-21 00:00:00.000000','abc2',540,122),(4,'2025-02-24 00:00:00.000000','abc1',380,246),(5,'2025-02-10 00:00:00.000000','test',500,7),(6,'2025-02-14 00:00:00.000000','abc4',230,272),(7,'2025-02-12 00:00:00.000000','abc3',880,110),(8,'2025-02-04 00:00:00.000000','abc2',860,125),(9,'2025-02-25 00:00:00.000000','abc1',190,265),(10,'2025-02-13 00:00:00.000000','test',20,195),(11,'2025-01-29 00:00:00.000000','abc4',40,90),(12,'2025-02-19 00:00:00.000000','abc3',500,293),(13,'2025-01-31 00:00:00.000000','abc2',800,205),(14,'2025-02-11 00:00:00.000000','abc1',730,123),(15,'2025-02-12 00:00:00.000000','test',330,93),(16,'2025-02-16 00:00:00.000000','abc4',900,281),(17,'2025-02-16 00:00:00.000000','abc3',260,79),(18,'2025-02-16 00:00:00.000000','abc2',220,6),(19,'2025-02-17 00:00:00.000000','abc1',690,223),(20,'2025-02-21 00:00:00.000000','test',880,79),(21,'2025-02-19 00:00:00.000000','abc4',650,231),(22,'2025-02-14 00:00:00.000000','abc3',70,13),(23,'2025-01-29 00:00:00.000000','abc2',660,228),(24,'2025-02-16 00:00:00.000000','abc1',720,262),(25,'2025-02-06 00:00:00.000000','test',50,51),(26,'2025-02-08 00:00:00.000000','abc4',650,219),(27,'2025-02-20 00:00:00.000000','abc3',220,132),(28,'2025-02-17 00:00:00.000000','abc2',450,146),(29,'2025-02-04 00:00:00.000000','abc1',460,59),(30,'2025-02-15 00:00:00.000000','test',490,148),(31,'2025-02-07 00:00:00.000000','abc4',900,302),(32,'2025-02-06 00:00:00.000000','abc3',740,292),(33,'2025-02-25 00:00:00.000000','abc2',680,142),(34,'2025-01-29 00:00:00.000000','abc1',470,225),(35,'2025-01-30 00:00:00.000000','test',530,42),(36,'2025-02-01 00:00:00.000000','abc4',20,135),(37,'2025-02-26 00:00:00.000000','abc3',40,7),(38,'2025-01-29 00:00:00.000000','abc2',760,82),(39,'2025-02-05 00:00:00.000000','abc1',10,246),(40,'2025-02-03 00:00:00.000000','test',710,142),(41,'2025-02-01 00:00:00.000000','abc4',80,248),(42,'2025-02-09 00:00:00.000000','abc3',670,270),(43,'2025-02-27 00:00:00.000000','abc2',460,158),(44,'2025-01-30 00:00:00.000000','abc1',290,227),(45,'2025-02-10 00:00:00.000000','test',760,129),(46,'2025-02-13 00:00:00.000000','abc4',270,308),(47,'2025-01-31 00:00:00.000000','abc3',690,12),(48,'2025-02-01 00:00:00.000000','abc2',270,260),(49,'2025-02-22 00:00:00.000000','abc1',450,290),(50,'2025-02-26 00:00:00.000000','test',500,188),(64,'2025-02-19 00:00:00.000000','abc4',610,166),(65,'2025-02-11 00:00:00.000000','abc3',230,176),(66,'2025-02-27 00:00:00.000000','abc2',360,296),(67,'2025-02-14 00:00:00.000000','abc1',450,42),(68,'2025-02-23 00:00:00.000000','test',320,107),(69,'2025-02-10 00:00:00.000000','abc4',880,33),(70,'2025-02-10 00:00:00.000000','abc3',530,57),(71,'2025-02-23 00:00:00.000000','abc2',170,150),(72,'2025-02-03 00:00:00.000000','abc1',560,208),(73,'2025-02-15 00:00:00.000000','test',100,102),(74,'2025-02-20 00:00:00.000000','abc4',290,268),(75,'2025-02-21 00:00:00.000000','abc3',560,134),(76,'2025-02-20 00:00:00.000000','abc2',830,277),(77,'2025-02-10 00:00:00.000000','abc1',260,228),(78,'2025-02-07 00:00:00.000000','test',310,190),(79,'2025-01-30 00:00:00.000000','abc4',900,33),(80,'2025-02-12 00:00:00.000000','abc3',310,36),(81,'2025-02-11 00:00:00.000000','abc2',330,68),(82,'2025-01-30 00:00:00.000000','abc1',140,288),(83,'2025-02-27 00:00:00.000000','test',400,42),(84,'2025-02-18 00:00:00.000000','abc4',200,44),(85,'2025-02-27 00:00:00.000000','abc3',640,143),(86,'2025-02-24 00:00:00.000000','abc2',240,297),(87,'2025-02-01 00:00:00.000000','abc1',510,61),(88,'2025-02-19 00:00:00.000000','test',710,42),(89,'2025-02-19 00:00:00.000000','abc4',900,46),(90,'2025-02-06 00:00:00.000000','abc3',180,264),(91,'2025-02-12 00:00:00.000000','abc2',120,26),(92,'2025-02-27 00:00:00.000000','abc1',760,49),(93,'2025-02-21 00:00:00.000000','test',640,271),(94,'2025-02-25 00:00:00.000000','abc4',870,169),(95,'2025-02-06 00:00:00.000000','abc3',70,63),(96,'2025-02-05 00:00:00.000000','abc2',110,117),(97,'2025-02-13 00:00:00.000000','abc1',260,312),(98,'2025-02-27 00:00:00.000000','test',200,4),(99,'2025-02-16 00:00:00.000000','abc4',850,159),(100,'2025-02-07 00:00:00.000000','abc3',810,143),(101,'2025-02-11 00:00:00.000000','abc2',360,102),(102,'2025-02-15 00:00:00.000000','abc1',110,110),(103,'2025-02-17 00:00:00.000000','test',690,229),(104,'2025-02-19 00:00:00.000000','abc4',320,269),(105,'2025-02-23 00:00:00.000000','abc3',240,263),(106,'2025-02-17 00:00:00.000000','abc2',210,32),(107,'2025-02-03 00:00:00.000000','abc1',780,260),(108,'2025-02-14 00:00:00.000000','test',810,28),(109,'2025-02-05 00:00:00.000000','abc4',430,41),(110,'2025-02-21 00:00:00.000000','abc3',600,216),(111,'2025-02-16 00:00:00.000000','abc2',820,127),(112,'2025-02-20 00:00:00.000000','abc1',30,125),(113,'2025-02-01 00:00:00.000000','test',200,144),(127,'2025-02-27 00:00:00.000000','3936484235',2,79),(128,'2025-02-27 00:00:00.000000','3936484235',1,33),(129,'2025-02-27 00:00:00.000000','3936484235',1,228),(130,'2025-02-27 00:00:00.000000','3936484235',1,260),(131,'2025-02-27 00:00:00.000000','3936484235',1,42),(132,'2025-02-27 00:00:00.000000','3936484235',1,302),(133,'2025-02-27 00:00:00.000000','3936484235',1,315),(134,'2025-02-28 00:00:00.000000','test',1,169),(135,'2025-02-28 00:00:00.000000','test',2,42),(136,'2025-02-28 00:00:00.000000','3936484235',91,42),(137,'2025-02-28 00:00:00.000000','3936484235',4,260),(138,'2025-02-28 00:00:00.000000','3936484235',17,125),(139,'2025-02-28 00:00:00.000000','3936484235',12,33),(140,'2025-02-28 00:00:00.000000','3936484235',1,281),(141,'2025-02-28 00:00:00.000000','3936484235',2,46),(142,'2025-02-28 00:00:00.000000','3936484235',1,5),(143,'2025-02-28 00:00:00.000000','3936484235',3,110);
/*!40000 ALTER TABLE `playcountlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playlist`
--

DROP TABLE IF EXISTS `playlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playlist` (
  `playlist_id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `cover_image` varchar(255) DEFAULT NULL,
  `indate` datetime DEFAULT CURRENT_TIMESTAMP,
  `shayringyn` tinyint DEFAULT '0',
  `title` varchar(255) DEFAULT NULL,
  `member_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`playlist_id`),
  KEY `FK6hbs7umbi3am8pojtkwx7dik4` (`member_id`),
  CONSTRAINT `FK6hbs7umbi3am8pojtkwx7dik4` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlist`
--

LOCK TABLES `playlist` WRITE;
/*!40000 ALTER TABLE `playlist` DISABLE KEYS */;
INSERT INTO `playlist` VALUES (1,'나만의 힐링 플레이리스트','https://d9k8tjx0yo0q5.cloudfront.net/image/b480a411-9213-49b8-b821-308b1d147c00773-250x250.jpg','2023-07-15 00:00:00',0,'힐링 플레이리스트','test'),(2,'운동할 때 듣는 음악','https://d9k8tjx0yo0q5.cloudfront.net/image/pl2.jpg','2022-11-03 00:00:00',0,'운동 BGM','abc1'),(3,'여유로운 오후를 위한 선곡','https://d9k8tjx0yo0q5.cloudfront.net/image/pl3.jpg','2021-09-10 00:00:00',1,'오후의 음악','abc2'),(4,'집중력을 높이는 플레이리스트','https://d9k8tjx0yo0q5.cloudfront.net/image/pl4.jpg','2023-01-25 00:00:00',0,'공부용 BGM','abc3'),(6,'클래식으로 시작하는 하루','https://d9k8tjx0yo0q5.cloudfront.net/image/pl6.jpg','2022-12-14 00:00:00',0,'아침 클래식','test'),(7,'신나는 파티 음악 모음','https://d9k8tjx0yo0q5.cloudfront.net/image/pl7.jpg','2023-02-18 00:00:00',1,'파티 플레이리스트','abc1'),(8,'잔잔한 재즈와 함께','https://d9k8tjx0yo0q5.cloudfront.net/image/pl8.jpg','2021-08-22 00:00:00',0,'재즈 선곡','abc2'),(9,'드라이브할 때 듣기 좋은 곡','https://d9k8tjx0yo0q5.cloudfront.net/image/pl9.jpg','2022-06-05 00:00:00',1,'드라이브 BGM','abc3'),(11,'출근길을 위한 에너지 충전','https://d9k8tjx0yo0q5.cloudfront.net/image/pl11.jpg','2023-03-20 00:00:00',1,'출근 BGM','test'),(12,'설렘 가득한 데이트 플레이리스트','https://d9k8tjx0yo0q5.cloudfront.net/image/pl12.jpg','2022-10-15 00:00:00',0,'데이트 음악','abc1'),(13,'새벽 감성을 자극하는 음악','https://d9k8tjx0yo0q5.cloudfront.net/image/pl13.jpg','2021-12-05 00:00:00',1,'새벽 감성','abc2'),(14,'불금을 위한 신나는 노래','https://d9k8tjx0yo0q5.cloudfront.net/image/pl14.jpg','2023-05-12 00:00:00',0,'불금 BGM','abc3'),(16,'여행 갈 때 듣는 플레이리스트','https://d9k8tjx0yo0q5.cloudfront.net/image/pl16.jpg','2022-04-11 00:00:00',0,'여행 BGM','test'),(17,'집에서 힐링할 때 듣는 음악','https://d9k8tjx0yo0q5.cloudfront.net/image/pl17.jpg','2023-07-01 00:00:00',1,'집콕 플레이리스트','abc1'),(18,'로맨틱한 분위기를 위한 음악','https://d9k8tjx0yo0q5.cloudfront.net/image/pl18.jpg','2021-06-14 00:00:00',0,'로맨틱 BGM','abc2'),(19,'자기 전에 듣기 좋은 편안한 노래','https://d9k8tjx0yo0q5.cloudfront.net/image/pl19.jpg','2022-09-09 00:00:00',1,'수면 음악','abc3'),(24,'','https://d9k8tjx0yo0q5.cloudfront.net/image/41435d31-0ff4-42d4-bf50-2be196fbb165773-250x250.jpg','2025-02-27 17:06:23',0,'asdaf','3936484235'),(25,'','https://d9k8tjx0yo0q5.cloudfront.net/image/6a8eb3fe-a3f8-484f-85e9-b0f0d32d9047773-250x250.jpg','2025-02-27 17:06:33',0,'weqr','3936484235');
/*!40000 ALTER TABLE `playlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `playlist_music`
--

DROP TABLE IF EXISTS `playlist_music`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `playlist_music` (
  `playlist_id` int NOT NULL,
  `music_id` int NOT NULL,
  `order_index` int NOT NULL,
  PRIMARY KEY (`playlist_id`,`order_index`),
  KEY `FK5g0xtl5e89uycye0jo1ll65sq` (`music_id`),
  CONSTRAINT `FK5g0xtl5e89uycye0jo1ll65sq` FOREIGN KEY (`music_id`) REFERENCES `music` (`music_id`),
  CONSTRAINT `FKq9o07ljjk03aeeqt0q9lwhndk` FOREIGN KEY (`playlist_id`) REFERENCES `playlist` (`playlist_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `playlist_music`
--

LOCK TABLES `playlist_music` WRITE;
/*!40000 ALTER TABLE `playlist_music` DISABLE KEYS */;
INSERT INTO `playlist_music` VALUES (1,5,1),(3,10,1),(13,10,1),(1,15,2),(11,15,1),(7,20,1),(17,20,1),(2,25,1),(24,33,1),(25,33,1),(2,35,2),(24,42,0),(25,42,0),(4,45,1),(25,46,7),(25,49,11),(3,50,2),(12,50,1),(6,55,1),(16,55,1),(8,60,1),(17,65,2),(14,70,1),(7,75,2),(24,79,2),(25,79,2),(18,80,1),(9,85,1),(16,90,2),(4,95,2),(19,95,1),(2,100,6),(13,100,2),(11,105,2),(8,110,2),(25,110,4),(6,115,2),(1,120,3),(12,120,2),(25,122,17),(18,125,2),(25,125,9),(14,130,2),(25,134,16),(7,135,3),(19,135,2),(2,140,3),(16,140,3),(25,142,12),(11,143,6),(25,143,13),(9,145,2),(8,150,3),(13,155,3),(3,160,3),(11,165,3),(18,165,3),(25,169,10),(4,170,3),(17,170,3),(12,175,3),(6,180,3),(7,185,4),(25,188,18),(3,190,4),(14,190,3),(1,200,4),(8,200,4),(19,200,3),(11,205,4),(2,210,4),(17,210,4),(12,215,4),(25,216,15),(6,220,4),(18,220,4),(13,225,4),(25,228,5),(9,230,3),(19,240,4),(16,245,4),(4,250,4),(17,250,5),(7,255,5),(14,260,4),(25,260,3),(13,265,5),(9,270,4),(25,271,14),(16,275,5),(3,280,5),(12,280,5),(25,281,8),(18,285,5),(3,290,6),(6,290,5),(8,290,5),(19,290,5),(1,300,5),(25,302,6),(1,310,6),(4,310,5),(11,310,5),(7,315,6),(2,320,5),(14,320,5);
/*!40000 ALTER TABLE `playlist_music` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchased_music`
--

DROP TABLE IF EXISTS `purchased_music`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchased_music` (
  `purchased_music_id` int NOT NULL AUTO_INCREMENT,
  `member_id` varchar(255) DEFAULT NULL,
  `music_id` int DEFAULT NULL,
  PRIMARY KEY (`purchased_music_id`),
  KEY `FKs9g6wpn7mywe0qp3h60t51h4y` (`member_id`),
  KEY `FKo4gbrirsylfuwsk5o3nv0rleo` (`music_id`),
  CONSTRAINT `FKo4gbrirsylfuwsk5o3nv0rleo` FOREIGN KEY (`music_id`) REFERENCES `music` (`music_id`) ON DELETE CASCADE,
  CONSTRAINT `FKs9g6wpn7mywe0qp3h60t51h4y` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchased_music`
--

LOCK TABLES `purchased_music` WRITE;
/*!40000 ALTER TABLE `purchased_music` DISABLE KEYS */;
INSERT INTO `purchased_music` VALUES (2,'abc2',315),(4,'test',225),(5,'abc3',106),(6,'abc3',157),(7,'abc1',296),(8,'abc2',226),(9,'abc1',268),(11,'test',81),(12,'abc2',271);
/*!40000 ALTER TABLE `purchased_music` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reply`
--

DROP TABLE IF EXISTS `reply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reply` (
  `reply_id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `indate` datetime(6) DEFAULT NULL,
  `allpage_id` int DEFAULT NULL,
  `member_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`reply_id`),
  KEY `FK91c6vdrdtr9in5d0ks85urcpn` (`allpage_id`),
  KEY `FKen6vrmi5oth4bg6ybfc202fmu` (`member_id`),
  CONSTRAINT `FK91c6vdrdtr9in5d0ks85urcpn` FOREIGN KEY (`allpage_id`) REFERENCES `allpage` (`allpage_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FKen6vrmi5oth4bg6ybfc202fmu` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reply`
--

LOCK TABLES `reply` WRITE;
/*!40000 ALTER TABLE `reply` DISABLE KEYS */;
INSERT INTO `reply` VALUES (2,'댓글 내용 392','2025-02-26 17:38:58.000000',1,'abc3'),(3,'댓글 내용 96','2025-02-18 17:38:58.000000',1,'abc2'),(4,'댓글 내용 290','2025-02-12 17:38:58.000000',1,'abc1'),(5,'댓글 내용 659','2025-02-04 17:38:58.000000',1,'test'),(7,'댓글 내용 303','2025-01-31 17:38:58.000000',2,'abc3'),(8,'댓글 내용 611','2025-02-17 17:38:58.000000',2,'abc2'),(9,'댓글 내용 876','2025-02-17 17:38:58.000000',2,'abc1'),(10,'댓글 내용 151','2025-02-07 17:38:58.000000',2,'test'),(12,'댓글 내용 391','2025-02-17 17:38:58.000000',3,'abc3'),(13,'댓글 내용 548','2025-02-06 17:38:58.000000',3,'abc2'),(14,'댓글 내용 900','2025-02-16 17:38:58.000000',3,'abc1'),(15,'댓글 내용 164','2025-02-06 17:38:58.000000',3,'test'),(17,'댓글 내용 921','2025-02-09 17:38:58.000000',4,'abc3'),(18,'댓글 내용 325','2025-02-04 17:38:58.000000',4,'abc2'),(19,'댓글 내용 892','2025-02-23 17:38:58.000000',4,'abc1'),(20,'댓글 내용 22','2025-02-07 17:38:58.000000',4,'test'),(22,'댓글 내용 168','2025-02-20 17:38:58.000000',5,'abc3'),(23,'댓글 내용 707','2025-02-03 17:38:58.000000',5,'abc2'),(24,'댓글 내용 937','2025-02-20 17:38:58.000000',5,'abc1'),(25,'댓글 내용 432','2025-02-15 17:38:58.000000',5,'test'),(27,'댓글 내용 855','2025-02-17 17:38:58.000000',6,'abc3'),(28,'댓글 내용 266','2025-02-21 17:38:58.000000',6,'abc2'),(29,'댓글 내용 366','2025-02-24 17:38:58.000000',6,'abc1'),(30,'댓글 내용 563','2025-02-15 17:38:58.000000',6,'test'),(32,'댓글 내용 821','2025-02-08 17:38:58.000000',7,'abc3'),(33,'댓글 내용 866','2025-02-17 17:38:58.000000',7,'abc2'),(34,'댓글 내용 68','2025-02-17 17:38:58.000000',7,'abc1'),(35,'댓글 내용 501','2025-02-13 17:38:58.000000',7,'test'),(37,'댓글 내용 928','2025-02-21 17:38:58.000000',8,'abc3'),(38,'댓글 내용 378','2025-02-22 17:38:58.000000',8,'abc2'),(39,'댓글 내용 827','2025-02-11 17:38:58.000000',8,'abc1'),(40,'댓글 내용 312','2025-02-01 17:38:58.000000',8,'test'),(42,'댓글 내용 480','2025-02-26 17:38:58.000000',9,'abc3'),(43,'댓글 내용 736','2025-02-10 17:38:58.000000',9,'abc2'),(44,'댓글 내용 663','2025-02-10 17:38:58.000000',9,'abc1'),(45,'댓글 내용 983','2025-02-24 17:38:58.000000',9,'test'),(47,'댓글 내용 711','2025-02-26 17:38:58.000000',10,'abc3'),(48,'댓글 내용 90','2025-02-18 17:38:58.000000',10,'abc2'),(49,'댓글 내용 319','2025-02-08 17:38:58.000000',10,'abc1'),(50,'댓글 내용 256','2025-02-17 17:38:58.000000',10,'test'),(64,'ㅁㄴㅁㅇㄹ','2025-02-28 13:00:19.857670',110,'test');
/*!40000 ALTER TABLE `reply` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-04 17:19:24
