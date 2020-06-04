// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { AppConfig } from '../app/app.config';

export const environment = Object.assign({}, AppConfig, {
  // Override or Add keys to the config
  production: false,
  stage: true,


  test: 'http://localhost:8080/hello',
  donate: 'http://localhost:3000/api/donate',
  auth: 'http://localhost:3000/api/authenticate',
  postCampaign: 'http://localhost:3000/api/postcampaign',
  getCampaigns: 'http://localhost:3000/api/getallcampaings'

});
