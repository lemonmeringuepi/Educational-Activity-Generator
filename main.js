//Define day and month names:
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//Get today's date:
let d = new Date;
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();
let day = days[d.getDay()];


//Define letters, their words, and ASCII. Choose a letter at random:
const letters = [['A', 'apple', 'activist', 'ant'],
                ['B', 'banana', 'blocks', 'bunny'],
                ['C', 'corn', 'car', 'cat'],
                ['D', 'durian', 'doll', 'dog'],
                ['E', 'eggplant', 'excavator', 'elephant'],
                ['F', 'fig', 'firetruck', 'flamingo'],
                ['G', 'grape', 'guitar', 'goose'],
                ['H', 'ham', 'helicopter', 'hippopotamus'],
                ['I', 'ice cream', 'insect', 'iguana'],
                ['J', 'jam', 'jewelry', 'jellyfish'],
                ['K', 'kiwi', 'k\'nex', 'kangaroo'],
                ['L', 'leek', 'lamp', 'llama'],
                ['M', 'mango', 'moon', 'mouse'],
                ['N', 'naan', 'nose', 'narwhal'],
                ['O', 'orange', 'Olaf', 'octopus'],
                ['P', 'pear', 'puzzle', 'peacock'],
                ['Q', 'quiche', 'quilt', 'quail'],
                ['R', 'raspberry', 'robot', 'rooster'],
                ['S', 'spaghetti', 'skateboard', 'snake'],
                ['T', 'tofu', 'tambourine', 'tiger'],
                ['U', 'udon', 'umbrella', 'unicorn'],
                ['V', 'vanilla', 'violin', 'vulture'],
                ['W', 'watermelon', 'whistle', 'walrus'],
                ['X', 'Xocolatl', 'xylophone', 'x-ray tetra'],
                ['Y', 'yam', 'yo-yo', 'yak'],
                ['Z', 'zucchini', 'zipper', 'zebra']];
const letterASCII = ['\t  AA          \n\t AAAA         \n\tAA  AA        \n\tAAAAAA   aaaaa\n\tAA  AA  aa  aa\n\tAA  AA   aaa a',
                    '\tBBBBB   bb    \n\tBB  BB  bb    \n\tBBBBB   bb    \n\tBB  BB  bbbbb \n\tBB  BB  bb  bb\n\tBBBBB   bbbbb ',
                    '\t CCCC         \n\tCC  CC        \n\tCC       cccc \n\tCC      cc    \n\tCC  CC  cc   c\n\t CCCC    cccc ',
                    '\tDDDDD       dd\n\tDD  DD      dd\n\tDD  DD      dd\n\tDD  DD   ddddd\n\tDD  DD  dd  dd\n\tDDDDD    ddddd',
                    '\tEEEEEE        \n\tEE            \n\tEEEEE    eee  \n\tEE      ee ee \n\tEE      eee   \n\tEEEEEE  eeeee ',
                    '\tFFFFFF     ff \n\tFF       ff ff\n\tFFFF     ff   \n\tFF      ffff  \n\tFF       ff   \n\tFF       ff   ',
                    '\t GGGG         \n\tGG  GG   ggggg\n\tGG      gg  gg\n\tGG GGG   ggggg\n\tGG  GG      gg\n\t GGG G  ggggg ',
                    '\tHH  HH  hh    \n\tHH  HH  hh    \n\tHHHHHH  hh    \n\tHH  HH  hhhhh \n\tHH  HH  hh  hh\n\tHH  HH  hh  hh',
                    '\tIIIIII        \n\t  II      ii  \n\t  II          \n\t  II      ii  \n\t  II      ii  \n\tIIIIII    ii  ',
                    '\t  JJJJ     jj \n\t    JJ        \n\t    JJ     jj \n\t    JJ     jj \n\tJJ  JJ  j  jj \n\tJJJJJ    jjj  ',
                    '\tKK  KK  kk    \n\tKK KK   kk    \n\tKKKK    kk kk \n\tKK KK   kkkk  \n\tKK  KK  kk kk \n\tKK  KK  kk  kk',
                    '\tLL        ll  \n\tLL        ll  \n\tLL        ll  \n\tLL        ll  \n\tLL        ll  \n\tLLLLLL    ll  ',
                    '\tMM     MM         \n\tMMM   MMM         \n\tMM MMM MM         \n\tMM  M  MM  mmm mm \n\tMM     MM  m  m  m\n\tMM     MM  m  m  m',
                    '\tNN   NN        \n\tNNN  NN        \n\tNNN  NN        \n\tNN N NN        \n\tNN  NNN  nnnn  \n\tNN  NNN  n   n \n\tNN   NN  n   n ',
                    '\t OOOO         \n\tOO  OO        \n\tOO  OO   oooo \n\tOO  OO  oo  oo\n\tOO  OO  oo  oo\n\t OOOO    oooo ',
                    '\tPPPPP         \n\tPP  PP  ppppp \n\tPPPPP   pp  pp\n\tPP      ppppp \n\tPP      pp    \n\tPP      pp    ',
                    '\t QQQQQ          \n\tQQ   QQ    qqqqq\n\tQQ   QQ   qq  qq\n\tQQ Q QQ    qqqqq\n\tQQ  QQQ       qq\n\t QQQ  QQ      qq',
                    '\tRRRRR         \n\tRR  RR        \n\tRRRRR   r rrr \n\tRR  RR  rr  rr\n\tRR  RR  rr    \n\tRR  RR  rr    ',
                    '\t SSSS         \n\tSS  SS   ssss \n\t SS     ss   s\n\t   SS     ss  \n\tSS  SS  s   ss\n\t SSSS    ssss ',
                    '\tTTTTTT        \n\t  TT          \n\t  TT      tt  \n\t  TT    tttttt\n\t  TT      tt  \n\t  TT      tt  ',
                    '\tUU  UU        \n\tUU  UU        \n\tUU  UU        \n\tUU  UU  uu  uu\n\tUU  UU  uu  uu\n\t UUUU    uuu u',
                    '\tVV  VV        \n\tVV  VV        \n\tVV  VV        \n\tVV  VV  vv  vv\n\t VVVV    vvvv \n\t  VV      vv  ',
                    '\tWW     WW         \n\tWW     WW         \n\tWW  W  WW         \n\tWW WWW WW  w  w  w\n\tWWW   WWW  w  w  w\n\tWW     WW   ww ww ',
                    '\tXX  XX       \n\tXX  XX       \n\t XXXX   x   x\n\t XXXX    xxx \n\tXX  XX   xxx \n\tXX  XX  x   x',
                    '\tYY  YY        \n\t YY YY  yy  yy\n\t  YYYY  yy  yy\n\t    YY    yyyy\n\t   YY       yy\n\t YYY     yyyy ',
                    '\tZZZZZZ        \n\t    ZZ        \n\t   ZZ   zzzzzz\n\t  ZZ       zz \n\t ZZ      zz   \n\tZZZZZZ  zzzzzz'];
let letter = Math.floor(Math.random()*26);
let capitalLetter = letters[letter][0];
let foodLetter = letters[letter][1];
let funLetter = letters[letter][2];
let animalLetter = letters[letter][3];


//Define numbers 1-20 and choose one at random:
let number = Math.floor(Math.random()*20);
const counterASCII_1 = '  /OO\\  ';
const counterASCII_2 = ' |OOOO| ';
const counterASCII_3 = '  \\OO/  ';
const numberASCII = ['\t  11  \n\t 111  \n\t  11  \n\t  11  \n\t  11  \n\t 1111 ',
                    '\t 2222 \n\t22  22\n\t   22 \n\t  22  \n\t 22   \n\t222222',
                    '\t 3333 \n\t33  33\n\t   33 \n\t    33\n\t33  33\n\t 3333 ',
                    '\t44  44\n\t44  44\n\t44  44\n\t444444\n\t    44\n\t    44',
                    '\t555555\n\t55    \n\t55555 \n\t    55\n\t55  55\n\t 5555 ',
                    '\t  66  \n\t 66   \n\t66    \n\t66666 \n\t66  66\n\t 6666 ',
                    '\t777777\n\t    77\n\t    77\n\t   77 \n\t  77  \n\t  77  ',
                    '\t 8888 \n\t88  88\n\t 8888 \n\t88  88\n\t88  88\n\t 8888 ',
                    '\t 9999 \n\t99  99\n\t 99999\n\t    99\n\t   99 \n\t  99  ',
                    '\t  11     0000 \n\t 111    00  00\n\t  11    00  00\n\t  11    00  00\n\t  11    00  00\n\t 1111    0000 ',
                    '\t  11      11  \n\t 111     111  \n\t  11      11  \n\t  11      11  \n\t  11      11  \n\t 1111    1111 ',
                    '\t  11     2222 \n\t 111    22  22\n\t  11       22 \n\t  11      22  \n\t  11     22   \n\t 1111   222222',
                    '\t  11     3333 \n\t 111    33  33\n\t  11       33 \n\t  11        33\n\t  11    33  33\n\t 1111    3333 ',
                    '\t  11    44  44\n\t 111    44  44\n\t  11    44  44\n\t  11    444444\n\t  11        44\n\t 1111       44',
                    '\t  11    555555\n\t 111    55    \n\t  11    55555 \n\t  11        55\n\t  11    55  55\n\t 1111    5555 ',
                    '\t  11      66  \n\t 111     66   \n\t  11    66    \n\t  11    66666 \n\t  11    66  66\n\t 1111    6666 ',
                    '\t  11    777777\n\t 111        77\n\t  11        77\n\t  11       77 \n\t  11      77  \n\t 1111     77  ',
                    '\t  11     8888 \n\t 111    88  88\n\t  11     8888 \n\t  11    88  88\n\t  11    88  88\n\t 1111    8888 ',
                    '\t  11     9999 \n\t 111    99  99\n\t  11     99999\n\t  11        99\n\t  11       99 \n\t 1111     99  ',
                    '\t 2222    0000 \n\t22  22  00  00\n\t   22   00  00\n\t  22    00  00\n\t 22     00  00\n\t222222   0000 '];


//Define animals and choose one at random:
const animals = [];
const animalASCII = [];
let animal = Math.floor(Math.random()*animals.length);


//Define activities and choose one at random:
const activities = ['Make an evacuation plan in case of a fire. Teach your child to "Stop, Drop, and Roll."',
                    'Let your child cut out or draw various foods they like. Glue them on a paper plate and talk about them.',
                    'How about a healthy snack? Try Ants on a Log! Take a stalk of celery, fill the center with peanut butter, and put raisins on top. The raisins look like the ants crawling along the log. Ask your child to make up a story about the ants.',
                    'Song Day!\nI like to eat, eat, eat apples and bananas.\nI like to eat, eat, eat apples and bananas.\nNow Change the vowel sound to A.\nI like to ate, ate, ate ay-pples and ba-nay-nays.\nI like to ate, ate, ate ay-pples and ba-nay-nays.',
                    'Practice dog safety.\nAlways ask the pet owner if you can pet their dog before reaching out and touching them. Pretend a stuffed animal is a real dog and practice petting them.',
                    'Talk about how to wash your hands. Ask your child before and after what activities they should wash their hands.',
                    'What are some vegetables you have in your house? Make some soup! If you don\'t have enough ingredients, draw all the vegetables you would put in your soup.',
                    'Exercise by giving your child a sequence of two things to do. "Jump up, then sit down." Increase to three things. "Touch your nose, turn around, then sit down." Also sing Head, Shoulders, Knees, and Toes to keep up the energy!',
                    'Bath Time!\nDuring bath time, talk about the importance of being clean. Make up your own bath song!',
                    'Focus on grains. What are they? How many grains can you find and eat?',
                    'Exercise by playing tag or jump rope. If it is too cold outside, dance inside.',
                    'Draw safety signs like "Stop" and "Yield." Talk about what they mean when crossing the street. Talk about traffic lights and their colors. Have everyone play the game Red Light, Green Light.',
                    'Talk about seeds, plants, and how different vegetables are grown. Identify the different parts of plants, such as the roots, leaves, stem, etc.',
                    'Mother Goose Time!\nWee Willy Winkie\nRuns through the town\nUpstairs, downstairs in his nightgown.\nKnocking at the windows,\nyelling through the locks\n"Are all the children in their beds?\nFor it is nine o\'clock!"',
                    'Concentrate on showing your child how to brush their teeth well. Learn the toothbrush rhyme:\nI have a little toothbrush,\nI hold it very tight.\nI brush my teeth each morning,\nAnd then again at night.',
                    'Draw pictures of vegetables, cut them out, and glue them to popsicle sticks or straws. Use them to make a puppet show about healthy food. Invite everyone in the house to participate.',
                    'Help your child make a noisemaker out of pasta, cereal, or beans by placing some in a paper cup and taping another cup on top.',
                    'Mother Goose Time!\nLittle Miss Muffet\nsat on her tuffet,\neating her curds and whey.\nAlong came a spider,\nwho sat down beside her,\nand frightened Miss Muffet away.',
                    'Play a game outside like Tag, Kick the Can, or Hide and Go Seek. If it is too cold outside, then exercise by putting on music and dancing fast. Talk about some of your favorite songs.',
                    'Talk about being safe. Make sure everyone in the family knows their name, address, telephone number, and what to do in case of an emergency.',
                    'Song Day!\nSing Are You Eating to the tune of Frere Jacques:\nAre you eating\nAre you eating\nHealthy foods?\nHealthy foods?\nFor your body needs them\nFor your body needs them\nEveryday\nEveryday.',
                    'Talk about the right way to cross a street: hold hands, look left, then right, then left. Try to draw the signs you see every day.',
                    'Everyone dance together and you can make up your own tune. Then do the Hokey Pokey!',
                    'Let your child make their own pretend first aid kit for dramatic play with a box, cotton balls and swabs, popsicle sticks, and cut up gauze or toilet paper.',
                    'Calcium comes from dark, leafy greens and milk and it makes your body and bones strong. Can you eat something with calcium today and talk about all of the different bones in your body?',
                    'Song Day!\nDo your ears hang low?\nDo they wobble to and fro?\nCan you tie them in a knot?\nCan you tie them in a bow?\nCan you throw them over your shoulder\nLike a Continental soldier?\nDo your ears hang low?',
                    'Eat the Rainbow!\nHelp your child list or draw a fruit for each color of the rainbow.',
                    'Mother Goose Time!\nOld MacDonald had a farm e-i-e-i-o.\nAnd on that farm he had a cow e-i-e-i-o.\nWith a moo moo here\nand a moo moo there.\nHere a moo, there a moo,\neverywhere a moo moo.\nOld MacDonald had a farm e-i-e-i-o.',
                    'Do you know the colors that make the rainbow?\nR: Red\nO: Orange\nY: Yellow\nG: Green\nB: Blue\nI: Indigo\nV: Violet\nAlso known as the color spectrum! Draw a rainbow using these colors.',
                    'Make a giant heart out of paper and decorate it for your favorite grown up.',
                    'Get your heart rate up by doing jumping jacks! Have your child spell their name or count while they jump.',
                    'Think of all of the flowers that have yellow in them. Did you know that the Maryland state flower is the Black-Eyed Susan? Have you ever seen one?',
                    'Castles are often gray and made of stone. Can you draw a castle and then make up a story about the family that lives in the castle?',
                    'Song Day!\nA sailor went to sea, sea, sea\nTo see what he could see, see, see\nBut all that he could see, see, see\nWas the bottom of the deep, blue sea, sea, sea!',
                    'Make some paint from yogurt and food coloring! If you don\'t have yogurt, use shaving cream.',
                    'Make snowmen out of cotton balls and practice your counting. What are your favorite things that are white?',
                    'Choose your favorite color. Point out things that are your color. Help your child write their name using their color. Cut it out and hang it up!',
                    'Mother Goose Time!\nLittle Jack Horner\nSat in a corner\nEating his Christmas pie.\nHe put in his thumb\nAnd pulled out a plum\nAnd said "What a good boy am I!"',
                    'Pretend you\'re a librarian and have a story time for your family and stuffed animals.',
                    'Make up a teddy bear action rhyme!',
                    'Try saying this tongue twister five times:\nSally sells seashells on the sea shore!',
                    'Spend some time looking through magazines or books and seeing all the things that are navy blue. What is your favorite? Talk about how this shade of blue is called navy blue.',
                    'Talk about all of the things that grow! What colors are they? How many are lime green?',
                    'Let\'s make a baggy fish! Take a brown paper bag and fill it with newspaper. Tie the end of the bag with a twist tie or rubber band. Cut the end part into two fins. Decorate your fish using gold and your other favorite colors!',
                    'Make bubbles with dish soap and water:\n3 cups water\n1 cup liquid dish detergent\n1 tbsp sugar\nWhat colors are your bubbles? Sing a song about bubbles while you pop them!',
                    'Do This Little Piggie on your child\'s fingers or toes.',
                    'Go or look outside to see what kind of birds you can see. Do you see any birds that are black? Red? Brown?',
                    'Rose, peach, and lavender are exampled of pastels. If you want to make your own pastel eggs:\nBoil the eggs and once they are cool dip them in a cup with vinegar and a few drops of food coloring.',
                    'Song Day!\nMake new friends but keep the old.\nSome are silver and the others gold.\nIf you have several people, try singing the song in a round.',
                    'Can you think of an animal that has many colors? If one doesn\'t come to mind, create your own animal and make up a story about where it lives. Draw the animal and all of the colors that make it beautiful.',
                    'Spend time cutting up a newspaper of magazine looking for the letters in your name. Try to find all different color letters. Glue them onto paper for your very own name plate.',
                    'Gather all of the books and magazines around your house and pretend that it\'s a library. Sign up your friends and family for library cards and let them check out books.',
                    'Can you think when you might see neon colors? Can you make up a rhyme about neon colors?',
                    'Write out the names of different colors. Have your child trace the words in the matching color.',
                    'Can you make a butterfly out of shades of purple? Try making different shades of purple paint and then paint some butterflies.',
                    'The three basic colors that make up every other color are red, blue, and yellow. Mix the paint of two primary colors to create secondary colors.',
                    'Flip through a calendar or magazine and ask your child to point out their favorite colors. Throughout the day, look for those colors!',
                    'Starting with A, go through the alphabet and see if you and your child can name a color for every letter!',
                    'Teach your child about the four seasons. Help them learn the names of each one and what it looks like as the seasons change.',
                    'Talk about rainy weather and show your child how to use an umbrella. Practice saying and spelling the word umbrella.',
                    'Take a walk outside. See what you can find to count:\nsticks, petals of flowers, leaves, or acorns. What season is it?',
                    'Song Time!\nThe ants go marching one by one\nHurrah! Hurrah!\nThe ants go marching one by one\nHurrah! Hurrah!\nThe ants go marching one by one\nThe little one stops to suck his thumb\nAnd they all go marching down,\nTo the ground, to get out, of the rain.\nBoom, boom, boom, boom.',
                    'Mother Goose Time!\nRain, rain, go away.\nCome again another day.\nLittle Johnny wants to play.\nRain, rain, go away.',
                    'Make a picture of your family or friends and what you can do outside in the summer. Draw them, color them, or cut pictures from magazines.',
                    'Talk about daylight saving times, and why we "spring ahead" and "fall back" an hour in the spring and fall.',
                    'Song Time!\nSing this song about spring to the tune of Twinkle, Twinkle, Little Star\nSpring, spring is coming soon,\nGrass is green and flowers bloom.\nBirds returning from the south,\nBees are buzzing all about.\nLeaves are budding everywhere.\nSpring, spring is finally here!',
                    'Create your own piece of art and display it in your home!',
                    'Pretend it\'s winter and drink your favorite warm drink. Talk about what fun things you do in the winter. Make paper snowflakes with scissors and folded paper!',
                    'Mother Goose Time!\nThe itsy bitsy spider\nWent up the water spout.\nDown came the rain\nAnd washed the spider out!\nOut came the sun\nAnd dried up all the rain.\nAnd the itsy bitsy spider went up the spout again.',
                    'Pretend to be falling leaves! Talk about why leaves fall off the trees.',
                    'Theodore Seuss Geisel "Dr. Seuss" was born on March 2, 1904. Practice rhyming words of items you find around the house.',
                    'Talk about how some animals migrate south for the winter. Explain south by showing your child a map or a globe.',
                    'Mother Goose Time!\nIt\'s raining,\nIt\'s pouring.\nThe old man is snoring.\nHe went to bed with a cold in his head,\nAnd didn\'t get up \'til the morning.',
                    'Try to have a picnic today at a local park, in your yard, or even inside your house!',
                    'What animals do you hear during this season. Go outside and close your eyes. Can you hear the birds chirp, frogs ribbit, or bugs buzzing around?',
                    'Spend some time talking about foods that grow during different seasons. What is your favorite seasonal food?',
                    'Bath Time!\nHave some fun in the bath. You can talk about all the fun things to do in the water. Make up your own songs about being in the water.',
                    'Talk about the different clothes you wear each season. Do animals wear clothes? What is your favorite furry animal and why?',
                    'Mother Goose Time!\nJack be nimble, Jack be quick, Jack jumped over the candlestick!\nUse a paper towel roll, or imagine a candlestick on the ground. Have your child jump over the "candlestick."',
                    'Talk about how the weather changes each season.',
                    'Soak a cotton ball with water and put a popcorn kernel in it. Place in a paper cup and cover with plastic wrap. Secure with a rubber band. Put it in a window where it will get sun. Check every day to see if the seed has sprouted. Talk about how plants grow.',
                    'Say a word and have your child tell you the opposite (big, small, happy, sad)',
                    'Draw a picture of a tree as it goes through all four seasons.',
                    'Draw a picture of your favorite season. Share why it is your favorite. What is your favorite activity to do in that season?',
                    'Find things that are yellow, orange, or red like leaves in the fall.',
                    'Make a mini kite with paper, popsicle sticks,, and string. How do you think a kite works?',
                    'Trace the hands of the people in your home and make the outline of mittens. Color them all different colors!',
                    'Practice jumping and hopping on one foot. Create a rhyme as you hop and jump.',
                    'Play Simon Says.',
                    'Mother Goose Time!\nHigglety pigglety pop,\nThe dog has eaten the mop!\nThe pig\'s in a hurry,\nThe cat\'s in a flurry,\nHigglety, pigglety pop!',
                    'Make up a song about going to school!',
                    'Point out the names of the author and illustrator of a book. Talk about what each person does.',
                    'Mother Goose Time!\nHey diddle diddle\nThe cat and the fiddle,\nThe cow jumped over the moon;\nThe little dog laughed\nTo see such sport,\nAnd the dish ran away with the spoon.',
                    'Can you work on writing your own story together? You can add to it every day this month.',
                    'Use a cookbook to make something new! Read the recipe and talk about the ingredients.',
                    'Practice singing the ABC\'s. Talk about letters and words.',
                    'Talk about the different jobs people have, then choose a job and play dress up!',
                    'Read two books to your child before bed. Ask your child about their favorite part of each one.',
                    'Have your child draw a picture of their favorite character from a book.',
                    'Find a newspaper or any item with print. See how many words your child can pick out.',
                    'Mother Goose Time!\nAll around the mulberry bush\nThe monkey chased the weasel\nThe monkey thought \'twas all in fun\nPop! Goes the weasel.',
                    'Help your child make and decorate a bookmark.',
                    'Spend time reading together. When your child sees you reading, they will mimic your behaviors.',
                    'Have your child draw a tree and write alphabet letters hidden in the leaves.',
                    'Walk through your house or outside. See if you can find items with the first letter of your child\'s name.',
                    'Have your child draw a mouse and give it a name.',
                    'Write out each letter of the alphabet. Cut them out in squares and take them around the house. Call out a letter for your child to find until they are all gone!',
                    'Mother Goose Time!\nDown by the station,\nearly in the morning\nSee the shiny train cars\nAll in a row.\nWaitin\' to get hitched up\nAnd go on their adventure\nChug, chug\nToot, toot\nOff they go!',
                    'Encourage your child to write or tell you a story. If they tell it to you, write it down so you can share it with your family and friends!',
                    'Put on some music and dance! Try listening to different types of music and see how your dancing changes.',
                    'Sit down as a family and read a story.',
                    'Ask your child to tell you a story. When they finish, ask questions. This is how children learn to tell complete stories and know you are interested in what they have to say.',
                    'Find a book with few words. You can tell one version of the story and have your child tell another.',
                    'Draw a large outline of your child\'s name. Have them trace and color each letter.',
                    'Mother Goose Time!\nHumpty Dumpty sat on the wall.\nHumpty Dumpty had a great fall.\nAll the king\'s horses\nAnd all the king\'s men\nCouldn\'t put Humpty together again.',
                    'With your child, look at the pictures in a book and guess what happens. Then, read the story together to see if you were right.',
                    'Go outside and look up at the clouds. Do they look like animals, shapes, or something else?',
                    'Read a story and then act it out using puppets, dolls, or stuffed animals.',
                    'Label items in your house. Practice saying the words together.',
                    'Wear something green. Talk about the things you will do to be more earth friendly today.',
                    'Find some pictures from a magazine or pamphlet. Lay them out in a row and tell a story about them.',
                    'Turn off the TV today. Spend some time reading together instead.',
                    'Make an animal collage. Cut out some pictures of animals or draw some pictures and paste them on a big piece of paper.',
                    'Practice the sounds animals make. What\'s your favorite?',
                    'Make up a story about an animal. Where do they live? What kinds of animal friends do they have? Draw pictures to go along with your story.',
                    'Play leap frog with your child. Talk about why it is called leap frog.',
                    'The Maryland state bird is the Baltimore Oriole and the state dog is a Chesapeake Bay Retriever. Draw a picture of what you think these animals look like.',
                    'Can you think of words or sounds that rhyme with sheep?',
                    'Count the number of different animals you can find on packaging, clothing, or other things around you.',
                    'Some picture books have no words, only pictures. See if you have any books that are wordless and make up your own words!',
                    'Practice singing your ABC\'s today! Can you think of an animal for every letter of the alphabet?',
                    'Make thumbprint animals! Cur strips of paper and make bookmarks for your friends and family.',
                    'Dance to songs with animals in the title like Hound Dog and The Lion Sleeps Tonight."',
                    'Take turns pretending to be different animals and guess which animal the other person is pretending to be.',
                    'Salt Dough Animals!\nGet out your salt dough or play dough and make some animals! To make salt dough, follow this recipe:\n1 cup of fine salt\n1 cup of flour\n1/2 cup of water\n\nIn a large bowl, combine the salt and the flour. Make a well in the salt/flour mixture and add the water. Knead until smooth and shape into a ball. When not in use, wrap in plastic or store in an airtight container.',
                    'Play Which is Bigger? using animals.',
                    'Mother Goose Time!\nHickory, dickery, dare,\nThe pig flew up in the air;\nThe man in brown\nSoon brought him down,\nHickory, dickery, dare.',
                    'Let\'s play pretend. What animal wouold you be and why?',
                    ];


let activity = activities[Math.floor(Math.random()*activities.length)];


//Begin console output:
console.log('\n');

console.log('HELLO, FRIEND!');
console.log(`Today is ${month} ${date}, ${year}.`);
console.log(`It is a ${day}!`);

console.log('\n');

console.log('The letter of the day is:');
console.log('\n');
console.log('\x1b[35m%s\x1b[0m', letterASCII[letter])
console.log('\n');
console.log(`Some words that start with ${capitalLetter} are:`);
console.log(`${foodLetter}, ${funLetter}, and ${animalLetter}`);
//Use "an" or "a" for appropriate letters:
if ([0,4,5,7,8,11,12,13,14,17,18,23].includes(letter)) {
    console.log(`Can you make an ${capitalLetter} sound?`);
} else {
    console.log(`Can you make a ${capitalLetter} sound?`);
}
console.log('\n');

console.log('The number of the day is:');
console.log('\n');
console.log('\x1b[32m%s\x1b[0m', numberASCII[number]);
console.log('\n');
console.log(`Can you count to ${number+1}?`);
console.log('\n');
//Print counting circles for the number of the day:
for (let i=0; i<number+1; i+=5) {
    if (i+5 < number+1) {
        console.log('\x1b[36m%s\x1b[0m', counterASCII_1.repeat(5));
        console.log('\x1b[36m%s\x1b[0m', counterASCII_2.repeat(5));
        console.log('\x1b[36m%s\x1b[0m', counterASCII_3.repeat(5));
        console.log('\n');
    } else {
        console.log('\x1b[36m%s\x1b[0m', counterASCII_1.repeat(number+1-i));
        console.log('\x1b[36m%s\x1b[0m', counterASCII_2.repeat(number+1-i));
        console.log('\x1b[36m%s\x1b[0m', counterASCII_3.repeat(number+1-i));
        console.log('\n');
    }
}

console.log('\n');

console.log('ANIMAL FACTS:');
/*
console.log('\n');
console.log(animalASCII[animal]);
console.log('\n');
console.log(`The animal of the day is the ${animals[animal][0]}. Let's learn about it!`);
console.log(animals[animal][1]);
*/

console.log('\n');

console.log('ACTIVITY TIME:');
console.log(activity);

console.log('\n');

console.log('Thank you for learning with me! I hope you have an excellent, fun-filled day.\n');