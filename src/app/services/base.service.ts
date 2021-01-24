export class BaseService {

    _apiURI: string = 'https://rickandmortyapi.com/api';

    get apiURI() {
        return this._apiURI;
    }
}