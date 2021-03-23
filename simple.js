$(document).on('submit','#loginForm',function(e){
    e.preventDefault();
    username = $('input[name="txtUserName"]').val();
    password = $('input[name="txtPassword"]').val();
    if(username == "admin" && password == "admin") {
        alert("Đăng nhập thành công");
    } else {
        alert("Đăng nhập thất bại");
    }
})