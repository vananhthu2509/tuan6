var Arr = [
    {
        id: 1,
        User_Name: "Thuy",
        Password: "bethuy123"
    },
    {
        id: 2,
        User_Name: "Hong",
        Password: "hong123"
    },
    {
        id: 3,
        User_Name: "Binh",
        Password: "binh123"
    },
    {
        id: 4,
        User_Name: "Thu",
        Password: "thu123"
    },
    {
        id: 5,
        User_Name: "Cuong",
        Password: "cuong123"
    },
    {
        id: 6,
        User_Name: "Tho",
        Password: "tho123"
    },
    {
        id: 7,
        User_Name: "Anh",
        Password: "anh123"
    },
]

function Login(User_Name, Password) {
    console.log(User_Name,Password)
    var result = true;
    for(i = 0; i < Arr.length; i++){
        if(User_Name == Arr[i].User_Name){
            if(Password == Arr[i].Password){
                result =  true
                break
            }else{
                result = false
                continue
            } 
        }else{
            result = false
            continue
            
        }
    }
    if(result == true){
        document.write("<b>Trang Chính</b>");
    }else{
        alert("Tên người dùng hoặc mật khẩu không chính xác!")
    }
}
function Clear(){
    document.getElementById("User_Name").value = ''
    document.getElementById("Password").value = ''
}