export class Post {
    Id: number;
    DFC: string; // Indexed
    DLC: string;
    User: string;
    Did: number;
	Pid: number; // Indexed
	Days: number;
	Hits: number;
	Valid: string; // Indexed 1.6
	Paid: string;
	Closed: number; // Indexed 1.6
	Amt: number; // Indexed 1.6
	PostUrl: string;
	PostText: string;


}