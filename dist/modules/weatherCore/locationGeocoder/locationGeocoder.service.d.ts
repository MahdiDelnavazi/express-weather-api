import { LocationInfo } from '@modules/weatherCore/locationGeocoder';
export declare class LocationGeocoderService {
    private readonly axios;
    constructor();
    geocodeLocation(country: string, city: string): Promise<LocationInfo>;
}
