module.exports = function drawLine(commandTools, inScreenBuffer) {
    var outScreenBuffer = clone(inScreenBuffer); //to keep things immutable
    if (outScreenBuffer.length === 1) {
        return outScreenBuffer;
    }

    var strokeChar = 'x';
    var x1 = parseInt(commandTools[1], 10);
    var y1 = parseInt(commandTools[2], 10);
    var x2 = parseInt(commandTools[3], 10);
    var y2 = parseInt(commandTools[4], 10);

    //If x1 > x2 or y1 > y2 then swap the values to make our loop work either way
    if (x1 > x2) {
        var tmp = x1;
        x1 = x2;
        x2 = tmp;
    }

    if (y1 > y2) {
        var tmp = y1;
        y1 = y2;
        y2 = tmp;
    }

    for (var i = x1; i <= x2; i++) {
        for (var j = y1; j <= y2; j++) {
            outScreenBuffer[j][i] = strokeChar;
        }
    }

    return outScreenBuffer;
};