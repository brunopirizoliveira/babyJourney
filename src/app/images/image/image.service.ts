import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from './image';

const API = 'http://localhost:3000';

@Injectable({providedIn: 'root'})
export class ImageService {

    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {
        return this.http.get<Image[]>(API + '/' + userName + '/photos');
    }

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams().append('page', page.toString());
        return this.http.get<Image[]>(API + '/' + userName + '/photos', {params});
    }

}