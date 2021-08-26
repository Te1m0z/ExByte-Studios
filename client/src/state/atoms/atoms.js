import { atom } from 'recoil';

let status = false;

if (localStorage.getItem('data')) {

    let data = JSON.parse(localStorage.getItem('data'));

    (data.status === 'authorized') ? status = true : status = false;

} else status = false;

export const authorized = atom({
    key: 'authorized',
    default: status
});

export const editor = atom({
    key: 'editor',
    default: false
});