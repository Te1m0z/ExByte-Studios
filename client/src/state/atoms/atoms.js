import { atom } from 'recoil';

let data = localStorage.getItem('data');
let status = false;

if (data) {
    data = JSON.parse(data);
    data.status === 'authorized' ? status = true : status = false;
}

console.log(data);

export const authorized = atom({
    key: 'Authorized',
    default: status
});

export const editing = atom({
    key: 'Editing',
    default: true
});