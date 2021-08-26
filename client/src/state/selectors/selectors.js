import { selector } from 'recoil';
import { authorized } from '../atoms/atoms.js';

export const AuthState = selector({
    key: 'AuthState',
    get: ({ get }) => {
        const auth = get(authorized);
        return auth = true;
    }
});