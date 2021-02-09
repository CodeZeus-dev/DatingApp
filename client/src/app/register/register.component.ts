import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegistration = new EventEmitter();

  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe(response => {
      this.cancel();
    }, error => {
      console.log(error);
      if (error.errors !== null) {
        this.toastr.error("The username and password fields are required.");
      } else {
        this.toastr.error(error.error);
      }
    })
  }

  cancel() {
    this.cancelRegistration.emit(false);
  }
}
