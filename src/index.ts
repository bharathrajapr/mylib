export interface User {
  id: number;
  name: string;
  email: string;
}

export class UserManager {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getUser(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  getAllUsers(): User[] {
    return [...this.users];
  }

  removeUser(id: number): boolean {
    const index = this.users.findIndex(user => user.id === id);
    if (index > -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}

export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export function add(a: number, b: number): number {
  return a + b;
}