const selection = [small, medium, large, custom, blank];

$(document).ready(function(){
  $('.col').html(selection[4]);
  $('.year-price').hide();
  $('#continue').click(()=> {
    $('#final-price').text('$ 200,000');
    $('.year-price').fadeIn('fast');
    $('#sidebar').append('<hr> <button class="primary fw">Share Report</button>');
    if($('input:checked').val() == 0){$('.col').html(selection[0]+payment)}
    if($('input:checked').val() == 1){$('.col').html(selection[0]+payment)}
    if($('input:checked').val() == 2){$('.col').html(selection[0]+payment)}
    if($('input:checked').val() == 3){$('.col').html(selection[0]+payment)}
    actions();
  });
  $('#continue').click();
});

function actions(){
  $('.edit').click(()=> $('body').append(()=>CreatePopup(0,0,0)));
  $('.manage').click(()=> $('body').append(()=>CreatePopup(1,1,1)));
  $('.vms').click(()=> $('body').append(()=>CreatePopup(2,2,2)));
}
