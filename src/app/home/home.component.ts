import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { gsap, Power2, TweenMax } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


tl = gsap.timeline({delay: 1});
// tl2 = new TimelineMax();
contactForm: FormGroup;
blueCar = document.getElementById('blueCar');
submitted = false;

constructor(private fb: FormBuilder) { }

ngOnInit(): void {

  this.tl.from('header', {duration: .7, ease: 'Power2.out', y: -60});
  // this.tl.from('.hero-content', {duration: 1, ease: 'Power2.out', opacity: 0, y: -40});
  this.tl.from('.illustration', {duration: 1, ease: 'Power2.out', opacity: 0});

  // TweenMax.set(this.blueCar, {zIndex: 9});

  gsap.fromTo('#blueCar', {
    x: -920,
  }, {
    x: 920,
    duration: 8,
    ease: 'none',
    delay: 4,
    repeat: 8,
    repeatDelay: 2,
  });

  gsap.fromTo('#greyCar', {
    x: 600
  }, {
    x: -920,
    duration: 8,
    ease: 'none',
    delay: 2,
    repeat: 7,
    repeatDelay: 1.5
  });

  gsap.fromTo('#sun', {
    x: -100,
  }, {
    x: 800,
    duration: 60,
    ease: 'none',
    delay: 3,
  });


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




//   $ sudo apt-get purge google-chrome-stable
// $ mv ~/.config/google-chrome/ ~/.config/google-chrome.bak/
}
