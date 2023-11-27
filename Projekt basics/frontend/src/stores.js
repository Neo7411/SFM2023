import { writable } from "svelte/store";
import axios from "axios";
import { error } from "@sveltejs/kit";

let url = "http://localhost:8081/";

export const API = axios.create({
    baseURL: 'http://localhost:8081/',
    timeout: 1000
});

export const logged_in = writable(false);
export const id = writable();
export const first = writable();
export const last = writable();
export const email = writable();
export const address = writable();
export const basket = writable(0);

export const pizza = writable(0);
export const gyros = writable(0);
export const hamburger = writable(0);
export const sushi = writable(0);
export const palacsinta = writable(0);
export const lepcsanka = writable(0);

API.interceptors.response.use(
    response => {
        return response
    },
    async error => {
        return Promise.reject(error)
    }
)
function getURL() { () => { return url } }
