    // Initialize Firebase configuration
    const firebaseConfig = {

        apiKey: "AIzaSyAvBc_a5C8QkjZyBFf3YcT7RjpPSdolj88",
      
        authDomain: "park-f8eef.firebaseapp.com",
      
        databaseURL: "https://park-f8eef-default-rtdb.asia-southeast1.firebasedatabase.app",
      
        projectId: "park-f8eef",
      
        storageBucket: "park-f8eef.appspot.com",
      
        messagingSenderId: "293760294853",
      
        appId: "1:293760294853:web:c817437449947d13d0f5ac",
      
        measurementId: "G-26J5QN1Y1Y"
      
      };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
      
          // Get references to Firebase services
          const database = firebase.database();
          const firestore = firebase.firestore();
          const auth = firebase.auth();
      
const emptySlotsCountElement = document.querySelector('.empty-slots-count');
const parkingSlotsTab = document.getElementById('parkingSlotsTab');
const manageSlotsTab = document.getElementById('manageSlotsTab');
const manageSlotsContainer = document.getElementById('manageSlotsContainer');

let emptySlotsCount = 30;
const totalSlots = 30;
const bookedSlots = [];

function toggleBooking(slot) {
  const element = document.getElementById(slot);

  if (element.classList.contains('booked')) {
    element.classList.remove('booked');
    const index = bookedSlots.indexOf(slot);
    if (index > -1) {
      bookedSlots.splice(index, 1);
    }
    emptySlotsCount++;
  } else {
    element.classList.add('booked');
    bookedSlots.push(slot);
    emptySlotsCount--;
  }

  element.classList.toggle('selected');
  updateEmptySlotsCount();
}

function updateEmptySlotsCount() {
  emptySlotsCountElement.textContent = emptySlotsCount;
}

function showManageSlots() {
  parkingSlotsTab.style.display = 'none';
  manageSlotsTab.style.display = 'block';
  manageSlotsContainer.classList.add('active');
  document.querySelector('.empty-slots-tab').style.display = 'none';
  document.querySelector('.slots-container').style.display = 'flex';
}

function showParkingSlots() {
  parkingSlotsTab.style.display = 'block';
  manageSlotsTab.style.display = 'none';
  manageSlotsContainer.classList.remove('active');
  document.querySelector('.empty-slots-tab').style.display = 'flex';
  document.querySelector('.slots-container').style.display = 'none';
}

// Create slots dynamically
const slotsContainer = document.querySelector('.slots-container');
for (let i = 1; i <= totalSlots; i++) {
  const slot = document.createElement('div');
  slot.id = 'slot' + i;
  slot.classList.add('slot');
  slot.addEventListener('click', function() {
    toggleBooking(slot.id);
  });
  slotsContainer.appendChild(slot);
}

updateEmptySlotsCount();

