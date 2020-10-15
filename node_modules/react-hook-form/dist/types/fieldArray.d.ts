import { Control } from './form';
import { FieldValues } from './fields';
export declare type FieldArrayName = string;
export declare type UseFieldArrayOptions<TKeyName extends string = 'id', TControl extends Control = Control> = {
    name: FieldArrayName;
    keyName?: TKeyName;
    control?: TControl;
};
export declare type ArrayField<TFieldArrayValues extends FieldValues = FieldValues, TKeyName extends string = 'id'> = TFieldArrayValues & Record<TKeyName, string>;
