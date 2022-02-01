(function(){
    'use strict'
    var $like = document.getElementById('like');
    var $follow = document.getElementById('follow');
    var $sLike = document.getElementById('soma');
    var $sFollow = document.getElementById('soma2');

    $like.addEventListener('mousedown', clicando)
    $like.addEventListener('mouseup', clicado)

    $follow.addEventListener('mousedown', clicando)
    $follow.addEventListener('mouseup', clicado)

    $like.addEventListener('click', function(){
        parseInt($sLike.textContent) + 1;
        return $sLike.innerHTML = parseInt($sLike.textContent) + 1;
    })
    $follow.addEventListener('click', function(){
        parseInt($sFollow.textContent) + 1;
        return $sFollow.innerHTML = parseInt($sFollow.textContent) + 1;
    });

    function clicando(){
        if(this === $like){
            $like.classList.toggle('fundo');
        }else{
            $follow.classList.toggle('fundo');
        };
    };
    function clicado(){
        if(this === $like){
            $like.classList.remove('fundo');
        }else{
            $follow.classList.remove('fundo');
        };
    };

})();