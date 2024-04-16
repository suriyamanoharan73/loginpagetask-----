import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login(props) {
    const navigate = useNavigate();
    const [eusername, setEusername] = useState(); // Initialize as null
    const [epassword, setEpassword] = useState(); // Initialize as null
    const [ruser, setRuser] = useState(true);
    const users = props.users;

    function handleUinput(event) {
        setEusername(event.target.value);
    }

    function handlePinput(event) {
        setEpassword(event.target.value);
    }

    function checkuser() {
        var userfound = false;
        users.forEach(function(item) {
            if (item.username === eusername && item.password === epassword) {
                console.log("Login successful");
                userfound = true;
                navigate("/landing", {
                    state: {
                        user: eusername
                    }
                });
            }
        });
        if (!userfound) {
            console.log("Login Failed");
            setRuser(false);
        }
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium ">Hey Hi</h1>

                {ruser ? (
                    <p>I help you manage your activities after you login :)</p>
                ) : (
                    <p className="text-red-700 ">'Please sign up before your login'</p>
                )}

                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="username"
                        onChange={handleUinput}
                    />
                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="password"
                        onChange={handlePinput}
                    />

                    <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={checkuser}>
                        Login
                    </button>
                    <p>
                        Don't have an account ?{" "}
                        <Link to={"/Signup"} className="underline">
                            Signup
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
