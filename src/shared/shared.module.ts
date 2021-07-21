import { Module } from "@nestjs/common";
import { MapperService } from "./entity-status.num";

@Module({
    controllers: [MapperService],
    providers: [MapperService],
})
export class SharedModule {
}
