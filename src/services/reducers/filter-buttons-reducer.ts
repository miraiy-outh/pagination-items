import { BUTTON_CHANGE, RESET_CHANGE } from "../constants/filter-buttons-constants";

type TButtonState = {
    price: boolean;
    brand: boolean;
    name: boolean;
}

export type TButtonName = 'price' | 'brand' | 'name'

type TButtonsState = {
    buttons: TButtonState,
    isReset: boolean
}

type TButtonsChangeAction = {
    type: typeof BUTTON_CHANGE,
    name: TButtonName
}


type TResetChangeAction = {
    type: typeof RESET_CHANGE
}

type TButtonsActions = TButtonsChangeAction | TResetChangeAction

const defaultState: TButtonsState = {
    buttons: {
        price: true,
        brand: true,
        name: true
    },
    isReset: true
}

export function filterButtonsReducer(state = defaultState, action: TButtonsActions): TButtonsState {
    switch (action.type) {
        case BUTTON_CHANGE: {
            const updatedButtons = Object.entries(state.buttons).map(([button, value]) => {
                return {
                    [button]: button === action.name ? value : !value
                };
            }).reduce((acc, curr) => ({ ...acc, ...curr }), {});
            return {
                ...state,
                buttons: updatedButtons as TButtonState
            }
        }

        case RESET_CHANGE: {
            return {
                ...state,
                isReset: !state.isReset
            }
        }

        default:
            return state
    }
}
