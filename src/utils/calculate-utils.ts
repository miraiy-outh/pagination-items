import { limit } from "../api";

export function countPages(length: number) {
    return length / limit
}

export function findMin(massive: number[]) {
    return Math.min(...massive)
}

export function findMax(massive: number[]) {
    return Math.max(...massive)
}