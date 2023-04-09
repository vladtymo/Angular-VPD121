export interface IUser {
    id: number;
    username: string;
    email: string;
    birthdate: Date;
    address?: string;
    isAdmin: boolean;
};

export const USERS_MOCK: IUser[] = [
    {
        id: 1001,
        username: 'vladtymo',
        email: 'vladnaz@ukr.net',
        birthdate: new Date(2000, 0, 30),
        address: "Rivne, Ukraine",
        isAdmin: true,
    },
    { id: 3001, username: 'bob', isAdmin: false, email: 'devops@gmail.com', birthdate: new Date(1994, 2, 18), address: 'Lviv, Ukraine' },
    { id: 1003, username: 'vudka', isAdmin: true, email: 'sobaka@gmail.com', birthdate: new Date(2004, 4, 13), address: 'Lviv, Ukraine' },
    { id: 5002, username: 'tata', isAdmin: true, email: 'pupersuper@gmail.com', birthdate: new Date(1999, 4, 2) },
    { id: 1200, username: 'lisov', isAdmin: false, email: 'angular@yahoo.com', birthdate: new Date(1992, 10, 22), address: 'Kyiv, Ukraine' },  
];
