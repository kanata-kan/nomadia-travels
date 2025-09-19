# 📝 Git Feature Branch Workflow Checklist

This document provides a **step-by-step workflow** for working with Git feature branches.  
It ensures code consistency, clean collaboration, and safe merging into `main`.

---

## 🔹 1. Create a New Feature Branch

1. Make sure you are on `main` and up-to-date:

```bash
   git checkout main
   git pull origin main
   Create a new feature branch:
```

```bash
git checkout -b feature/your-feature-name
```

Example:

```bash
git checkout -b feature/navbar-setup
```

🔹 2. Work on the Branch
Edit your code and add new files.

Stage your changes:

```bash
git add .
```

Commit your changes:

```bash
git commit -m "Short description of changes"
```

Push the new branch to GitHub:

```bash
git push origin feature/navbar-setup
```

🔹 3. Open a Pull Request (PR)
Go to GitHub → you’ll see Compare & Pull Request.

Write a clear description of what you changed and why.

Click Create Pull Request.

🔹 4. Merge into main
Review the PR changes in GitHub.

If everything is correct → click Merge Pull Request.

Optionally, delete the branch from GitHub (recommended for cleanliness).

🔹 5. Sync Local main
Switch back to main locally:

```bash
git checkout main
```

Pull the latest changes:

```bash
git pull origin main
```

📌 Best Practices
Never work directly on main.

Always use feature branches.

Use clear names for branches and commits:

Branches: feature/login-form, fix/api-error

Commits: "feat: add login form" / "fix: handle API error"

Every finished feature → PR → Merge → Pull.

✅ Following this workflow keeps the project organized, scalable, and team-friendly.
