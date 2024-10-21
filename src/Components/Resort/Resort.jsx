import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Resort = ({ resort }) => {
    const { id, image, estate_title, price, segment_name, location } = resort;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl flex flex-col">
            <figure>
                <img
                    className='w-[384px] h-[269px]'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{estate_title}</h2>
                <div className='mb-3  flex-grow'>
                    <p className='text-lg font-bold mb-3'>Segment: {segment_name}</p>
                    <p className='font-bold'>Location: {location}</p>
                    <p className='font-bold text-xl'>{price}</p>
                </div>
                <Link to={`/${id}`}>
                    <div className="card-actions justify-end">
                        <button className="btn btn-neutral">View Resort</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

Resort.propTypes = {
    resort: PropTypes.object,
}

export default Resort;