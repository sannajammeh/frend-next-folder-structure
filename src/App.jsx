import { Tree } from '@geist-ui/core';

const app = {
  type: 'directory',
  name: 'app',
  files: [{ name: 'page.tsx' }, {name: "page.module.css"}],
};

const bloks = {
  type: "directory",
  name: "bloks",
  files: [{name: "index.ts", type: "file"}]
}

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
    {
      name: "icons", type: "directory"
    },
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
      type: "directory",
      name: "PLP",
      files: [{
        name: "PLPContainer.tsx",
        type: "file"
      }]
    },
    {
      type: "directory",
      name: "products",
      extra: "product category features",
      files: [{
        name: "ProductCard",
        type: "directory",
        files: [
          {name: "ProductCard.tsx", type: "file", extra: "Imports from UI lib"}
        ]
      }]
    },
    
  ],
};

const files = [
  {
    type: 'directory',
    name: 'src',
    files: [app, components, bloks, features, hooks, lib, styles],
  },
];

export default function App() {
  return (
    <div style={{ padding: '1rem' }}>
      <Tree value={files} initialExpand />
    </div>
  );
}
