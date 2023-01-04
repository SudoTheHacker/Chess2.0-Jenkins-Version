// Board generation 8x8

const board = document.getElementById("board");

if(window.innerWidth > window.innerHeight)
{
  board.style.width = (window.innerHeight/10)*7.5 + "px";
  board.style.height = (window.innerHeight/10)*7.5 + "px";
} else
{
  board.style.width = (window.innerWidth/10)*7.5 + "px";
  board.style.height = (window.innerWidth/10)*7.5 + "px";
}

var x = 0;
var y = 0;
var last = 0;
var width = board.clientWidth/8.02 + "px";
while (x != 8)
{
  if (last == 0)
  {
    last = 1;
  }
  else
  {
    last = 0;
  }

  while (y != 8)
  {
    var div = document.createElement("div");
    div.style.width = width;
      div.style.height = width;
    if (last == 0)
    {
      div.style.backgroundColor = "white";
      last = 1;
    } else 
    {
      div.style.backgroundColor = "black";
      last = 0;
    }
    div.id = "pos-" + (((x*8)+y)+1)
    board.appendChild(div);
    y++;
  }
  y=0
  x++;
}
x=0;
y=0;
// Placing Pieces

/*     Notation:
  / = New Line
  E = Elephant
  F = Fish
  KB = King Banana
  BK = Broke King
  M = Monkey
  Q = Queen
  R = Rook
  B = Bear

  Piece write with "" around

  Put W for White
  Put B for Black

  Start position = "BR""BM""BF""BQ""BKB""BF""BM""BR"/"BF""BF""BE""BF""BF""BE""BF""BF"////"WF""WF""WE""WF""WF""WE""WF""WF"/"WR""WM""WF""WQ""WKB""WF""WM""WR"

 */


const startpos_str = '"BR""BM""BF""BQ""BKB""BF""BM""BR""BF""BF""BE""BF""BF""BE""BF""BF"////"WF""WF""WE""WF""WF""WE""WF""WF"WR""WM""WF""WQ""WKB""WF""WM""WR"';
let startpos_arr=startpos_str.split('"');
let startpos_arr_lenght = startpos_arr.length;
let startpos = {};
var extra = 0;
console.log(startpos_arr)
var pos = 0;
while (x != startpos_arr_lenght)
{
  if(startpos_arr[x] != "")
  {
    if (startpos_arr[x].includes("//"))
    {
      temparr = startpos_arr[x].split('');
      for (var i in temparr)
      {
        y++;
      }
      while (y != 0)
      {
        startpos[pos+extra] = "/"
        extra = extra+y
        y--;
        pos++;
      } 
    } else
    {
      startpos[pos+extra] = startpos_arr[x];
      pos++;
    }
  }
  x++;
}
console.log(startpos)
x=0;
y=0;
extra=0;

var startpos_len = 0;

for (var i in startpos)
{
  startpos_len++;
}

console.log(startpos_len)


var div = document.createElement("div");

while(x != startpos_len)
{
  console.log(startpos);
  var space = 0;
  var imgPiece = document.createElement("img");
  switch(startpos[x])
  {
    case "BR":
      imgPiece.src = "./Pieces/Black/Black Rook.png"
      imgPiece.width = board.clientWidth/9.5
      document.getElementById(`pos-${x+space+1}`)?.appendChild(imgPiece);
      break;
    case "BM":
      imgPiece.src = "./Pieces/Black/Black Monkey.png"
      imgPiece.width = board.clientWidth/9.5
      document.getElementById(`pos-${x+space+1}`)?.appendChild(imgPiece);
      break;
    case "BF":
      imgPiece.src = "./Pieces/Black/Black Fish.png"
      imgPiece.width = board.clientWidth/9.5
      document.getElementById(`pos-${x+space+1}`)?.appendChild(imgPiece);
      break;
    case "BQ":
      imgPiece.src = "./Pieces/Black/Black Queen.png"
      imgPiece.width = board.clientWidth/9.5
      document.getElementById(`pos-${x+1+space}`)?.appendChild(imgPiece);
      break;
    case "BKB":
      imgPiece.src = "./Pieces/Black/Black King Banana.png"
      imgPiece.width = board.clientWidth/9.5
      document.getElementById(`pos-${x+1+space}`)?.appendChild(imgPiece);
      break;
    case "BE":
      imgPiece.src = "./Pieces/Black/Black Elephant.png"
      imgPiece.width = board.clientWidth/9.5
      document.getElementById(`pos-${x+1+space}`)?.appendChild(imgPiece);
      break;
    case "BBK":
      imgPiece.src = "./Pieces/Black/Black King.png"
      imgPiece.width = board.clientWidth/9.5
      document.getElementById(`pos-${x+1+space}`)?.appendChild(imgPiece);
      break;
    case "WR":
      imgPiece.src = "./Pieces/White/White Rook.png"
      imgPiece.width = board.clientWidth/9.5
      document.getElementById(`pos-${x+1+space}`)?.appendChild(imgPiece);
      break;
    case "WE":
      imgPiece.src = "./Pieces/White/White Elephant.png"
      imgPiece.width = board.clientWidth/9.5
      document.getElementById(`pos-${x+1+space}`)?.appendChild(imgPiece);
      break;
    case "WF":
      imgPiece.src = "./Pieces/White/White Fish.png"
      imgPiece.width = board.clientWidth/9.5
      document.getElementById(`pos-${x+1+space}`)?.appendChild(imgPiece);
      break;
    case "WKB":
      imgPiece.src = "./Pieces/White/White King Banana.png"
      imgPiece.width = board.clientWidth/9.5
      document.getElementById(`pos-${x+1+space}`)?.appendChild(imgPiece);
      break;
    case "WBK":
      imgPiece.src = "./Pieces/White/White King.png"
      imgPiece.width = board.clientWidth/9.5
      document.getElementById(`pos-${x+1+space}`)?.appendChild(imgPiece);
      break;
    case "WM":
      imgPiece.src = "./Pieces/White/White Monkey.png"
      imgPiece.width = board.clientWidth/9.5
      document.getElementById(`pos-${x+1+space}`)?.appendChild(imgPiece);
      break;
    case "WQ":
      imgPiece.src = "./Pieces/White/White Queen.png"
      imgPiece.width = board.clientWidth/9.5
      document.getElementById(`pos-${x+1+space}`)?.appendChild(imgPiece);
      break;
    case "/":
      space=16;
      alert(space);
      break;
    default:
      alert("Startpos contain errors")
      break;
  }
  x++;
}

// Drag function

// Legal move

// Initiate AI