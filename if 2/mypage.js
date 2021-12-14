$(function(){
    $('.subnav').click(function(){
        $(this).toggleClass('nav-selected');
        $(this).siblings().removeClass('nav-selected');
    })

    $('.subnav2').click(function(){
        $('.board-md').css('display','flex');
        $('.board-pj').css('display','none');
    })

    $('.subnav1').click(function(){
        $('.board-md').css('display','none');
        $('.board-pj').css('display','flex');
    })
})


$(function(){
    $('.hover-box').click(function(){
      $('.main-back').addClass("no-scroll");
      $('.opacity-bk').css('display','block');
      $('.project-page').css('display','block');
    });
  
    $('.close-btn').click(function(){
      $('.main-back').removeClass("no-scroll");
      $('.opacity-bk').css('display','none');
      $('.project-page').css('display','none');
      $('.comment-box').css('display', 'none');
    });
  
    $('.opacity-bk').click(function(){
      $('.main-back').removeClass("no-scroll");
      $('.opacity-bk').css('display','none');
      $('.project-page').css('display','none');
      $('.comment-box').css('display', 'none');
    });
  
  });

  $(function(){
    $('.flow').click(function(){
      console.log("안녕");
  
      $(this).children('.circle').addClass("circle-selected");
      $(this).siblings().children('.circle').removeClass("circle-selected");
  
      $(this).children('.flow-text').addClass("text-selected");
      $(this).siblings().children('.flow-text').removeClass("text-selected");
    });
  
  });
  
  $(function(){
      $('.archive').click(function(){
        if ( $('.archive-icon > i').hasClass('fal') ){
          $('.archive-icon > i').removeClass('fal');
          $('.archive-icon > i').addClass('fas');
          $('.archive-icon > i').addClass('navy');
        }else{
          $('.archive-icon > i').removeClass('fas');
          $('.archive-icon > i').addClass('fal');
          $('.archive-icon > i').removeClass('navy');
      
        }
      });
  
      $('.likes').click(function(){
        if ( $('.likes-icon > i').hasClass('fal') ){
          $('.likes-icon > i').removeClass('fal');
          $('.likes-icon > i').addClass('fas');
          $('.likes-icon > i').addClass('pink');
        }else{
          $('.likes-icon > i').removeClass('fas');
          $('.likes-icon > i').addClass('fal');
          $('.likes-icon > i').removeClass('pink');
      
        }
      });
  });
  
  
  $(function(){
    $('.comment').click(function(){
      $('.comment-box').css('display','block').css('opacity','1');
    });
    $('.comment-close').click(function(){
      $('.comment-box').css('display', 'none');
  
    });
  });
  
  
  $(function(){
  
    $('.project-follow').on('click', function() {
      $('.project-follow,.project-following').toggle();
    });
  
    $('.project-following').on('click', function() {
      $('.project-following,.project-follow').toggle();
    });
  
  }); 
  let currentIndex = 0;
// let _index = $(this).index();

$(function(){
  $('.rightarrow').click(function () {
      currentIndex++;

      if (currentIndex > 6) currentIndex = 0;
      // fromRight(cureentIndex)

      showListFromLeft(currentIndex);

      if ( $('.circle').hasClass('circle-selected') ){
        $(this).removeClass('circle-selected');
        $(this).parent().next().children('.circle').addClass('circle-selected');
      }
  });
  showList(currentIndex);
});

$(function(){
  $('.leftarrow').click(function () {
      currentIndex--;

      if (currentIndex < 0 ) currentIndex = 6;
      // fromRight(cureentIndex)

      showListFromLeft(currentIndex);
  });
  showList(currentIndex);
});





function showList(_index){
  $('.project-content > .slide').hide();
  $('.project-content > .slide').eq(_index).fadeIn(300);
  $('.project-content > .slide').eq(_index).find('div').fadeIn(300);

  let backgroundImg = $('.project-content > .slide').eq(_index).attr('background-image');
  $('.slide').css('background-image', backgroundImg);
  
}


let toSlidePrev;
let toSlideNext;

function showListFromLeft(_index){
  $('.project-content > .slide').each(function(){
    if ($(this).css('display') == 'block'){
      toSlidePrev = $(this);
      toSlideNext = $('.project-content > .slide').eq(_index);
      toSlidePrev.css('opacity', '1');
      toSlideNext.css('opacity', '1');
      toSlidePrev.hide();
    }
    
  
  });

  $('.project-content > .slide').show();
  $('.project-content > .slide').eq(_index).fadeIn(300);
  $('.project-content > .slide').eq(_index).find('.slide').fadeIn(300);

  $('.project-content > .slide').css('opacity','1');

  let backgroundImg = $('.project-content > .slide').eq(_index).attr('background-image');
  $('.slide').css('background-image', backgroundImg);
}

///////////////////////////그거..
// let toFlowPrev;
// let toFlowNext;

// function slideListFromLeft(_index){
//   $('.project-flow-area > .flow').each(function(){
//     if ($(this).children().hasClass('circle-selected') ){
      
//       toFlowPrev = $(this);
//       toFlowNext = $(this).next();
//       toFlowPrev.removeClass('circle-selected');
//       toSlideNext.addClass('circle-selected');

//     }
    
  
//   });

//   // $('.project-content > .slide').show();
//   // $('.project-content > .slide').eq(_index).fadeIn(300);
//   // $('.project-content > .slide').eq(_index).find('.slide').fadeIn(300);

//   // $('.project-content > .slide').css('opacity','1');

//   // let backgroundImg = $('.project-content > .slide').eq(_index).attr('background-color');
//   // $('.slide').css('background-color', backgroundImg);
// }



//////////////////////////////////



$(function(){
  $('.first').click(function(){
    showList(0);
  });
  $('.2nd').click(function(){
    showList(1);
  });
  $('.4th').click(function(){
    showList(2);
  });
  $('.5th').click(function(){
    showList(3);
  });
  $('.6th').click(function(){
    showList(4);
  });
  $('.7th').click(function(){
    showList(5);
  });
  $('.8th').click(function(){
    showList(6);
  });


  
});

$(function() {
    $('.input-comment > input').click(function(){
      $('.input-comment > button').css('color','#9556ff');
    })
  
    $('.send').click(function(){
      console.log("gkdl");
      let msg = $('#input-text').val();
      console.log(msg);
  
      let bubble = $('<div class="user-comment"><div class="user-info"><div class="new-profile"></div><div class="comment-name">Nick-name</div></div><div class="user-say"><div class="comment-text">'+ msg +'</div><div class="comment-like"><i class="far fa-thumbs-up"></i><p>2.5K</p></div></div></div>')
  
      $('.comment-content').append(bubble);
      $('.input-comment > button').css('color','#979797');
      
  
      $('#input-text').val('');
    })
  
  
    $('#input-text').keypress(function(e) {
      if(e.keyCode == 13){
        $('.send').click();
      }
    })

    $('.pin-area').on('click',function(){
        $('.pin').toggleClass('pin-active');
        
      })
  
  });
  