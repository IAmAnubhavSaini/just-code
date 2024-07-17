/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let current = 2;
    let rot = true;
    while (rot) {
        rot = false;
        for (let row = 0; row < grid.length; row += 1) {
            for (let col = 0; col < grid[row].length; col += 1) {
                const val = grid[row][col];
                if (val === current) {
                    if (col + 1 < grid[row].length && grid[row][col + 1] !== 0) {
                        if (grid[row][col + 1] === 1) {
                            grid[row][col + 1] += current;
                            rot = true;
                        }
                    }
                    if (col - 1 >= 0 && grid[row][col - 1] !== 0) {
                        if (grid[row][col - 1] === 1) {
                            grid[row][col - 1] += current;
                            rot = true;
                        }
                    }
                    if (row + 1 < grid.length && grid[row + 1][col] !== 0) {
                        if (grid[row + 1][col] === 1) {
                            grid[row + 1][col] += current;
                            rot = true;
                        }
                    }
                    if (row - 1 >= 0 && grid[row - 1][col] !== 0) {
                        if (grid[row - 1][col] === 1) {
                            grid[row - 1][col] += current;
                            rot = true;
                        }
                    }
                }
            }
        }
        if (rot) {
            current += 1;
        }
    }
    for (let row = 0; row < grid.length; row += 1) {
        for (let col = 0; col < grid[row].length; col += 1) {
            if (grid[row][col] === 1) {
                return -1;
            }
        }
    }
    return current - 2;
};
