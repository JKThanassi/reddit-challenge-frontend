/**
 * An interface specifying the api contract for the /sub endpoints json response
 */
export interface PostResponse {
    externalURL: string,
    isLinkPost: boolean,
    redditLink: string,
    score: number,
    submitter: string,
    title: string
}

/**
 * An Enum representing the valid time values for a reddit top query
 */
export enum TopType {
    HOUR = "hour",
    DAY = "day",
    MONTH = "month",
    YEAR = "year",
    ALL = "all"
}
