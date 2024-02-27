import { useState } from 'react';
import { Select, MenuItem, FormControl, Box, Typography, SelectChangeEvent } from '@mui/material';

export function BrandFilter() {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof selectedOptions>) => {
        setSelectedOptions(typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value);
    };

    return (
        <Box
            display='flex'
            flexDirection='column'
            gap={1}
            className='brand-filter'
        >
            <Typography variant="h6">
                Бренды
            </Typography>
            <FormControl sx={{ width: 240 }}>
                <Select
                    labelId="multiple-select-label"
                    id="multiple-select"
                    multiple
                    value={selectedOptions}
                    onChange={handleChange}
                >
                    <MenuItem value="option1">Опция 1</MenuItem>
                    <MenuItem value="option2">Опция 2</MenuItem>
                    <MenuItem value="option3">Опция 3</MenuItem>
                    <MenuItem value="option4">Опция 1</MenuItem>
                    <MenuItem value="option5">Опция 2</MenuItem>
                    <MenuItem value="option6">Опция 3</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
