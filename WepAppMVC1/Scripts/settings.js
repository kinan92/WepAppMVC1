
/*   This is the base file for the Sokoban assignment - include this one in your HTML page, before you add the main script file*/

/*   Enum of CSS Classes for the static elements   */
var Tiles = {
    Wall: "tile tile-wall",
    Space: "tile tile-space",
    Goal: "tile tile-goal"
};

/*   Enum of CSS Classes for the moving elements   */
var Entities = {
    Character: "entity entity-player",
    Block: "entity entity-block",
    BlockDone: "entity entity-block-goal"
};

/*  Legend
    W = Wall
    B = Movable block
    P = Player starting position
    G = Goal area for the blocks
*/
var mapsArray = [
	{
		//NAME:0
    width: 19,
    height: 16,
    mapGrid: [
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], ['W'], ['B'], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], ['W'], ['W'], ['W'], [' '], [' '], ['B'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], ['W'], [' '], [' '], ['B'], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [['W'], ['W'], ['W'], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
    [['W'], [' '], [' '], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
    [['W'], [' '], ['B'], [' '], [' '], ['B'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['B'], [' '], ['G'], ['G'], ['W']],
    [['W'], ['W'], ['W'], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], [' '], ['W'], ['P'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
    [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
    [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']]
    ]
},
{
	//NAME:1
    width: 19,
    height: 16,
    mapGrid: [
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], ['W'], ['B'], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], ['W'], ['W'], ['W'], [' '], [' '], ['B'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], ['W'], [' '], [' '], ['B'], [' '], ['B'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [['W'], ['W'], ['W'], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
    [['W'], [' '], [' '], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
    [['W'], [' '], ['B'], [' '], [' '], ['B'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['G'], ['G'], ['W']],
    [['W'], ['W'], ['W'], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], [' '], ['W'], ['P'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
    [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
    [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']]
    ]
},
{
	//NAME:2
    width: 19,
    height: 16,
    mapGrid: [
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], ['W'], ['B'], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], ['W'], ['W'], ['W'], [' '], [' '], ['B'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], ['W'], [' '], [' '], ['B'], [' '], ['B'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [['W'], ['W'], ['W'], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
    [['W'], [' '], [' '], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
    [['W'], [' '], ['B'], [' '], [' '], ['B'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['B'], [' '], ['G'], ['G'], ['W']],
    [['W'], ['W'], ['W'], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], [' '], ['W'], ['P'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
    [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
    [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']]
    ]
},

{
	//NAME:3
    width: 19,
    height: 16,
    mapGrid: [
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], ['W'], ['G'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], ['P'], [' '], [' '], [' '], ['B'], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
	[[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']]
    ]
},

{
	//NAME:4
    width: 19,
    height: 16,
    mapGrid: [
	[[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], [' '], [' '], ['W'], [' '], [' '], ['W']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], [' '], [' '], ['W'], [' '], [' '], ['W'], [' '], [' '], ['W']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], ['W'], [' '], [' '], ['W']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], [' '], ['G'], ['G'], ['G'], ['B'], ['B'], ['B'], [' '], ['W']],
	[[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], [' '], ['B'], ['B'], ['B'], ['G'], ['G'], ['G'], [' '], ['W']],
	[[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], ['W'], [' '], ['W'], [' '], ['W'], ['W'], ['W'], ['W'], ['W']],
	[[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], [' '], ['P'], [' '], ['W'], [' '], [' '], [' '], [' ']],
	[[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
	[[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
	[[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']]
    ]
},
{
	//NAME:5
    width: 11,
    height: 11,
    mapGrid: [
	[[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
	[[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
	[[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
	[[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
	[[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
	[[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], ['W'], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], ['W'], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], ['W'], [' '], ['B'], [' '], ['W'], [' '], [' '], [' '], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], ['W'], [' '], [' '], [' '], ['W'], ['B'], ['W'], [' '], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' ']],
	[[' '], [' '], [' '], ['W'], ['W'], ['W'], ['B'], [' '], [' '], [' '], [' '], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' ']],
	[[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' ']],
	[[' '], [' '], [' '], [' '], ['W'], [' '], ['P'], ['G'], ['G'], ['G'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
	[[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']]
    ]
},
{
	//NAME:6
    width: 19,
    height: 16,
    mapGrid: [
    [[' '], [' '], [' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], ['W'], ['B'], ['W'], ['W'], [' '], [' '], ['W'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], ['B'], [' '], [' '], [' '], ['W'], [' '], ['W'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [['W'], [' '], ['W'], ['W'], [' '], ['W'], [' '], ['W'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], ['W'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], ['W'], ['B'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [['B'], ['W'], [' '], ['W'], ['G'], ['B'], [' '], ['W'], [' '], ['B'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [['W'], [' '], [' '], ['W'], ['W'], ['W'], [' '], ['W'], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [['W'], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], ['B'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [['W'], [' '], ['W'], [' '], ['W'], ['W'], ['W'], ['B'], ['P'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [['W'], [' '], ['W'], [' '], [' '], [' '], ['B'], ['B'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [['W'], [' '], [' '], ['W'], ['W'], [' '], ['W'], ['W'], ['B'], ['W'], ['W'], ['B'], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [['B'], ['W'], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [['B'], ['B'], ['W'], [' '], [' '], ['W'], ['W'], ['W'], ['W'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
	[['B'], ['B'], ['B'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']]
    ]
},
{
	//NAME:7
    width: 19,
    height: 16,
    mapGrid: [
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], ['W'], ['G'], ['B'], ['P'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
	[[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']]
    ]
},
{
	//NAME:8
    width: 19,
    height: 16,
    mapGrid: [
    [[' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], [' '], [' ']],
    [[' '], [' '], ['W'], ['G'], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], ['G'], ['W'], [' '], [' ']],
    [[' '], [' '], ['W'], [' '], [' '], [' '], ['R'], [' '], ['B'], [' '], ['B'], [' '], ['R'], [' '], [' '], [' '], ['W'], [' '], [' ']],
    [[' '], [' '], ['W'], [' '], ['B'], ['W'], [' '], [' '], [' '], ['B'], [' '], [' '], ['W'], ['B'], ['B'], [' '], ['W'], [' '], [' ']],
    [[' '], ['W'], ['W'], [' '], [' '], [' '], ['W'], [' '], [' '], ['W'], ['G'], ['W'], [' '], ['B'], [' '], [' '], ['W'], ['W'], [' ']],
    [[' '], ['W'], [' '], ['B'], ['B'], [' '], ['W'], ['G'], ['G'], ['R'], ['G'], ['G'], [' '], ['W'], ['B'], [' '], [' '], ['W'], [' ']],
    [[' '], ['W'], [' '], [' '], [' '], [' '], ['W'], ['G'], ['R'], ['G'], ['R'], ['G'], ['W'], [' '], [' '], [' '], [' '], ['W'], [' ']],
    [[' '], ['W'], ['W'], ['W'], ['W'], ['R'], ['B'], ['R'], ['W'], ['G'], ['W'], ['R'], ['B'], ['R'], ['W'], ['W'], ['W'], ['W'], [' ']],
    [[' '], ['W'], [' '], [' '], [' '], [' '], ['W'], [' '], ['R'], ['G'], ['G'], ['G'], ['W'], [' '], [' '], [' '], [' '], ['W'], [' ']],
    [[' '], ['W'], [' '], ['B'], ['B'], [' '], ['W'], ['P'], ['G'], ['R'], ['G'], ['G'], ['W'], [' '], ['B'], ['B'], [' '], ['W'], [' ']],
    [[' '], ['W'], ['W'], [' '], [' '], [' '], ['W'], ['W'], ['G'], ['W'], ['G'], ['W'], ['W'], [' '], [' '], [' '], ['W'], ['W'], [' ']],
    [[' '], [' '], ['W'], [' '], ['B'], ['B'], ['W'], [' '], [' '], ['B'], [' '], [' '], ['W'], ['B'], ['B'], [' '], ['W'], [' '], [' ']],
    [[' '], [' '], ['W'], [' '], [' '], [' '], ['R'], [' '], ['B'], [' '], ['B'], [' '], ['R'], [' '], [' '], [' '], ['W'], [' '], [' ']],
    [[' '], [' '], ['W'], ['R'], ['W'], ['W'], ['W'], ['W'], ['W'], ['G'], ['W'], ['W'], ['W'], ['W'], ['W'], ['G'], ['W'], [' '], [' ']],
    [[' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], [' '], [' ']],
	[[' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' ']]
    ]
},
{
	//NAME:9
    width: 19,
    height: 16,
    mapGrid: [
    [['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F']],
    [['F'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
    [['F'], ['W'], [' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], ['W'], [' '], [' '], ['W'], [' '], [' '], ['W']],
    [['F'], ['W'], [' '], [' '], [' '], [' '], [' '], ['W'], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W']],
    [['F'], ['W'], ['W'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], [' '], ['W'], [' '], [' '], [' '], [' '], ['W']],
    [['F'], ['W'], [' '], [' '], [' '], [' '], ['W'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], [' '], ['W'], ['W']],
    [['F'], ['W'], ['P'], [' '], ['W'], [' '], [' '], [' '], [' '], ['W'], [' '], ['W'], [' '], [' '], ['W'], [' '], ['G'], [' '], ['W']],
    [['F'], ['W'], ['W'], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], ['W']],
    [['F'], ['W'], [' '], [' '], ['W'], [' '], [' '], [' '], ['W'], ['B'], ['W'], [' '], [' '], [' '], ['W'], [' '], ['W'], [' '], ['W']],
    [['F'], ['W'], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], ['W']],
    [['F'], ['W'], ['W'], [' '], ['W'], [' '], [' '], ['W'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], ['W']],
    [['F'], ['W'], [' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], [' '], [' '], ['W'], [' '], ['W']],
    [['F'], ['W'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], ['W']],
    [['F'], ['W'], [' '], [' '], [' '], ['W'], [' '], [' '], ['W'], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], ['W'], [' '], ['W']],
    [['F'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
    [['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F'], ['F']]
    ]
},

]
//var tileMap = mapsArray[Math.floor(Math.random() * mapsArray.length)];
var tileMap = mapsArray[9];
