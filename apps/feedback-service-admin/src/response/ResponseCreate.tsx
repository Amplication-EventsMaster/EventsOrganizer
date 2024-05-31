import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FeedbackTitle } from "../feedback/FeedbackTitle";

export const ResponseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
