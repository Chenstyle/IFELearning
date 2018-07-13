document.getElementById("say_hello").onclick = 
    function() {
        // 点按钮后弹出一个文字，你可以尝试改变文字内容
        alert("你好啊，欢迎来到百度前端技术学院");
    }

document.getElementById("change_title").onclick = 
    function() {
        // 点击改变标题内容
        document.getElementById("page_title").innerHTML = "Fuck you!!!!!!!";
    }