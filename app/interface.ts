import { SetStateAction } from "react";

export interface agify{
    count:number;
    name:string;
    age:number;
}

export interface genderize {
    count:number;
    name:string;
    gender:string;
    probability:number;
}

export interface nationalize {
    count:number;
    name:string;
    country:Icountry[];
}

export interface Icountry {
    country_id:string;
    probability:number;
}

export interface IResult { 
    age: number | null, 
    gender: string | null, 
    country: string | null 
}

export interface IForm {
    handleSubmit:(e: any) => Promise<void>;
    updateName:(value: SetStateAction<string>) => void;
    name:string;
}
