export interface IMrzData {
    value: string;
    image: string;
    ios?: any;
    android?: any;
}

export type MrzCallback = (data: IMrzData) => void;
