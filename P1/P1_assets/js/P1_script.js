// let show = document.querySelector('show')


// let scrollContainer = document.querySelector('#scrollContainer')
// scrollContainer.scrollTo

window.addEventListener('scroll',function(){
  if(window.scrollX > 2979){
    window.scrollBy(-window.scrollX,0)
  }
})




let celamus_c = document.querySelector('.celamus_c')

    $(".celamus_c").on("click", function() {
       $(".celamus_c_rect_40").toggleClass("tall");
       // $("tall").toggleClass();
    });

    $(".celamus_e").on("click", function() {
       $(".celamus_e_rect_60").toggleClass("tall");
    });

    $(".celamus_l").on("click", function() {
       $(".celamus_l_rect_60").toggleClass("tall");
    });

    $(".celamus_a").on("click", function() {
       $(".celamus_a_rect_60").toggleClass("tall");
    });

    $(".celamus_m").on("click", function() {
       $(".celamus_m_rect_60").toggleClass("tall");
    });

    $(".celamus_u").on("click", function() {
       $(".celamus_u_rect_60").toggleClass("tall");
    });

    $(".celamus_s").on("click", function() {
       $(".celamus_s_rect_60").toggleClass("tall");
    });

    $(".to_t").on("click", function() {
       $(".to_t_rect_60").toggleClass("tall");
    });

    $(".to_o").on("click", function() {
       $(".to_o_rect_40_2").toggleClass("tall");
    });

    $(".hide_h").on("click", function() {
       $(".hide_h_rect_160_2").toggleClass("tall");
    });

    $(".hide_i").on("click", function() {
       $(".hide_i_rect_40_2").toggleClass("tall");
    });

    $(".hide_d").on("click", function() {
       $(".hide_d_rect_160_2").toggleClass("tall");
    });

    $(".hide_e").on("click", function() {
       $(".hide_e_rect_60").toggleClass("tall");
    });

    $(".back_3").on("click", function() {
       $(".ithink").toggleClass("hide");
       $(".therefore").toggleClass("hide");
       $(".isuffer").toggleClass("hide");
    });
    $(".back_2").on("click", function() {
       $(".colito").toggleClass("hide");
       $(".ergo").toggleClass("hide");
       $(".doleo").toggleClass("hide");
    });


    // $(document).ready(function(){
    //   var multiplier = 20;
    //   var container =  $('.container');
    //
    //   $('.horizontal_scrolling').endless({
    //     direction:'horizontal',
    //     scrollbar:'disable'
    //   });

    // $(document).ready(function(){
    //     $(".celamus_c").click(function(){
    //         $(".celamus_c_rect_40_H").toggle(".hide");
    //     });
    // });
