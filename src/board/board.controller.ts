import {Controller, Get, Post, Req, Res} from "@nestjs/common";

import {Request, Response} from "express";
import {IClientCommand, ICommandRequest, IServerCommand} from "./board.model";
import {BoardService} from "./board.service";

@Controller()
export class BoardController {
    constructor(private readonly boardService: BoardService) {
    }

    private commands:IServerCommand[] = [];
    private lastUpdated:number = 0;

    @Get('/student')
    student(req: Request, @Res() res: Response) {
        res.sendFile('index.html', {
            root: './static'
        })
    }

    @Get('/teacher')
    teacher(req: Request, @Res() res: Response) {
        res.sendFile('index.html', {
            root: './static'
        })
    }

    @Get('/vTeacher.js')
    js(req: Request, @Res() res: Response) {
        res.sendFile('vTeacher.js', {
            root: './static'
        })
    }

    @Post('/getCommands')
    getCommands(@Req() req: Request, @Res() res: Response): void {
        let alive:boolean = true;
        req.connection.on('close', function () {
            alive = false;
        });
        let userLastUpdated:number = (req.body && req.body.lastUpdated) || 0;
        const poll = () => {
            if (!alive) return;
            const resp:ICommandRequest['commands'] = this.commands.filter(it => it.lastUpdated > userLastUpdated).map(it => ({
                extra: it.extra,
                points: it.points
            }));
            if (resp.length) {
                res.send({commands: resp, lastUpdated: this.commands[this.commands.length - 1].lastUpdated});
            } else {
                setTimeout(() => {
                    poll();
                }, 1000);
            }
        };
        poll();
    }

    @Post('/addCommands')
    addCommands(@Req() req: Request,){
        const bodyCommands:IClientCommand[] = req.body as IClientCommand[];
        bodyCommands.forEach(c=>{
            if (c.extra==='clear') {
                this.commands = [{...c,lastUpdated:++this.lastUpdated}];
            }
            else this.commands.push({...c,lastUpdated:++this.lastUpdated});
        });
        return {success:true,commands:this.commands.length};
    }
}
