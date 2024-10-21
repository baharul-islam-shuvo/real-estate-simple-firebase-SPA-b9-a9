import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ResortDetails = () => {

    const resortDetails = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const resort = resortDetails.find(resort => resort.id === idInt);
    const { estate_title, segment_name, description, price, area, location, facilities, image } = resort;

    // toast
    const notify = () => toast("You've Successfully Checked In");

    return (
        <div className="p-5 rounded-xl mx-auto sm:p-10 md:p-16 bg-transparent  text-gray-100 dark:text-gray-800">
            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <img src={image} alt="" className="w-full rounded h-60 sm:h-96 bg-gray-500 dark:bg-gray-500" />
                <div className="p-3 pb-8 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-600 dark:bg-gray-300">
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{estate_title}</a>
                        <p className="text-xs text-gray-400 dark:text-gray-600">
                            <a rel="noopener noreferrer" href="#" className="text-sm hover:underline">{location}</a>
                        </p>
                    </div>
                    <div className="text-gray-100 dark:text-gray-800">
                        <p>{description}</p>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">{price}</p>
                        <p className="text-sm">{area}</p>
                        <p className="text-sm">{segment_name} Suite</p>
                    </div>
                    <div className="flex space-x-2">
                        {
                            facilities.map((facility, idx) => <li key={idx}>{facility}</li>)
                        }
                    </div>
                    <div className="flex justify-end">
                        <ToastContainer />
                        <button onClick={notify} className="btn btn-neutral">Check In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResortDetails;