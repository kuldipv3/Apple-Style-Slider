$(document).ready(function(){
    console.log("asdasd");
    var totalWidth = 0;
    var positions = new Array();
    
    $('#slides .slide').each(function(i){
        positions[i] = totalWidth;
        totalWidth+=$(this).width();
        if(!$(this).width()){
            alert('Please add width to images');
            return false;
        }
    })
    
    $('#slides').width(totalWidth);
    
    $('#menu ul li a').click(function(e,keepScroll){
        $('li.product').removeClass('active').addClass('inactive');
        $(this).parent().addClass('active');
        var pos = $(this).parent().prevAll('.product').length;
        $('#slides').stop().animate({marginLeft:-positions[pos]+'px'},450);
        
        e.preventDefault();
        
        //stopping autoscroll
        if(!autoScroll) clearInterval(itval);
        
    })
    //make first image active
    $('#menu ul li .product:first').addClass('active').siblings().addClass('inactive');
    
    //autoscroll
    var current = 1;
    function autoScroll(){
        if(current == -1){
            return false;
        }
        $('#menu ul li a').eq(current%$('#menu ul li').length).trigger('click',[true]);
        current++;
    }
    
    //duration for autoscroll
    var duration = 5;
    var itval = setInterval(function(){autoScroll()},duration*1000);
});