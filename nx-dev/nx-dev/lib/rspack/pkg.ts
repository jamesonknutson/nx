import { ProcessedPackageMetadata } from '@nx/nx-dev/models-package';

export const pkg: ProcessedPackageMetadata = {
   description: '',
   documents: {
      '/nx-api/rspack/documents/overview': {
         id: 'overview',
         name: 'Overview of the Nx Rspack plugin',
         description:
            'The Nx Plugin for Rspack contains executors and generators that support building applications using Rspack.',
         file: '',
         itemList: [],
         isExternal: false,
         path: '/nx-api/rspack/documents/overview',
         tags: [],
      },
      '/nx-api/rspack/documents/rspack-plugins': {
         id: 'rspack-plugins',
         name: 'Rspack plugins',
         description: 'Rspack plugins',
         file: '',
         itemList: [],
         isExternal: false,
         path: '/nx-api/rspack/documents/rspack-plugins',
         tags: [],
      },
      '/nx-api/rspack/documents/rspack-config-setup': {
         id: 'rspack-config-setup',
         name: ' How to configure Rspack on your Nx workspace',
         description:
            'A guide on how to configure rspack on your Nx workspace, and instructions on how to customize your rspack configuration.',
         file: '',
         itemList: [],
         isExternal: false,
         path: '/nx-api/rspack/documents/rspack-config-setup',
         tags: [],
      },
   },
   executors: {
      '/nx-api/rspack/executors/rspack': {
         description: 'Run rspack build.',
         file: 'generated/packages/rspack/executors/rspack.json',
         hidden: false,
         name: 'rspack',
         originalFilePath: '/nx-api/rspack/src/executors/rspack/schema.json',
         path: '/nx-api/rspack/executors/rspack',
         type: 'executor',
      },
      '/nx-api/rspack/executors/dev-server': {
         description: 'Serve a web application.',
         file: 'generated/packages/rspack/executors/dev-server.json',
         hidden: false,
         name: 'dev-server',
         originalFilePath:
            '/nx-api/rspack/src/executors/dev-server/schema.json',
         path: '/nx-api/rspack/executors/dev-server',
         type: 'executor',
      },
   },
   generators: {
      '/nx-api/rspack/generators/init': {
         description: 'Initialize the `@nx/rspack` plugin.',
         file: 'generated/packages/rspack/generators/init.json',
         hidden: false,
         name: 'init',
         originalFilePath: '/nx-api/rspack/src/generators/init/schema.json',
         path: '/nx-api/rspack/generators/init',
         type: 'generator',
      },
      '/nx-api/rspack/generators/configuration': {
         description: 'Add Rspack configuration to a project.',
         file: 'generated/packages/rspack/generators/configuration.json',
         hidden: false,
         name: 'configuration',
         originalFilePath:
            '/nx-api/rspack/src/generators/configuration/schema.json',
         path: '/nx-api/rspack/generators/configuration',
         type: 'generator',
      },
      '/nx-api/rspack/generators/application': {
         description: 'Add Rspack application to a project.',
         file: 'generated/packages/rspack/generators/application.json',
         hidden: false,
         name: 'application',
         originalFilePath:
            '/nx-api/rspack/src/generators/application/schema.json',
         path: '/nx-api/rspack/generators/application',
         type: 'generator',
      },
   },
   githubRoot: 'https://github.com/nrwl/nx-labs/tree/main/packages/rspack',
   name: 'rspack',
   packageName: '@nx/rspack',
   path: '',
   root: '',
   source: '',
};
