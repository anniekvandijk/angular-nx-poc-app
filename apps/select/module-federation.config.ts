import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'select',
  exposes: {
    './Routes': 'apps/select/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
