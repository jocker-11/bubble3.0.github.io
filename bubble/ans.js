// callback func 不用加上括號，所以是 test 即可，並非 test()
document.getElementById("ans_submit").addEventListener("click", test);

function test(){
    // 請記得是要使用 document 這個 DOM 物件的 getElementById() 方法
    var x = document.getElementById("CommentText").value;
    var ans_1 = "#inclde<stdio.h>";

    if (x == ans_1){
        alert("答對了");
    }
    else{
        alert("再想想吧");
    }
}

