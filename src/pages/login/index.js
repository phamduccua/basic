import * as request from '../../service/login';

function Login() {
    const handleOnClick = async () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            const rs = await request.login({ username, password });
            const token = rs.token; 
            console.log("Token received:", token); // chắc chắn có token
            console.log("Role:", rs.role)

            const expires = new Date();
            expires.setDate(expires.getDate() + 7);
            document.cookie = `token=${token};path=/;expires=${expires.toUTCString()};SameSite=None;Secure`;
            console.log("Token saved in cookie successfully");
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <div>
            <input id="username" type="text" />
            <input id="password" type="password" />
            <button onClick={handleOnClick}>Login</button>
        </div>
    );
}

export default Login;
