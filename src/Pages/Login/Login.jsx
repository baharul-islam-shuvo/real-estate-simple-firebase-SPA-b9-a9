import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {

    const { signIn, googleUser, gitHubUser } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        e.target.reset();

        signIn(email, password)
            .then(result => {
                const userLogged = (result.user);
                console.log(userLogged);
                // navigate after login
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider
        googleUser(googleProvider)
            .then(() => {
                navigate(location?.state ? location.state : '/');
            })
            .catch()
    }

    const handleGitHubSignIn = () => {
        const githubProvider = new GithubAuthProvider();
        gitHubUser(githubProvider)
            .then(() => {
                navigate(location?.state ? location.state : "/")
            })
            .catch()
    }


    return (
        <div className="hero mt-8 mb-8">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login Here</h1>
                </div>
                <div className="card p-6 bg-base-100 w-96 max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name="password" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-neutral">Login</button>
                            </div>
                            <div className="flex text-3xl justify-center gap-4 mt-4">
                                <Link onClick={handleGoogleSignIn} className="hover:scale-110 duration-700"><FcGoogle></FcGoogle></Link>
                                <Link onClick={handleGitHubSignIn} className="hover:scale-110 duration-700"><FaGithub></FaGithub></Link>
                            </div>
                        </div>
                    </form>

                    <div className="text-sm">
                        If you do not have an account please, <Link to="/register" className="text-primary">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;