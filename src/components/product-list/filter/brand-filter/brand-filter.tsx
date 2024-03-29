import { Select, MenuItem, FormControl, Box, Typography, SelectChangeEvent } from '@mui/material';
import { useDispatch, useSelector } from '../../../../hooks/redux-hooks';
import { productsBrandFilterSelector, productsBrandsSelector } from '../../../../services/selectors/products-selectors';
import { PRODUCTS_BRAND_FILTER_CHANGE } from '../../../../services/constants/products-constants';

export function BrandFilter() {
    const brands = useSelector(productsBrandsSelector)
    const brandFilter = useSelector(productsBrandFilterSelector)
    const dispatch = useDispatch()

    const handleChange = (event: SelectChangeEvent<typeof brandFilter>) => {
        const currentBrands = event.target.value
        if (!Array.isArray(currentBrands)) {
            dispatch({
                type: PRODUCTS_BRAND_FILTER_CHANGE,
                brand: currentBrands
            })
        }
    };

    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='flex-start'
            gap={2}
            className='brand-filter'
        >
            <Typography variant="h6">
                Бренды
            </Typography>
            <FormControl sx={{ width: 240 }}>
                <Select
                    labelId="single-select-label"
                    id="single-select"
                    value={brandFilter}
                    onChange={handleChange}
                >
                    {brands.map((brand) => {
                        return (
                            <MenuItem
                                key={`${brand}`}
                                value={`${brand}`}
                            >{brand}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}
