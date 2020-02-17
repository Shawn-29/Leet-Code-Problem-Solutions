/*
  According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton
  devised by the British mathematician John Horton Conway in 1970."

  Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with
  its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

      Any live cell with fewer than two live neighbors dies, as if caused by under-population.
      Any live cell with two or three live neighbors lives on to the next generation.
      Any live cell with more than three live neighbors dies, as if by over-population..
      Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

  Write a function to compute the next state (after one update) of the board given its current state.
  The next state is created by applying the above rules simultaneously to every cell in the current state,
  where births and deaths occur simultaneously.
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
function gameOfLife(board) {
    // get number of neighbors according to "The Game of Life's" rules 
    function countNeighbors(index, topCell, mainCell, botCell) {
        let n = 0;
        // check all surrounding array elements for live cells
        for (let i = index - 1, len = index + 1; i <= len; ++i) {
            if (topCell && topCell[i] == 1) ++n;
            if (mainCell[i] == 1 && i != index) ++n;
            if (botCell && botCell[i] == 1) ++n;
        }
        return n;
    }
    
    // get the life/death state of a cell depending on its
    // current state and its number of neighbors
    function getState(nNeighbors, state) {
        return +(nNeighbors == 3 || state && nNeighbors == 2);
    }
    
    // create a deep copy so we can modify the original board
    // in place and in one pass
    const temp = Array.from({length: board.length}, (_, i) => 
        [...board[i]]
    );
    
    // simultaneously iterate one round of "The Game of Life"
    for (let i = 0, lenI = board.length; i < lenI; ++i) {
        for (let z = 0, lenZ = board[i].length; z < lenZ; ++z) {
            board[i][z] = getState(countNeighbors(z, temp[i - 1], temp[i], temp[i + 1]), temp[i][z]);
        }
    }
}
