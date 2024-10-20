import { useLoaderData } from "react-router-dom";
import Resort from "../Resort/Resort";

const Resorts = () => {

    const allResorts = useLoaderData();

    return (
        <div>
            <div>
                <h2 className="text-4xl font-bold flex justify-center my-20">This is Heading For Resort Part</h2>
            </div>
            <div className="flex justify-center items-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {
                        allResorts.map(resort => <Resort key={resort.id} resort={resort}></Resort>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Resorts;