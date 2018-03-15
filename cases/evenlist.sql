SET NAMES UTF8;
DROP DATABASE IF EXISTS seammark;
CREATE DATABASE seammark CHARSET=UTF8;
USE seammark;
CREATE TABLE evenlist(
        eid     INT PRIMARY KEY AUTO_INCREMENT,
        ename  VARCHAR(20),
	exp    VARCHAR(300),
	price  FLOAT(5,2),
	rep    INT,
	img    VARCHAR(128),
	v1     VARCHAR(32),
	v2     INT
);
INSERT INTO evenlist VALUES(null,'水上乐园','极地馆：主要为极地动物区，分为白鲸池、海狮池、海豚池、海豹池、企鹅池、水獭池等水生生物展示休息表演池，以及北极狼舍、北极狐舍等陆生生物展示休息笼舍。馆内建有一个高大宽敞明亮，音响等设备设施先进配备LED大型显示屏的表演剧场，可供1800多游客同时近距离观赏海豚、海狮等精彩表演。',199.00,200,'img/1497583503.jpg','','');
INSERT INTO evenlist VALUES(null,'极地海洋馆','极地海洋馆将展示虎鲸、白鲸、海豚、北极熊、北极狼、北极狐、企鹅、海狮、海象、海豹及数千种世界珍稀热带鱼类。海洋剧场可容纳7000人，全国独家引进价值过亿元的两头俄罗斯虎鲸，除白天进行虎鲸、白鲸、海豚等海洋动物表演外，晚间还将引进俄罗斯的水上天鹅湖表演团队。同时，极地海洋馆，拥有国内第一座从海底世界直通热带雨林的垂直展示观光电梯，及国内第一座全亚克力玻璃的水晶宫大厅。此外，以生物多样性与绿色发展为主',129.00,425,'img/1497579693.jpg','','');
INSERT INTO evenlist VALUES(null,'白鲸表演','极地馆：主要为极地动物区，分为白鲸池、海狮池、海豚池、海豹池、企鹅池、水獭池等水生生物展示休息表演池，以及北极狼舍、北极狐舍等陆生生物展示休息笼舍。馆内建有一个高大宽敞明亮，音响等设备设施先进配备LED大型显示屏的表演剧场，可供1800多游客同时近距离观赏海豚、海狮等精彩表演。',129.00,127,'img/1497583321.jpg','','');
INSERT INTO evenlist VALUES(null,'海豚表演','极地馆：主要为极地动物区，分为白鲸池、海狮池、海豚池、海豹池、企鹅池、水獭池等水生生物展示休息表演池，以及北极狼舍、北极狐舍等陆生生物展示休息笼舍。馆内建有一个高大宽敞明亮，音响等设备设施先进配备LED大型显示屏的表演剧场，可供1800多游客同时近距离观赏海豚、海狮等精彩表演。',99.00,360,'img/1497609951.jpg','','');
INSERT INTO evenlist VALUES(null,'海豹表演','极地馆：主要为极地动物区，分为白鲸池、海狮池、海豚池、海豹池、企鹅池、水獭池等水生生物展示休息表演池，以及北极狼舍、北极狐舍等陆生生物展示休息笼舍。馆内建有一个高大宽敞明亮，音响等设备设施先进配备LED大型显示屏的表演剧场，可供1800多游客同时近距离观赏海豚、海狮等精彩表演。',99.00,270,'img/1497582902.jpg','','');
INSERT INTO evenlist VALUES(null,'人鲨共舞','极地海洋世界目前的鲨鱼家族已经有白鳍鲨、黑鳍鲨、豹纹鲨和狗鲨，共100多条，这次马上要跟大家在清明节见面的柠檬鲨，也是鲨鱼中的佼佼者。“到时候，游客可以通透宽大的落地玻璃、柔和的灯光、错落有致的岩礁和砂石，仿佛浸身于真正的海底世界与鲨鱼亲密接触。”场馆工作人员说道。全新的科普互动长廊带领你更深入了解庞大的鲨鱼家族。想知道刚出生的鲨鱼宝宝是什么样子的吗？鲨鱼有什么独特的秘密武器吗？来到鲨鱼海湾寻找答',169.00,330,'img/1497844172.jpg','','');
INSERT INTO evenlist VALUES(null,'水上乐园','极地馆：主要为极地动物区，分为白鲸池、海狮池、海豚池、海豹池、企鹅池、水獭池等水生生物展示休息表演池，以及北极狼舍、北极狐舍等陆生生物展示休息笼舍。馆内建有一个高大宽敞明亮，音响等设备设施先进配备LED大型显示屏的表演剧场，可供1800多游客同时近距离观赏海豚、海狮等精彩表演。',199.00,200,'img/1497583503.jpg','','');
INSERT INTO evenlist VALUES(null,'潜水戏鱼','在水上探险乐园™ (Adventure Cove Waterpark™) 欢乐一整天，清凉消暑。七个惊险刺激的水上游乐设施，诸如水管乐园 (Pipeline Plunge) ，让您从高空滑道顺水而下，滑过倾侧弯道，绕过九曲十八弯，之后急速地把你抛入泳池，水花四溅，保证您一路心潮澎湃，激荡不已。但是，如果您只想在阳光下享受慵懒一天，可选择与朋友一起乘坐电车悠闲地沿着探险之河 (Adventure R',366,454,'img/1497597815.jpg','','');

CREATE TABLE cases_family(
	fid INT PRIMARY KEY AUTO_INCREMENT,
	fname VARCHAR(20)
);
INSERT INTO cases_family VALUES(null,"海底世界");
INSERT INTO cases_family VALUES(null,"水上世界");

CREATE TABLE cases(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	fid INT,
	cname VARCHAR(20),
	img VARCHAR(128)
);
INSERT INTO cases VALUES(null,1,'水母乐园','imgs/1497583321.jpg');
INSERT INTO cases VALUES(null,1,'海藻柱','imgs/1497582353.jpg');
INSERT INTO cases VALUES(null,2,'海洋剧场','imgs/1497583503.jpg');
INSERT INTO cases VALUES(null,2,'海狮乐园','imgs/1497582902.jpg');
INSERT INTO cases VALUES(null,1,'海底隧道','imgs/1497582221.jpg');
INSERT INTO cases VALUES(null,2,'浮雕广场','imgs/1497608488.jpg');
INSERT INTO cases VALUES(null,1,'深海景观','imgs/1497579693.jpg');
INSERT INTO cases VALUES(null,1,'海龟池','imgs/1497578860.jpg');
INSERT INTO cases VALUES(null,2,'企鹅馆','imgs/1497579417.jpg');
INSERT INTO cases VALUES(null,1,'鲨鱼馆','imgs/1497578146.jpg');
INSERT INTO cases VALUES(null,2,'海洋科普厅','imgs/1497578158.jpg');
INSERT INTO cases VALUES(null,2,'海豚戏水','imgs/1497609951.jpg');