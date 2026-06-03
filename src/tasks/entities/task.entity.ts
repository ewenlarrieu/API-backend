export class Task {
  id: string | undefined;
  title: string | undefined;
  status: 'todo' | 'in-progress' | 'done' | undefined;
  dueDate?: string;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}