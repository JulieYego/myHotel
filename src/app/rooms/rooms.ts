export interface Room {
    totalRooms: number
    availableRooms : number
    bookedRooms : number
}

export interface RoomList {
    roomNumber : number
    roomType : string
    roomAmenities : string
    roomPrice : number
    roomPhotos : string
    checkinTime : Date
    checkoutTime : Date
    roomRating : number
}