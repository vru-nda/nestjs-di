import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private powerService:PowerService){}

    // Methods that uses the powerservies
    getData(){
        console.log(`Drawing 20watts of power from power service.`);
        this.powerService.supplyPower(20);
        return "Data sent!"
    }
}
