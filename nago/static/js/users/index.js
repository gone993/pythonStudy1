

function validationCheck() {
	var name = $("#name");
    var email = $("#email");
    var username = $("#username");
    var password = $("#password");
    var confirm = $("#confirm");

    if(name.val() == '') { alert("아이디를 입력하세요!"); return; }
    if(email.val() == '') { alert("이메일을 입력학세요!"); return; }
    if(username.val() == '') { alert("이름을 입력학세요!"); return; }
    if(password.val() == '') { alert("비밀번호를 입력하세요!"); return; }

    if(name.val().length > 20 ) { alert("아이디 넘김"); return;}
    if(username.val().length > 20 ) { alert("이름이 넘김"); return;}

    var regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
    if (!regExp.test(email.val())){ alert("올바른 이메일 형식이 아님~"); return; }

    var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
    if(!reg_pwd.test($.trim(password.val()))){
        alert('비밀번호를 확인하세요.₩n(영문,숫자를 혼합하여 6~20자 이내)');
        return;
    }

    if (password.val() != confirm.val()) { alert("비번 확인 다시점"); return; }

    return true;

}
$(document).ready( function () {
 console.log("xx");});