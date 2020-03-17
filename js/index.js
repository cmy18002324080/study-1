(function () {
    //input获得失去焦点
    lose();
    function lose() {
        var inputNode = document.querySelector("#serch [type='text']");
        console.log(inputNode)
        inputNode.addEventListener("touchstart", function (event) {
            inputNode.focus()
            event.stopPropagation();
        })
        document.addEventListener("touchstart", function () {
            inputNode.blur()
            event.stopPropagation()
        })
    }
    //遮罩层
    changemask();
    function changemask() {
        var menuBtn=document.getElementById('menubtn');
        var mask=document.getElementById('mask');
        menuBtn.addEventListener('touchstart',function (event) {
            if (menuBtn.className=='menuBtn_close'){
                console.log(1)
                menuBtn.className='menuBtn_open';
                console.log(12)
                mask.style.display='block';
            } else if(menuBtn.className=='menuBtn_open'){
                menuBtn.className='menuBtn_close';
                mask.style.display='none';
            }
            //阻止冒泡
            event.stopPropagation();
        });
        document.addEventListener("touchstart",function () {
            if(menuBtn.className=='menuBtn_open'){
                menuBtn.className='menuBtn_close';
                mask.style.display='none';
            }
        })
        mask.addEventListener("touchstart",function (event) {
            event.stopPropagation()
        })
    }
})