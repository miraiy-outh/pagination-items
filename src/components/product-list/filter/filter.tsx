import { Box, Card, CardContent, Typography } from '@mui/material'
import { PriceFilter } from './price-filter/price-filter'
import { BrandFilter } from './brand-filter/brand-filter'
import { NameFilter } from './name-filer/name-filter'
import { FilterButton } from './filter-button/filter-button';
import { useDispatch, useSelector } from '../../../hooks/redux-hooks';
import { buttonsSelector, resetSelector } from '../../../services/selectors/filter-buttons-selectors';
import { TButtonName } from '../../../services/reducers/filter-buttons-reducer';
import { BUTTON_CHANGE, RESET_CHANGE } from '../../../services/constants/filter-buttons-constants';
import { PRODUCTS_FILTERING_CHANGE } from '../../../services/constants/products-constants';

export function Filter() {
    const buttonsState = useSelector(buttonsSelector);
    const dispatch = useDispatch();

    const handleButtonClick = (buttonName: TButtonName) => {
        dispatch({
            type: PRODUCTS_FILTERING_CHANGE
        })

        dispatch({
            type: BUTTON_CHANGE,
            name: buttonName,

        })

        dispatch({
            type: RESET_CHANGE

        })
    };

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
                            isDisabled={!buttonsState.price}
                            onClick={handleButtonClick}
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
                            isDisabled={!buttonsState.brand}
                            onClick={handleButtonClick}
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
                            isDisabled={!buttonsState.name}
                            onClick={handleButtonClick}
                        />
                    </Box>
                </Box>
            </CardContent>
        </Card >
    )
}