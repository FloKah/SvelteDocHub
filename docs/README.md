# 📚 SvelteDocHub

![Svelte](https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=orange)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MIT License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge&logo=opensourceinitiative&logoColor=white)

## ✨ Description

**1. **SvelteDocHub**** is a sleek application designed to load and render Markdown files from a `docs` directory. With a user-friendly interface built using Svelte, users can effortlessly navigate and read their documents. The project combines the power of Node.js for backend operations and Svelte's reactive components to provide a smooth experience.

## 🛠️ Features

- **📄 Markdown Support**: Efficiently loads and renders `.md` files.
- **⚡ Svelte Framework**: Fast and reactive UI with Svelte components.
- **🗂️ Dynamic Sidebar**: Automatically lists all available documentation files.
- **📱 Responsive Design**: Fully optimized for both desktop and mobile devices.

## 🚀 Installation

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Steps

1. **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2. **Install the dependencies**:

    ```bash
    npm install
    ```

3. **Run the development server**:

    ```bash
    npm run dev
    ```

4. **Open** [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## 🔧 Usage

### Development

Run the development server with live reloading:

```bash
npm run dev
```

### Production

Build the application for production:

```bash
npm run build
```

The optimized files will be in the `build` directory.

## 📂 Project Structure

Overview of the project directories and files:

```plaintext
/
├── docs/
│   ├── example1.md
│   ├── example2.md
│   └── ...
├── src/
│   ├── lib/
│   │   └── components/
│   │       └── +Sidebar.svelte
│   ├── routes/
│   │   └── +page.svelte
│   └── ...
├── package.json
└── ...
```

### Example `docs` Directory

Place your Markdown files in the `docs` directory for them to be listed in the sidebar.

Sample Markdown file (`example1.md`):

```markdown
# Documentation Title

Documentation content goes here...
```

## 🤝 Contributing

Contributions are highly appreciated! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make necessary changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

Please check out the [CONTRIBUTING.md](CONTRIBUTING.md) guidelines for more details.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### 📧 Contact

For any questions or additional information, feel free to contact the project maintainers or open an issue on GitHub.

---

Made with ❤️ using [Svelte](https://svelte.dev)