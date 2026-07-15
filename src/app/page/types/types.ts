import { Component, inject } from '@angular/core';
import { AppService } from '../../services/app-service';
import { Loader } from '../../compenents/loader/loader';

@Component({
  selector: 'app-types',
  imports: [Loader],
  templateUrl: './types.html',
  styleUrl: './types.css',
})
export class Types {

  appServices = inject(AppService)
}
