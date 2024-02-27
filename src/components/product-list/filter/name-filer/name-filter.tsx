import { Box, Typography, TextField } from '@mui/material';

export function NameFilter() {

    return (
        <Box
            display='flex'
            flexDirection='column'
            gap={1}
            className='name-filter'
        >
            <Typography variant="h6">
                Название товара
            </Typography>

            <TextField
                variant="outlined"
                type="search"
                fullWidth
            ></TextField>
        </Box>
    );
}
