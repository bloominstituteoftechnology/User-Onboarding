import * as React from 'react';
import { TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField';
import { FieldProps } from 'formik';
export declare type TextFieldProps = FieldProps & Omit<MuiTextFieldProps, 'error' | 'name' | 'onChange' | 'value'> & {
    variant: 'standard' | 'filled' | 'outlined' | undefined;
};
export declare const fieldToTextField: ({ field, form, disabled, ...props }: TextFieldProps) => MuiTextFieldProps;
export declare const TextField: React.ComponentType<TextFieldProps>;
