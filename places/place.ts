export class Place {
    Id: number;
    DFC: string; // Indexed
    DLC: string;
    User: string;
    Country: string; // Indexed 1.6
	Did: number; // Indexed
	Pid: number; // Indexed
	Name: string; // Indexed 1.6
	Lat: string; // Indexed 1.6
	Lng: string; // Indexed 1.6
	GeoType: string;
	GeoQual: string;
	GeoSource: number;
	GeoPlaceId: string;
	MapAddress: string;


}