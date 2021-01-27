import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private modalPop: NgbModal,
    private auth: LoginService,
    private route: Router
    ) { }

  @ViewChild('SetupAPI', {static:true}) SetupModal: TemplateRef<any>;

  frm: FormGroup;
  setupform: FormGroup;

  mainUrl = 'contoh url'

  ngOnInit(): void {
    this.frm = this.fb.group({
      userid: ['',Validators.required],
      password: ['', Validators.required]
    });

    this.setupform = this.fb.group({
      url: [this.mainUrl, Validators.required],
      htid: ['', Validators.required],
      location: ['', Validators.required]
    })
  }

  openSetup(){
    this.modalPop.open(this.SetupModal,{
      backdrop: 'static',
      centered: true
    });
  }

  logmein(){
    if(this.frm.invalid){
      return;
    }
    let model = {
      userid : this.frm.get('userid').value,
      password : this.frm.get('password').value,
      url : this.setupform.get('url').value,
      htid : this.setupform.get('htid').value
    }
    console.log(model);
    this.auth.login(model).subscribe((res:any)=>{
      if(res.status == 202){
        localStorage.setItem('userInfo', JSON.stringify(res.body));
        // localStorage.setItem('AccessRight')
        this.route.navigate[('/main')]
      }
    })
  }


  title = 'Production Control System'
}
