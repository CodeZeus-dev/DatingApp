import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegistration = new EventEmitter();

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe(response => {
      this.cancel();
    }, error => {
      console.log(error);
    })
  }

  cancel() {
    this.cancelRegistration.emit(false);
  }
}
