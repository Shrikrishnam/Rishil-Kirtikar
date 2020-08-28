import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Case-study';
  constructor(private backend: UserService) {}

  //perform() {
  // this.backend
  //    .makeRequest('http://demo5031778.mockable.io/userData')
  //    .subscribe((res) => {
  //      console.log(
  //        res.id,
  //        res.firstname,
  //         res.lastname,
  //        res.age,
  //       res.email,
  //       res.address,
  //        res.pincode
  //      );
  //    });
  // }
}
