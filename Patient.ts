export class Patient {
    private _name: string;
    private _code: number;

    constructor(name: string, code: number) {
        this._name = name;
        this._code = code;
    }

    getName(): string {
        return this._name;
    }

    setName(value: string) {
        this._name = value;
    }

    getCode(): number {
        return this._code;
    }

    setCode(value: number) {
        this._code = value;
    }
}