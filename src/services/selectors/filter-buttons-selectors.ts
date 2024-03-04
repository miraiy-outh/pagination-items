import { RootState } from "../store";

export function buttonsSelector(state: RootState) {
    return state.buttonsData.buttons;
}

export function resetSelector(state: RootState) {
    return state.buttonsData.isReset;
}