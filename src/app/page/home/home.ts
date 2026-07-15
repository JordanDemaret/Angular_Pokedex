import { Component, inject } from '@angular/core';
import { AppService } from '../../services/app-service';
import { Loader } from "../../compenents/loader/loader";

@Component({
  imports: [Loader],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  appServe = inject(AppService)
}
