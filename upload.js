/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  


$(function(){
    let now1 = $('.droplist1').text();
    let now2 = $('.droplist2').text();
    

    $('.droplist1').click(function(){
        $('.dropbtn').html(now1 + '<i class="fas fa-sort-down"></i>');
    })
    $('.droplist2').click(function(){
        $('.dropbtn').html(now2 + '<i class="fas fa-sort-down"></i>');
    })
    
});


// $(function(){

//   $('.bookmark').click(function(e){
//     console.log(this);
//     e.preventDefault();

//     $('.bookmark:eq(0) > i').each(function(){
      

//       if ( $(this).hasClass('fal') ){
//         $(this).removeClass('fal');
//         $(this).addClass('fas');
//       }else{
//         $(this).removeClass('fas');
//         $(this).addClass('fal');
//       }
//     })
//   });
// });

// $(function(){
//   $('.bookmark').click(function(){
//     $(this > '.fal, .fas').toggle();
//   })
// });

$(function(){
  $('.like-icon').click(function(){
    $(this).children().toggleClass('fas');

    if($(this).children().hasClass('fas')){
      $(this).siblings().text('11');
    }else{
      $(this).siblings().text('10');
    }
  })
});

$(function(){
  $('.bookmark').click(function(){
    $(this).children().toggleClass('fas');
  })
});




let container = $('.container').clone();
let more = $('.more');

$(function(){
  // $('.container').clone();
  $('.more-btn').click(function(){
    $('.more').remove();
    $('.main').append(container);
    $('.main').append(more);
  })
});

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
  $('.input-comment > input').click(function(){
    $('.input-comment > button').css('color','#9556ff');
  })

  let usercomment = $('<div class="user-comment"></div>');
  let userinfo = $('<div class="user-info"><div class="comment-profile"></div><div class="comment-name">Nick-name</div></div>');
  let usersay = $('<div class="user-say"></div>');
  //<div class="comment-text"></div><div class="comment-like"><i class="far fa-thumbs-up"></i><p>0K</p></div>
  let comment = $('.input-comment > input').val();
  let commenttext = $('<div class="comment-text"></div>');
  commenttext.html('<div>'+ '안녕하세요' +'</div>')
  let commentlike = $('<div class="comment-like"><i class="far fa-thumbs-up"></i><p>0K</p></div>');


  console.log(comment);



  $('.input-comment > button').click(function(){
    $('.input-comment > button').css('color','#979797');

    $(usersay).append(commenttext);
    $(usersay).append(commentlike);
    $(usercomment).append(userinfo);
    $(usercomment).append(usersay);
    

    $('.comment-content').append(usercomment);
  })
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


$(function(){
  $('.search > input').val('Search...');

  $('.search > input').click(function(){
      $('.search > input').val('');
      $('.search > input').css('color','#979797');
      
  });

  // $('.search > input').focus(function(){
  //     $('.search').css('box-shadow','0px 0px 10px 0px rgba(149,93,252,0.3)');
  //     $('.search').css('border','1px solid rgba(149,93,252,0.3)');
  // });






  $('.login').click(function(){
    $('.login-area').css('display','flex');
  });

  $('.pw > input').click(function(){
    $('.login-button').css('background-color' ,'#9556ff');
  })

  $('.login-button').click(function(){
    let text = $('.pw > input').val();

    if( text == ""){
      return null;
    }else{
      $('.login-area').css('display','none');
      $('.login-before').css('display','none');
      $('.login-after').css('display','flex');
    }

  });


  // $('.pin-area').on('click',function(){
  //   $('.pin').toggleClass('pin-active');
    
  // })

  

});
$(function(){
  $('.flow-close').click(function(){
    $(this).parent().remove();
  })

  $('.flow-done').click(function(){
    //$('.flow-close').fadeOut(400);
    $('.flow-close').toggleClass('close-active');
  })
});


$(function(){
  $('.close1').click(function(){
    // $(this).parent().next().find('.flow').trigger('click');
    //$('.content1').remove();
    // $(this).parent().next().find('.circle').addClass('circle-selected')
    $('.2nd').trigger('click');
    $('.content1').remove();
  });
});

$(function(){
  $('.circle11').click(function(){
    $('.circle11').css('background-color', '#979797');
    $('.circle22').css('background-color', '#e8e8e8');
    $('.circle33').css('background-color', '#e8e8e8');

    $('.interview1 > .interview-key').text('"Key point 1"');
    $('.interview1 > .interview-a').text('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem ex ab voluptatibus')
  })
  $('.circle22').click(function(){
    $('.circle22').css('background-color', '#979797');
    $('.circle11').css('background-color', '#e8e8e8');
    $('.circle33').css('background-color', '#e8e8e8');

    $('.interview1 > .interview-key').text('"Key point 2"')
    $('.interview1 > .interview-a').text('Lorem ipsum dolor sit amet consectetur adipisicing elit.')
  })
  $('.circle33').click(function(){
    $('.circle33').css('background-color', '#979797');
    $('.circle11').css('background-color', '#e8e8e8');
    $('.circle22').css('background-color', '#e8e8e8');

    $('.interview1 > .interview-key').text('"Key point 3"')
    $('.interview1 > .interview-a').text('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur nihil distinctio exercitationem, repellendus cum explicabo repellat deleniti')
  })

  //////////

  $('.circle111').click(function(){
    $('.circle111').css('background-color', '#979797');
    $('.circle222').css('background-color', '#e8e8e8');
    $('.circle333').css('background-color', '#e8e8e8');

    $('.interview2 > .interview-key').text('"Key point 1"');
    $('.interview2 > .interview-a').text('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem ex ab voluptatibus')
  })
  $('.circle222').click(function(){
    $('.circle222').css('background-color', '#979797');
    $('.circle111').css('background-color', '#e8e8e8');
    $('.circle333').css('background-color', '#e8e8e8');

    $('.interview2 > .interview-key').text('"Key point 2"')
    $('.interview2 > .interview-a').text('Lorem ipsum dolor sit amet consectetur adipisicing elit.')
  })
  $('.circle333').click(function(){
    $('.circle333').css('background-color', '#979797');
    $('.circle111').css('background-color', '#e8e8e8');
    $('.circle222').css('background-color', '#e8e8e8');

    $('.interview2 > .interview-key').text('"Key point 3"')
    $('.interview2 > .interview-a').text('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur nihil distinctio exercitationem, repellendus cum explicabo repellat deleniti')
  })

  //////////

  $('.circle1111').click(function(){
    $('.circle1111').css('background-color', '#979797');
    $('.circle2222').css('background-color', '#e8e8e8');
    $('.circle3333').css('background-color', '#e8e8e8');

    $('.interview3 > .interview-key').text('"Key point 1"');
    $('.interview3 > .interview-a').text('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem ex ab voluptatibus')
  })
  $('.circle2222').click(function(){
    $('.circle2222').css('background-color', '#979797');
    $('.circle1111').css('background-color', '#e8e8e8');
    $('.circle3333').css('background-color', '#e8e8e8');

    $('.interview3 > .interview-key').text('"Key point 2"')
    $('.interview3 > .interview-a').text('Lorem ipsum dolor sit amet consectetur adipisicing elit.')
  })
  $('.circle3333').click(function(){
    $('.circle3333').css('background-color', '#979797');
    $('.circle1111').css('background-color', '#e8e8e8');
    $('.circle2222').css('background-color', '#e8e8e8');

    $('.interview3 > .interview-key').text('"Key point 3"')
    $('.interview3 > .interview-a').text('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur nihil distinctio exercitationem, repellendus cum explicabo repellat deleniti')
  })

  
});




// 혜빈


$(function(){
  $('.pin-area').click(function(){
    // let area = $('<div class="area"></div>');
    // let click = $('<div class="click-area"></div>');
    // $('.content6').prepend(click);
    // $('.content6').prepend(area);

    $('.area,.opacity').toggle();

  });
});


// 핀 추가

$(function(){
  $('.click-area').click(function(e){
  let div = $('<div class="pin-wrapper"></div>')
  .css({
      "left": e.offsetX + 'px',
      "top": e.offsetY + 'px'
    })
    .append($('<textarea class="input-style pin-input" style="resize: none;" spellcheck="false">Process</textarea>'))
    .prependTo('.area');
      
  });
});


// 컬러 바뀌게 + 텍스트area

$(function(){
  $('textarea').click(function(){
    $(this).text('');
  });

  $('.color-info1').keypress( function(e){
    if(e.keyCode === 13){
      let color1 = $('.color-info1').val();
      $('.color-circle1').css('background-color', color1);
    }
    
  });
  $('.color-info2').keypress( function(e){
    if(e.keyCode === 13){
      let color2 = $('.color-info2').val();
      $('.color-circle2').css('background-color', color2);
    }
    
  });
  $('.color-info3').keypress( function(e){
    if(e.keyCode === 13){
      let color3 = $('.color-info3').val();
      $('.color-circle3').css('background-color', color3);
    }
    
  });

  $('.font1').keypress( function(e){
    if(e.keyCode === 13){
      let font1 = $('.font1').val();
      $('.font-1 > p').css('font-size', font1);
    }
    
  });

  $('.font2').keypress( function(e){
    if(e.keyCode === 13){
      let font2 = $('.font2').val();
      $('.font-2 > p').css('font-size', font2);
    }
    
  });
  $('.font3').keypress( function(e){
    if(e.keyCode === 13){
      let font3 = $('.font3').val();
      $('.font-3 > p').css('font-size', font3);
    }
    
  });
  $('.font4').keypress( function(e){
    if(e.keyCode === 13){
      let font4 = $('.font4').val();
      $('.font-4 > p').css('font-size', font4);
    }
    
  });
  $('.font5').keypress( function(e){
    if(e.keyCode === 13){
      let font5 = $('.font5').val();
      $('.font-5 > p').css('font-size', font5);
    }
    
  });
  $('.font6').keypress( function(e){
    if(e.keyCode === 13){
      let font6 = $('.font6').val();
      $('.font-6 > p').css('font-size', font6);
    }
    
  });

  $('.font7').keypress( function(e){
    if(e.keyCode === 13){
      let font7 = $('.font7').val();
      $('.font-7 > p').css('font-size', font7);
    }
    
  });

  // $('.white-circle').click(function(){
  //   let color = $('.color-info1').val();
  //   console.log(color);
  //   $('.color-circle1').css('background-color', color);
  // })


  // let color = $(this).text();

});


new Vue({
  el: '.color-circle1',
  data: {color: '#673AB7'}
})






//이모티콘 바꾸기
$(function(){
  // $('.icon1 > i').click(function(){

  //   $('.icon1 > .smile').css('opacity','0');
  //   $('.icon1 > .no').css('opacity','1');

  //   $('.icon1 > i').click(function(){
  //     $('.icon1 > .no').css('opacity','0');
  //     $('.icon1 > .sad').css('opacity','1');

  //     $('.icon > i').click(function(){
  //       $('.icon1 > .sad').css('opacity','0');
  //       $('.icon1 > .smile').css('opacity','1');
  //     })
  //   });
    
  // });


  // $('.icon1 > i').click(function(){
  //   $('.smile').css('opacity','0');
  //   $('.no').css('opacity','1');
  // })
  // $('.icon1 > i').click(function(){
  //   $('.no').css('opacity','0');
  //   $('.sad').css('opacity','1');
  // })
  // $('.icon1 > i').click(function(){
  //   $('.sad').css('opacity','0');
  //   $('.smile').css('opacity','1');
  // })

  // $('.emotion-icon > i:nth-child(0)').click(function(){
  //   $('.smile,.no').toggle();
  // });

  $('.emotion-icon > .smile').click(function(){
    $(this).css('display','none');
    $(this).parent().children('.no').css('display', 'block');
    $(this).parent().children('.sad').css('display', 'none');
      // $('.emotion-icon > .no').css('display','block');
      // $('.emotion-icon > .smile').css('display','none');
      // $('.emotion-icon > .sad').css('display','none');
  });

  $('.emotion-icon > .no').click(function(){
    $(this).css('display','none');
    $(this).parent().children('.sad').css('display', 'block');
    $(this).parent().children('.smile').css('display', 'none');
    //$('.emotion-icon > .sad').css('display','block');
    //$('.emotion-icon > .smile').css('display','none');
    //$('.emotion-icon > .no').css('display','none');
});

  $('.emotion-icon > .sad').click(function(){
    $(this).css('display','none');
    $(this).parent().children('.smile').css('display', 'block');
    $(this).parent().children('.no').css('display', 'none');
    //$('.emotion-icon > .smile').css('display','block');
    //$('.emotion-icon > .no').css('display','none');
    //$('.emotion-icon > .sad').css('display','none');
});



});


$(function(){
  $('.embed-area1 > textarea').click(function(){
    $('.color-btn2').css('background-color','#9556ff').css('color','#fff').css('font-weight','500');
  });

  $('.embed-area2 > textarea').click(function(){
    $('.color-btn3').css('background-color','#9556ff').css('color','#fff').css('font-weight','500');
  });

  $('.ebd-ok1').click(function(){
    let figma1 = $('.embed-text1').val();
    console.log(figma1);
    $('.embed-area1').remove();
    $('.content1').css('display','none');
    $('.content5 > iframe').attr('src', figma1 );

    setTimeout(function(){
      $('.content5 > iframe').css('display','block');
    },1100);


  });


  $('.ebd-ok2').click(function(){
    let figma2 = $('.embed-text2').val();
    console.log(figma2);
    $('.embed-area2').remove();
    $('.content1').css('display','none');
    $('.content7 > iframe').attr('src', figma2 );

    setTimeout(function(){
      $('.content7 > iframe').css('display','block');
    },1100);


  });

});


