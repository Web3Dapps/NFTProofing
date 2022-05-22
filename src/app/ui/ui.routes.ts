import { Routes } from '@angular/router';

// Components
import {HomeComponent} from "./home/home.component";
import {ErrorComponent} from "./error/error.component";
import {ProfileComponent} from "./profile/profile.component";
import {MapComponent} from "./map/map.component";
import {NftComponent} from "./nft/nft.component";

export const UIRoute: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'profile', component: ProfileComponent},
  {path: 'nfts/:id', component: NftComponent},
  { path: 'map', component: MapComponent},
  { path: 'home', component: HomeComponent},
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '/404' },
];
