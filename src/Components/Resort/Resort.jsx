import PropTypes from 'prop-types';
const Resort = ({ resort }) => {
    const { image, estate_title, description, price, segment_name, status, location, facilities } = resort;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    className='w-[384px] h-[269px]'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{estate_title}</h2>
                <div className='mb-3'>
                    <p className='text-lg font-bold mb-3'>Segment: {segment_name}</p>
                    <p className='font-semibold mb-2'>{description}</p>
                    <p className='font-bold'>Location: {location}</p>
                    <p className='font-semibold'>Status: {status}</p>
                    <p className='font-bold text-xl'>{price}</p>
                </div>
                <div className='text-violet-300'>
                    {
                        facilities.map(facility => <li key={facility}>{facility}</li>)
                    }
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-glass">View Resort</button>
                </div>
            </div>
        </div>
    );
};

Resort.propTypes = {
    resort: PropTypes.object,
}

export default Resort;