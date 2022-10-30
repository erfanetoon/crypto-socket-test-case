type TRoutesKey = "MARKETS";

type TRequestMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface IReturnValue<Data> {
    count: number;
    next: boolean;
    previous: boolean;
    results: Array<Data>;
}
