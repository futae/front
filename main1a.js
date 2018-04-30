
function naviToggleFunc(){
    var toggleBtn = document.getElementById('naviToggle');
    var naviView = document.getElementById('naviList');
    var toggleBtnClass = document.getElementsByClassName('naviToggleButton');

    if(toggleBtnClass == 'naviToggleButton close'){
        toggleBtn.classList.remove('close');
        naviView.classList.remove('close');

        console.log(toggleBtn);
        toggleBtn.classList.add('open');
        naviView.classList.add('open');

    }else{
        toggleBtn.classList.remove('open');
        naviView.classList.remove('open');

        toggleBtn.classList.add('close');
        naviView.classList.add('close');
    }
}
var aa = 2;
console.log(aa);