interface Task {
    title: string
    task: string
    taskDone: boolean
}

type AddTask = () => void
type TaskDone = (task: Task) => void