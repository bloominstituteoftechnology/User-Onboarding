import * as React from 'react';
import { FormikContext } from './types';
export declare const FormikProvider: React.ProviderExoticComponent<React.ProviderProps<FormikContext<any>>>, FormikConsumer: React.ExoticComponent<React.ConsumerProps<FormikContext<any>>>;
export declare function connect<OuterProps, Values = {}>(Comp: React.ComponentType<OuterProps & {
    formik: FormikContext<Values>;
}>): React.ComponentType<OuterProps>;
