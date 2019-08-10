import { Component, OnInit } from '@angular/core';
import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
OfertasService;
@Component({
	selector: 'app-destaque',
	templateUrl: './destaque.component.html',
	styleUrls: [ './destaque.component.css' ],
	providers: [ OfertasService ]
})
export class DestaqueComponent implements OnInit {
	public ofertas: Oferta[];
	constructor(public ofertasService: OfertasService) {}

	ngOnInit() {
		this.ofertasService
			.getOfertasPorDestaque()
			.then((ofertas: Oferta[]) => {
				this.ofertas = ofertas;
			})
			.catch((param: any) => {
				console.log('Caiu no catch');
			});
	}
}
