HooYoo.location = {
  /**
   * @return {Array[Long, Lat]}
   */
  'get': function () {
    return Meteor.user().profile.lastKnownPosition.coordinates;
  },
  /**
   * [updateLocation get the location from GPS, and updates the db]
   * @param {Function} callback [the location from GPS is passed to the callback]
   */
  'update': function (callback) {
    Tracker.autorun(function(c) {
      var loc = Geolocation.latLng();
      if (loc) {
        Meteor.users.update({_id: Meteor.user()._id}, {
          $set: {
            "profile.lastKnownPosition": {
              coordinates: [loc.lng, loc.lat]
            }
          }
        });
        c.stop();
        console.log('updateLocation', loc);
        if (typeof callback == "function") {
          callback(loc);
        }
      }
    });
  },
  /**
   * @return {Array[Users]}
   */
  'nearby': function (maxDistance) {
    var myCoordinates = this.get();
    Meteor.subscribe("nearbyUsers", myCoordinates, maxDistance);
    return Meteor.users.find({_id: {$ne: Meteor.userId()}});
  },
  /**
   * the number of miles between 2 points
   * @param  {Object[lat, lng]} pointA Object with lng, lat keys
   * @param  {Object[lat, lng]} pointB Object with lng, lat keys
   * @return {Number}        number of km
   */
  'distanceBetween': function (pointA, pointB) {
    var R = 6371; // radius of earth in km

    var dLat = this._toRad(pointB.lat-pointA.lat);
    var dLon = this._toRad(pointB.lng-pointA.lng);
    var lat1 = this._toRad(pointA.lat);
    var lat2 = this._toRad(pointB.lng);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d;
  },
  // Converts numeric degrees to radians
  '_toRad': function (degrees) {
    return degrees * Math.PI / 180;
  }
}
