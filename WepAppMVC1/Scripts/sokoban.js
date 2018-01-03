

var player = new PlayerPos(-1, -1);

document.getElementById("restart").onclick = restart;

document.getElementById("randomMap").onclick =randomMap;

var goalList=[];// a list


function DrawMap()
{
  var map = document.getElementById("mapHeere"); 
  goalList=[];
  for (var y = 0; y < 16; y++)
    {
    	for (var x = 0; x < 19; x++)
        {
    		var box =document.createElement("div");
    		
    		if(tileMap.mapGrid[y][x] == "P")                //the player
    		{
				box.classList.add("Space");
    			box.classList.add("player");
				player.y = y;
				player.x = x;
    		}
    		else if(tileMap.mapGrid[y][x] == "W")           //the Wall
    		{
    			box.classList.add("Wall");
    		}
    		else if(tileMap.mapGrid[y][x] == "B")          //the Block
    		{
    			box.classList.add("Block");
				box.classList.add("Space");
    		}
    		else if(tileMap.mapGrid[y][x] == "G")           //the Goal
    		{
    			box.classList.add("Goal");
				goalList.push(box);
    		}
     		
			else if(tileMap.mapGrid[y][x] == "R")           //the forest
    		{
				box.classList.add("Goal");
    			box.classList.add("redBlock");
				box.classList.add("Block");
				
    		}  
    		else    										    // is Space
    		{
    			box.classList.add("Space");
    		}
    		box.setAttribute("Id", (y + ',' + x));
    		map.appendChild(box);
    	}
    }  
}

function PlayerPos(x, y) {   
    this.x = x;
    this.y = y;  
	
	
}


function TheKey(event) {
 //event.keyCode;
 console.log(event.keyCode);
	if(event.keyCode == 37)
	{
		event.preventDefault();
		console.log("left");
		var newPosX = player.x -1;
		var newPosY = player.y;
		var newNewPosX= player.x -2;
		var newNewPosY= player.y;
		move(newPosX, newPosY, newNewPosX, newNewPosY);
	}
	else if(event.keyCode == 39)
	{
		event.preventDefault();
		console.log("right");
		var newPosX = player.x +1;
		var newPosY = player.y;
		var newNewPosX= player.x +2;
		var newNewPosY= player.y;
		
		move(newPosX, newPosY, newNewPosX, newNewPosY);
	}
	else if(event.keyCode == 38)
	{
		event.preventDefault();
		console.log("upp");
		var newPosX = player.x ;
		var newPosY = player.y -1;
		
		var newNewPosX= player.x ;
		var newNewPosY= player.y -2;
		move(newPosX, newPosY, newNewPosX, newNewPosY);
	}	
	else if(event.keyCode == 40)
	{
		event.preventDefault();
		console.log("down");
		var newPosX = player.x ;
		var newPosY = player.y +1;
		var newNewPosX= player.x ;
		var newNewPosY= player.y +2;		

		move(newPosX, newPosY, newNewPosX, newNewPosY);
	}
}
function move(newPosX, newPosY ,newNewPosX ,newNewPosY)
{
      var playerElem = document.getElementById(player.y +"," +player.x);
      var nextElem = document.getElementById(newPosY + "," + newPosX);
      var nextNextElem = document.getElementById(newNewPosY + "," + newNewPosX);
      console.log("nextNextElem");
	if(nextElem.classList.contains("Wall"))
	{
		console.log("wall");	
	}
	else if(nextElem.classList.contains("Block"))	
	{
		if(nextNextElem.classList.contains("Wall"))
		{
			console.log("wall");
			
		
		}
		else if(nextNextElem.classList.contains("Block"))
		{
			console.log("Block");
			
		
		}
		else if(nextElem.classList.contains("forest"))
		{
			console.log("forest");
		}
		else if(nextElem.classList.contains("Goal"))
		{
			playerElem.classList.remove("player");
			nextElem.classList.add("player");
			player.x=newPosX;
			player.y=newPosY;
			nextElem.classList.remove("Block");
			nextNextElem.classList.add("Block");
		}
		else if(nextNextElem.classList.contains("forest"))
		{
			console.log("forest");
		}
		else
		{
			playerElem.classList.remove("player");
		    nextElem.classList.add("player");
		    player.x=newPosX;
		    player.y=newPosY;
			nextElem.classList.remove("Block");
			nextNextElem.classList.add("Block");
		}
	}		
	else 
	{
	playerElem.classList.remove("player");
	nextElem.classList.add("player");
	player.x=newPosX;
	player.y=newPosY;
	}
	list();
}
function list()
{
	var finichline = true;
	
	for (var i=0 ;i< goalList.length ; i++)
	{
		if(!goalList[i].classList.contains("Block"))
		{
			finichline = false;
			break;
		}
		
	}
	
	if(finichline)
	{
		jQuery('#hid').show();
	}
}

function restart()
{
	
	var clear =document.getElementById("mapHeere");
	clear.innerHTML = "";
	jQuery('#hid').hide();
	DrawMap();
	
}
function randomMap()
{
	var clear =document.getElementById("mapHeere");
	clear.innerHTML = "";
	
	tileMap = mapsArray[Math.floor(Math.random() * mapsArray.length)];
	DrawMap();
	jQuery('#hid').hide();
	
}