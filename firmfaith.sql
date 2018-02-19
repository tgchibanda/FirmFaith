/*
Navicat MySQL Data Transfer

Source Server         : MySql
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : firmfaith

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-19 13:16:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `albums`
-- ----------------------------
DROP TABLE IF EXISTS `albums`;
CREATE TABLE `albums` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `tracks` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `launched` varchar(255) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of albums
-- ----------------------------
INSERT INTO `albums` VALUES ('1', 'Mariyah', '10 tracks', 'This was the first album', 'Published April 2010', 'mariya.jpg', 'Glad Tiddings Hall', '1');
INSERT INTO `albums` VALUES ('2', 'Chikrist MuAfrica', '11 tracks', 'This was the second album', 'Published April 2010', 'chikristu.jpg', 'Meikles Hotel', '2');
INSERT INTO `albums` VALUES ('3', 'Munenyasha', '8 tracks', 'This was the third album', 'Published April 2010', 'munenyasha.jpg', 'Meikles Hotel', '3');
INSERT INTO `albums` VALUES ('4', 'Tinevimbo', '6 tracks', 'This was the fourth album', 'Published April 2010', 'tinevimbo.jpg', 'Sterkinekor', '4');
INSERT INTO `albums` VALUES ('5', 'Whispering Hope', '13 tracks', 'This was the fifth album', 'Published April 2010', 'whispering_hope.jpg', 'Crowne Plaza Hotel', '5');
INSERT INTO `albums` VALUES ('6', 'Muumbiwehari', '11 tracks', 'This was the last album', 'Published April 2010', 'muumbi.jpg', 'Sterkinekor', '6');
INSERT INTO `albums` VALUES ('7', 'Wanyanya', '1 track', 'Topped the charts on power fm.', 'Published April 2010', 'wanyanya.jpg', 'Single', '7');

-- ----------------------------
-- Table structure for `members`
-- ----------------------------
DROP TABLE IF EXISTS `members`;
CREATE TABLE `members` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `joined` varchar(255) NOT NULL,
  `Profession` varchar(255) NOT NULL,
  `bio` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of members
-- ----------------------------
INSERT INTO `members` VALUES ('3', 'Marshal T Matsilele.', 'marshal.jpg', 'Group Director.', 'May 1999.', 'Human Resources from MSU', 'He is one of the founder members of Firm Faith music.');
INSERT INTO `members` VALUES ('4', 'Kudzai Matsilele.', 'kudzie.jpg', 'Group Member.', 'May 1999.', 'Human Resources from MSU', 'She joined the ministry in the year 210. She is now married to Marshal Matsilele the group director.');
INSERT INTO `members` VALUES ('5', 'Pastor Mbirri.', 'pastor.jpg', 'Group Member.', 'May 2015.', 'Education Director North Zimbabwe Conference.', 'He is one of the founder members of Firm Faith music.');

-- ----------------------------
-- Table structure for `notices`
-- ----------------------------
DROP TABLE IF EXISTS `notices`;
CREATE TABLE `notices` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `date` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `details` varchar(255) DEFAULT NULL,
  `posted_by` varchar(255) DEFAULT NULL,
  `featured_image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of notices
-- ----------------------------
INSERT INTO `notices` VALUES ('1', '11/02/2018', 'Testing', 'This is our first application which is available on both Android and IOS platforms', 'Takunda G Chibanda', 'tinevimbo.jpg');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'Takunda', '0712563214', 'tgchibanda@gmail.com', 'Zimbabwe', 'password');
