import { FC } from 'react';
import Note from '~/components/Note';

interface SubmissionFormProps {}

const SubmissionForm: FC<SubmissionFormProps> = () => {
    return <Note noteType="danger">Chưa có gì cả. Bấm vô chi cho mắc công 🤪🤪🤪</Note>;
};

export default SubmissionForm;
