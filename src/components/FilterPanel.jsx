import {useDispatch, useSelector} from 'react-redux';
import {Badge} from 'UI/Badge';
import {Card} from 'UI/Card';
import {Stack} from 'UI/Stack';
import {selectFilter} from '../store/filters/filters-selectors';
import {clearFilter, removeFilter} from '../store/filters/filters-actions';


const FilterPanel = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector(selectFilter);

    if (currentFilter.length === 0) {
        return null;
    }

    return (
        <Card className="filter-panel">
            <div className="filter-panel-wrapper">
                <Stack>
                    {
                        currentFilter.map(filter => (
                            <Badge
                                key={filter}
                                variant="clearable"
                                onClear={() => dispatch(removeFilter(filter))}
                            >{filter}</Badge>
                        ))
                    }
                </Stack>

                <button className="link" onClick={() => dispatch(clearFilter())}>Clear</button>
            </div>
        </Card>
    )
}

export {FilterPanel};