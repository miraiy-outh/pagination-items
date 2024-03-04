import { Box, Typography, TextField } from '@mui/material';
import { useDispatch, useSelector } from '../../../../hooks/redux-hooks';
import { productsNameFilterSelector } from '../../../../services/selectors/products-selectors';
import { PRODUCTS_NAME_FILTER_CHANGE } from '../../../../services/constants/products-constants';

export function NameFilter() {
    const name = useSelector(productsNameFilterSelector);
    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value;
        dispatch({
            type: PRODUCTS_NAME_FILTER_CHANGE,
            name: newName
        })
    }

    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='flex-start'
            gap={2}
            className='name-filter'
        >
            <Typography variant="h6">
                Название товара
            </Typography>

            <TextField
                value={name}
                onChange={handleChange}
                variant="outlined"
                type="search"
                fullWidth
            ></TextField>
        </Box>
    );
}
