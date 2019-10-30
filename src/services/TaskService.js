import { http } from './HttpService'

export function getAllTasks() {
    return http().get('/task');
}
