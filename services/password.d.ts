export declare class Password {
    static toHash(password: string): Promise<string>;
    static compare(storedPassword: String, suppliedPassword: string): Promise<boolean>;
}
