export enum Priority {
    Low = 0,
    Medium = 1,
    High = 2
}

export interface Task {

    description: string,
    priority: Priority
}

export interface Todo {

    id: string,
    title: string,
    tasks: Task[]
    
}