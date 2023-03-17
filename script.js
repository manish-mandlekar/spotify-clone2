var mmj = document.querySelector('#mmj');
var pl = document.querySelector('#pl')
var st = document.querySelector('#st')
var bc = document.querySelector('.bc')
var tc = document.querySelector('.tc')
var second = document.querySelector('#second')
var wkb = document.querySelector('#wkb')
var simg = document.querySelector('#simg')
var ij = document.querySelector('#ij')
var third = document.querySelector('#third')
var ac = document.querySelector('.ac')
var fourth = document.querySelector('#fourth')
var sc = document.querySelector('.sc')
var sdga = document.querySelector('#sdga')
var fifth = document.querySelector('#fifth')
var rc = document.querySelector('.rc')
var rd = document.querySelector('#rd')



st.addEventListener('click',function(details){
    simg.innerHTML= `<img src="${'https://imgs.search.brave.com/kA6L_uc_Dd33PyHxk0rhmz6BBiBsGgeO5hIm7LNTvb8/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly93d3cu/bHlyaWNzYm9naWUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzEwL21hYW4t/bWVyaS1qYWFuLWx5/cmljcy5qcGc'}" alt="">`
    if(mmj.paused){
        mmj.play();
        bc.classList.remove('ri-play-circle-line')
        bc.classList.add('ri-pause-circle-line')
    }else{
        mmj.pause();
        bc.classList.remove('ri-pause-circle-line')
        bc.classList.add('ri-play-circle-line')
    }
})

second.addEventListener('click',function(details){
   simg.innerHTML = `<img src="${'https://imgs.search.brave.com/KMTiUCnygEJdjoK0GWwshq_CTd1hWxRdpyC_FDxTryc/rs:fit:720:404:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS9E/X3FqbUh2RDhtOC9o/cTcyMC5qcGc_c3Fw/PS1vYXltd0VYQ05B/RkVKUURTRnJ5cTRx/cEF3a0lBUlVBQUlo/Q0dBRT0mcnM9QU9u/NENMRFFkUTFnUTYx/Qk1BX093V3pZemxx/NUx0Y1I1UQ'}" alt="">`
   if(wkb.paused){
    wkb.play();
    tc.classList.remove('ri-play-circle-line')
    tc.classList.add('ri-pause-circle-line')

   }else{
    wkb.pause();
    tc.classList.remove('ri-pause-circle-line')
    tc.classList.add('ri-play-circle-line')
   }
})




third.addEventListener('click',function(details){
    simg.innerHTML = `<img src="${'https://imgs.search.brave.com/VznWD8ftVwmZNJArW05y9eP7ypW3_nZ5XU9q0JqIs_k/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS8x/NVdqRG5SbFRBRS9t/YXhyZXNkZWZhdWx0/LmpwZw'}" alt="">`
    if(ij.paused){
        ij.play();
        ac.classList.remove('ri-play-circle-line')
        ac.classList.add('ri-pause-circle-line')
    }else{
        ij.pause();
        ac.classList.add('ri-play-circle-line')
        ac.classList.remove('ri-pause-circle-line')

    }
})


fourth.addEventListener('click',function(details){
    simg.innerHTML=`<img src="${'https://imgs.search.brave.com/5MXuoa3RjLIXNDIKAD0uPFIGpEKhrGgJH9xwyWtxESY/rs:fit:1200:675:1/g:ce/aHR0cHM6Ly9tZWRp/YS5seXJpY3NtaW50/LmNvbS9waG90b3Mv/MTI1MjMvc2hlLWRv/bnRfY292ZXIuanBn'}" alt="">`
    if(sdga.paused){
        sdga.play();
        sc.classList.add('ri-pause-circle-line')
        sc.classList.remove('ri-play-circle-line')
    }else{
        sdga.pause();
        sc.classList.add('ri-play-circle-line')
        sc.classList.remove('ri-pause-circle-line')

    }
})
fifth.addEventListener('click',function(details){
    simg.innerHTML=`<img src="${'https://imgs.search.brave.com/jQwIzjTBTkkA6KOyPmc8vfOPS4O8MWP8WxpS5O1NhJQ/rs:fit:780:470:1/g:ce/aHR0cHM6Ly93b2x5/cmljcy5jb20vd3At/Y29udGVudC91cGxv/YWRzL1J1Ymljb24t/RHJpbGwtTHlyaWNz/LUhhcm1hbi1CcmFy/LVBhcm1pc2gtVmVy/bWEtV28tTHlyaWNz/LTc4MHg0NzAuanBn'}" alt="">`
    if(rd.paused){
        rd.play();
        rc.classList.add('ri-pause-circle-line')
        rc.classList.remove('ri-play-circle-line')
    }else{
        rd.pause();
        rc.classList.add('ri-play-circle-line')
        rc.classList.remove('ri-pause-circle-line')

    }
})