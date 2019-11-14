import * as React from 'react';
import { InputBaseProps as MuiInputBaseProps } from '@material-ui/core/InputBase';
import { FieldProps } from 'formik';
export interface InputBaseProps extends FieldProps, Omit<MuiInputBaseProps, 'name' | 'onChange' | 'value'> {
}
export declare const fieldToInputBase: ({ field, form: { isSubmitting }, disabled, ...props }: InputBaseProps) => MuiInputBaseProps;
export declare const InputBase: React.ComponentType<InputBaseProps>;
