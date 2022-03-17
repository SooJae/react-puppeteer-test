export interface Login {
    id: string;
    password: string;
}

export interface LoginResult extends Login {
    isLogin: boolean;
}
