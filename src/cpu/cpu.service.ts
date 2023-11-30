import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    constructor(private powerService:PowerService){}

    // Methods that uses the powerservies
    compute(a:number, b:number){
        console.log(`Drawing 10watts of power from power service`);
        this.powerService.supplyPower(10);
        return a+b;
    }
}
