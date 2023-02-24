async function injectNavbar() {

    // navbar... fetch api 사용
    fetch("./navbar.html").then(response=>{
        return response.text()
    })
        .then(data => {
            document.querySelector("header").innerHTML = data;
        })

    // async function 썼기 때문에 then 대신에 html 불러오는 걸
    let navbarHtml = await fetch("./navbar.html")
    // return값에 text를 해주고 그것을 다시 data에 넣어준 것을 text로 전환한다.
    let data = await navbarHtml.text()
    
    document.querySelector("header").innerHTML = data;


    // 유저 id 뜨게 하려면 payload를 갖고 온다.
    const payload = localStorage.getItem("payload");
    // 민약 페이로드가 있다면
    if (payload) {
        const payload_parse = JSON.parse(payload)
        console.log(payload_parse.email) // 페이로드에서 이메일을 가져온다.
    
        const intro = document.getElementById("intro")
        // intro.innerText = payload_parse.email
        intro.innerText = `${payload_parse.email.split("@")[0]}님, `
        // intro.innerText = payload_parse.email.split("@")[0] + "님, 안녕하세요?"
        intro.setAttribute("class", 'me-1')

        let loginBtn2 = document.getElementById("drop-login")
        loginBtn2.style.display = "none";

        let addMenu = document.getElementById("drop-menu")
        // li 이하 a 태그 만들기
        let newLi = document.createElement("a")
        newLi.setAttribute("class", 'dropdown-item')
        newLi.innerText = "로그아웃"
        newLi.setAttribute("onClick", 'handleLogout()')
    
        addMenu.appendChild(newLi)
    } else {
        if ( window.location.pathname == '/login.html' ) {
            let loginBtn = document.getElementById("drop-login")
            loginBtn.style.display = "none";

            let addMenu = document.getElementById("drop-menu")
            // li 이하 a 태그 만들기
            let newSignup = document.createElement("a")
            newSignup.setAttribute("class", 'dropdown-item')
            newSignup.innerText = "회원가입"
            newSignup.setAttribute("href", '/signup.html')
        
            addMenu.appendChild(newSignup);
        } 

}}

// 실행
injectNavbar();

// window.onload = () => {

    // let addMenu2 = document.getElementById("drop-menu")
    // // li 이하 a 태그 만들기
    // let newSignup = document.createElement("a")
    // newSignup.setAttribute("class", 'dropdown-item')
    // newSignup.innerText = "회원가입"
    // newSignup.setAttribute("href", '/signup.html')

    // addMenu2.appendChild(newSignup);

    // let loginBtn = document.getElementById("drop-login")
    // loginBtn.style.display = "none";




// };


// injectFooter();


// console.log("로딩되었습니다.")

// window.onload = () => {
//     // 윈도우가 로딩되면 페이로드를 확인한다.
//     const payload = localStorage.getItem("payload");
//     const payload_parse = JSON.parse(payload)
//     console.log(payload_parse.email) // 페이로드에서 이메일을 가져온다.

//     const intro = document.getElementById("intro")
//     // intro.innerText = payload_parse.email
//     intro.innerText = `${payload_parse.email.split("@")[0]}님, `
//     // intro.innerText = payload_parse.email.split("@")[0] + "님, 안녕하세요?"
//     intro.setAttribute("class", 'me-1')


//     let addMenu = document.getElementById("drop-menu")
//     // li 이하 a 태그 만들기
//     let newLi = document.createElement("a")
//     newLi.setAttribute("class", 'dropdown-item')
//     newLi.innerText = "로그아웃"
//     newLi.setAttribute("onClick", 'handleLogout()')

//     addMenu.appendChild(newLi)
// }