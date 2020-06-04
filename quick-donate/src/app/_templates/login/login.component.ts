import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../_services/authentication.service';
import { User } from '../../_models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component(
    {
        templateUrl: 'login.component.html'
    }
)
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    currentUser: User;
    submitted: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private httpClient: HttpClient
    ) {
        // redirect to home if already logged in
        this.submitted = false;
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.currentUser = new User();

    }

    get f() { return this.loginForm.controls; }

    onSubmit() {
        // check if form is invalid
        if (this.loginForm.invalid) {
            this.submitted = true;
            return;
        }
        this.currentUser.username = this.f.username.value;
        this.currentUser.password = this.f.password.value;
        this.authenticationService.login(this.currentUser).subscribe(user => {
            if (user) {
                this.router.navigate(['home']);
            }
        });
    }
}
