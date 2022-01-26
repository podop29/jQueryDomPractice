
$("#submit").on('click',(e)=>{
    e.preventDefault();
    let movieName = $('input').eq(0).val();
    let movieRate = $('input').eq(1).val();
    $('#movieList').append(`<li class='li'> Title:${movieName} Rating ${movieRate}/10</li>`)
    $('#movieList li').eq(-1).append('<button type="submit" class="remove">Remove</button>')
    $('input').eq(0).val('');
    $('input').eq(1).val('');
}) 


$('#movieList').on('click','.remove',(e)=>{
    e.preventDefault();
   e.target.closest('.li').remove()
})