import { Tree } from '@geist-ui/core';

const app = {
  type: 'directory',
  name: 'app',
  files: [{ name: 'page.tsx' }, {name: "page.module.css"}],
};

const components = {
  type: 'directory',
  name: 'components',
  files: [
    { name: 'ui', type: 'directory', extra: 'UI Library', files: [
      {
        type: "directory",
        name: "Button",
      },
      {
        type: "directory",
        name: "Accordion",
        files: [
          {
            type: "file",
            name: "AccordionPrimitives.tsx",
            extra: "prefer no interactivity"
          },
          {
            type: "file",
            name: "Accordion.tsx",
            extra: "Wrapper component"
          },
          {
            type: "file",
            name: "index.ts",
            extra: "Exports both AccordionPrimitives & Accordion"
          }
        ]
      },
      
    ] },
    { name: 'Providers.tsx', type: 'file' },
  ],
};

const hooks = {
  type: 'directory',
  name: 'hooks',
  extra: 'General hooks',
};
const lib = {
  type: 'directory',
  name: 'lib',
  extra: 'centra, storyblok...',
};
const styles = {
  type: 'directory',
  name: 'styles',
  extra: 'global css/themes',
};

const features = {
  type: 'directory',
  name: 'features',
  files: [
    {
      type: 'directory',
      name: 'Auth',
      files: [
        { type: 'file', name: 'AuthContext.tsx' },
        { type: 'file', name: 'LoginForm.tsx' },
      ],
    },
    {
      type: 'directory',
      name: 'Layout',
      files: [
        {
          type: 'file',
          name: 'layout.module.css',
        },
        {
          type: 'file',
          name: 'Header.tsx',
        },
      ],
    },
    {
      type: 'directory',
      name: 'Showroom',
      files: [
        {
          type: 'file',
          name: 'styles.module.css',
        },
        {
          type: 'file',
          name: 'actions.ts',
          extra: 'Server actions only',
        },
        {
          type: 'file',
          name: 'hooks.ts',
          extra: "feature's hooks",
        },
        {
          type: 'file',
          name: 'ShowroomDashboard.tsx',
        },
        {
          type: 'directory',
          name: 'NestedFeature',
        },
      ],
    },
  ],
};

const files = [
  {
    type: 'directory',
    name: 'src',
    files: [app, components, features, hooks, lib, styles],
  },
];

export default function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <Tree value={files} initialExpand />
    </div>
  );
}
