import { Oferta } from './shared/oferta.model';

export class OfertasService {
	public ofertas: Oferta[] = [
		{
			id: 1,
			categoria: 'restaurante',
			titulo: 'Super Burger',
			descricao_oferta: 'Rodízio de Mini-hambúrger com opção de entrada.',
			anunciante: 'Original Burger',
			valor: 29.9,
			destaque: true,
			imagens: [
				{ url: '/assets/ofertas/1/img1.jpg' },
				{ url: '/assets/ofertas/1/img2.jpg' },
				{ url: '/assets/ofertas/1/img3.jpg' },
				{ url: '/assets/ofertas/1/img4.jpg' }
			]
		},
		{
			id: 2,
			categoria: 'restaurante',
			titulo: 'Cozinha Mexicana',
			descricao_oferta: 'Almoço ou Jantar com Rodízio Mexicano delicioso.',
			anunciante: 'Mexicana',
			valor: 32.9,
			destaque: true,
			imagens: [
				{ url: '/assets/ofertas/2/img1.jpg' },
				{ url: '/assets/ofertas/2/img2.jpg' },
				{ url: '/assets/ofertas/2/img3.jpg' },
				{ url: '/assets/ofertas/2/img4.jpg' }
			]
		},
		{
			id: 4,
			categoria: 'diversao',
			titulo: 'Estância das águas',
			descricao_oferta: 'Diversão garantida com piscinas, trilhas e muito mais.',
			anunciante: 'Estância das águas',
			valor: 31.9,
			destaque: true,
			imagens: [
				{ url: '/assets/ofertas/3/img1.jpg' },
				{ url: '/assets/ofertas/3/img2.jpg' },
				{ url: '/assets/ofertas/3/img3.jpg' },
				{ url: '/assets/ofertas/3/img4.jpg' },
				{ url: '/assets/ofertas/3/img5.jpg' },
				{ url: '/assets/ofertas/3/img6.jpg' }
			]
		},
		{
			id: 5,
			categoria: 'diversao',
			titulo: 'Estância das águas',
			descricao_oferta: 'Diversão garantida com piscinas, trilhas e muito mais.',
			anunciante: 'Estância das águas',
			valor: 31.9,
			destaque: true,
			imagens: [
				{ url: '/assets/ofertas/3/img1.jpg' },
				{ url: '/assets/ofertas/3/img2.jpg' },
				{ url: '/assets/ofertas/3/img3.jpg' },
				{ url: '/assets/ofertas/3/img4.jpg' },
				{ url: '/assets/ofertas/3/img5.jpg' },
				{ url: '/assets/ofertas/3/img6.jpg' }
			]
		}
	];

	public getOfertas(): Array<Oferta> {
		return this.ofertas;
	}

	public getOfertas2(): Promise<Oferta[]> {
		return new Promise((resolve, reject) => {
			console.log('passou no getOfertas2');
			//algum tipo de processamento, que ao finalizar, chama a função resolve ou reject
			let deu_certo = true;
			if (deu_certo) {
				setTimeout(() => {
					resolve(this.ofertas), console.log('passou depois de 3 segundos');
				}, 3000);
			} else {
				reject({ codigo_erro: 404, mensagem_erro: 'Servidor não encontrado XYZ' });
			}
		})
			.then((ofertas: Oferta[]) => {
				console.log('pruimeiro then');
				return ofertas;
			})
			.then((ofertas: Oferta[]) => {
				console.log('segundo then');
				return new Promise((resolve2, reject2) => {
					setTimeout(() => resolve2(ofertas), 3000);
				});
			})
			.then((ofertas: Oferta[]) => {
				console.log('terciero then executado spós 3 segundos ');
				return ofertas;
			});
	}
}
