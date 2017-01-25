/* eslint-disable no-unused-vars */
import delay from './delay';

// This files contains a mock web api for interests
// Uses setTimeout to simulate delay in AJAX call
// Calls return a promise

const interests = [
  {
    id: 'hike-activity',
    name: 'hike'
  },
  {
    id: 'swim-activity',
    name: 'swim'
  },
  {
    id: 'ski-activity',
    name: 'ski'
  },
  {
    id: 'camp-activity',
    name: 'camping'
  }
];

// generating Ids
const generateId = interest => `${interest.name.toLowerCase()}-activity`;

class InterestsApi {
  // static allows class method to be solely called within a class
  // Get all interests
  static getAllInterests() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], interests), delay);
      });
    });
  }

  static saveInterest(interest) {
    interest = Object.assign({}, interest);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // mock server side validations
        if (interest.id) {
          const existingInterestIndex = interests.findIndex(anInterest =>
            anInterest.id === interest.id);
          interests.splice(existingInterestIndex, 1, interest);
        } else {
          // simulate generation of id
          interest.id = generateId(interest);
          interests.push(interest);
        }
        resolve(interest);
      }, delay);
    });
  }

  static deleteInterest(interestId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexToDelete = interests.findIndex(anInterest =>
          anInterest.id === interestId
        );
        interests.splice(indexToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default InterestsApi;
