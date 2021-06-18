import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private messageService: MessageService ) { }

  handler(errorResponse: any){
    let msg: string;

    if(typeof errorResponse === 'string'){
    msg = errorResponse
    }
    else {
      msg = 'Erro ao processar o serviço. tente novamente'
    }
    this.messageService.add({ severity: 'error', summary: msg, detail: '' });

  }
}
