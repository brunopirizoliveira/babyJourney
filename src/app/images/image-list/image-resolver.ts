import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ImageService } from '../image/image.service';
import { Image } from '../image/image';

@Injectable({ providedIn: 'root' })
export class ImageListResolver implements Resolve<Observable<Image[]>>{
    
    constructor(private service: ImageService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const userName = 'flavio';
        return this.service.listFromUser(userName);
    }
}