import { Component, inject } from '@angular/core';
import { AppService } from '../../services/app-service';
import { Loader } from '../../compenents/loader/loader';
import { ConvertToPipe } from '../../pipes/convert-to.pipe';
import { TitleCasePipe } from '@angular/common';

@Component({
  imports: [Loader, ConvertToPipe, TitleCasePipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  appService = inject(AppService)
}
