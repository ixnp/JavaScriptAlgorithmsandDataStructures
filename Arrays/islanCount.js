//Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

//input
// [
//[1,1,1,1,0],
// [1,1,0,1,0],
// [1,1,0,0,0],
// [0,0,0,0,0]
// ]

//Output: 1

// Input:
// [c0 c1 c2 c3 c4
// [1, 1, 0, 0, 0], r0
// [1, 1, 0, 0, 0], r1
// [0, 0, 1, 0, 0], r2
// [0, 0, 0, 1, 1]  r3
// ]

// Output: 3

//keeptrack of rows and cols
//var: islancCount=0, isIsland = true;
//if row+1 row-1 is 1 and col+1 and col-1 v

//create a object with the keys island, 
//each island contains the arr[row][col]
//check object for corodinates 
//if exsist don't 