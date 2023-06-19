// interface for tasks
// like a model for how a task should be
// what structure a task should follow

export interface Task {
    // ?=>optional, since assigned not chosen
    id?:number,
    text:string,
    day:string,
    reminder:boolean
}