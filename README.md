<a name="readme-top"></a>

<div align="center">

<h1 align="center">DevTaskManager</h1>

<br>

# Welcome to the DevTaskManager repository

---

<div align="center">

[![CI Status][ci-shield]][ci-link]
[![Project Type][type-shield]][type-link]
[![.NET][dotnet-shield]][dotnet-link]
[![Vite][vite-shield]][vite-link]

</div>

[ci-shield]: https://github.com/YagoBorba/DevTaskManager/actions/workflows/ci.yml/badge.svg?branch=main
[ci-link]: https://github.com/YagoBorba/DevTaskManager/actions/workflows/ci.yml
[type-shield]: https://img.shields.io/badge/Project-Chrome%20Extension%20%2B%20API-0A66C2?style=flat-square&labelColor=black
[type-link]: https://github.com/YagoBorba/DevTaskManager
[dotnet-shield]: https://img.shields.io/badge/.NET-8.0-512BD4?style=flat-square&logo=dotnet&labelColor=black
[dotnet-link]: https://dotnet.microsoft.com/
[vite-shield]: https://img.shields.io/badge/Vite-4.x-646CFF?style=flat-square&logo=vite&labelColor=black
[vite-link]: https://vitejs.dev/

</br>

</div>

## ❤️ About the Project

> [!IMPORTANT]
> DevTaskManager is a browser extension focused on project and task management for developers, backed by a REST API in ASP.NET Core.

The project combines a Chrome extension frontend (React + Vite + CRXJS) with a .NET 8 backend (Entity Framework Core + SQLite). The main objective is to provide a practical workflow to create projects, manage tasks, and track task status directly from the browser.

## ✨ What Can DevTaskManager Do?

- 📁 **Project Management:**
    Create, list, update, and delete projects through dedicated API endpoints.

- ✅ **Task Management by Project:**
    Create, list, update, and delete tasks inside each project with support for status and description.

- 🔌 **Browser Extension Experience:**
    Run the UI as a Chrome extension (Manifest V3), integrating task management into your browsing flow.

- 🌐 **REST API with Swagger:**
    Explore and test endpoints via Swagger UI in development.

- 🔄 **Integrated Dev Workflow:**
    Run frontend and backend together with a single command at repository root.

## 🛠️ Under the Hood (Main Technologies)

- **[ASP.NET Core 8](https://learn.microsoft.com/aspnet/core):** Web API layer and application hosting.
- **[Entity Framework Core](https://learn.microsoft.com/ef/core):** Data access and migrations.
- **[SQLite](https://www.sqlite.org/index.html):** Lightweight local database.
- **[React 18](https://react.dev/):** Frontend UI components.
- **[Vite](https://vitejs.dev/):** Build tooling and development server.
- **[@crxjs/vite-plugin](https://github.com/crxjs/chrome-extension-tools):** Chrome extension support with Vite.
- **[Tailwind CSS](https://tailwindcss.com/):** Utility-first styling.

## 🚀 Getting Started

### Prerequisites

- **[Node.js](https://nodejs.org/)** (recommended: version 18+)
- **npm** (comes with Node.js)
- **[.NET SDK 8.0](https://dotnet.microsoft.com/download)**

### 1. Clone the repository

```bash
git clone https://github.com/YagoBorba/DevTaskManager.git
cd DevTaskManager
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Restore backend dependencies

```bash
dotnet restore backend/DevTaskManager.csproj
```

### 4. Apply database migrations (optional)

The API applies pending migrations on startup and creates `devtaskmanager.db` in the working directory. To apply them manually:

```bash
dotnet ef database update --project backend/DevTaskManager.csproj
```

### 5. Start development environment

```bash
npm run dev
```

This command starts:

- Frontend/extension dev server: **http://localhost:5173**
- Backend API: **http://localhost:5146**

Swagger (development): **http://localhost:5146/swagger**

## 🧪 Available Scripts

At repository root (`package.json`):

- `npm run frontend` - starts Vite.
- `npm run backend` - starts ASP.NET Core API (`backend/DevTaskManager.csproj`).
- `npm run dev` - runs frontend and backend concurrently.
- `npm run build` - TypeScript build + Vite production build.
- `npm run lint` - linting for frontend code.
- `npm run preview` - previews frontend production build.

## 📦 API Endpoints

### Projects

- `GET /api/projects` - list all projects.
- `GET /api/projects/{id}` - get project by ID.
- `POST /api/projects` - create project.
- `PUT /api/projects/{id}` - update project.
- `DELETE /api/projects/{id}` - delete project.

### Tasks (within project)

- `GET /api/projects/{projectId}/tasks` - list tasks from a project.
- `GET /api/projects/{projectId}/tasks/{taskId}` - get task by ID.
- `POST /api/projects/{projectId}/tasks` - create task in project.
- `PUT /api/projects/{projectId}/tasks/{taskId}` - update task in project.
- `DELETE /api/projects/{projectId}/tasks/{taskId}` - delete task from project.

## 🧩 Project Structure

```text
backend/
    Application/
        DTOs/
        Services/
    Domain/
        Models/
    Infrastructure/
        Data/
            Migrations/
    Presentation/
        Controllers/
    Program.cs

frontend/
    src/
        pages/
        services/
        manifest.config.ts
```

## 🧭 Chrome Extension Notes

The extension uses Manifest V3 and requests permissions such as `tabs`, `storage`, `scripting`, `activeTab`, and `sidePanel`.

Configured host permissions include:

- `http://localhost:5146/*`
- `https://localhost:5146/*`
- `http://127.0.0.1:5146/*`
- `https://127.0.0.1:5146/*`

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create your feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

## 📝 License

Distributed under the [MIT License](LICENSE).

## 📬 Contact

- Email: yagoaborba@hotmail.com
- LinkedIn: https://www.linkedin.com/in/yagoborba/

---

<div align="right">
        <a href="#readme-top">Back to Top</a>
</div>
