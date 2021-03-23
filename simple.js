$(document).on('submit','#loginForm',function(e){
    e.preventDefault();
    username = $('input[name="txtUserName"]').val();
    password = $('input[name="txtPassword"]').val();
    if(username == "admin" && password == "admin") {
        location.href("success.html")
    } else {
        alert("Đăng nhập thất bại");
    }
})