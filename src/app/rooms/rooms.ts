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
    roomPhoto : string
    checkinTime : Date
    checkoutTime : Date
    roomRating : number
}