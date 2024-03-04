import { Button } from "@mui/material";
import { TButtonName } from "../../../../services/reducers/filter-buttons-reducer";
import { resetSelector } from "../../../../services/selectors/filter-buttons-selectors";
import { useSelector } from "../../../../hooks/redux-hooks";

type TFilterButton = {
    buttonName: TButtonName,
    isDisabled: boolean,
    onClick: (buttonName: TButtonName) => void
}

export function FilterButton({ buttonName, isDisabled, onClick }: TFilterButton) {
    const isReset = useSelector(resetSelector);

    const handleClick = () => {
        onClick(buttonName);
    }

    return (
        <Button
            variant='outlined'
            size='small'
            className={`filter-button ${buttonName}-button`}
            disabled={isDisabled}
            onClick={handleClick}
        >
            {!isReset && !isDisabled ? 'Сбросить' : 'Применить'}
        </Button>
    );
}