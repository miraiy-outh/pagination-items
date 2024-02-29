import { limit } from "../api";

export function countPages(length: number) {
    return length / limit
}