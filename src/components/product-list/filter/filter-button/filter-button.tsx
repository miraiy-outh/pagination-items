import { Button } from "@mui/material";
import { TButtonName } from "../filter";

export function FilterButton({ buttonName, isDisabled, isReset, onClick }: {
    buttonName: TButtonName,
    isDisabled: boolean,
    isReset: boolean,
    onClick: (buttonName: TButtonName) => void
}) {
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
            {isReset && !isDisabled ? 'Сбросить' : 'Применить'}
        </Button>
    );
}