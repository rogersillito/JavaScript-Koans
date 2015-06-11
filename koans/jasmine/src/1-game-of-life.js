function isCellAliveInNextGeneration(isCellAlive, numberofneighbours) {
    return isCellAlive && numberofneighbours === 2 || numberofneighbours === 3;
    //return !(3 - numberofneighbours);
}
