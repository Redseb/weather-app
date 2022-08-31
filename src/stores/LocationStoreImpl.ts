import { action, makeObservable, observable } from 'mobx';

class LocationStoreImpl {
    longitude: number = 0;
    latitude: number = 0;
    constructor() {
        makeObservable(this, {
            longitude: observable,
            latitude: observable,
            setLongitude: action,
            setLatitude: action,
        });
    }

    setLongitude(longitude: number) {
        this.longitude = longitude;
    }
    setLatitude(latitude: number) {
        this.latitude = latitude;
    }
}

// Export singleton instance of LocationStoreImpl
const locationStore = new LocationStoreImpl();
export { locationStore, LocationStoreImpl };
