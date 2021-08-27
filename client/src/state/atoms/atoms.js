import { atom } from 'recoil';

let status, role;

if (localStorage.getItem('data')) {

    let data = JSON.parse(localStorage.getItem('data'));

    status = data.status;
    role = data.role;

} else {
    status = false;
    role = false;
};

export const authorized = atom({
    key: 'authorized',
    default: { status, role }
});