

$(document).ready(function () {
    $('.menu').click(function () {
        $('nav').toggleClass('active');
        $(this)
            .find('i')
            .toggleClass('fa-bars fa-times');
    })
});

$(document).ready(function () {
    $(".minimalist-vertical-menu").on("mouseleave", function () {
        $(".minimalist-tab-content").removeClass("active");
        $(".minimalist-tab-menu>.list-group>li").removeClass("active");
    });

    $("li")
        .on("mouseleave", function () {
            if (!$(".minimalist-tab-content").hasClass("active")) {
                $(this).removeClass("active");
            }
        })
        .on("mouseenter", function (e) {
            e.preventDefault();
            $(this)
                .siblings("li.active")
                .removeClass("active");
            $(this).addClass("active");
            var index = $(this).index();
            $(".minimalist-tab-content").removeClass("active")
            $(".minimalist-tab>.minimalist-tab-content")
                .eq(index)
                .addClass("active");
        });
});


$(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
        $(".back-to-top").css("opacity","1");
    } else {
      $(".back-to-top").css("opacity","0");
  
    }
  });


$(document).ready(function () {
    $('.demo').slick();
});
$('.sliderr').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    autoplay: true,

    autoplaySpeed: 1000,

    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
                infinite: true,

                dots: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});
$('.corusel-category').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    autoplay: true,

    autoplaySpeed: 1000,

    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,

                dots: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});
$('.sliderrr').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    autoplay: true,

    autoplaySpeed: 1000,

    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,

                dots: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});
$('.slider5').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    autoplay: true,

    autoplaySpeed: 1000,

    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,

                dots: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});
var timer;

var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 2); 

timer = setInterval(function () {
    timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {

        // Timer done
        clearInterval(timer);

    } else {

        var seconds = Math.floor(difference / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);
    }
}
$('.feed-corusel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    autoplay: true,

    autoplaySpeed: 1000,

    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,

                dots: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});
$('.slider8').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    autoplay: true,

    autoplaySpeed: 1000,

    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,

                dots: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});
function clik(){
    document.getElementById("cont").classList.toggle("show")
}
if(localStorage.getItem('basket') === null) {
    localStorage.setItem('basket',JSON.stringify([]))
}
  
function CountBasket() {
  let basket = JSON.parse(localStorage.getItem('basket'));
  if(basket.length === 0 ) {
      document.getElementById('count').style.display = 'none'
  }
  else{
      document.getElementById('count').style.display = 'block'
  }
  document.getElementById('count').innerHTML = basket.length
}

CountBasket()

let btns = document.getElementsByClassName('btn_add');

setTimeout(() => {
  for(let btn of btns) {
      btn.onclick = function(e) {
          let basket = JSON.parse(localStorage.getItem('basket'))
          let id = e.target.parentElement.parentElement.id;
            console.log(id);
          let price = e.target.parentElement.parentElement.children[2].children[1].children[1].innerHTML;
         console.log(price);
         price=Number.parseInt(price.slice(1));
          let title = e.target.parentElement.parentElement.children[2].children[0].innerHTML;
          console.log(title);
          let image = e.target.parentElement.parentElement.children[0].children[0].src ;
              console.log(image);
          let existProd = basket.find(x => x.Id == id);
          let filter = basket.filter(x => x.Id != id);
         
          if(existProd == undefined) {
              basket.push({
                  Id: id,
                  Name: title,
                  Price: price,
                  Image: image,
                  Count: 1
              })
          }
          else{
              existProd.Count += 1;
          }

          

          localStorage.setItem('basket',JSON.stringify(basket));
          CountBasket();
      }
  }
}, 1000);
