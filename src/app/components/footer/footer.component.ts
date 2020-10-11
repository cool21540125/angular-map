import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  stackoverflowUrl = 'https://stackoverflow.com/users/1791913/faisal?tab=profile';
  linkedinUrl = 'https://www.linkedin.com/in/mohammadfaysal/';
  fiverrUrl = 'https://www.fiverr.com/faisalmuhammad_';
  facebookUrl = 'https://www.facebook.com/phaysall';
  twitterUrl = 'https://twitter.com/faisssallll';
  githubUrl = 'https://github.com/faisalmuhammad';
  googleUrl = 'https://plus.google.com/+MuhammadFaisal04';

  constructor() { }

  ngOnInit(): void {
  }

}
