import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { TimelineMax, Power2 } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



contactForm: FormGroup;
submitted = false;

constructor(private fb: FormBuilder) { }

ngOnInit(): void {

  this.contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required]
  });



  }

  get f()  {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
  }

}
