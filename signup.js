async function handleSignupButton() {
    const response = await handleSignup();
    
    // 회원가입에 성공한 경우
    if (response.status === 201) {
        alert("가입을 축하드립니다!")
        window.location.replace(`${frontend_base_url}/login.html`)
    }

    // 아이디와 비밀번호
    console.log(response)
    console.log(typeof response.status)

}