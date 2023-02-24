const frontend_base_url = "http://127.0.0.1:5500"
const backend_base_url = "http://127.0.0.1:8000"



async function handleSignup() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    console.log(email, password)

    const response = await fetch(`${backend_base_url}/users/signup/`, {
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })

    return response

}

async function handleLogin() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const response = await fetch(`${backend_base_url}/users/api/token/`, {
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })


    if (response.status === 200) {
        const response_json = await response.json()
        // 성공(200) or 실패
        console.log(response)
        // 토큰값 (refresh와 access)
        console.log(response_json)
    
        localStorage.setItem("access", response_json.access);
        localStorage.setItem("refresh", response_json.refresh);
    
        const base64Url = response_json.access.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        localStorage.setItem("payload", jsonPayload);
        alert("환영합니다!")
        window.location.replace(`${frontend_base_url}/`)
    } else {
        alert("회원정보가 일치하지 않습니다.")
    }
}


async function handleMock() {
    const response = await fetch(`${backend_base_url}/users/mock/`, {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("access")
        },
        method: 'GET',
    })

    console.log(response)
}


function chat() {
    window.location.replace(`${backend_base_url}/chat`)
}


function handleLogout() {
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
    localStorage.removeItem("payload")
    alert("로그아웃 되었습니다!")
    location.reload()

    
}


function showPw() {
    var pw = document.getElementById("password")
    if (pw.type === "password") {
        pw.type = "text";
    } else {
        pw.type = "password"
    }

    var pw2 = document.getElementById("password-check")
    if (pw2.type === "password") {
        pw2.type = "text";
    } else {
        pw2.type = "password"
    }
}

