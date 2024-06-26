import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const NotificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Customer" source="customer" />
        <TextInput label="message" multiline source="message" />
        <BooleanInput label="sentStatus" source="sentStatus" />
      </SimpleForm>
    </Edit>
  );
};
