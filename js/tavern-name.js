var tnm1 = ['Amber','Amaranth','Amethyst','Apricot','Aqua','Aquamarine','Auburn','Azure','Aeige','Black','Blue','Bronze','Brown','Cardinal','Carmine','Celadon','Cerise','Cerulean','Charcoal','Chartreuse','Chocolate','Cinnamon','Copper','Coquelicot','Coral','Cream','Crimson','Cyan','Denim','Ebony','Ecru','Eggplant','Eggshell','Emerald','Fuchsia','Gold','Goldenrod','Gray','Green','Grey','Indigo','Ivory','Jade','Khaki','Lavender','Lemon','Lilac','Lime','Magenta','Mahogany','Maroon','Mauve','Mustard','Ocher','Olive','Orange','Orchid','Peach','Periwinkle','Persimmon','Pewter','Phlox','Pink','Puce','Pumpkin','Purple','Red','Rose','Ruby','Russet','Saffron','Salmon','Sapphire','Scarlet','Sepia','Shamrock','Sienna','Silver','Skobeloff','Slate','Tan','Tangerine','Taupe','Teal','Terracotta','Thistle','Topaz','Turquoise','Ultramarine','Umber','Vermilion','Violet','Viridian','Wheat','White','Wisteria','Yellow'];
var tnm2 = ['#FFBF00','#9F2B68','#9966cc','#FBCEB1','#00FFFF','#00FFBF','#E87722','#007FFF','#f5f5dc','#000000','#0000FF','#CD7F32','#A52A2A','#97233F','#960018','#ACE1AF','#DE3163','#2a52be','#36454F','#dfff00','#7B3F00','#D2691E','#B87333','#e50d0e','#FF7F50','#FFFDD0','#DC143C','#00FFFF','#6F8FAF','#555D50','#C2B280','#483248','#F0EAD6','#50C878','#FF00FF','#FFD700','#daa520','#808080','#00FF00','#808080','#4B0082','#FFFFF0','#00A36C','#F0E68C','#E6E6FA','#fff44f','#C8A2C8','#BFFF00','#FF00FF','#C04000','#800000','#e0b0ff ','#FFDB58','#CC7722','#808000','#FFA500','#da70d6','#FFE5B4','#CCCCFF','#EC5800','#E9EAEC','#df00ff','#FFC0CB','#CC8899','#ff7518','#6a0dad','#FF0000','#FF007F','#E0115F','#80461B','#F4C430','#fa8072','#0f52ba','#FF2400','#704214','#009E60','#A0522D','#C0C0C0','#007474','#C0C2C9','#D2B48C','#F28500','#483C32','#008080','#e2725b','#D8BFD8','#ffc87c','#30D5C8','#4166f5','#826644','#E34234','#8F00FF','#40826D','#f5deb3','#fcfcfc','#BDB5D5','#FFFF00'];
var tnm3 = ['Ant','Badger','Bat','Bear','Beaver','Beetle','Bird','Bison','Blowfish','Boar','Buffalo','Bug','Butterfly','Camel','Cat','Chicken','Chipmunk','Cockroach','Cow','Cow','Crab','Cricket','Crocodile','Deer','Dodo','Dog','Dolphin','Dove','Dragon','Duck','Eagle','Elephant','Fish','Flamingo','Fly','Fox','Frog','Giraffe','Goat','Gorilla','Hamster','Hedgehog','Hippopotamus','Honeybee','Horse','Kangaroo','Koala','Ladybug','Leopard','Lion','Lizard','Llama','Lobster','Mammoth','Microbe','Monkey','Mosquito','Mouse','Octopus','Orangutan','Otter','Owl','Ox','Panda','Parrot','Peacock','Penguin','Pig','Polar Bear','Poodle','Rabbit','Raccoon','Ram','Rat','Rhinoceros','Rock','Sauropod','Scorpion','Seal','Shark','Shrimp','Skunk','Sloth','Snail','Snake','Spider','Squid','Swan','Tiger','T-Rex','Turkey','Turtle','Unicorn','Whale','Wolf','Worm','Zebra'];
var tnm4 = ['🐜','🦡','🦇','🐻','🦫','🪲','🐦','🦬','🐡','🐗','🐃','🐛','🦋','🐫','🐈','🐔','🐿️','🪳','🐄','🐮','🦀','🦗','🐊','🦌','🦤','🐕','🐬','🕊️','🐉','🦆','🦅','🐘','🐟','🦩','🪰','🦊','🐸','🦒','🐐','🦍','🐹','🦔','🦛','🐝','🐎','🦘','🐨','🐞','🐆','🦁','🦎','🦙','🦞','🦣','🦠','🐒','🦟','🐁','🐙','🦧','🦦','🦉','🐂','🐼','🦜','🦚','🐧','🐖','🐻‍❄️','🐩','🐇','🦝','🐏','🐀','🦏','🪨','🦕','🦂','🦭','🦈','🦐','🦨','🦥','🐌','🐍','🕷️','🦑','🦢','🐅','🦖','🦃','🐢','🦄','🐋','🐺','🪱','🦓'];



function tavernGen() {
		rnd = Math.floor(Math.random() * tnm1.length);
		rnd2 = Math.floor(Math.random() * tnm2.length);
		rnd3 = Math.floor(Math.random() * tnm3.length);
		rnd4 = Math.floor(Math.random() * tnm3.length);
		// if(rnd2 < 6){
		// 	while(rnd3 > 3){
		// 		rnd3 = Math.floor(Math.random() * tnm3.length);
		// 	}
		// }
		rndhex=rnd;
		rndemoji=rnd3;
		var coloration=tnm2[rndhex];
		var emojipic=tnm4[rndemoji];
		
		// elem.style.color = coloration;
		var name = tnm1[rnd] + " " + tnm3[rnd3] + " " + emojipic;
//////INVERT COLOR/////////

///////////////////////////
		document.getElementById('tavern-name').style.color = coloration;

		document.getElementById('tavern-name').value = name;
		
}

