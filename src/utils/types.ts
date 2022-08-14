export interface listType {
    date: string,
    category: string,
    type: string,
    month: string,
    title: string,
    value: string
}

export interface AppendType {
    addToList: (newItem: listType) => void,
    handleRE: (type: string, payload: string) => void,
    month: string
}

export interface rdbType {
    revenue: number,
    expense: number,
    balance: number,
}

export interface InfoType {
    rdb: rdbType,
    month: string,
    handleMonth: (type: string) => void;
}

export interface ShowType {
    list: Array<listType>,
    month: string
}

export interface newRdbParamType {
    type: string,
    value: string,
    month: string
}