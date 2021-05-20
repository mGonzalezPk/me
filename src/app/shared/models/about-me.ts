import { GlobalConstants } from "src/app/common/global-constants";

export class AboutMe {
    name: string;
    age: number;
    residence: string;
    email: string;
    address: string;

    constructor() {
        this.name = GlobalConstants.NAME;
        this.address = GlobalConstants.ADDRESS;
        this.residence = GlobalConstants.RESIDENCE;
        this.email = GlobalConstants.EMAIL;
        this.calculateAge();
    }
    private calculateAge(): void {
        const bDay = new Date(GlobalConstants.BIRTHDAY);

        var diff_ms = Date.now() - bDay.getTime();
        var age_dt = new Date(diff_ms);

        this.age = Math.abs(age_dt.getUTCFullYear() - 1970);

    }
}
