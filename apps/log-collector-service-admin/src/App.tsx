import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LogLevelList } from "./logLevel/LogLevelList";
import { LogLevelCreate } from "./logLevel/LogLevelCreate";
import { LogLevelEdit } from "./logLevel/LogLevelEdit";
import { LogLevelShow } from "./logLevel/LogLevelShow";
import { LogSourceList } from "./logSource/LogSourceList";
import { LogSourceCreate } from "./logSource/LogSourceCreate";
import { LogSourceEdit } from "./logSource/LogSourceEdit";
import { LogSourceShow } from "./logSource/LogSourceShow";
import { LogEntryList } from "./logEntry/LogEntryList";
import { LogEntryCreate } from "./logEntry/LogEntryCreate";
import { LogEntryEdit } from "./logEntry/LogEntryEdit";
import { LogEntryShow } from "./logEntry/LogEntryShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"LogCollectorService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="LogLevel"
          list={LogLevelList}
          edit={LogLevelEdit}
          create={LogLevelCreate}
          show={LogLevelShow}
        />
        <Resource
          name="LogSource"
          list={LogSourceList}
          edit={LogSourceEdit}
          create={LogSourceCreate}
          show={LogSourceShow}
        />
        <Resource
          name="LogEntry"
          list={LogEntryList}
          edit={LogEntryEdit}
          create={LogEntryCreate}
          show={LogEntryShow}
        />
      </Admin>
    </div>
  );
};

export default App;
