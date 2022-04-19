import { IConfigurationActions } from "./iconfiguration-actions";

export interface IConfigurationAccounts {
  configurationName : string;
  value : string;
  actions : IConfigurationActions
}
