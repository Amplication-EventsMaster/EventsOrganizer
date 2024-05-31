import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FeedbackTitle } from "../feedback/FeedbackTitle";

export const ResponseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput
          source="feedback.id"
          reference="Feedback"
          label="Feedback"
        >
          <SelectInput optionText={FeedbackTitle} />
        </ReferenceInput>
        <TextInput label="Responder" source="responder" />
      </SimpleForm>
    </Edit>
  );
};
