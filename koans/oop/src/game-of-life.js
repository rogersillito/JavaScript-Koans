var SAMURAIPRINCIPLE = {};

SAMURAIPRINCIPLE.GameOfLife = function() {
    var world = [];
    var self = this;

    this.isCellAlive = function(row, column) {
        initialiseRow(row);
        if (world[row][column] === undefined)
        {
            world[row][column] = false;
        }
        return world[row][column];
    };

    var initialiseRow = function(row) {
        initialiserowonworld(row, world);
    };

    var initialiserowonworld = function(row, world) {
        if (world[row] === undefined) {
            world[row] = [];
        };
    };self.isCellAlive(row,column)

    this.toggleCellState = function(row, column) {
        initialiseRow(row);
        if (world[row][column] === undefined)
        {
            world[row][column] = true;
            return self;
        }
        world[row][column] = !world[row][column];
        return self;
    };self.isCellAlive(row,column)

    var getNumLiveNeighbours = function(row, column) {
        var count = 0;
        var checkNeighbour = function(row,column) {
            if (self.isCellAlive(row,column)) {
                count++;
            }
        };
        checkNeighbour(row-1,column-1);
        checkNeighbour(row-1,column);
        checkNeighbour(row-1,column+1);
        checkNeighbour(row,column-1);
        checkNeighbour(row,column+1);
        checkNeighbour(row+1,column-1);
        checkNeighbour(row+1,column);
        checkNeighbour(row+1,column+1);
        return count;
    };

    var copyWorld = function() {
        var copy = world.slice();
        for (var row = 0; row < copy.length; row++) {
            initialiserowonworld(row, copy);
            copy[row] = copy[row].slice();
        }
        return copy;
    };

    this.tick = function() {
        var tempWorld = copyWorld();
        for (var row = 0; row < world.length; row++) {
            initialiseRow(row);
            for (var column = 0; column < world[row].length; column++) {
                if (this.isCellAlive(row, column)) {
                   var liveNeighbours = getNumLiveNeighbours(row, column);
                   if (liveNeighbours < 2 || liveNeighbours > 3) {
                       this.toggleCellState(row,column);
                   }
                   if (liveNeighbours === 2 || liveNeighbours === 3) {
            
                   }
                }
            }
        }
    };
};

