import * as React from 'react';
import * as PropTypes from 'prop-types';
import { GoogleLocationResult, GoogleLocationDetailResult } from './services/Google.service';
export declare const initialState: {
    inputValue: string;
    locationResults: never[];
    isSearching: boolean;
};
export interface DefaultProps {
    minLength: number;
    debounce: number;
}
export declare type P = Partial<{
    children: RenderCallback;
    render: RenderCallback;
    components: string;
    radius: string;
} & DefaultProps> & {
    /**
     * Api Key provided by google
     */
    apiKey: string;
};
export declare type RenderCallback = (args: GoogleAutoCompleteProps) => JSX.Element;
export declare type GoogleAutoCompleteProps = {
    inputValue: S['inputValue'];
    locationResults: S['locationResults'];
    handleTextChange: (value: string) => void;
    handleEventChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fetchDetails: (placeId: string) => Promise<GoogleLocationDetailResult>;
    clearSearchs: () => void;
    isSearching: boolean;
};
export declare type S = Readonly<{
    inputValue: string;
    locationResults: GoogleLocationResult[];
    isSearching: boolean;
}>;
export declare class GoogleAutoComplete extends React.PureComponent<P, S> {
    static readonly defaultProps: DefaultProps;
    static propTypes: {
        /**
         * Minimun length before sending a search request default 2
         */
        minLength: PropTypes.Requireable<number>;
        /**
         * Time for debouncing the search default 300
         */
        debounce: PropTypes.Requireable<number>;
        /**
         * Your api key
         */
        apiKey: PropTypes.Validator<string>;
        /**
         * A grouping of places to which you would like to restrict your results
         */
        components: PropTypes.Requireable<string>;
        /**
         * The distance (in meters) within which to return place results.
         * Note that setting a radius biases results to the indicated area,
         * but may not fully restrict results to the specified area.
         */
        radius: PropTypes.Requireable<string>;
    };
    readonly state: S;
    /**
     * Keep track if the component isMounted or not
     */
    private _isMounted;
    /**
     * Search to google automplete service
     */
    private _search;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element | null;
    private _clearSearchs;
    /**
     * Handle the input change for react-native
     */
    private _handleTextChange;
    /**
     * Handle the input change for react web
     */
    private _handleEventChange;
    /**
     * Handle the search details when provide the place_id
     */
    private _searchDetails;
}
