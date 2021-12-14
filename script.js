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



$(function(){

  $('.filter-2-btn').click(function(){
    $(this).addClass('selected-btn');
    $(this).siblings().removeClass('selected-btn');
  })

  $('#Product').click(function(){
    $('.product-image1').css('background-image', 'url(https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/c1efc7128691469.615bb24ebab85.jpg)');
    $('.product-image2').css('background-image', 'url(https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/091f08126318599.614f7f72ed809.jpg)');
    $('.product-image3').css('background-image', 'url(https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/81a661131349697.61939399ec27e.jpg)');
    $('.product-image4').css('background-image', 'url(https://i.postimg.cc/MGkV8VLH/2021-12-14-12-38-07.png)');
    $('.product-image5').css('background-image', 'url(https://i.postimg.cc/L6LZ3n5M/2021-12-14-12-41-27.png)');
    $('.product-image6').css('background-image', 'url(https://i.postimg.cc/XJXrGgpn/2021-12-14-1-02-41.png)');
    $('.product-image7').css('background-image', 'url(https://i.postimg.cc/T3Tqyr9s/2021-12-14-12-44-42.png)');
    $('.product-image8').css('background-image', 'url(https://i.postimg.cc/qqFyvv0M/2021-12-14-1-13-24.png)');
  })

  $('#All').click(function(){
    $('.product-image1').css('background-image', 'url(https://i.postimg.cc/DwhZ3gSX/1.png)');
    $('.product-image2').css('background-image', 'url(https://i.postimg.cc/XJXrGgpn/2021-12-14-1-02-41.png)');
    $('.product-image3').css('background-image', 'url(https://i.postimg.cc/DZ3F1f1b/4.png)');
    $('.product-image4').css('background-image', 'url(https://i.postimg.cc/T3Tqyr9s/2021-12-14-12-44-42.png)');
    $('.product-image5').css('background-image', 'url(https://i.postimg.cc/htYm8j7L/Frame-2.png)');
    $('.product-image6').css('background-image', 'url(https://i.postimg.cc/FFPHk6Sc/Frame-6.png)');
    $('.product-image7').css('background-image', 'url(https://i.postimg.cc/6Q5pypL6/3.jpg)');
    $('.product-image8').css('background-image', 'url(https://i.postimg.cc/76kfXTP2/Frame-4.png)');
  })

  $('#Mobile').click(function(){
    $('.product-image1').css('background-image', 'url(https://i.postimg.cc/DwhZ3gSX/1.png)');
    $('.product-image2').css('background-image', 'url(https://i.postimg.cc/DZ3F1f1b/4.png)');
    $('.product-image3').css('background-image', 'url(https://i.postimg.cc/mgcGq1wH/55555.jpg)');
    $('.product-image4').css('background-image', 'url(https://i.postimg.cc/cLdsbLz7/2.png)');
    $('.product-image5').css('background-image', 'url(https://i.postimg.cc/6Q5pypL6/3.jpg)');
    $('.product-image6').css('background-image', 'url(https://i.postimg.cc/HnRVDDf0/6.png)');
    $('.product-image7').css('background-image', 'url(https://i.postimg.cc/2jKqBhVq/7.png)');
    $('.product-image8').css('background-image', 'url(https://i.postimg.cc/8Pf7dc6Z/8.png)');
  })

  $('#Web').click(function(){
    $('.product-image1').css('background-image', 'url(https://i.postimg.cc/D0cs1Pq0/Frame-1.png)');
    $('.product-image2').css('background-image', 'url(https://i.postimg.cc/htYm8j7L/Frame-2.png)');
    $('.product-image3').css('background-image', 'url(https://i.postimg.cc/kX1R94s0/Frame-3.png)');
    $('.product-image4').css('background-image', 'url(https://i.postimg.cc/76kfXTP2/Frame-4.png)');
    $('.product-image5').css('background-image', 'url(https://i.postimg.cc/hGFjP7d5/Frame-5.png)');
    $('.product-image6').css('background-image', 'url(https://i.postimg.cc/FFPHk6Sc/Frame-6.png)');
    $('.product-image7').css('background-image', 'url(https://i.postimg.cc/hj2cxJXg/Frame-7.png)');
    $('.product-image8').css('background-image', 'url(https://i.postimg.cc/tJ7yzX66/Frame-8.png)');
  })


});

// $(function(){
//   $('.input-comment > input').click(function(){
//     $('.input-comment > button').css('color','#9556ff');
//   })

//   let usercomment = $('<div class="user-comment"></div>');
//   let userinfo = $('<div class="user-info"><div class="comment-profile"></div><div class="comment-name">Nick-name</div></div>');
//   let usersay = $('<div class="user-say"></div>');
//   //<div class="comment-text"></div><div class="comment-like"><i class="far fa-thumbs-up"></i><p>0K</p></div>
//   let comment = $('.input-comment > input').val();
//   let commenttext = $('<div class="comment-text"></div>');
//   commenttext.html('<div>'+ '안녕하세요' +'</div>')
//   let commentlike = $('<div class="comment-like"><i class="far fa-thumbs-up"></i><p>0K</p></div>');


//   console.log(comment);



//   $('.input-comment > button').click(function(){
//     $('.input-comment > button').css('color','#979797');

//     $(usersay).append(commenttext);
//     $(usersay).append(commentlike);
//     $(usercomment).append(userinfo);
//     $(usercomment).append(usersay);
    

//     $('.comment-content').append(usercomment);
//   })
// });

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
    $('.login-area').toggleClass('login-none');
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


  $('.pin-area').on('click',function(){
    $('.pin').toggleClass('pin-active');
    
  })

  

});