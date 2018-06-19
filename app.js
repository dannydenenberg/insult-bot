/*
  A ping pong bot, whenever you send "ping", it replies "pong".

  For documentation look at: https://discord.js.org/#/docs
*/

var insultAaron = true;

var insults = ['artless', 'base-court', 'apple-john', 'bawdy', 'bat-fowling', 'baggage', 'beslubbering', 'beef-witted', 'barnacle', 'bootless', 'beetle-headed', 'bladder', 'churlish', 'boil-brained', 'boar-pig', 'cockered', 'clapper-clawed', 'bugbear', 'clouted', 'clay-brained', 'bum-bailey', 'craven', 'common-kissing', 'canker-blossom', 'currish', 'crook-pated', 'clack-dish', 'dankish', 'dismal-dreaming', 'clotpole', 'dissembling', 'dizzy-eyed', 'coxcomb', 'droning', 'doghearted', 'codpiece', 'errant', 'dread-bolted', 'death-token', 'fawning', 'earth-vexing', 'dewberry', 'fobbing', 'elf-skinned', 'flap-dragon', 'froward', 'fat-kidneyed', 'flax-wench', 'frothy', 'fen-sucked', 'flirt-gill', 'gleeking', 'flap-mouthed', 'foot-licker', 'goatish', 'fly-bitten', 'fustilarian', 'gorbellied', 'folly-fallen', 'giglet', 'impertinent', 'fool-born', 'gudgeon', 'infectious', 'full-gorged', 'haggard', 'jarring', 'guts-griping', 'harpy', 'loggerheaded', 'half-faced', 'hedge-pig', 'lumpish', 'hasty-witted', 'horn-beast', 'mammering', 'hedge-born', 'hugger-mugger', 'mangled', 'hell-hated', 'joithead', 'mewling', 'idle-headed', 'lewdster', 'paunchy', 'ill-breeding', 'lout', 'pribbling', 'ill-nurtured', 'maggot-pie', 'puking', 'knotty-pated', 'malt-worm', 'puny', 'milk-livered', 'mammet', 'qualling', 'motley-minded', 'measle', 'rank', 'onion-eyed', 'minnow', 'reeky', 'plume-plucked', 'miscreant', 'roguish', 'pottle-deep', 'moldwarp', 'ruttish', 'pox-marked', 'mumble-news', 'saucy', 'reeling-ripe', 'nut-hook', 'spleeny', 'rough-hewn', 'pigeon-egg', 'spongy', 'rude-growing', 'pignut', 'surly', 'rump-fed', 'puttock', 'tottering', 'shard-borne', 'pumpion', 'unmuzzled', 'sheep-biting', 'ratsbane', 'vain', 'spur-galled', 'scut', 'venomed', 'swag-bellied', 'skainsmate', 'villainous', 'tardy-gaited', 'strumpet', 'warped', 'tickle-brained', 'varlot', 'wayward', 'toad-spotted', 'vassal', 'weedy', 'unchin-snouted', 'whey-face', 'yeasty', 'weather-bitten', 'wagtail'];

var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var randomEmily = ["mazel tov", "holy canoli", "are you still unemployed?", "I haven’t seen you since (Christmas). How are you going?",
  "Hi, fancy seeing you here – how are you?!", " it’s great to see you again!", "I haven’t seen you for/in ages – how are things?",
  "hey emily", "she speaks!", "thar she blows", "it's emily!", "hiya", "gosh, can we just talk about me!", "i'm not listening.....",
  "are you happy with your life, emily?", "lechium"
];

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'your bot token here';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  //console.log(message.content + ": " + message.author);


  if (message.author != '<@458669987121332234>') {


    // so aaron can make the bot insult him or not insult him
    if (message.content == 'stop insulting me' && message.author == '<@404749576495431691>') insultAaron = false;
    if (message.content == 'insult me' && message.author == '<@404749576495431691>') insultAaron = true;


    // insult aaron
    if (insultAaron) {
      // aaronvigal
      if (message.author == '<@404749576495431691>') {
        var mes = makeInsult();
        message.channel.send(mes);
      }
    }




    // emily
    if (message.author == '<@357313591671652355>') {
      var shouldInsult = Math.floor(Math.random() * 2);

      // the bot will either insult or not based on the number generated in `shouldINsult`
      if (shouldInsult == 0) {
        var mes = makeInsult();
        message.channel.send(mes);
      } else {

        var dayOfTheWeek = daysOfTheWeek[message.createdAt.getDay()];

        // check if the author is not the robot itself, so it doesn't respond to itself recursively
        if (message.author != '<@458669987121332234>') {

          // if it is emily
          if (message.author == '<@357313591671652355>') {
            var random = Math.floor(Math.random() * randomEmily.length);
            var mes = randomEmily[random];
            message.channel.send(mes);
          } else if (message.content.includes('hi') || message.content.includes('hey')) {
            var mes = `Hey, ${message.author}! How are you doing on this fine ${dayOfTheWeek}? I'm pretty good myself!`;
            // Send "pong" to the same channel
            message.channel.send(mes);
          } else if (message.content.includes('how') && message.content.includes('are')) {
            var mes = `Thank you so much for asking, ${message.author}! I am doing quite fine. How 'bout you?`;
            message.channel.send(mes);
          } else if ((message.content.includes('I ') || message.content.includes('I ')) && message.content.includes('am')) {
            var mes = `That is so great to hear about you.....NOT`;
            message.channel.send(mes);
          } else if (message.content.includes('I ') || message.content.includes('i ')) {
            var mes = `Let's talk about me! How about that!`;
            message.channel.send(mes);
          } else {
            message.channel.send(`That is so great to hear, ${message.author}`);
          }
        }
      }
    }
  }

});

// Log our bot in
client.login('NDU4NjY5OTg3MTIxMzMyMjM0.DgrDhg.YpQhTlbQn_Rc55mG6xmjNi1T1Cw');


function normal(message) {
  var dayOfTheWeek = daysOfTheWeek[message.createdAt.getDay()];

  // check if the author is not the robot itself, so it doesn't respond to itself
  if (message.author != '<@458669987121332234>') {

    // if it is emily
    if (message.author != '<@357313591671652355>') {
      var mes = `Hey Emily!`
    } else if (message.content.includes('hi') || message.content.includes('hey')) {
      var mes = `Hey, ${message.author}! How are you doing on this fine ${dayOfTheWeek}? I'm pretty good myself!`;
      // Send "pong" to the same channel
      message.channel.send(mes);
    } else if (message.content.includes('how') && message.content.includes('are')) {
      var mes = `Thank you so much for asking, ${message.author}! I am doing quite fine. How 'bout you?`;
      message.channel.send(mes);
    } else if ((message.content.includes('I ') || message.content.includes('I ')) && message.content.includes('am')) {
      var mes = `That is so great to hear about you.....NOT`;
      message.channel.send(mes);
    } else if (message.content.includes('I ') || message.content.includes('i ')) {
      var mes = `Let's talk about me! How about that!`;
      message.channel.send(mes);
    } else {
      message.channel.send(`That is so great to hear, ${message.author}`);
    }
  }
}


function makeInsult() {
  var f = Math.floor(Math.random() * insults.length);
  var s = Math.floor(Math.random() * insults.length);
  var t = Math.floor(Math.random() * insults.length);
  return `You ${insults[f]} ${insults[s]} ${insults[t]}`;
}

function botbattle() {
  /**
   * For the botbattle botbattle. WE just spammed the channel
   */
  if (message.channel.id == '458699827593871362') {


    message.channel.send('Launch a cybernuke');


  }
}