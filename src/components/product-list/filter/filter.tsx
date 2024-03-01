import { Box, Card, CardContent, Typography } from '@mui/material'
import { PriceFilter } from './price-filter/price-filter'
import { BrandFilter } from './brand-filter/brand-filter'
import { NameFilter } from './name-filer/name-filter'
import { FilterButton } from './filter-button/filter-button';
import { useState } from 'react';

type TButtonState = {
    price: boolean;
    brand: boolean;
    name: boolean;
}

export type TButtonName = 'price' | 'brand' | 'name'

export function Filter() {
    const [buttonsState, setButtonsState] = useState<TButtonState>({
        price: false,
        brand: false,
        name: false
    });

    const handleButtonClick = (buttonName: TButtonName) => {
        setButtonsState(prevState => ({
            ...prevState,
            [buttonName]: !prevState[buttonName]
        }));
        setIsReset(prevIsReset => !prevIsReset);
    };

    const [isReset, setIsReset] = useState(false);

    return (
        <Card
            className='filter'
            sx={{ minWidth: 300 }}
        >
            <CardContent>
                <Typography
                    marginBottom={3}
                    variant="h5"
                    color='text.primary'
                >Фильтр</Typography>
                <Box
                    display='flex'
                    flexDirection='column'
                    gap={4}
                >
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='flex-start'
                        gap={2}
                    >
                        <PriceFilter></PriceFilter>
                        <FilterButton
                            buttonName="price"
                            isDisabled={buttonsState.brand || buttonsState.name}
                            onClick={handleButtonClick}
                            isReset={isReset}
                        />
                    </Box>

                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='flex-start'
                        gap={2}
                    >
                        <BrandFilter></BrandFilter>
                        <FilterButton
                            buttonName="brand"
                            isDisabled={buttonsState.price || buttonsState.name}
                            onClick={handleButtonClick}
                            isReset={isReset}
                        />
                    </Box>

                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='flex-start'
                        gap={2}
                    >
                        <NameFilter></NameFilter>
                        <FilterButton
                            buttonName="name"
                            isDisabled={buttonsState.price || buttonsState.brand}
                            onClick={handleButtonClick}
                            isReset={isReset}
                        />
                    </Box>
                </Box>
            </CardContent>
        </Card >
    )
}