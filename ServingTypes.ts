


// Partial, Required, ReadOnly

/*
interface User {
    name: string;
    age?: number;
    email: string;
}
type partial = Partial<User>;

const p: partial = {};

type required = Required<User>;
type readonly = Readonly<User>
*/

// Pick, Omit, Extract, Exclude

interface Payment {
    id: number;
    sum: number;
    from: string;
    to: string;
}

type payment = Omit<Payment, 'id'>

type paymentFromTo = Pick<Payment, 'from' | 'to'>


type extractExample = Extract<'to' | Payment, string>


type excludeExample = Exclude<'to' | Payment, string>























