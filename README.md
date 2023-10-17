# Harmonic UI 🎵

> Harmonize your development with the power of music.
>

**Harmonic UI** is a **React & Tailwind** **Component Library** created to showcase the **Harmonic Design Theory**. Taking inspiration from the universality and structure of music, as well as the principles of **Component Driven Development** and **Atomic Design**, this library demonstrates how musical elements can be translated into the realm of component design.

## Overview 📖

The **Harmonic Design Theory** uses musical analogies to describe and structure design systems. Similar to how music is composed of notes, chords, and progressions, our design system is built upon foundational elements such as **CDD** and **Atomic Design**, with a focus on **Tailwind** and **React**:

- **Notes**: Represented by atomic components like Buttons, Headings, Labels, and Checkboxes.
- **Chords**: Combinations of notes that come together to form a cohesive unit.
- **Progressions**: Client components that guide the user experience through sequences of chords.
- **Structures**: The overarching layouts and grids.
- **Dynamics**: Context Components like an `<AuthContextProvider/>`.
- **Compositions**: Complete pages or views such as a Home page or Settings page.
- **Suites**: Groups of Compositions, such as a Web App, Docs Site, or Marketing Site.

Harmonic UI serves an example to prove this theory, providing real-world examples and implementations of these concepts.

## Install 💿

```bash
npm install harmonic-ui
```

## Configure ⚙️

Harmonic UI has its own color system that supports 4 colors:

- Primary
- Complementary
- Warning
- Error

To use the built-in Harmonic UI color system with Tailwind, update your `tailwind.config.ts` file. Import the `withHarmony` function and export your configuration.

### This is a minimal example of how to use the default Harmonic-UI color theme:

```tsx
import { withHarmony } from 'harmonic-ui';
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
};
export default withHarmony({
  userConfig: config,
  // this is optional, add it if your node_modules directory is not
  // in the same path as your tailwind config.
  nodeModulesPath: '../../node_modules
});

```

### This in an example with custom colors:

```tsx
import { withHarmony } from 'harmonic-ui';
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f4f6f7',
          '100': '#e2e9eb',
          '200': '#c7d3da',
          '300': '#a1b4bf',
          '400': '#738d9d',
          '500': '#587182',
          '600': '#4b5f6f',
          '700': '#41505d',
          '800': '#3b454f',
          '900': '#343c45',
          '950': '#21272e',

        },
        'complementary': {
          '50': '#f0f8ff',
          '100': '#dff0ff',
          '200': '#9ed8ff',
          '300': '#79ccff',
          '400': '#32b3fe',
          '500': '#0799f0',
          '600': '#007acd',
          '700': '#0060a6',
          '800': '#035289',
          '900': '#094571',
          '950': '#062b4b',
        },
        'warning': {
          '50': '#fff9eb',
          '100': '#ffefc6',
          '200': '#ffe39e',
          '300': '#ffc54a',
          '400': '#ffad20',
          '500': '#f98a07',
          '600': '#dd6402',
          '700': '#b74306',
          '800': '#94330c',
          '900': '#7a2a0d',
          '950': '#461402',
        },
        'error': {
          '50': '#fef2f3',
          '100': '#fde6e7',
          '200': '#fbd0d5',
          '300': '#f7aab2',
          '400': '#f27a8a',
          '500': '#ea546c',
          '600': '#d5294d',
          '700': '#b31d3f',
          '800': '#961b3c',
          '900': '#811a39',
          '950': '#48091a',
        }
      }
    }
  },
  plugins: [],
};
export default withHarmony({
  userConfig: config,
});

```

## Use 🏗️

You can now use any component in the library like so:

```tsx
import {Button} from 'harmonic-ui';

<Button label="Click me!" />

```

### You can also pass color and style properties to the button:

```tsx
import {Button} from 'harmonic-ui';

<Button label="Click me!"
        buttonColor="complementary"
        buttonStyle="outline" />

```

### A Form Example using note and chord components:

```tsx
import {Button, TextInput} from 'harmonic-ui';
import {ComponentProps} from "react";

interface AuthFormProps extends ComponentProps<'form'>{
    buttonText: string;
    disabled: boolean;
    onFormSubmit: () => void;
}

const AuthForm = ({
    buttonText,
    onFormSubmit,
    disabled,
    ...props
}: AuthFormProps) => (
    <>
        <form className={'mt-5'}
              onSubmit={onFormSubmit}
              title={'auth-form'}
              {...props}
        >
            <div>
                <TextInput id="email"
                           label={'Email'}
                           type={'email'}
                           disabled={disabled} />
                <TextInput id="password"
                           label={'Password'}
                           type={'password'}
                           disabled={disabled} />
            </div>

            <div className={'my-10 text-center'}>
                <Button type={'submit'}
                        label={buttonText}
                        disabled={disabled} />
            </div>
        </form>
    </>
);

export default AuthForm;

```

## Contributing ✋

Please see the [CONTRIBUTE.md](https://www.notion.so/CONTRIBUTE.md) file