class Exception extends Error {
    public status: number;
    public message: string;
    public data?: any;

    constructor(status = 500, message: string, data?: any) {
        super(message);
        Object.setPrototypeOf(this, Exception);
        this.status = status;
        this.message = message;
        this.data = data;
    }
}

export default Exception;
