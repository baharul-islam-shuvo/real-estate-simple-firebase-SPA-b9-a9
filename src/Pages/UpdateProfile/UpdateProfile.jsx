import { useContext, useState } from "react";
import auth from "../../Firebase/firebase.config";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Providers/AuthProviders";


const UpdateProfile = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(true)

    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [email, setEmail] = useState('');

    const handleUpdateProfile = () => {

        updateProfile(auth.currentUser, {
            displayName: displayName,
            email: email,
            photoURL: photoURL
        }).then(() => {
            setLoading(false)

        }).catch(error => {
            console.error('Error updating profile:', error.message);
        });
    };

    return (

        <div className="hero mt-10 mb-10 mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="flex flex-col justify-center items-center gap-4">
                    <img className="w-[240px]" src={user.photoURL} alt="" />
                    <h1 className="text-2xl font-semibold">Name: {user.displayName}</h1>
                    <p className="text-lg font-medium">{user.email}</p>
                </div>

                <div className="w-full border-l-2 mx-auto">

                    <div className="">
                        <h1 className="text-5xl font-bold ml-10">Update Profile</h1>
                    </div>

                    <div>
                        <form onSubmit={handleUpdateProfile} className="flex flex-col rounded-xl px-4 md:px-12 py-16 relative">

                            <label className="text-lg px-2 py-1 mt-2" htmlFor="name">Name</label>
                            <input
                                className="bg-slate-100 px-6 py-3 focus:ring-1"
                                onChange={(e) => setDisplayName(e.target.value)}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                required
                            />

                            <label className="text-lg px-2 py-1 mt-2" htmlFor="email">Email</label>


                            <input
                                className="bg-slate-100 px-6 py-3 focus:ring-1"
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                required
                            />

                            <label className="text-lg px-2 py-1 mt-2" htmlFor="photo">Photo URL</label>
                            <input
                                className="bg-slate-100 px-6 py-3 focus:ring-1"
                                onChange={(e) => setPhotoURL(e.target.value)}
                                type="text"
                                name="photo"
                                id="photo"
                                placeholder="Enter photo url"
                                required
                            />

                            <div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-neutral">Update Profile</button>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default UpdateProfile;