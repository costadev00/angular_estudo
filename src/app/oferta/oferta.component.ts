import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from './../ofertas.service';
import { Oferta } from './../shared/oferta.model';
import { Observable, interval, Observer } from 'rxjs';
// import 'rxjs/Rx';
@Component({
	selector: 'app-oferta',
	templateUrl: './oferta.component.html',
	styleUrls: [ './oferta.component.css' ],
	providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {
	constructor(private route: ActivatedRoute, private ofertasService: OfertasService) {}
	public oferta: Oferta;
	resultado2: string;
	ngOnInit() {
		this.ofertasService.getOfertaPorId(this.route.snapshot.params['id']).then((oferta: Oferta) => {
			this.oferta = oferta;
			// console.log(oferta);
			// console.log(this.oferta);

			// this.route.params.subscribe((parametro: any) => {
			// 	console.log('instrução: ', parametro);
			// });
			// (erro: any) => {
			// 	console.log('erro:', erro), () => console.log('processamento foi classificado como concluído!');
			// };
			// console.log(typeof this.route.params.subscribe);
		});
		// let tempo = interval(2000);
		// tempo.subscribe((resposta: any) => {
		// 	resposta = 'se passaram 2 segundos';
		// 	console.log(resposta);
		// });

		//observable(observador)
		let meuObservableTeste = interval(5000);
		Observable.create((observer: Observer<number>) => {
			observer.next(1);
			observer.next(2);
		});

		//observable(observável)
		meuObservableTeste.subscribe((resultado: any) => {
			console.log(resultado);
			this.resultado2 = resultado;
		});
	}
}
