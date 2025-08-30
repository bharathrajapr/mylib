# MyLib

A simple TypeScript library with automated semantic versioning and publishing.

## Features

- User management functionality
- Utility functions
- Full TypeScript support
- Automated semantic versioning
- CI/CD with GitHub Actions

## Installation

```bash
npm install mylib
```

## Usage

```typescript
import { greet, add, UserManager } from 'mylib';

// Simple functions
console.log(greet('World')); // Hello, World!
console.log(add(2, 3)); // 5

// User management
const userManager = new UserManager();
userManager.addUser({ id: 1, name: 'John', email: 'john@example.com' });
const user = userManager.getUser(1);
console.log(user); // { id: 1, name: 'John', email: 'john@example.com' }
```

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Watch mode for development
npm run dev

# Type check
npm run typecheck
```

## Semantic Versioning

This project uses [semantic-release](https://github.com/semantic-release/semantic-release) for automated versioning and publishing.

### Commit Message Format

Use conventional commits:
- `feat:` - New features (minor version)
- `fix:` - Bug fixes (patch version)  
- `feat!:` or `BREAKING CHANGE:` - Breaking changes (major version)
- `docs:`, `style:`, `refactor:`, `test:`, `chore:` - No version change

## License

MIT