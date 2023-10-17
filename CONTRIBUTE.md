# Contributing to Harmonic UI

## Getting Started 🆕

### **Clone the Repository**

To begin, clone the repository by running the following command in your terminal:

```bash
git clone git@github.com:cassina/harmonic-ui.git
```

### **Install Dependencies**

Next, install the project dependencies.

```bash
cd harmonic-ui
npm install
```

### Build the project

```bash
git fetch origin
git checkout [your new branch]
```

```bash
npm run build
```

### Test

To run in watch mode:

```bash
npm run test
```

To trigger a single run:

```bash
npm run test:ci
```

## Development Workflow 👩‍💻

- The default branch is `development`, and pull requests should be targeted to this branch.
- Create a new branch from the assigned issue.
- Checkout the new branch.
- We use `vitest` and `@testing-library/react` to test the project.
  - TDD Flow:
    - Create a failing test:

        ```tsx
          it('should render correctly with the given label', () => {
            const { getByText } = render(<Button buttonColor="primary" buttonStyle="filled" label="Test Label" />);
            expect(getByText('Test Label')).toBeDefined();
          });
        ```
      - Then fix your implementation so the tests pass.

### Developing with Storybook

After starting Storybook, you can make changes to the code and save the files. If you make changes to the styles or classes, run the following commands to see the changes in the UI:

```bash
npm run storybook
npm run build:css
```

### Link to a local project

To create an `npm` link to your local `harmonic-ui`, execute the following command in the root directory:

```bash
npm link
```

If you already have an app where you want to test components, execute the following command in your app's root directory:

```bash
npm link harmonic-ui
```

Alternatively, you can create a new app with Next.js by following these steps:

```bash
npx create-next-app@latest
cd my-app
npm link harmonic-ui
```
