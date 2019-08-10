import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { AindaNaoTemosComponent } from './ainda-nao-temos/ainda-nao-temos.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'restaurantes', component: RestaurantesComponent },
	{ path: 'diversao', component: DiversaoComponent },
	{ path: 'oferta', component: HomeComponent },
	{
		path: 'oferta/:id',
		component: OfertaComponent,
		children: [
			{ path: '', component: ComoUsarComponent },
			{ path: 'como-usar', component: ComoUsarComponent },
			{ path: 'onde-fica', component: OndeFicaComponent }
		]
	},
	{ path: 'ainda-nao-temos', component: AindaNaoTemosComponent },
	{ path: 'destaque', component: DestaqueComponent },
	{ path: '**', component: ErrorComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export default class AppRoutingModule {}
