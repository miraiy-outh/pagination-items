import { Box, Slider, TextField, Typography } from "@mui/material";
import { useState } from "react";

export function PriceFilter() {
    const [value, setValue] = useState<number[]>([0, 100]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setValue(newValue);
        }
    };

    const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((prev) => {
            const maxValue = prev[1]
            return [parseInt(event.target.value), maxValue]
        })
    };

    const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((prev) => {
            const minValue = prev[0]
            return [minValue, parseInt(event.target.value)]
        })
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
                value={value}
                onChange={handleChange}
                min={0}
                max={100}
                step={1}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
            <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
            >
                <TextField
                    type="number"
                    value={value[0]}
                    onChange={handleMinPriceChange}
                    sx={{ width: '100px' }}
                />
                <TextField
                    type="number"
                    value={value[1]}
                    onChange={handleMaxPriceChange}
                    sx={{ width: '100px' }}
                />
            </Box>

        </Box>
    );
}