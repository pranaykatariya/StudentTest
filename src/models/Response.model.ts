export class Response {
    public correctOption: string;
    public checkedOption: string;
    public email: string;

    constructor( correctOption: string,checkedOption: string, email: string)
    {        
        this.correctOption = correctOption;
        this.checkedOption = checkedOption;
        this.email = email;
    }
}