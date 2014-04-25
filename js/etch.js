
var GRID_DEFAULT_SIZE = 16;

$(document).ready(function() {
    drawScreen(GRID_DEFAULT_SIZE);
});


function drawScreen(gridDimensions, option) {

    // get canvas size from HTML
    var GRID_CANVAS = $('.inner').width();

    // clear the screen
    $('.container').empty();

    // calculate the number of items
    var numItems = Math.pow(gridDimensions, 2);

    // calculate the size of each item
    var itemSize = (GRID_CANVAS / gridDimensions) - 1;

    var $square = '';
    // build the grid
    for (var i = 1; i <= numItems; i++) {
        $square = $('<div id="sq' + i + '" class="square spacer pull-left"></div>');
        $square.width(itemSize);
        $square.height(itemSize);
        $('.container').width(GRID_CANVAS);
        $('.container').append($square);
    }



    // drawing functionality
    $('.square').hover(
        function() {
            //console.log('over');
            if (option == 'color') {
                var itemColor = '#' + (Math.random() * 0xffffff<<0).toString(16);
                $(this).css('background-color',itemColor);
            } else {
                $(this).addClass('highlight');
            }
        }, function() {
            if (option == 'trailing') {
                //console.log('exit');
                $(this).animate({'background-color':'#fff'},400);
            }
        }
    );

}

function createGrid(option) {
    var newDimensions = prompt("Enter new dimension (max: 64)");
    if (newDimensions < 1 || newDimensions == null) {
        newDimensions = GRID_DEFAULT_SIZE;
    } else if (newDimensions > 64) {
        newDimensions = 64;
    }
    drawScreen(newDimensions, option);
}
