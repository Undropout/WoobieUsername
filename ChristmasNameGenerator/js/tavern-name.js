var tnm1 = ['The Merry','The Happy','The Jolly','The Peaceful','The Wonderful','The Magical','The Excitable','The Fantastical','The Caroling','The Prancing','The Beautiful','The Bright','The Festive','The Cold','The Feliz','The Frosty','The Glistening','The Green','The Red','The Gold','The Magical','The Mystical','The Naughty','The Peaceful','The Red and Green','The Snowy','The Holly Jolly','The Holy','The Wintry','The Gift-Giving','The Joyful','Ye Olde'];
var tnm2 = ['decorations','displays','eggnogs','elves','eves','evergreens','family','feasts','festivals','firs','fireplaces','firewoods','frankincenses','Snowpeople','fruitcakes','garlands','gifts','gingerbreads','gingerbread houses','goodwills','geese','greetings','guest','happy','holiday','holly','hope','hot chocolate','hot cider','hug','ice skates','icicle','icy','ivy','Jack Frost','Baby Jesus','jingle bells','joy','Joyeux Noel','kings','Krampuses','Kris Kringles','lights','lists','logs','mangers','mince pie','mistletoes','mittens','myrrhs','nativities','Noels','North Poles','nutcrackers','ornaments','packages','pageants','parades','partridges','parties','pies','pine trees','pinecones','plum puddings','poinsettias','popcorn strings','presents','reindeer','rejoicers','reunions','ribbons','Rudolphs','Saint Nicholases','black friday sales','Santa Clauses','Santas elves','Santas helpers','lists','workshops','scarves','Scrooges','seasons greetings','shopping trips','ice skates','sleds','sleighs','sleigh bells','snowflakes','snowballs','snowfalls','snowflakes','socks','spirits','stars','stockings','stocking stuffers','sugarplums','sweaters','tidings','tinsels','toboggans','toys','traditions','trees','trimmings','trips','turkeys','unwrappers','vacations','visits','wassailers','magi','wishes','wonders','workshops','wrappers','wrapping papers','wreaths','Xmases','yules','yule logs','yuletides'];
var tnm3 = ['Squad','Workshop','Brigade','Team','Amigos','All-Stars','Guild','League','Peak Performers','Icons','Legends','Bar-Raisers','','','','','','','','','','','','','','','','','','','','','','','','','','','',''];

function tavernGen() {
		rnd = Math.floor(Math.random() * tnm1.length);
		rnd2 = Math.floor(Math.random() * tnm2.length);
		rnd3 = Math.floor(Math.random() * tnm3.length);
		if(rnd2 < 6){
			while(rnd3 > 3){
				rnd3 = Math.floor(Math.random() * tnm3.length);
			}
		}
		var name = tnm1[rnd] + " " + tnm2[rnd2] + " " + tnm3[rnd3];
		document.getElementById('tavern-name').value = name;
}

