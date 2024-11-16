import useSWR, { SWRConfiguration } from 'swr'

export const SWR = (
    key: string,
    fetcher: () => any,
    SWROptions?: SWRConfiguration,
) => {
    return useSWR(key, fetcher, SWROptions)
}
