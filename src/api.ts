import md5 from "md5";
import { TField, TRequestData } from "./types/request-data";
import { TResponseFields, TResponseIds, TResponseItems } from "./types/response-data";

export const limit = 50;

const password = import.meta.env.VITE_PASSWORD;
let date = new Date();
const year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

let newMonth = month < 10 ? '0' + month : month;
let newDay = day < 10 ? '0' + day : day;


const formattedDate = `${year}${newMonth}${newDay}`;

const key = md5(`${password}_${formattedDate}`);

const url = 'https://api.valantis.store:41000/';

function getReguestOptions(data: TRequestData) {
    return {
        method: 'POST',
        headers: {
            'X-Auth': key,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
}

export async function getProductsIds(offset: number): Promise<TResponseIds> {
    const data: TRequestData = {
        action: "get_ids",
        params: {
            offset: (offset - 1) * limit,
            limit: limit
        }
    };

    const requestOptions = getReguestOptions(data);

    const response = await fetch(url, requestOptions)
    if (!response.ok) {
        console.log('Network response was not ok');
    }

    const responseData: TResponseIds = await response.json();

    return responseData;
}

export async function getPriceFilteredProductsIds(price: number): Promise<TResponseIds> {
    const data: TRequestData = {
        action: "filter",
        params: {
            price: price
        }
    };

    const requestOptions = getReguestOptions(data);

    const response = await fetch(url, requestOptions)
    if (!response.ok) {
        console.log('Network response was not ok');
    }

    const responseData: TResponseIds = await response.json();

    return responseData;
}

export async function getBrandFilteredProductsIds(brand: string): Promise<TResponseIds> {
    const data: TRequestData = {
        action: "filter",
        params: {
            brand: brand
        }
    };

    const requestOptions = getReguestOptions(data);

    const response = await fetch(url, requestOptions)
    if (!response.ok) {
        console.log('Network response was not ok');
    }

    const responseData: TResponseIds = await response.json();

    return responseData;
}

export async function getNameFilteredProductsIds(product: string): Promise<TResponseIds> {
    const data: TRequestData = {
        action: "filter",
        params: {
            product: product,
        }
    };

    const requestOptions = getReguestOptions(data);

    const response = await fetch(url, requestOptions)
    if (!response.ok) {
        console.log('Network response was not ok');
    }

    const responseData: TResponseIds = await response.json();

    return responseData;
}

export async function getFields<T>(field: TField): Promise<TResponseFields<T>> {
    const data: TRequestData = {
        action: "get_fields",
        params: {
            field: field
        }
    };

    const requestOptions = getReguestOptions(data);

    const response = await fetch(url, requestOptions)
    if (!response.ok) {
        console.log('Network response was not ok');
    }

    const responseData: TResponseFields<T> = await response.json();

    return responseData;
}

export async function getProducts(ids: string[]): Promise<TResponseItems> {
    const data: TRequestData = {
        action: "get_items",
        params: {
            ids: ids
        }
    };

    const requestOptions = getReguestOptions(data);

    const response = await fetch(url, requestOptions)
    if (!response.ok) {
        console.log('Network response was not ok');
    }

    const responseData: TResponseItems = await response.json();

    return responseData;
}

