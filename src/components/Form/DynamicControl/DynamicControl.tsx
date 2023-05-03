import { FC } from 'react';

import { DynamicFieldData } from '~/commons/interfaces/dynamic-control';
import { Text, Number, Textarea, SingleSelect, MultipleSelect, Radior, Checkboxx } from './Fields';

const DynamicControl: FC<DynamicFieldData> = (fieldData) => {
    switch (fieldData.inputType) {
        case 'text':
            return <Text {...fieldData} />;
        case 'number':
            return <Number {...fieldData} />;
        case 'textarea':
            return <Textarea {...fieldData} />;
        case 'select':
            return <SingleSelect {...fieldData} />;
        case 'multiselect':
            return <MultipleSelect {...fieldData} />;
        case 'radio':
            return <Radior {...fieldData} />;
        case 'checkbox':
            return <Checkboxx {...fieldData} />;
        default:
            return <input type="text" />;
    }
};

export default DynamicControl;
