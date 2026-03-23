/**
 * MeetFlow - Auto Scheduling Module
 * Finds available time slots where all participants are free.
 */

/**
 * @param {Object} participantSchedules
 * e.g. { alice: ["09:00-10:00", "14:00-15:00"],
 *         bob:   ["10:00-11:00", "14:00-15:00"] }
 * @returns {string[]} list of available slots for everyone
 */
function findAvailableSlots(participantSchedules) {
  const participants = Object.keys(participantSchedules);
  if (participants.length === 0) return [];

  // Start with the first person's slots, then intersect with the rest
  let commonSlots = participantSchedules[participants[0]];

  for (let i = 1; i < participants.length; i++) {
    const theirSlots = participantSchedules[participants[i]];
    commonSlots = commonSlots.filter(slot => theirSlots.includes(slot));
  }

  return commonSlots;
}

// Example usage
const schedules = {
  alice: ["09:00-10:00", "14:00-15:00", "16:00-17:00"],
  bob:   ["10:00-11:00", "14:00-15:00", "16:00-17:00"],
  carol: ["09:00-10:00", "14:00-15:00"]
};

console.log("Available slots:", findAvailableSlots(schedules));
// Output: ["14:00-15:00"]

module.exports = { findAvailableSlots };