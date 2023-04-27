import { ListingOptions } from "./listingInterfaces";

export interface ValidationTagInsertion {
    metaData?: object,
    isSuccessful?: boolean,
    parent?: object
}

export interface ValidationTagListingOptions extends ListingOptions {
    metaData?: object,
    testCase?: {
        id?: string
    },
    testSuite?: {
        id?: string
    }
    // TODO: Add fields for children (validation points) 
}