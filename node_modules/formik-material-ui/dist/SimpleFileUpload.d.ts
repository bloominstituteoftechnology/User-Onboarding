/// <reference types="react" />
import { FieldProps } from 'formik';
import { InputLabelProps } from '@material-ui/core/InputLabel';
import { InputProps } from '@material-ui/core/Input';
export interface SimpleFileUploadProps extends FieldProps {
    label: string;
    disabled?: boolean;
    InputProps?: Omit<InputProps, 'name' | 'type' | 'onChange'>;
    InputLabelProps?: InputLabelProps;
}
export declare const SimpleFileUpload: ({ label, field, form: { touched, errors, isSubmitting, setFieldValue }, disabled, InputProps: inputProps, InputLabelProps: inputLabelProps, }: SimpleFileUploadProps) => JSX.Element;
