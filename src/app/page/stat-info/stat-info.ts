import { Component, computed, inject } from '@angular/core';
import { ChartData } from 'chart.js';
import { AppService } from '../../services/app-service';
import { Loader } from '../../compenents/loader/loader';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  imports: [Loader,BaseChartDirective],
  templateUrl: './stat-info.html',
  styleUrl: './stat-info.css',
})
export class StatInfo {

  appService = inject(AppService)

  radarStatData = computed<ChartData>(() => ({
    labels : this.appService.pokemon.value()?.stats.map(s => s.stat.name),
    datasets : [
      {data :  this.appService.pokemon.value()?.stats.map(s => s.base_stat) ?? [], 
      label: this.appService.pokemon.value()?.name},
    ],
  }))


}
