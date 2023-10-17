# Contributing to Harmonic UI

## Getting Started 🆕

### **Clone the Repository**

```bash
git clone git@github.com:cassina/harmonic-ui.git
```

### **Install Dependencies**

```bash
cd harmonic-ui
npm install
```

### Build the project

```bash
npm run build
```

## Development Workflow 👩‍💻

- Our default branch is `development` and pull requests should be targeted to this branch
- Create a new branch from the issue you have assigned
- Checkout the new branch:

    ```bash
    git fetch origin
    git checkout [your new branch]
    ```


### Developing with Storybook

After you start storybook, you can make changes to the code and save the files, if you make changes to the styles or classes run the following to see the changes in the UI:

```bash
npm run storybook
npm run build:css
```

### Link to a local project

To create an `npm` link to your local `harmonic-ui`, run the following in the root directory:

```bash
npm link
```

If you already have an app where you want to test components, run the following in your app’s root directory:

```bash
npm link harmonic-ui
```

Or You can create a new app with next.js with:

```bash
npx create-next-app@latest
cd my-app
npm link harmonic-ui
```