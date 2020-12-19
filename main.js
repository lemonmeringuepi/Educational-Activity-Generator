//Define day and month names:
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//Get today's date:
let d = new Date;
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();
let day = days[d.getDay()];

// Random number generator between 0(Inclusive) and the number passed as an argument(exclusive)
function getRandom(num) {
    return Math.floor(Math.random() * num);
}

//Define letters, their words, and ASCII. Choose a letter at random:
const letters = [
    ['A', 'apple', 'activist', 'ant'],
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
    ['Z', 'zucchini', 'zipper', 'zebra']
];
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
    '\tZZZZZZ        \n\t    ZZ        \n\t   ZZ   zzzzzz\n\t  ZZ       zz \n\t ZZ      zz   \n\tZZZZZZ  zzzzzz'
];
let letter = getRandom(26);
let capitalLetter = letters[letter][0];
let foodLetter = letters[letter][1];
let funLetter = letters[letter][2];
let animalLetter = letters[letter][3];


//Define numbers 1-20 and choose one at random:
let number = getRandom(20);
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
    '\t 2222    0000 \n\t22  22  00  00\n\t   22   00  00\n\t  22    00  00\n\t 22     00  00\n\t222222   0000 '
];


//Define animals and choose one at random:
const animals = [
    ['aardvark', 'Aardvarks are medium-sized mammals from Africa. They are insectivores, which means they eat bugs! Have you eaten a bug before?'],
    ['bat', 'Bats are nocturnal animals-- they sleep during the day and wake up at night. The smallest bat, only the size of a bumblebee is Kitti\'s Hog-Nosed bat. The biggest bat in the world, with a wing span up to 5\'7", is called a flying fox.'],
    ['bear', 'Bears have incredible senses of smell, hearing, and sight. They can tell if a fruit is perfectly ripe just by looking at it!'],
    ['beaver', 'Beavers are excellent swimmers. They build homes called dams on and near the water which are crucial to maintaining our ecosystems.'],
    ['flamingo', 'You often see flamingos standing on one leg, but have you ever wondered why? If the water is cold, flamingos bring one leg at a time closer to their body to keep it warm. How long can you stand on one leg?'],
    ['camel', 'Camels can be found from northern Africa all the way to central Asia, usually in desertlike climates. Their humps are full of fat, which they can use to stay healthy when food and water are scarce.'],
    ['deer', 'Deer have long antlers which they grow and shed, or lose, every year. They usually travel in herds of six.'],
    ['dolphin', 'Dolphins are social marine mammals. They are very intelligent and playful. Dolphins communicate by clicking and whistling at each other. Can you pretend to be a dolphin?'],
    ['elephant', 'Elephants are the largest land animal alive today. That means they have a BIG appetite, eating up to sixteen hours a day. Elephants eat plants. What plants do you like to eat?'],
    ['kangaroo', 'Kangaroos have strong tails and feet that are perfect for jumping up to thirty feet in a single hop! How far can you hop?'],
    ['armadillo', 'Armadillos live in burrows that they dig in the ground. They have armored plates all over their bodies to keep them safe from predators while they hunt for bugs to eat.'],
    ['lobster', 'Lobsters are crustaceans. When they grow, they go through a process called molting, when they lose their old shell to develop a bigger shell. Lobster can keep growing this way for their entire lives-- with some species surviving to be more than 100 years old!'],
    ['ant', 'Ants are social insects who live in groups called colonies. Each ant can lift up to 20 times its body weight. Ask your adult how much you weigh, then pretend to be an ant. How many things can you carry on your own?'],
    ['bee', 'Bees live in large groups called colonies. They collect pollen from flowers to make honey in their hives. This process, called pollination, is what helps plants create the fruits and vegetables that we love to eat.'],
    ['scorpion', 'Scorpions are arachnids-- just like spiders! They use their pincers and venomous stingers to catch and eat their prey.'],
    ['wolf', 'Wolves are social animals. They travel in groups called packs. The packs are usually made up of two parents and their children. What is your pack, or family, like?']
];
const animalASCII = ['       _.---._    /\\\\\n    ./\'       "--`\\//\n  ./              o \\\n /./\\  )______   \\__ \\\n./  / /\\ \\   | \\ \\  \\ \\\n   / /  \\ \\  | |\\ \\  \\7\n    "     "    "  "     ',
    ' /\\                 /\\\n/ \\\'._   (\\_/)   _.\'/ \\\n|.\'\'._\'--(o.o)--\'_.\'\'.|\n \\_ / `;=/ " \\=;` \\ _/\n   `\\__| \\___/ |__/`\n        \\(_|_)/\n         " ` "',
    '     (()__(()\n     /       \\ \n    ( /    \\  \\\n     \\ o o    /\n     (_()_)__/ \\             \n    / _,==.____ \\\n   (   |--|      )\n   /\\_.|__|\'-.__/\\_\n  / (        /     \\ \n  \\  \\      (      /\n   )  \'._____)    /    \n(((____.--(((____/',
    '             ___\n          .="   "=._.---.\n        ."         c \' Y\'`p\n       /   ,       `.  w_/\n       |   \'-.   /     / \n _,..._|      )_-\\ \\_=.\\\n`-....-\'`------)))`=-\'"`\'"',
    '            __\n           /(`o\n     ,-,  //  \\\\\n    (,,,) ||   V\n   (,,,,)\\//\n   (,,,/w)-\'\n   \\,,/w)\n   `V/uu\n     / |\n     | |\n     o o\n     \\ |\n\\,/  ,\\|,.  \\,/',
    '        _\n    .--\' |\n   /___^ |     .--.\n       ) |    /    \\\n      /  |  /`      \'.\n     |   \'-\'    /     \\\n     \\         |      |\\\n      \\    /   \\      /\\|\n       \\  /\'----`\\   /\n       |||       \\\\ |\n       ((|        ((|\n       |||        |||\n      //_(       //_(',
    '                   .     _,\n                   |`\\__/ /\n                   \\  . .(\n                    | __T|\n                   /   |\n      _.---=======\'    |\n     //               {}\n    `|      ,   ,     {}\n     \\      /___;    ,\'\n      ) ,-;`    `\\  //\n     | / (        ;||\n     ||`\\\\        |||\n     ||  \\\\       |||\n     )\\   )\\      )||\n     `"   `"      `""',
    '              ,-.\n             /  (  \'\n     *  _.--\'!   \'--._\n      ,\'              \'\'.\n\'    |!                   \\\n   _.\'  O      ___       ! \\\n  (_.-^, __..-\'  \'\'\'\'--.   )\n      /,\'        \'    _.\' /\n   \'         *    .-\'\'    |\n                 (..--^.  \' \n                       | /\n                       \'',
    '                        ____\n                   .---\'-    \\\n      .-----------/           \\\n     /           (         ^  |   __\n&   (             \\        O  /  / .\'\n\'._/(              \'-\'  (.   (_.\' /\n     \\                    \\     ./\n      |    |       |    |/ \'._.\'\n       )   @).____\\|  @ |\n   .  /    /       (    |    \n  \\|, \'_:::\  . ..  \'_:::\\ ..\\).',
    '      (\\-"""-/)\n       |     |\n       \\ ^ ^ /  .-.\n        \\_o_/  / /\n       /`   `\\/  |\n      /       \\  |\n      \\ (   ) /  |\n     / \\_) (_/ \\ /\n    |   (\\-/)   |\n    \\  --^o^--  /\n     \\ \'.___.\' /\n    .\'  \\-=-/  \'.\n   /   /`   `\\   \\\n  (//./       \\.\\\\)\n   `"`         `"`',
    '             ,.-----__    \n          ,:::://///,:::-. \n         /:\'\'/////// ``:::`;/|/\n        /\'   ||||||     :://\'`\\\n      .\' ,   ||||||     `/(  e \\\n-===~__-\'\\__X_`````\\_____/~`-._ `.\n            ~~        ~~       `~-\'',
    '                         ,.---.   \n               ,,,,     /    _ `.\n                \\\\\\\\   /      \\  )\n                 |||| /\\/``-.__\\/\n                 ::::/\\/_\n {{`-.__.-\'(`(^^(^^^(^ 9 `.=========\'\n{{{{{{ { ( ( (  (   (-----:=\n {{.-\'~~\'-.(,(,,(,,,(__6_.\'=========.\n                 ::::\\/\\ \n                 |||| \\/\\  ,-\'/\\\n                ////   \ `` _/  )\n               \'\'\'\'     \\  `   /\n                         `---\'\'',
    ' \\       /\n  \\     /  \n   \\.-./ \n  (o\\^/o)  _   _   _     __\n   ./ \\.\\ ( )-( )-( ) .-\'  \'-.\n    {-} \\(//  ||   \\\\/ (   )) \'-.\n         //-__||__.-\\\\.       .-\'\n        (/    ()     \\)\'-._.-\'\n        ||    ||      \\\\\n        (\'    (\'       \')',
    '              \\     /\n          \\    o ^ o    /\n            \\ (     ) /\n ____________(%%%%%%%)____________\n(     /   /  )%%%%%%%(  \\   \\     )\n(___/___/__/           \\__\\___\\___)\n   (     /  /(%%%%%%%)\\  \\     )\n    (__/___/ (%%%%%%%) \\___\\__)\n            /(       )\\\n          /   (%%%%%)   \\\n               (%%%)\n                 !',
    ' ___    ___\n( _<    >_ )\n//        \\\\\n\\\\___..___//\n `-(    )-\'\n   _|__|_\n  /_|__|_\\\n  /_|__|_\\\n  /_\\__/_\\\n   \\ || /  _)\n     ||   ( )\n     \\\\___//\n      `---\'',
    '                        ,     ,\n                        |\\---/|\n                       /  , , |\n                  __.-\'|  / \\ /\n         __ ___.-\'        ._O|\n      .-\'  \'        :      _/\n     / ,    .        .     |\n    :  ;    :        :   _/\n    |  |   .\'     __:   /\n    |  :   /\'----\'| \\  |\n    \\  |\\  |      | /| |\n     \'.\'| /       || \\ |\n     | /|.\'       \'.l \\\\_\n     || ||             \'-\'\n     \'-\'\'-\''
];
let animal = getRandom(animals.length);


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
    'Talk about what kinds of animals live in your state or region. If you live in Maryland, visit dnr.maryland.gov to learn more.',
    'Talk about the names of baby animals: kitten, puppy, lamb, colt, etc.',
    'Make a poster about insects! Don\'t forget to include colorful ones like ladybugs and butterflies.',
    'What animals live underwater? Make your best fishy face!',
    'Talk about how eggs come from chickens. Decorate an egg with markers. Don\'t forget to use it before it spoils!',
    'Look through a magazine or book for animals found in other words like coward, crabby, or catastrophe.',
    'What are some cold weather animals? Talk about animals that live in the snow and draw your favorite!',
    'Explain to your child what it means for an animal to be endangered. Ask your child what people can do to protect endangered animals.',
    'What kind of animals live in the jungle? Can you make up a story about these animals?',
    'Do you know the sounds that jungle animals make? Take turns making animal sounds!',
    'Together, write a poem about your pet or what your favorite animal does all day.',
    'Take a walk and look for butterflies. Can you tell a story about what the butterflies are doing?',
    'Make popsicles by putting juice into ice cube trays and placing a toothpick in each cube. Freeze and eat!',
    'Pick a letter and eat three foods with that letter. Talk about their taste, texture, and color.',
    'Add food coloring to cups of water and put in celery stalks. What do you think will happen? Check back tomorrow and see! Talk about how plants need water to grow.',
    'Find a package of dried beans. Use them to practice counting.',
    'Make up a story about what you think would happen if you gave a mouse a cookie.',
    'Use animal crackers to host an animal cracker circus!',
    'Talk about foods and flavors enjoyed in your state or region. Do you know how to make crab cakes or a Smith Island cake? Have you tried Old Bay seasoning? Explore these tastes.',
    'Read a book about food. When you are done, have your child retell you the story.',
    'Mother Goose Time!\nOh, do you know the muffin man,\nThe muffin man, the muffin man?\nDo you know the muffin man,\nWho lives on Drury Lane?',
    'When you go to the grocery store, spend time pointing out the color of the foods and their names.',
    'Go outdoors and enjoy a picnic (or have one inside!). Look at the shapes of your food. How many square items do you have? Circles? Triangles?',
    'Name as many fruits and vegetables as you can and talk about what color they are.',
    'Go outside and make mud pies. Count them forwards and backwards, but don\'t eat them!',
    'Eat an apple or watermelon and count the seeds.',
    'Show your child how to tell the temperature outside by reading a thermometer. Talk about hot and cold and why some foods need to stay cold.',
    'Try and visit a local farm or farmer\'s market today to see what foods are growing locally. Have you eaten any of them before?',
    'Bake something together! If you can\'t bake, pretend! Practice measuring ingredients.',
    'Make a food alphabet book. Fold over paper and either draw or cut out pictures of food items.',
    'How many different types of berries can you think of? How many have you eaten before?',
    'Talk about taste buds. Find items around your house that taste different, such as salty, sweet, and sour. What is your favorite?',
    'Play with your peas! How many peas fit on a spoon? Put them on, count, then eat them! Yum!',
    'Song Day!\nOn top of spaghetti all covered with cheese.\nI lost my poor meatball\nWhen somebody sneezed.\nIt rolled off the table, and onto the floor.\nAnd then my poor meatball rolled out of the door.',
    'Spend some time making a meal together. Talk about what kinds of food you are making and let your child help.',
    'Eat a rainbow! Try to eat something red, orange, yellow, green, and blue today!',
    'Song Day!\nThe farmer in the dell\nThe farmer in the dell\nHi-ho, the derry-o\nThe farmer in the dell.',
    'Find a can or box in the house and use it to practice reviewing the alphabet.',
    'Make a paper plate pizza. Use a paper plate as the pizza and you can draw or cut out shapes to "make" the toppings.',
    'Make music with water! Fill glasses with different amounts of water. Take a fork or spoon and tap the glass. Listen to the different sounds each glass makes!',
    'Play with your food! You can make apple smiles by cutting apple quarters into halves, or try making ants on a log.',
    'Mother Goose Time!\nMr. East gave a feast;\nMr. North laid the cloth;\nMr. West did his best;\nMr. South burned his mouth, eating a cold potato.',
    'Jump rope or do some jumping jacks. Sing songs as you jump.',
    'Mother Goose Time!\nLittle Boy Blue, come blow your horn,\nThe sheep\'s in the meadow,\nThe cow\'s in the corn.\nWhere is that boy who looks after the sheep?\nUnder the haystack fast asleep.',
    'Talk about musical theater. If you have a favorite musical, sing or play some of the music for your child.',
    'Song Day!\nSing and do the motions to Head, Shoulders, Knees, and Toes.',
    'Count out ten dry beans or pieces of cooked pasta. Put them between two paper plates and staple the plates together to make a rattle.',
    'Pretend to play instruments like the piano, violin, guitar, or drum.',
    'Put on some music and find the rhythm. Practice clapping to the beat.',
    'Play some quiet music and stretch along to it. Count quietly as you stretch together.',
    'Create a dance to your favorite song. Talk about what makes that song your favorite.',
    'Sing a lullaby together at bedtime such as Rock-a-bye Baby.',
    'Play some classical music and dance to it.',
    'Talk about how to sing in a round. Try singing in a round to Row, Row, Row Your Boat.',
    'Play musical chairs. Change the rules to fit how many players you have.',
    'Make music with your body by snapping, clapping, and stomping.',
    'Song Day!\nSing and do the motions to The Wheels on the Bus.',
    'Have your child bang on different size pots and pans with a wooden spoon. Talk about the variety of sounds high and low that they make.',
    'Sing a song to your child in the morning or after nap time to wake them up.',
    'Song Day!\nFive green and speckled frogs\nSat on a speckled log\nEating some most delicious bugs.\nOne jumped into the pool\nWhere it was nice and cool.\nNow there are four green speckled frogs.',
    'Read a book and stop halfway through. Have your child guess what will happen before you read the rest of the book.',
    'Take a walk outside and listen to nature\'s music. Try to identify who or what is making each sound.',
    'Have your child make up their own song and help them write down the lyrics.',
    'Get out your favorite book and point to the parts of the book using this song:\nFront of the book, back of the book!\nFront of the book, back of the book!\nTitle page! Title page!\nAuthor and illustrator, author and illustrator!\nSpine of the book!\nSpine of the book!',
    'Mother Goose Time!\nSing, sing, what shall I sing?\nThe cat\'s run away with the pudding string!\nDo, do, what shall I do?\nThe cat\'s run away with the pudding, too!',
    'What in your house can become a musical instrument? Look around and make some music.',
    'Song Day!\nSing and dance to the Hokey Pokey.',
    'Put on some music while you bake something together.',
    'Read a book together and point out a ny unusual words. Talk about what they mean.',
    'Song Day!\nTake me out to the ballgame.\nTake me out to the crowds.\nBuy me some peanuts and Cracker Jacks.\nI don\'t care if I never come back,\nFor it\'s root, root, root for the home team.\nIf the don\'t win, it\'s a shame.\nFor it\'s one! Two! Three! Strikes you\'re out in the old ballgame!',
    'Talk about what sounds different animals make. Draw a picture of animals that sing.',
    'Bath Time!\nSing and do the motions to Where is Thumbkin? Have the finger family run away under the water.',
    'Make rhythm sticks by filling paper towel rolls or toilet paper rolls with dry beans or uncooked pasta. Tape the ends closed and shake.',
    'Talk about what the word imagination means. Point out and say aloud each letter in the word "imagination."',
    'Make a fort or castle with blankets and play in it together.',
    'Make up a recipe together and cook something fun.',
    'Have your child pretend to be a bird such as a sandpiper and fly around the house.',
    'Make a hat out of things in your house. Decide where or for what event your child would wear their hat.',
    'Have a real or imaginary tea party with your child and sing I\'m a Little Teapot.',
    'Go outside, lie on the ground, and look up at the clouds. What do you see?',
    'Have your child imagine what it might be like to live on the moon. Have them draw a picture of what they imagine.',
    'Ask your child what they would like to be when they grow up and have them draw a self portrait of themself as an adult.',
    'Use a broom or stick as a pretend horse. Ride your horse around the house, sidewalk, or yard.',
    'Bath Time!\nBring some objects with you into the bath. Use them to tell a story about their life in the water.',
    'Read a book and ask your child to imagine what would have happened if the characters in the story made different choices.',
    'Pretend that you are seeds planted in the ground and then grow into a flower. Talk about what seeds need to grow.',
    'Imagine something amazing and then draw it with a purple crayon.',
    'Paint the sidewalk or driveway with water and watch it evaporate.',
    'Make bubble solution. Sit outside and blow bubbles. Look for shapes in the bubbles that float by.\n3 cups water\n1 cup liquid dish detergent\n1 tbsp sugar',
    'Set up a pretend kitchen and cook something with your child.',
    'Make a guessing box from an empty tissue box. Pick out items together to put in the box. Let your child put their hand into the box and without looking, guess what each object is.',
    'Play dress up using old clothes. Put on a little show in costume.',
    'Read a book together. Have your child imagine what happens after the book ends.',
    'Use dolls, action figures, or stuffed animals to act out a story.',
    'Mother Goose Time!\nHickory, dickery, dock!\nThe mouse ran up the clock.\nThe clock struck one.\nThe mouse ran down.\nHickory, dickery, dock.',
    'Song Day!\nLondon Bridge is falling down! Falling down! Falling down!\nLondon Bridge is falling down! My fair lady!',
    'Set up a pretend grocery store and let your child go shopping. Talk about the foods that they choose.',
    'Cover the floor with paper and have everyone make one large picture together.',
    'Imagine that a laundry basket or box is a car for your child. Make car noises and drive them around the house.',
    'Read a fairytale together. If you don\'t have a fairytale book, make up your own story about a character from a fairytale.',
    'Mother Goose Time!\nStar light, star bright, the first star I see tonight;\nI wish I may, I wish I might,\nHave the wish I wish tonight.',
    'Ask your child what kind of pet they would have if they could have any animal in the world.',
    'Make salt dough or play dough and have your child use it to mold an imaginary animal. Have them describe what their animal is and what it is called.\nTo make salt dough, follow this recipe:\n1 cup of fine salt\n1 cup of flour\n1/2 cup of water\n\nIn a large bowl, combine the salt and the flour. Make a well in the salt/flour mixture and add the water. Knead until smooth and shape into a ball. When not in use, wrap in plastic or store in an airtight container.',
    'Take a walk outside and play I Spy.',
    'Make a 26 page booklet from blank paper. Together, write each letter on the top of each page. Fill in your book with drawings or magazine pictures to make an ABC book.',
    'A is for apple. Eat an apple and count the seeds.',
    'Song Time!\nHere is the beehive.\nWhere are the bees?\nHidden inside where nobody sees.\nWatch and you\'ll see them come out of their hive.\nCount them!\n1, 2, 3, 4, 5!\nBuzzzzz!',
    'Make a tower using paper or plastic cups. How high can you go?',
    'Fill a small container with dirt or rice and hide objects in it. Have your child dig for treasure.',
    'Touch your toes, do some jumping jacks, and stretch your arms up high. Feel your body move and breathe!',
    'Read a book. Help your child find the letters of their name in the words of the book.',
    'Talk about your favorite fruits and make some fruit salad together.',
    'Tell your child a story about one of their favorite adults.',
    'Taste some honey and talk about where it comes from.',
    'Melt ice cubes and talk about temperature. Have your child list things that are hot and things that are cold.',
    'Mother Goose Time!\nJack and Jill went up the hill to fetch a pail of water;\nJack fell down and broke his crown,\nAnd Jill came tumbling after.',
    'Talk like a pirate today!',
    'Make salt dough or use play dough to spell out your name. Here is the recipe for salt dough:\n1 cup of fine salt\n1 cup of flour\n1/2 cup of water\n\nIn a large bowl, combine the salt and the flour. Make a well in the salt/flour mixture and add the water. Knead until smooth and shape into a ball. When not in use, wrap in plastic or store in an airtight container.',
    'Song Time!\nOld King Cole was a merry old soul\nAnd a merry old soul was he;\nHe called for his pipe,\nAnd he called for his bowl\nAnd he called for his fiddlers three.',
    'Take a walk outside and look for leaves. Try to find ten different kinds of leaves.',
    'Sing the alphabet song. Try singing it while fingerspelling in American Sign Language.',
    'Help your child spell their name or make the alphabet using spaghetti noodles.',
    'Origami is the Japanese art of making objects by folding paper. Help your child fold a paper airplane.',
    'Point out the letters you recognize in signs, labels, and billboards throughout the day.',
    'Song Time!\nPat-a-cake, pat-a-cake, baker\'s man,\nBake me a cake as fast as you can.\nRoll it, and prick it, and mark it with a "B"\nAnd put it in the oven for baby and me!',
    'Draw a family quilt on paper and have each family member decorate one or more squares.',
    'Song Time!\nRing around the rosie.\nA pocketful of posies\n"Ashes, Ashes"\nWe all fall down!',
    'Explain the idea of sign language. Teach your child to say "I love you."',
    'Find objects around the house that start with each letter of the alphabet.',
    'Practice fingerspelling your child\'s name in American Sign Language.',
    'Choose your favorite alphabet book to look at together. Have your child tell the story by looking at the illustrations.',
    'Rhyme Time!\nRain is falling down SPLASH!\nRain is falling down SPLASH!\nPitter patter, pitter patter,\nRain is falling\ndown\nSPLASH!',
    'Name a vegetable that starts with each letter of the alphabet.',
    'Make paint with shaving cream mixed with a few drops of food coloring. Paint with it in the tub during bath time.',
    'Find your country, state, and city on a map. Draw a map of your neighborhood.',
    'Point out all of the yellow objects you see throughout the day.',
    'Write a list of animals you may see at the zoo. Draw or paint a picture of your favorite zoo animal.',
    'Help your child write out the numbers 1 to 10.',
    'How tall are you? Measure each family member today.',
    'Pop some popcorn and count how many pieces you eat.',
    'Song Day!\nOne potato\nTwo potato\nThree potato, four\nFive potato, six potato\nSeven potato, more!',
    'Help your child count their fingers and toes. Count forwards and backwards.',
    'Mark ten black dots on a piece of paper. Use them to draw a picture, like a cow, giraffe, leopard, or constellation.',
    'Count the pairs of socks your child has. Talk about other things that come in pairs.',
    'Count by fives and tens as far as your child can go.',
    'Show your child a clock and count the hours. Explain the number of hours in a day.',
    'Help your child sort coins into groups by size. Talk about size and which is smaller or bigger.',
    'Look for the number five today.',
    'Have everyone in your family vote on their favorite book. Count the votes and see which book is the winner.',
    'Show your child your household smoke detector, or install a new one. Many fire departments offer free smoke detectors, so contact your local fire department to check. Talk about fire safety.',
    'Explain what a dozen means. Count the number of eggs in a carton.',
    'Mother Goose Time!\n1, 2 buckle my shoe\n3, 4 shut the door\n5, 6 pick up sticks\n7, 8 lay them straight\n9, 10 a big, fat hen!',
    'Count to ten in another language! Here are some ideas:\nSpanish: uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez\nFrench: un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix\nJapanese: ichi, ni, san, shi, go, roku, shichi, hachi, kyuu, juu\nMandarin: yi, ar, san, si, wu, liu, qi, ba, jui, shi',
    'Exercise with your child by hopping or doing jumping jacks. Count as you go.',
    'Draw a picture of family members who live with you. Count how many people.',
    'Have your child tell you a story about 1 pumpkin, 2 bats, and 3 owls.',
    'Choose a new recipe to make together. Point out the different measurements in the recipe.',
    'Show your child what time it is during the morning, afternoon, evening, and bedtime. Talk about some of the routines you have at those times of day.',
    'With your child count how many books they own. Have them choose a few of their favorites to read aloud.',
    'Talk about how much a penny, nickel, dime, and quarter are worth and how many of each are in a dollar.',
    'There are 24 counties in Maryland. Count from 1 to 24 together.',
    'Song Day!\nThis old man, he played one\nHe played knick-knack on my thumb;\nWith a knick-knack paddywhack,\nGive the dog a bone,\nThis old man came rolling home.',
    'Make salt dough or use play dough to mold the numbers 1 through 10.\nFollow this recipe to make salt dough:\n1 cup of fine salt\n1 cup of flour\n1/2 cup of water\n\nIn a large bowl, combine the salt and the flour. Make a well in the salt/flour mixture and add the water. Knead until smooth and shape into a ball. When not in use, wrap in plastic or store in an airtight container.',
    'Bath Time!\nBring a set of measuring cups or spoons into the bathtub. Practice counting and measuring.',
    'Point out the numbers you recognize in signs, labels, and billboards throughout the day.',
    'Point out your child\'s birthday and those of family members on a calendar. Talk about everyone\'s age.',
    'Song Day!\nSing songs with numbers, such as Five Little Pumpkins or Five Little Ducks.',
    'Count the number of seeds in a pumpking, apple, or other fruit.',
    'Read a picture book, then count the pages together.',
    'Does your family have favorite foods? Spend time cooking a meal together.',
    'Count how many people are in your family.',
    'Put on some of your favorite music and dance with your family.',
    'Draw pictures of your family and turn them into puppets by cutting them out and taping them to popsicle sticks.',
    'Talk about what kinds of activities you would do if the lights went out.',
    'Mother Goose Time!\nChook, Chook, Chook, Chook, Chook\nGood morning, Mrs. Hen.\nHow many chickens have you got?\nMadam, I\'ve got ten.\nFour of them yellow, and four are brown\nTwo of them are speckled red, the nicest in town.',
    'Have your child name one thing that makes each member of your family special.',
    'Write a poem about a family of turkeys.',
    'Talk about what each member of your family does best.',
    'Have a family story time. Have each person choose a favorite book to read.',
    'Play a game as a family. If you don\'t have a game, make one up!',
    'Have your child set the table for dinner and tell you who sits at which seat. Help them write place cards with each person\'s name.',
    'Draw a picture of an animal home. Talk about the different kinds of homes that animals live in.',
    'Song Day!\nYou are my sunshine\nMy only sunshine\nYou make me happy\nWhen skies are gray\nYou\'ll never know, dear\nHow much I love you.\nPlease don\'t take my sunshine away.',
    'Do a simple science experiment together. Fill numerous cups with water and add different colors of food coloring. Have your child mix two colors to create a new one. Help them observe what happens.',
    'Trace your hand to make a turkey. Draw a whole family of turkeys.',
    'Talk about some family traditions or make a new one.',
    'Have your child tell you a story about a special day they spent with another family member.',
    'Make a salt dough or play dough recipe and use it to sculpt models of your family members.\nHere is a recipe for salt dough:\n1 cup of fine salt\n1 cup of flour\n1/2 cup of water\n\nIn a large bowl, combine the salt and the flour. Make a well in the salt/flour mixture and add the water. Knead until smooth and shape into a ball. When not in use, wrap in plastic or store in an airtight container.',
    'Have each family member share one thing that they are thankful for.',
    'Have each family member draw a self portrait.',
    'Help your child write and send a letter to a family member.',
    'Take a walk outside as a family.',
    'Bath Time!\nRub-a-dub-dub, three men in a tub,\nAnd who do you think was there?\nThe butcher, the baker, the candlestick-maker,\nAnd all of them gone to the fair.',
    'Have your child make up a story about their favorite animal family.',
    'Talk about how families are similar and different.',
    'Talk about some of the animals in your neighborhood and whether they are part of a family.',
    'Mother Goose Time!\nBye, baby Bunting,\nFather\'s gone a-hunting,\nMother\'s gone a-milking,\nSister\'s gone a-silking,\nBrother\'s gone to buy a skin\nTo wrap the baby Bunting in.',
    'Have an older adult in your family tell your child a story from their childhood.',
    'Talk about why friends are important.',
    'Make up a rhyme about friends and clap out the beat.',
    'The word friend begins with the letter F. What other things begin with F?',
    'Write a poem about a chubby snowman.',
    'Discuss ways your child can be a good friend to someone.',
    'Song Day!\nInsert a friend\'s name into the song, Bingo:\nI have a very special friend\nAnd can you guess their name-o?\nJ-U-L-I-E, J-U-L-I-E,\nJ-U-L-I-E,\nAnd Julie is their name-o!',
    'Ask your child what animal they would like to bring home from the zoo, if they were allowed.',
    'Make up a story about friends by taking turns and each telling a part.',
    'Pretend to be snowflakes, snowballs, and snowmen, and then melt. Talk about how temperature affects snow.',
    'Have your child learn about a friend by asking them questions about their family, pets, likes, and dislikes.',
    'Song Day!\nWe\'re following the leader,\nThe leader, the leader.\nWe\'re following the leader\nWherever they may go.',
    'Talk about how friends can help each other.',
    'Invite one of your child\'s friends over to play or meet them and their parents at a park.',
    'Tell a story about a special meal you shared with friends, then make a meal together.',
    'Talk about what qualities a good friend should have.',
    'Help your child practice zipping or buttoning their coat. Take a walk outside together.',
    'Mother Goose Time!\nThree little kittens\nThey lost their mittens\nAnd they began to cry,\nOh, Mother Dear, we sadly fear\nOur mittens we have lost.\nWhat! Lost your mittens, you naughty kittens!\nThen you shall have no pie.',
    'Draw pictures of your friends and cut them out. Make them into puppets by taping them to popsicle sticks or straws. Put on a puppet show about your friends.',
    'Help your child cut out paper snowflakes. Tape them to the window or string them together to make a garland to hang.',
    'Song Day!\nIt\'s a small world after all.\nIt\'s a small world after all.\nIt\'s a small world after all.\nIt\'s a small, small world.',
    'Talk about how animals can be our friends, too. Talk about pets or other animals your child knows.',
    'Bath Time!\nBring some favorite toys or action figure friends into the bathtub. See which will float and which sink.',
    'Tell your child a story about one of your friends when you were their age.',
    'Read a book and substitute your child\'s name and friends\' names for the characters in the story.'
];
let activity = activities[getRandom(activities.length)];

// Parsing name from the console
let args = process.argv.slice(2);
if (args.length === 0) {
    args = ['friend'];
}
args = args.map(arg => {
    return arg.toUpperCase();
})

//Begin console output:
console.log('\n');

console.log(`HELLO, ${args[0]}!`);
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
if ([0, 4, 5, 7, 8, 11, 12, 13, 14, 17, 18, 23].includes(letter)) {
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
for (let i = 0; i < number + 1; i += 5) {
    if (i + 5 < number + 1) {
        console.log('\x1b[36m%s\x1b[0m', counterASCII_1.repeat(5));
        console.log('\x1b[36m%s\x1b[0m', counterASCII_2.repeat(5));
        console.log('\x1b[36m%s\x1b[0m', counterASCII_3.repeat(5));
        console.log('\n');
    } else {
        console.log('\x1b[36m%s\x1b[0m', counterASCII_1.repeat(number + 1 - i));
        console.log('\x1b[36m%s\x1b[0m', counterASCII_2.repeat(number + 1 - i));
        console.log('\x1b[36m%s\x1b[0m', counterASCII_3.repeat(number + 1 - i));
        console.log('\n');
    }
}

console.log('\n');

console.log('ANIMAL FACTS:');

console.log('\n');
console.log(animalASCII[animal]);
console.log('\n');
console.log(`The animal of the day is the ${animals[animal][0]}. Let's learn about it!`);
console.log(animals[animal][1]);

console.log('\n');

console.log('ACTIVITY TIME:');
console.log(activity);

console.log('\n');

console.log('Thank you for learning with me! I hope you have an excellent, fun-filled day.\n');