var $square = '<div class="square"></div>';
//var number = 16;
//var $divs = number * number;

$(document).ready(function() {
create(16);

function create(size) {
var $divs = size * size;
var divWidth = (600/size);

// Create divs
for (var i = 0; i < $divs; i++) {
  $('.container').append($square);
};

$('.square').css({'width': divWidth, 'height': divWidth});


// Clear rows
  $('.container > div:nth-child('+ size + 'n+1)').addClass('clear');

  // Hover
$(".black").click(function(){
  $(this).data('clicked', true);
  $(".white, .red, .green, .blue, .random").data('clicked', false);
});

$(".white").click(function(){
  $(this).data('clicked', true);
    $(".black, .red, .green, .blue, .random").data('clicked', false);
});

$(".red").click(function(){
  $(this).data('clicked', true);
    $(".black, .white, .green, .blue, .random").data('clicked', false);
});

$(".green").click(function(){
  $(this).data('clicked', true);
    $(".black, .white, .red, .blue, .random").data('clicked', false);
});

$(".blue").click(function(){
  $(this).data('clicked', true);
    $(".black, .white, .red, .green, .random").data('clicked', false);
});

$(".random").click(function(){
  $(this).data('clicked', true);
    $(".black, .white, .red, .green, .blue").data('clicked', false);
});

 $('.container > div').mouseenter(function() {

    if ($('.black').data('clicked')) {
        $(this).css('background-color', 'rgb(0, 0, 0)');
      }

     else if ($('.white').data('clicked')) {
         $(this).css('background-color', 'rgb(255, 255, 255)');
      }

      else if ($('.red').data('clicked')) {
          $(this).css('background-color', 'rgb(255, 0, 0)');
       }

       else if ($('.green').data('clicked')) {
           $(this).css('background-color', 'rgb(0, 255, 0)');
        }

        else if ($('.blue').data('clicked')) {
          $(this).css('background-color', 'rgb(0, 0, 255)');

         }

         else if ($('.random').data('clicked')) {
          var $r = Math.floor(Math.random() * 255);
          var $g = Math.floor(Math.random() * 255);
          var $b = Math.floor(Math.random() * 255);

            $(this).css('background-color', 'rgb('+$r+ ',' +$g+ ',' +$b+ ')');
          }


      else {
        $(this).css('background-color', '#000');
      };
    });

};


// Reset and new grid
function newGrid() {
  var size = parseInt(prompt('Introduce a value for the new grid'));
  $('.square').remove();
  create(size);

};

$('.new').click(function() {
newGrid();
});

// highlight
$('.black, .white, .red, .green, .blue, .random').click(function() {
if ($(this).data('clicked')) {
  $('.panel div, .random').removeClass('highlight');
    $(this).addClass('highlight');
  };
});




});
