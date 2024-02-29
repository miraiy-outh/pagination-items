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

const url = 'http://api.valantis.store:40000/';

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
            offset: offset,
            limit: limit
        }
    };

    const requestOptions = getReguestOptions(data);

    const response = await fetch(url, requestOptions)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const responseData: TResponseIds = await response.json();

    return responseData;
}

export async function getPriceFilteredProductsIds(price: number, offset: number): Promise<TResponseIds> {
    const data: TRequestData = {
        action: "filter",
        params: {
            price: price,
            offset: offset,
            limit: limit
        }
    };

    const requestOptions = getReguestOptions(data);

    const response = await fetch(url, requestOptions)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const responseData: TResponseIds = await response.json();

    return responseData;
}

export async function getFields(field: TField, offset: number): Promise<TResponseFields> {
    const data: TRequestData = {
        action: "get_fields",
        params: {
            field: field,
            offset: offset,
            limit: limit
        }
    };

    const requestOptions = getReguestOptions(data);

    const response = await fetch(url, requestOptions)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const responseData: TResponseFields = await response.json();

    return responseData;
}

export async function getProducts(ids: string[], offset: number): Promise<TResponseItems> {
    const data: TRequestData = {
        action: "get_fields",
        params: {
            ids: ids,
            offset: offset,
            limit: limit
        }
    };

    const requestOptions = getReguestOptions(data);

    const response = await fetch(url, requestOptions)
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const responseData: TResponseItems = await response.json();

    return responseData;
}

