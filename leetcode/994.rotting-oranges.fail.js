/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let rotting = 0;
    let fresh = 0;
    let oranges = 0;
    for (let row = 0; row < grid.length; row += 1) {
        for (let col = 0; col < grid[row].length; col += 1) {
            const val = grid[row][col];
            if (val === 2) {
                rotting += 1;
            }
            if (val === 1) {
                fresh += 1;
            }
            if (val !== 0) {
                oranges += 1;
            }
        }
    }
    let minutes = 0;
    for (let row = 0; row < grid.length && fresh >= 0 && rotting <= oranges; row += 1) {
        for (let col = 0; col < grid[row].length; col += 1) {
            const val = grid[row][col];
            if (val === 2) {
                if (col + 1 < grid[row].length && grid[row][col + 1] !== 0) {
                    if (grid[row][col + 1] === 1) {
                        fresh -= 1;
                    }
                    if (grid[row][col + 1] === 2) {
                        rotting += 1;
                    }
                    grid[row][col + 1] = 2;
                }
                if (row + 1 < grid.length && grid[row + 1][col] !== 0) {
                    if (grid[row + 1][col] === 1) {
                        fresh -= 1;
                    }
                    if (grid[row + 1][col] === 2) {
                        rotting += 1;
                    }
                    grid[row + 1][col] = 2;
                }
            }
        }
        minutes += 1;
    }
    return fresh > 0 ? -1 : minutes;
};
