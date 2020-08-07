import {Controller, Get, Post, Render, Req, Res} from '@nestjs/common';
import {AppService} from './app.service';
import {Request, Response} from 'express';

interface IClientCommand {
    points:number[];
    extra:'clear';
}

interface IServerCommand extends IClientCommand {
    lastUpdated:number;
}

interface ICommandRequest {
    lastUpdated:number;
    commands:IClientCommand[];
}

@Controller()
export class AppController {

    constructor(private readonly appService: AppService) {
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
    getCommands(@Req() req: Request, @Res() res: Response): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            let alive:boolean = true;
            req.connection.on('close', function () {
                alive = false;
                reject();
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
        });

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
