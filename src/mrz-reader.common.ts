export interface IMrzData {
    value: string;
    ios?: any;
    android?: any;
}

export type MrzCallback = (data: IMrzData) => void;
