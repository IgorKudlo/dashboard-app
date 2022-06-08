import {useDispatch, useSelector} from 'react-redux';
import {JobPosition} from './JobPosition';
import {selectAllPositions} from '../store/positions/position-selectors';
import {addFilter} from '../store/filters/filters-actions';

const JobList = () => {
    const dispatch = useDispatch();
    const positions = useSelector(selectAllPositions);

    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter));
    };

    return (
        <div className="job-list">
            {positions.map(item => (
                <JobPosition
                    key={item.id}
                    handleAddFilter={handleAddFilter}
                    {...item}
                />
            ))}
        </div>
    )
}

export {JobList};