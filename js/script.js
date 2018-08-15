const selection = [small, medium, large, custom, blank];

$(document).ready(function(){
  $('.col').html(selection[4]);
  $('.year-price').hide();
  $('#continue').click(()=> {
    $('#final-price').text('$200,000');
    $('#subfinal-price').text('$230,000 subtotal');
    $('.year-price').fadeIn('fast');
    $('#sidebar').append('<hr> <button class="primary fw">Download PDF</button>');
    if($('input:checked').val() == 0){$('.col').html(selection[0]+payment)}
    if($('input:checked').val() == 1){$('.col').html(selection[0]+payment)}
    if($('input:checked').val() == 2){$('.col').html(selection[0]+payment)}
    if($('input:checked').val() == 3){$('.col').html(selection[0]+payment)}
    actions();
  });

  //testing
  $('#policy-name').text('Gold');
  $('#policy-description').html(gold);
});

function protection(){
  $("#myRange").change(function(){
    if ($("#myRange").val() == 0){
      $('#policy-name').text('Silver');
      $('#policy-description').html(silver);
    }
    if ($("#myRange").val() == 50){
      $('#policy-name').text('Gold');
      $('#policy-description').html(gold);
    }
    if ($("#myRange").val() == 100){
      $('#policy-name').text('Diamond');
      $('#policy-description').html(diamond);
    }
  });
}


function actions(){
  $('.edit').click(()=> {
    $('body').append(()=>CreatePopup(0,0,0));
    protection();
  });
  $('.manage').click(()=> $('body').append(()=>CreatePopup(1,1,1)));
  $('.vms').click(()=> $('body').append(()=>CreatePopup(2,2,2)));
}
