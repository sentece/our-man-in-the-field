import Config from '../Config/Config';

export const GET_GIGS = 'omitf/gigs/LOAD';
export const GET_GIGS_SUCCESS = 'omitf/gigs/LOAD_SUCCESS';
export const GET_GIGS_FAIL = 'omitf/gigs/LOAD_FAIL';

export default function reducer(state = { gigs: [] }, action) {
    switch (action.type) {
        case GET_GIGS:
            return {
                ...state,
                loading: true
            };
        case GET_GIGS_SUCCESS:
            return {
                ...state,
                loading: false,
                gigs: action.payload.data.gigs
            };

        case GET_GIGS_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Error while fetching repositories'
            };
        default:
            return state;
    }
}

export function GetGigs() {
    return {
        type: GET_GIGS,
        payload: {
            request: {
                url: `${Config.ApiRoot}gigs.json`
            }
        }
    };
}