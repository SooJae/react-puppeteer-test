import {Login, LoginResult} from "../typings/Auth";

type FinalReturnType<T> = T extends (...args: any) => infer R
    ? FinalReturnType<R>
    : T;

export const login = ({id, password}: Login): LoginResult => ({id, password, isLogin: true});

export const logout = () => ({id: undefined, password: undefined, isLogin: false});

export const delay = (ms: number) => (fn: Function) => {
    return new Promise((resolve) =>
        setTimeout(() => {
            resolve(fn());
        }, ms)
    );
};
