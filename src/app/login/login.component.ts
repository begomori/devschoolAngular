import { Component, OnInit,TemplateRef  } from '@angular/core';
import { LoginService } from '../services/login.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'dev-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  pass: string; //ngmodel
  modalRef: BsModalRef;
  constructor(private loginService: LoginService,  private router: Router,private modalService: BsModalService) { }

  ngOnInit() {
  }

  tryLogin(template: TemplateRef<any>) {
    this.loginService.login(this.pass).pipe(take(1)).subscribe(response => {
      if(response){
        this.modalRef = this.modalService.show(template);
        this.router.navigate(['/list']); //llevame al welcome si logueo con exito
      }else{
        console.log("WRONG PASSWORD!");
      }
    });
  }
}