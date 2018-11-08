#设置客户端的编码为utf8
SET NAMES UTF8;
#删除数据库YYS，如果存在
DROP DATABASE IF EXISTS YYS;
#创建数据库，指定服务器端编码类型为utf8
CREATE DATABASE YYS CHARSET=UTF8;
#进入数据库
USE YYS;
#创建数据表user
CREATE TABLE user(
  uid INT,     #用户编号
  uname VARCHAR(16),  #用户名称
  upwd VARCHAR(16), #用户密码
  user_name VARCHAR(10), #用户真实姓名
  gender INT #用户性别
);
#插入数据
INSERT INTO book VALUES('NULL','1632174062@163.com','qazwsxedc','丰璐瑶','2001-3-18',TRUE);
INSERT INTO book VALUES('NULL','水浒传','施耐庵','159.00','2003-5-10',FALSE);
INSERT INTO book VALUES('NULL','西游记','吴承恩','299.88','1983-1-5',1);
INSERT INTO book VALUES('NULL','红楼梦','曹雪芹','359.29','1995-8-18',0);
#删除数据
DELETE FROM book WHERE bid='2';
#更改数据
#UPDATE book SET price='399.22',pubDate='1993-10-20',isAddsale='y' WHERE bid='3';
#查询数据
SELECT * FROM book;
