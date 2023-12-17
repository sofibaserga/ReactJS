

import { MOCK_DATA } from "../mock/data.js"


export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOCK_DATA)
        }, 1000)
    })
}