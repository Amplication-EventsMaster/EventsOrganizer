import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Customer" source="customer" />
        <TextInput label="message" multiline source="message" />
        <BooleanInput label="sentStatus" source="sentStatus" />
      </SimpleForm>
    </Create>
  );
};
