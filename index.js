console.log("로딩되었습니다.")

window.onload = () => {
    // 윈도우가 로딩되면 페이로드를 확인한다.
    const payload = localStorage.getItem("payload");
    const payload_parse = JSON.parse(payload)
    console.log(payload_parse.email) // 페이로드에서 이메일을 가져온다.

    const intro = document.getElementById("intro")
    // intro.innerText = payload_parse.email
    intro.innerText = `${payload_parse.email.split("@")[0]}님, `
    // intro.innerText = payload_parse.email.split("@")[0] + "님, 안녕하세요?"
    intro.setAttribute("class", 'me-1')


    let addMenu = document.getElementById("drop-menu")
    // li 이하 a 태그 만들기
    let newLi = document.createElement("a")
    newLi.setAttribute("class", 'dropdown-item')
    newLi.setAttribute("style", 'cursor:pointer')
    newLi.innerText = "로그아웃"
    newLi.setAttribute("onClick", 'handleLogout()')

    addMenu.appendChild(newLi)

    let loginBtn = document.getElementById("drop-login")
    loginBtn.style.display = "none"
}