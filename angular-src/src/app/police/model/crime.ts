export class Complaint {
    constructor(
        public _id:String,
        public title: String,
        public description : String,
        public crimetypeID:String,
        public city_code:String,
        public latlong : number[],
        public policestationID: String,
        public crime_date:Date
    ){}
}
