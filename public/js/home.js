"use strict";function removeIntro(){$("#cast-grid").removeClass("noshow"),$("#intro").fadeOut(1e3),clearInterval(advanceTimer),$("body").removeClass("no--scroll")}function updateSlide(){$("#arrow__right").off("click"),$("#arrow__left").off("click"),$("#intro").off("swipeleft",swipeAdvance),$("#intro").off("swiperight",swipeRewind),$(".intro__slide").fadeOut(1e3),setTimeout(function(){$(".intro__slide").eq(currentSlide).fadeIn(1e3),$(".slide__circle").removeClass("slide--active"),$(".slide__circle").eq(currentSlide).addClass("slide--active"),$("#arrow__right").click(function(){clearInterval(advanceTimer),advanceSlide()}),$("#arrow__left").click(function(){clearInterval(advanceTimer),rewindSlide()}),$("#intro").on("swipeleft",swipeAdvance),$("#intro").on("swiperight",swipeRewind)},1100)}function advanceSlide(){currentSlide<MAXSLIDES?(currentSlide+=1,updateSlide()):removeIntro()}function rewindSlide(){currentSlide>0&&(currentSlide-=1,updateSlide())}function swipeAdvance(){advanceSlide(),clearInterval(advanceTimer)}function swipeRewind(){rewindSlide(),clearInterval(advanceTimer)}var MAXSLIDES=4,currentSlide=0;$("#intro__skip").on("click",removeIntro),$("#intro__begin").on("click",removeIntro);var advanceTimer=setInterval(function(){advanceSlide(),console.log("test")},7100);$("#arrow__right").click(function(){clearInterval(advanceTimer),advanceSlide()}),$("#arrow__left").click(function(){clearInterval(advanceTimer),rewindSlide()}),$("#intro").on("swipeleft",swipeAdvance),$("#intro").on("swiperight",swipeRewind),$(".cast__item").on("mouseover",function(){$(".cast__item").addClass("cast--faded"),$(this).removeClass("cast--faded");var e=$(window).width(),i=$(this).index(),t=$(this).parent(".cast__row"),n=$(this).parent(".cast__row").index();$.each(t.children(".cast__item"),function(){$(this).index()<i?$(this).addClass("cast--shift-left"):$(this).index()>i&&$(this).addClass("cast--shift-right")}),e<=800&&$.each($(".cast__row"),function(){$(this).index()<n?$(this).children(".cast__item").addClass("cast--shift-left"):$(this).index()>n&&$(this).children(".cast__item").addClass("cast--shift-right")})}),$(".cast__item").on("mouseout",function(){$(".cast__item").removeClass("cast--faded cast--shift-left cast--shift-right")});
//# sourceMappingURL=home.js.map
