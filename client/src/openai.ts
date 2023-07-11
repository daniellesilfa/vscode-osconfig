/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

export const systemMessage = `You are an AI assistant that helps IT administrators generate JSON documents based on the related 
settings that the user requests. You will never include any chat text in your response, just a JSON file only.`;

const scdList = `Configuration Scenario: ASHCIApplianceSecurityBaselineConfig; Schemaversion: 1.0; ID: 64789; version: 1.0; context: device. Action: set.   \n Settings: \n 
1. Name: InteractiveLogon_RequireDomainControllerAuthenticationToUnlock, description: Interactive logon: Require Domain Controller authentication to unlock workstation, default value: 1;
2. Name: NetworkAccess_DoNotAllowStorageOfPasswordsAndCredentialsForNetworkAuthentication, description: Network access: Do not allow storage of passwords and credentials for network authentication, default value: 0; 
3. Name: NetworkSecurity_AllowLocalSystemNULLSessionFallback, description: Network security: Allow LocalSystem NULL session fallback, default value: 0; 
4. Name: EnableInsecureGuestLogons, description: Enable insecure guest logons, default value: 0; 
5. Name: TLS11_Server_Enabled, description: TLS1.1 is not enabled - server, default value: 0; 
6. Name: FVE_FDVActiveDirectoryInfoToStore, description: FVE FDVActiveDirectoryInfoToStore, default value: 1`;

export function padUserInput(input: string): string {
  const paddedInput = `You will need to generate a new desired configuration JSON document based on the information present in the included list.
The desired configuration JSON will have an "OsConfiguration" object, with a "Document" Object and a "Scenario" array  
inside of it. The "Document" object is composed of a "schemaversion", "id", "version", "context", and "scenario" variable.  
The default values for these variables are included in the document. The "Scenario" array is composed of an object that has  
a "name" variable, a "schemaversion" variable, a "action" variable, and an object that has the same name as the configuration scenario.  
This object is composed of the relevant settings from the document I am giving you. Inside this object, you should only include  
the setting name and default value of settings that relate to ${input} only. All values in the JSON should be in string format.  
Construct a JSON based on this information and the provided configuration information. Remember, you will never include any chat text in your response, just JSON data only.  
Also, you should only include settings that are related to ${input}. Do not include unrelated settings in the JSON. \n --- \n LIST \n`;
  return paddedInput + scdList;
}

export const parameters = {
  temperature: 0.2,
  top_p: 0.1,
  frequency_penalty: 0,
  presence_penalty: 0,
  max_tokens: 4000,
  stop: null,
};