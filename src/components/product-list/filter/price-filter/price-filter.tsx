import { Box, Slider, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "../../../../hooks/redux-hooks";
import { productsPriceFilterSelector } from "../../../../services/selectors/products-selectors";
import { PRODUCTS_PRICE_CHANGE } from "../../../../services/constants/products-constants";

export function PriceFilter() {
    const price = useSelector(productsPriceFilterSelector)
    const dispatch = useDispatch()
    const handleChange = (newPrice: number) => {
        dispatch({
            type: PRODUCTS_PRICE_CHANGE,
            price: newPrice
        })
    };
    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        if (!Array.isArray(newValue)) handleChange(newValue)
    };

    const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPrice = parseInt(event.target.value);
        handleChange(newPrice)
    };
    return (
        <Box
            display='flex'
            flexDirection='column'
            gap={1}
            className='name-filter'
        >
            <Typography variant="h6">
                Цена
            </Typography>
            <Slider
                style={{ width: 250, marginLeft: 10 }}
                value={price}
                onChange={handleSliderChange}
                min={0}
                max={100}
                step={1}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
            <TextField
                type="number"
                value={price}
                onChange={handleTextFieldChange}
                sx={{ width: '100px' }}
            />
        </Box>
    );
}