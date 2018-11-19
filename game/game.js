const PLAYER_RESPAWN = true;
const PLAYER_RESPAWN_DELAY = 10;
const BOT_AMOUNT = 10;
const BOT_RESPAWN = true;
const BOT_RESPAWN_DELAY = 1; //segundos
const KILL_VALUE = -1; //score por kill, 0 = nenhum, -1 = tamanho da cobra que morreu, -2 = score da cobra que morreu
const KILL_SNAKE_SIZE = -1; //tamanho da cobra por kill, 0 = nenhum, -1 = tamanho da cobra que morreu
const BOT_APPLE_RANGE = 128;
const SNAKE_SIZE = 10; //initial
const APPLE_AMOUNT = 500;
const APPLE_RESPAWN = false;
const GAME_FPS = 60; //FPS
const GAME_SPEED = 15; //1000/GAME_SPEED UPDATES PER SECOND

const MAP_WIDTH = 128;
const MAP_HEIGHT = 128;
const SPAWN_POSITION_MIN_X = 0, SPAWN_POSITION_MAX_X = 128,
      SPAWN_POSITION_MIN_Y = 0, SPAWN_POSITION_MAX_Y = 128;

/*const MAP_COLOR = "rgba(156, 203, 149, 1)",
      MAP_OUTCOLOR = "rgba(136, 183, 129, 1)";*/
const MAP_COLOR = "rgba(79, 32, 86, 1)",
      MAP_OUTCOLOR = "rgba(99, 52, 106, 1)";

const TILE_SIZE = 16;

const BOT_NAMES = [
  "Unzena", "Boymao", "Nagite", "Gasolu", "Suigos", "Miusan", "Lyecyu", "Texoha",
  "Niavul", "Kibumu", "Foaisl", "Dipeyn", "Foydeu", "Cuvobo", "Lizair", "Muolol",
  "Rayril", "Teunpe", "Canapi", "Ussuso", "Laoirn", "Sasana", "Zayzau", "Mixuon",
  "Elbuze", "Kagade", "Cieros", "Dukozu", "Irmiul", "Isbiwi", "Muevou", "Baexuo",
  "Ornoen", "Wofuan", "Zeolil", "Sadoyr", "Cifico", "Bielya", "Eshuen", "Tutaor",
  "Kiuher", "Notuen", "Faonen", "Hiusos", "Bibaus", "Vievoa", "Gozifi", "Deluwe",
  "Deigyo", "Koteos", "Voxihi", "Vamagu", "Keinil", "Nogehe", "Sailoa", "Zearoy",
  "Daecun", "Sigeis", "Luemes", "Daonir", "Daohus", "Enkuis", "Erduen", "Dietis",
  "Waecul", "Naxebi", "Keigue", "Wiewan", "Fehaes", "Waguza", "Goelda", "Xaesar",
  "Labrir", "Tosien", "Faeunl", "Corias", "Nyaelr", "Huepil", "Dikoci", "Hipael",
  "Puxiur", "Fouryo", "Browuy", "Deawor", "Tienan", "Horyos", "Boenus", "Kiemia",
  "Moseas", "Mokiul", "Rukoer", "Luanur", "Lohuos", "Xaonho", "Onxeul", "Ravean",
  "Voewao", "Nexius", "Zuogul", "Cecoso", "Geheko", "Newuhe", "Seyron", "Seiorn",
  "Pifeis", "Kowiel", "Mapeas", "Maidus", "Nuitin", "Higual", "Mionae", "Hyacue",
  "Enlyus", "Moazio", "Ertios", "Orgyal", "Siotiu", "Luylen", "Bobire", "Wyeveu",
  "Safeor", "Olhasa", "Doyson", "Fevazo", "Ragano", "Unreis", "Hogeal", "Quimus",
  "Bosaen", "Vomane", "Poziun", "Codoel", "Woucoe", "Gaentu", "Zyepir", "Vadiar",
  "Vaseis", "Xuibyu", "Quefes", "Kouken", "Nucoir", "Cidaun", "Xoceus", "Kimiun",
  "Cagays", "Giuwon", "Mosoni", "Istoin", "Mougao", "Tidyal", "Fiaswu", "Xitovu",
  "Vahago", "Puosai", "Hegoka", "Ziwifi", "Foavia", "Rixose", "Faxous", "Kekuin",
  "Zauhia", "Kituan", "Zasuir", "Batemu", "Teurri", "Myohie", "Puzyer", "Esfler",
  "Sesoco", "Dyohya", "Wasyul", "Waceha", "Elwime", "Iskapu", "Sablol", "Kourca",
  "Hakaro", "Nousci", "Xuafeu", "Pluzuo", "Wisoxo", "Wecler", "Waclur", "Blopen",
  "Suekin", "Onrayl", "Neoisn", "Xoiron", "Xeteku", "Vukaos", "Zagiwi", "Zaiswu",
  "Tuvoce", "Rutais", "Beykui", "Onxisi", "Esfler", "Fuimon", "Moabis", "Byohol",
  "Wazyel", "Zeusde", "Rucous", "Bluwos", "Cauvis", "Gefair", "Isxime", "Olgyul",
  "Usteka", "Hilawu", "Wuyhyo", "Xeidau", "Dauzoa", "Vyuseu", "Zifaus", "Kazeor",
  "Guasao", "Wyobey", "Demaor", "Leasoi", "Vupoan", "Muihoi", "Estuli", "Cunyer",
  "Mokoyn", "Puexus", "Wivies", "Reyzay", "Guanyu", "Wibahu", "Tilyur", "Fienmo",
  "Gaymeu", "Vaelza", "Syowun", "Picous", "Sonego", "Seofeo", "Wezuys", "Teousn",
  "Kiuvya", "Sepuis", "Isquel", "Neiziu", "Caerar", "Cobila", "Giotal", "Peneos",
  "Haeiss", "Inhula", "Rodual", "Usmudu", "Laymus", "Xaxail", "Botoan", "Niodol",
  "Wuwawe", "Nopula", "Irlule", "Cobeur", "Hifyes", "Cazani", "Wuymoy", "Maower",
  "Leifil", "Xuvier", "Rawour", "Tulail", "Xaykei", "Leywus", "Zueisr", "Biofos",
  "Wiuall", "Kuiusr", "Alusgi", "Xoaxer", "Xublas", "Houbya", "Zeilar", "Seupon",
  "Saroto", "Bliros", "Hewein", "Tuikir", "Doheun", "Duicar", "Couceu", "Xadaol",
  "Duwaus", "Niolun", "Xiheyn", "Diloys", "Keulin", "Tokebo", "Alcoru", "Usfizu",
  "Pagadi", "Leodau", "Nyefui", "Kofice", "Esdous", "Xacabe", "Orkuis", "Gipein",
];

const MENU = 0, ALIVE = 1, DEATH = 2;
const LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;

var cnv = document.querySelector("canvas");
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;
var ctx = cnv.getContext("2d");

window.addEventListener("resize", function(){
  window.location.href="index.html";
});

window.addEventListener("keydown", function(e){
	keyDown(e.keyCode);
});

var touchOffset = {
	x: 0,
	y: 0,
}
var touch = {
	x: 0,
	y: 0,
}
window.addEventListener("touchend", function(e){
	let key;
	if(Math.abs(touchOffset.x)>Math.abs(touchOffset.y)){
		if(touchOffset.x<0){
			key = LEFT;
		} else {
			key = RIGHT;
		}
	} else {
		if(touchOffset.y<0){
			key = UP;
		} else {
			key = DOWN;
		}
	}
	keyDown(key);
});
window.addEventListener("touchmove", function(e){
	touchOffset.x = e.touches[0].pageX - touch.x;
	touchOffset.y = e.touches[0].pageY - touch.y;
});
window.addEventListener("touchstart", function(e){
	e.preventDefault();
	touch.x = e.touches[0].pageX;
	touch.y = e.touches[0].pageY;
});

function keyDown(key){
  if(player.state==DEATH){
    switch(key){
      case LEFT:
      case DOWN:
        specPrev();
        break;
      case RIGHT:
      case UP:
        specNext();
        break;
      case 32:
        spec = score[0];
        break;
    }
  } else if(player.state==ALIVE) {
    switch(key){
      case LEFT:
        player.setMove("left");
        break;
      case RIGHT:
        player.setMove("right");
        break;
      case UP:
        player.setMove("up");
       break;
      case DOWN:
        player.setMove("down");
        break;
    }
  }
}

class Map {
  constructor(){
    this.width = MAP_WIDTH;
    this.height = MAP_HEIGHT;
    this.players = [];
    this.apples = [];
  }
  addPlayerBody(player, count){
    for(let i=0; i<count; i++){
      let newBody = this.players[this.players.indexOf(player)].body[player.body.length-1];
      this.players[this.players.indexOf(player)].body.push(newBody);
    }
  }
  addApple(){
    let apple = new Apple();
    this.apples.push(apple);
  }
  removeApple(apple){
    this.apples.splice(this.apples.indexOf(apple), 1);
  }
  addPlayer(player){
    if(player instanceof Player){
      this.players.push(player);
    }
  }
  removePlayer(player){
    this.players.splice(this.players.indexOf(player), 1);
  }
  killPlayer(player, reason){
    player.state = DEATH;
    this.removePlayer(player);
    console.log(player.isAi ? "[BOT]" : "[PLA]", player.name+" "+reason);
    if(player.isAi&&BOT_RESPAWN){
      setTimeout(this.addBot, 1000*BOT_RESPAWN_DELAY);
    }
    if(!player.isAi){
      if(PLAYER_RESPAWN){
      player.kill = 0;
      player.score = 0;
      player.body = [
        {
          x: 0,
          y: 0
        },
      ];
        setTimeout(function(){
          player.state = ALIVE;
          map.addPlayer(player);
          player.body = [
            {
              x: Math.floor(Math.random()*(SPAWN_POSITION_MAX_X-SPAWN_POSITION_MIN_X+1)+SPAWN_POSITION_MIN_X),
              y: Math.floor(Math.random()*(SPAWN_POSITION_MAX_X-SPAWN_POSITION_MIN_X+1)+SPAWN_POSITION_MIN_X)
            },
          ];
        }, 1000*PLAYER_RESPAWN_DELAY);
      }
    }
  }
  addBot(){
    let bot = new Player();
    bot.isAi = true;
    map.players.push(bot);
  }
}

class Apple {
  constructor(){
    this.x = Math.floor(Math.random()*MAP_WIDTH),
    this.y = Math.floor(Math.random()*MAP_HEIGHT)
  }
  get color(){
    return Math.floor(performance.now()/1000)%2==0 ? "rgba(255, 0, 0, 1)" : "rgba(255, 255, 255, 1)";
  }
}

class Player {
  constructor(){
    this.name = BOT_NAMES[Math.floor(Math.random()*BOT_NAMES.length)];
    this._kills = 0;
    this._score = 0;
    this.color = "rgba("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", 1)";
    this.state = ALIVE;
    this.isAi = false;
    this.move = {
      up: false,
      left: false,
      right: false,
      down: false,
    };
    this.body = [
      {
        x: Math.floor(Math.random()*(SPAWN_POSITION_MAX_X-SPAWN_POSITION_MIN_X+1)+SPAWN_POSITION_MIN_X),
        y: Math.floor(Math.random()*(SPAWN_POSITION_MAX_X-SPAWN_POSITION_MIN_X+1)+SPAWN_POSITION_MIN_X)
      },
    ];
    switch(Math.floor(Math.random()*4)){
      case 0:
        this.setMove("up");
        break;
      case 1:
        this.setMove("down");
        break;
      case 2:
        this.setMove("left");
        break;
      case 3:
        this.setMove("right");
        break;
    }
  }
  get score(){
    return this._score;
  }
  set score(value){
    this._score = value;
  }
  set kills(value){
    this._kills = value;
  }
  get kills(){
    return this._kills;
  }
  setMove(direction){
    let canMove = false;
    if(this.body.length<2){
      canMove = true;
    }
    if (direction=="up"&&!this.move.down
      ||direction=="down"&&!this.move.up
      ||direction=="left"&&!this.move.right
      ||direction=="right"&&!this.move.left
    ){
      canMove = true;
    }
    if(canMove){
      this.move.up = false;
      this.move.left = false;
      this.move.right = false;
      this.move.down = false;
      switch(direction){
        case "up":
          this.move.up = true;
          break;
        case "down":
          this.move.down = true;
          break;
        case "left":
          this.move.left = true;
          break;
        case "right":
          this.move.right = true;
          break;
      }
    }
  }
}

var map, player, spec = 0, score = [];

function specNext(){
  spec++;
  if(spec>map.players.length-2){
    spec = 0;
  }
}
function specPrev(){
  spec--;
  if(spec<0){
    spec = map.players.length-1;
  }
}

function setup(){
  map = new Map();

  player = new Player();
  player.state = ALIVE;
  player.name = "hiperesp";
  map.players.push(player);

  for(let i=0; i<BOT_AMOUNT; i++){
    map.addBot();
  }
  for(let i=0; i<APPLE_AMOUNT; i++){
    map.addApple();
  }
}
setup();

function update(args){
  //players
  for(let player of map.players){
    if(player.state==ALIVE){
      //bots
      if(player.isAi){
        //botsphysics
        let botListener = {
          up: !player.move.down,
          down: !player.move.up,
          left: !player.move.right,
          right: !player.move.left
        };
        //get apple
        let botMaxAppleX = player.body[0].x+BOT_APPLE_RANGE;
        let botMinAppleX = player.body[0].x-BOT_APPLE_RANGE;
        let botMaxAppleY = player.body[0].y+BOT_APPLE_RANGE;
        let botMinAppleY = player.body[0].y-BOT_APPLE_RANGE;
        let nearApple = map.apples[0] || null;
        for(let apple of map.apples){
          if(
              apple.x>botMinAppleX&&apple.x<botMaxAppleX
            &&apple.y>botMinAppleY&&apple.y<botMaxAppleY
          ){
            if(Math.abs(player.body[0].x-apple.x)<Math.abs(player.body[0].x-nearApple.x)&&Math.abs(player.body[0].y-apple.y)<Math.abs(player.body[0].y-nearApple.y)){
              nearApple = apple;
            }
          }
        }
        if(nearApple!=null){
          if(nearApple.y!=player.body[0].y){
            if(botListener.up&&nearApple.y>player.body[0].y){
              player.setMove("down");
            } else if(botListener.down&&nearApple.y<player.body[0].y){
              player.setMove("up");
            }
          } else {
            if(botListener.left&&nearApple.x<player.body[0].x){
              player.setMove("left");
            } else if(botListener.right&&nearApple.x>player.body[0].x){
              player.setMove("right");
            }
          }
        }
      }
      //playermovements
      let nextMove;
      if(player.move.up){
        nextMove = {
          x: player.body[0].x,
          y: player.body[0].y-1,
        }
      } else if(player.move.left){
        nextMove = {
          x: player.body[0].x-1,
          y: player.body[0].y,
        }
      } else if(player.move.right){
        nextMove = {
          x: player.body[0].x+1,
          y: player.body[0].y,
        }
      } else if(player.move.down){
        nextMove = {
          x: player.body[0].x,
          y: player.body[0].y+1,
        }
      } else {
        map.killPlayer(player, "está usando hack (ou aconteceu algum bug, reinicie a página)");
        break;
      }
      if(player.move.up+player.move.down+player.move.left+player.move.right!=true){
        map.killPlayer(player, "está usando hack (ou aconteceu algum bug, reinicie a página)");
        break;
      }
      let playerHasApple = false;
      for(let apple of map.apples){
        if(player.body[0].x==apple.x&&player.body[0].y==apple.y){
          map.removeApple(apple);
          if(APPLE_RESPAWN){
            map.addApple();
          }
          playerHasApple = true;
          break;
        }
      }
      if(playerHasApple){
        player.score++;
      } else {
      player.body.pop();
      }
      player.body.splice(0, 0, nextMove);

      //player collides with other players or self verify
      for(let otherplayer of map.players){
        if(otherplayer!=player){
          for(let otherplayerBody of otherplayer.body){
            if(player.body[0].x==otherplayerBody.x&&player.body[0].y==otherplayerBody.y){
              map.killPlayer(player, "bateu a cabeça em "+otherplayer.name);
              otherplayer.kills++;
              if(KILL_VALUE==-2){
                otherplayer.score+=player.body.length-1;
              } else if(KILL_VALUE==-1){
                otherplayer.score+=player.score;
              } else {
                otherplayer.score+=KILL_VALUE;
              }
              if(KILL_SNAKE_SIZE==-1){
                map.addPlayerBody(otherplayer, player.body.length-1);
              } else {
                map.addPlayerBody(otherplayer, KILL_SNAKE_SIZE);
              }
              break;
            }
          }
        }
      }
      for(let pbody of player.body){
        if(player.body[0]!=pbody&&player.body[0].x==pbody.x&&player.body[0].y==pbody.y){
          map.killPlayer(player, "se suicidou.");
          break;
        }
      }

      //player in map verify
      if(player.body[0].x*TILE_SIZE<0
        ||player.body[0].x*TILE_SIZE>(map.width-1)*TILE_SIZE
        ||player.body[0].y*TILE_SIZE<0
        ||player.body[0].y*TILE_SIZE>(map.height-1)*TILE_SIZE
      ){
        map.killPlayer(player, "bateu a cabeça na parede.");
        break;
      }
    }
  }
  if(map.players.length==1){
    for(let apple of map.apples){
      map.removeApple(apple);
    }
  }
  if(map.players.length>0){
    if(map.apples.length==0){
      let winner = map.players[0];
      for(let player of map.players){
        if(player.score>winner.score-1){ //em caso de empate, o último a entrar na sala vence
          winner = player;
        }
      }
      alert("Vencedor: "+winner.name+"\nPlacar: "+winner.score);
      for(let i=0; i<APPLE_AMOUNT; i++){
        map.addApple();
      }
      setup();
    }
  } else if(map.players.length==0){
    setup();
  }
  //score
  score = map.players;
  score.sort(function(a,b) {
    return a.score > b.score ? -1 : a.score < b.score ? 1 : 0;
  });
}
function render(args){
  //reset
  ctx.save();
  ctx.clearRect(-map.width*TILE_SIZE, -map.height*TILE_SIZE, 2*map.width*TILE_SIZE, 2*map.height*TILE_SIZE);

  //camera
  let currentPlayer;
  let playerHead;
  if(player.state==ALIVE){
    currentPlayer = player;
    playerHead = player.body[0];
  } else {
    if(map.players.length>0){
      if(typeof map.players[spec]=="undefined"){
        spec++;
      }
      currentPlayer = map.players[spec];
      playerHead = map.players[spec].body[0];
    } else {
      playerHead = {
        x: Math.floor(SPAWN_POSITION_MAX_X+SPAWN_POSITION_MIN_X/2),
        y: Math.floor(SPAWN_POSITION_MAX_Y+SPAWN_POSITION_MIN_Y/2)
      };
    }
  }
  ctx.transform(1, 0, 0, 1, -playerHead.x*TILE_SIZE+cnv.width/2, -playerHead.y*TILE_SIZE+cnv.height/2);
  //out of map
  ctx.fillStyle = MAP_OUTCOLOR;
  ctx.fillRect(-map.width*TILE_SIZE, -map.height*TILE_SIZE, 3*map.width*TILE_SIZE, 3*map.height*TILE_SIZE);

  //map
  ctx.fillStyle = MAP_COLOR;
  ctx.fillRect(0, 0, map.width*TILE_SIZE, map.height*TILE_SIZE);

  //apple
  for(let apple of map.apples){
    ctx.fillStyle = apple.color;
    ctx.fillRect(apple.x*TILE_SIZE, apple.y*TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }

  //player
  ctx.textAlign = "center";
  for(let player of map.players){
    ctx.fillStyle = player.color;
    for(let pos of player.body){
      ctx.fillRect(pos.x*TILE_SIZE, pos.y*TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
    ctx.globalCompositeOperation = "difference";
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.fillText(player.name,player.body[0].x*TILE_SIZE,(player.body[0].y-1)*TILE_SIZE);
  }
  ctx.restore();
  //score
  ctx.font = "24px monospace";
  ctx.globalCompositeOperation = "difference";
  ctx.fillStyle = "rgba(255, 255, 255, 1)";
  ctx.textAlign = "left";
  ctx.fillText("Leaderboard",cnv.width-200, 100);
  let fontSize = 12;
  ctx.font = fontSize+"px monospace";
  ctx.fillText("Nome",cnv.width-200, 140-fontSize);
  ctx.fillText("Kills",cnv.width-130, 140-fontSize);
  ctx.fillText("Score",cnv.width-80, 140-fontSize);
  for(let i in score){
    ctx.textAlign = "left";
    ctx.fillText(score[i].name,cnv.width-200, 140+fontSize*i);
    ctx.textAlign = "right";
    ctx.fillText(score[i].kills,cnv.width-95, 140+fontSize*i);
    ctx.fillText(score[i].score,cnv.width-45, 140+fontSize*i);
  }
  ctx.textAlign = "left";
  ctx.font = "20px monospace";
  ctx.fillText(currentPlayer.name,50, cnv.height-150);
  fontSize = 15;
  ctx.font = fontSize+"px monospace";
  ctx.textAlign = "left";
  ctx.fillText("Kills:",50, cnv.height-130);
  ctx.fillText("Score:",50, cnv.height-110);
  ctx.fillText("Size:",50, cnv.height-90);
  ctx.fillText("x: ",50, cnv.height-60);
  ctx.fillText("y: ",105, cnv.height-60);
  ctx.textAlign = "right";
  ctx.fillText(currentPlayer.kills,150, cnv.height-130);
  ctx.fillText(currentPlayer.score,150, cnv.height-110);
  ctx.fillText(currentPlayer.body.length,150, cnv.height-90);
  ctx.fillText(currentPlayer.body[0].x,95, cnv.height-60);
  ctx.fillText(currentPlayer.body[0].y,150, cnv.height-60);
  if(player.state==DEATH){
    ctx.textAlign = "center";
    ctx.font = "40px monospace";
    ctx.fillText("ESPECTADOR",cnv.width/2, 130);
  }
  ctx.font = "10px monospace";
  ctx.globalCompositeOperation = "source-over";
}
setInterval(render, 1000/GAME_FPS  , performance.now());
setInterval(update, 1000/GAME_SPEED, performance.now());
