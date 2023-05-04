import { DynamicFieldData } from '~/commons/interfaces/dynamic-control';

export const fields: DynamicFieldData[] = [
    {
        inputType: 'text',
        fieldName: 'name',
        label: 'Name',
        placeholder: 'Enter your name',
        defaultValue: '',
        icon: 'AccountCircle',
        range: {
            xs: 12,
            sm: 4,
        },
        config: {
            required: {
                value: true,
                message: 'is required!',
            }
        },
    },
    {
        inputType: 'text',
        fieldName: 'phone',
        label: 'Phone',
        placeholder: 'Enter your phone',
        defaultValue: '',
        icon: 'PhoneIphone',
        range: {
            xs: 12,
            sm: 4,
        },
        config: {
            required: {
                value: true,
                message: 'is required!',
            },
            pattern: {
                value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                message: 'is invalid!',
            },
        },
    },
    {
        inputType: 'text',
        fieldName: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        defaultValue: '',
        icon: 'Email',
        range: {
            xs: 12,
            sm: 4,
        },
        config: {
            required: {
                value: true,
                message: 'is required!',
            },
            pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'does not match email format',
            },
        },
    },
    {
        inputType: 'textarea',
        fieldName: 'information',
        label: 'Information',
        placeholder: 'Enter your information',
        defaultValue: '',
        range: {
            xs: 12,
            sm: 12,
        },
    },
    {
        inputType: 'select',
        fieldName: 'gender',
        label: 'Gender',
        defaultValue: '',
        range: {
            xs: 12,
            sm: 6,
        },
        selectOptions: [
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
        ],
        config: {
            required: {
                value: true,
                message: 'is required!',
            },
        },
    },
    {
        inputType: 'multiselect',
        fieldName: 'hobbies',
        label: 'Hobbies',
        defaultValue: [],
        range: {
            xs: 12,
            sm: 6,
        },
        selectOptions: [
            { value: 'football', label: 'Football' },
            { value: 'cycling', label: 'Cycling' },
            { value: 'kickboxing', label: 'Kickboxing' },
            { value: 'basketball', label: 'Basketball' },
        ],
        config: {
            required: {
                value: true,
                message: 'is required!',
            },
        },
    },
    {
        inputType: 'radio',
        fieldName: 'status',
        label: 'Status',
        defaultValue: true,
        range: {
            xs: 12,
            sm: 6,
        },
        radioOptions: [
            { value: true, label: 'Enabled' },
            { value: false, label: 'Disabled' },
        ],
    },
    {
        inputType: 'checkbox',
        fieldName: 'friends',
        label: 'Friends',
        defaultValue: [11, 33],
        range: {
            xs: 12,
            sm: 6,
        },
        radioOptions: [
            { value: 11, label: 'Bill' },
            { value: 22, label: 'Luo' },
            { value: 33, label: 'Doan' },
        ],
    },
    // Password
    // {
    //     inputType: 'password',
    //     fieldName: 'password',
    //     label: 'Password',
    //     placeholder: 'Enter your password',
    //     defaultValue: '',
    //     range: {
    //         xs: 12,
    //         sm: 6,
    //     },
    //     config: {
    //         required: {
    //             value: true,
    //             message: 'is required!',
    //         },
    //         minLength: {
    //             value: 8,
    //             message: 'should be at least 8 characters'
    //         }
    //     },
    // },
];
