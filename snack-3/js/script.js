console.log('hello world')
$(document).ready(
    function(){
        $('div.testo-scompare').mouseenter(function(){
            $('h1.testo-scompare').hide()
        });
        $('div.testo-scompare').mouseleave(function(){
            $('h1.testo-scompare').show()
        });

        $('.secondo-testo').hover(function() {
            $( this ).fadeOut( 1000 );
           
          },function(){ $( this ).fadeIn( 5000 );})
          
        $( ".terzo-testo" ).hover(
            function() {
              $( this ).append( $( "<span> ***</span>" ) );
              $(this).addClass('green')
            }, function() {
              $( this ).find( "span" ).last().remove();
              $(this).removeClass('green')
            }
          );

    }   
    

)