import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import routes from './app-routing.module';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import AppRoutingModule from './app-routing.module';
import { OfertaComponent } from './oferta/oferta.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { AindaNaoTemosComponent } from './ainda-nao-temos/ainda-nao-temos.component';
import { ErrorComponent } from './error/error.component';
import { DestaqueComponent } from './destaque/destaque.component';

@NgModule({
	declarations: [
		AppComponent,
		TopoComponent,
		HomeComponent,
		RodapeComponent,
		RestaurantesComponent,
		DiversaoComponent,
		OfertaComponent,
		ComoUsarComponent,
		OndeFicaComponent,
		AindaNaoTemosComponent,
		ErrorComponent,
		DestaqueComponent
	],
	imports: [ BrowserModule, HttpClientModule, AppRoutingModule, RouterModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
