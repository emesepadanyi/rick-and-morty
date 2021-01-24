export class BaseService {
    _apiURI: string = 'https://rickandmortyapi.com/api';
    _charactersURI: string = this._apiURI + '/character';
    _locationsURI:  string = this._apiURI + '/location';

    get apiURI() {
        return this._apiURI;
    }

    get charactersURI() {
        return this._charactersURI;
    }

    get locationsURI() {
        return this._locationsURI;
    }
}