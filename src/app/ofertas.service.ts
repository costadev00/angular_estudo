import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { URL_API } from './app.api';

@Injectable()
export class OfertasService {
	ofertas: Oferta[];
	constructor(private http: HttpClient) {}

	getOfertas(): Promise<Oferta[]> {
		return this.http.get<Oferta[]>(`${URL_API}/ofertas`).toPromise().then((res: Oferta[]) => (this.ofertas = res));
	}

	getOfertasPorDestaque(): Promise<Oferta[]> {
		return this.http
			.get<Oferta[]>(`${URL_API}/ofertas?destaque=true`)
			.toPromise()
			.then((res: Oferta[]) => (this.ofertas = res));
	}
	getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
		return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`).toPromise().then((resposta: any) => resposta);
	}

	public getOfertaPorId(id: number): Promise<Oferta> {
		return this.http.get(`${URL_API}/ofertas?id=${id}`).toPromise().then((resposta: any) => {
			return resposta[0];
		});
	}

	public getComoUsarOfertaPorId(id: number): Promise<string> {
		return this.http.get(`${URL_API}/como-usar?id=${id}`).toPromise().then((resposta) => {
			return resposta[0].descricao;
		});
	}

	public getOndeFicaOfertaPorId(id: number): Promise<string> {
		return this.http.get(`${URL_API}/onde-fica?id=${id}`).toPromise().then((resposta) => {
			return resposta[0].descricao;
		});
	}
	// public getOfertas2(): Promise<Oferta[]> {
	// 	return new Promise((resolve, reject) => {
	// 		console.log('passou no getOfertas2');
	// 		//algum tipo de processamento, que ao finalizar, chama a função resolve ou reject
	// 		let deu_certo = true;
	// 		if (deu_certo) {
	// 			setTimeout(() => {
	// 				resolve(this.ofertas), console.log('passou depois de 3 segundos');
	// 			}, 3000);
	// 		} else {
	// 			reject({ codigo_erro: 404, mensagem_erro: 'Servidor não encontrado XYZ' });
	// 		}
	// 	})
	// 		.then((ofertas: Oferta[]) => {
	// 			console.log('pruimeiro then');
	// 			return ofertas;
	// 		})
	// 		.then((ofertas: Oferta[]) => {
	// 			console.log('segundo then');
	// 			return new Promise((resolve2, reject2) => {
	// 				setTimeout(() => resolve2(ofertas), 3000);
	// 			});
	// 		})
	// 		.then((ofertas: Oferta[]) => {
	// 			console.log('terciero then executado spós 3 segundos ');
	// 			return ofertas;
	// 		});
	// }
}
