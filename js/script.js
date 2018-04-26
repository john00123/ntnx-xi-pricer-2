const selection = [small, medium, large, custom, blank];

$(document).ready(function(){
  $('.col').html(selection[4]);

  $('#continue').click(()=> {
    if($('input:checked').val() == 0){$('.col').html(selection[0]+payment)}
    if($('input:checked').val() == 1){$('.col').html(selection[1])}
    if($('input:checked').val() == 2){$('.col').html(selection[2])}
    if($('input:checked').val() == 3){$('.col').html(selection[3])}
    actions();
  });
});

function actions(){
  $('.edit').click(()=> $('body').append(()=>CreatePopup(0,0,0)));
  $('.manage').click(()=> $('body').append(()=>CreatePopup(1,1,1)));
}
