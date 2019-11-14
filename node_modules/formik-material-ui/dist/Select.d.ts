import * as React from 'react';
import { SelectProps as MuiSelectProps } from '@material-ui/core/Select';
import { FieldProps } from 'formik';
export interface SelectProps extends FieldProps, Omit<MuiSelectProps, 'value'> {
}
export declare const fieldToSelect: ({ field, form: { isSubmitting, setFieldValue }, disabled, ...props }: SelectProps) => MuiSelectProps;
export declare const Select: React.ComponentType<SelectProps>;
