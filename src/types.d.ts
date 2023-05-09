export interface Sub
{
    nick: string
    avatar: string
    submonths: number
    description?: string
}

export type SubActions = {
        payload: {
            inputName: string,
            inputValue: string
        },
        type: 'change',
} | {
    type: 'clear',
}

export interface SubApi
{
    nick: string
    profileUrl: string
    months: number
    description?: string
}