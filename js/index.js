$(document).ready(function(){
  var user, cpr;
  var box1, box2, box3, box4, box5, box6, box7, box8, box9;
  var turn = 0;
  
  $('#option-x, #option-o').click(function(){
    if(this.id == 'option-x'){
      user = '<h1 class="x" >X</h1>';
      cpr = '<h1 class="o">O</h1>';
    }
    else if (this.id == 'option-o'){
      user = '<h1 class="o">O</h1>';
      cpr = '<h1 class="x">X</h1>';
    }
  });
  
  $('#option-x, #option-o').on("click", function(){
    $('#options').hide()
  })
  $('#reset').click(function(){
    $('#options').show()
    $('td').html('&nbsp;');
    $('table').show();
    user ='';
    cpr = '';
    turn = 0;
  })
  
  $('td').click(function(){
    $(this).html(user);
    boardCheck();
    checkWin();
    turn += 1;
    aI();
    boardCheck();
    checkWin();
  })
  
  function aI() {
    switch (true) {
      case turn == 1 && $('#box1').html() !== user || $('box1').html() == '&nbsp;':
        $('#box1').html(cpr);
        turn += 1
        break;
        case turn == 2 && $('#box2').html() !== user || $('box2').html() == '&nbsp;':
        $('#box2').html(cpr);
        turn += 1
        break;
        case turn == 3 && $('#box3').html() !== user || $('box3').html() == '&nbsp;':
        $('#box3').html(cpr);
        turn += 1
        break;
        case turn == 4 && $('#box4').html() !== user || $('box4').html() == '&nbsp;':
        $('#box4').html(cpr);
        turn += 1
        break;
        case turn == 5 && $('#box5').html() !== user || $('box5').html() == '&nbsp;':
        $('#box5').html(cpr);
        turn += 1
        break;
        case turn == 6 && $('#box6').html() !== user || $('box6').html() == '&nbsp;':
        $('#box6').html(cpr);
        turn += 1
        break;
        case turn == 7 && $('#box7').html() !== user || $('box7').html() == '&nbsp;':
        $('#box7').html(cpr);
        turn += 1
        break;
        case turn == 8 && $('#box8').html() !== user || $('box8').html() == '&nbsp;':
        $('#box8').html(cpr);
        turn += 1
        break;
        case turn == 9 && $('#box9').html() !== user || $('box9').html() == '&nbsp;':
        $('#box9').html(cpr);
        turn += 1
        break;
               };    
  };
  
  boardCheck = function(){
    box1 = $('#box1').html();
    box2 = $('#box2').html();
    box3 = $('#box3').html();
    box4 = $('#box4').html();
    box5 = $('#box5').html();
    box6 = $('#box6').html();
    box7 = $('#box7').html();
    box8 = $('#box8').html();
    box9 = $('#box9').html();
  };
  
  function checkWin(){
    var win;
    if (
       (box1 == user && box2 == user && box3 == user) ||
       (box4 == user && box5 == user && box6 == user) ||
       (box7 == user && box8 == user && box9 == user) ||
      
       (box1 == user && box4 == user && box7 == user) ||
       (box2 == user && box5 == user && box8 == user) ||
       (box3 == user && box6 == user && box9 == user) ||
      
       (box1 == user && box5 == user && box9 == user) ||
       (box3 == user && box5 == user && box7 == user)  
    ) {
      $('button').show();
      $('td').html('&nbsp;');
      $('table').hide();
      user = '';
      cpr = '';
      win = true; 
       alert("You won! Good Job");
      } else if (
        (box1 == cpr && box2 == cpr && box3 == cpr) ||
        (box4 == cpr && box5 == cpr && box6 == cpr) ||
        (box7 == cpr && box8 == cpr && box9 == cpr) ||
        
        (box1 == cpr && box4 == cpr && box7 == cpr) ||
        (box2 == cpr && box5 == cpr && box8 == cpr) ||
        (box3 == cpr && box6 == cpr && box9 == cpr) ||
        
        (box1 == cpr && box5 == cpr && box9 == cpr) ||
        (box3 == cpr && box5 == cpr && box7 == cpr)    
      ) { 
        $('button').show();
        $('td').html('&nbsp;');
        $('table').hide();
        user = '';
        cpr = '';
        win = true;
        alert('You lost! Better luck next time.');
        }  else if (win !== true && turn == 9){
          alert("It's a draw! Reset to play again")
        }
  };
  
});