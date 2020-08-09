import {Injectable} from "@nestjs/common";

@Injectable()
export class BoardService {

    public readonly appStartedAt:Date = new Date();

}
