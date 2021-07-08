/*global $*/
let count_ms = 0;
let count_sec = 0;
let count_min = 0;
let count_hr = 0;
let countUpReturn_ms;
let countUpReturn_sec;
let countUpReturn_min;
let countUpReturn_hr;


$(document).ready(function(){
  $(".start").click(function(){
    /* 不活性化 */
    $(this).prop('disabled', true);
    $(".stop").prop('disabled', false);
    $(".reset").prop('disabled', false);
    
    /* 透過 */
    $(this).addClass("opacity");
    $(".stop").removeClass("opacity");
    $(".reset").removeClass("opacity");
    
    /* カウントアップ */
    const countUp_ms = function(){
      count_ms ++;
      if(count_ms >= 10) {
        count_ms = 0;
      }
      $(".timer-ms").text(count_ms);
    };
    const countUp_sec = function(){
      count_sec ++;
      if(count_sec >= 60) {
        count_sec = 0;
      }
      $(".timer-sec").text(count_sec);
    };
    const countUp_min = function(){
      count_min ++;
      if(count_min >= 60) {
        count_min = 0;
      }
      $(".timer-min").text(count_min);
    };
    const countUp_hr = function(){
      count_hr ++;
      if(count_hr >= 99) {
        count_hr = 0;
      }
      $(".timer-hr").text(count_hr);
    };
    
    countUpReturn_ms = setInterval(countUp_ms, 100);
    countUpReturn_sec = setInterval(countUp_sec, 1000);
    countUpReturn_min = setInterval(countUp_min, 60000);
    countUpReturn_hr = setInterval(countUp_hr, 3600000);
    
  });
  
  $(".stop").click(function(){
    /* 不活性化 */
    $(".start").prop('disabled', false);
    $(this).prop('disabled', true);
    $(".reset").prop('disabled', false);
    
    /* 透過 */
    $(".start").removeClass("opacity");
    $(this).addClass("opacity");
    $(".reset").removeClass("opacity");
    
    /* カウントストップ */
    clearInterval(countUpReturn_ms);
    clearInterval(countUpReturn_sec);
    clearInterval(countUpReturn_min);
    clearInterval(countUpReturn_hr);
    
  });
  
  $(".reset").click(function(){
    /* 不活性化 */
    $(".start").prop('disabled', false);
    $(".stop").prop('disabled', true);
    $(this).prop('disabled', true);
    
    /* 透過 */
    $(".start").removeClass("opacity");
    $(".stop").addClass("opacity");
    $(this).addClass("opacity");
    
    /* カウントストップ */
    clearInterval(countUpReturn_ms);
    clearInterval(countUpReturn_sec);
    clearInterval(countUpReturn_min);
    clearInterval(countUpReturn_hr);
    
    /* カウントリセット */
    count_ms = 0;
    count_sec = 0;
    count_min = 0;
    count_hr = 0;
    $(".timer-ms").text(count_ms);
    $(".timer-sec").text(count_sec);
    $(".timer-min").text(count_min);
    $(".timer-hr").text(count_hr);
    
    
  });
  
  
});