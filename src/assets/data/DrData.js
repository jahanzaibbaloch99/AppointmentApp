import moment from 'moment';
const DrData = [
  {
    id: 1,
    name: 'Dr Lee Chew',
    specialist: 'cardiologist',
    experience: 'Experience 3 Year',
    displayImage:
      'https://1.bp.blogspot.com/-Dq8_SeCVGBg/YUlZawK12SI/AAAAAAAAAmY/5n_rgBdjm6cmrWRnq7kB2OuRPuPFvA4egCLcBGAsYHQ/s480/Male-Indian-Doctor-with-Stethoscope-Transparent-Image.png',
    review: 'Reviews (7)',
    fee: 'Fee: €29.00',
    booking: 'Book Appointment (10 Slots)',
    city: 'london',
    location: {
      lng: '51.487186507621765',
      ltd: '0.09890182236925893',
    },
    rating: 4,
    dates: [
      {
        id: 1,
        day: 'Mon',
        date: 3,
      },
      {
        id: 2,
        day: 'Tues',
        date: 4,
      },
      {
        id: 3,
        day: 'Wed',
        date: 5,
      },
      {
        id: 4,
        day: 'Thu',
        date: 6,
      },
      {
        id: 5,
        day: 'Fri',
        date: 7,
      },
    ],
    morningTime: [
      {
        id: 1,
        Morning: '08:30AM',
      },
      {
        id: 2,
        Morning: '09:00AM',
      },
      {
        id: 3,
        Morning: '09:30AM',
      },
      {
        id: 4,
        Morning: '10:00AM',
      },
      {
        id: 5,
        Morning: '10:30AM',
      },
      {
        id: 6,
        Morning: '11:00AM',
      },
    ],
    eveningTime: [
      {
        id: 1,
        Morning: '08:30PM',
      },
      {
        id: 2,
        Morning: '09:00PM',
      },
      {
        id: 3,
        Morning: '09:30PM',
      },
      {
        id: 4,
        Morning: '10:00PM',
      },
      {
        id: 5,
        Morning: '10:30PM',
      },
      {
        id: 6,
        Morning: '11:00PM',
      },
    ],
  },
  {
    id: 2,
    name: 'Dr Zakaria',
    specialist: 'cardiologist',
    experience: 'Experience 5 Year',
    displayImage:
      'https://1.bp.blogspot.com/-iHZrICGxSAE/YSYoPs9DWmI/AAAAAAAACzw/L-eBcMN8vmUhdq8W2bKl48IXNyD3BP8CgCLcBGAsYHQ/s480/Confident-Senior-Indian-Doctor-With-Stethoscope-Transparent-Image.png',
    review: 'Reviews (9)',
    fee: 'Fee: €41.00',
    booking: 'Book Appointment (10 Slots)',
    city: 'london',
    rating: 4.1,
    location: {
      lng: '51.598858242529595',
      ltd: '0.0013981679979069561',
    },
    dates: [
      {
        id: 1,
        day: 'Mon',
        date: 3,
      },
      {
        id: 2,
        day: 'Tues',
        date: 4,
      },
      {
        id: 3,
        day: 'Wed',
        date: 5,
      },
      {
        id: 4,
        day: 'Thu',
        date: 6,
      },
      {
        id: 5,
        day: 'Fri',
        date: 7,
      },
    ],
    morningTime: [
      {
        id: 1,
        Morning: '08:30AM',
      },
      {
        id: 2,
        Morning: '09:00AM',
      },
      {
        id: 3,
        Morning: '09:30AM',
      },
      {
        id: 4,
        Morning: '10:00AM',
      },
      {
        id: 5,
        Morning: '10:30AM',
      },
      {
        id: 6,
        Morning: '11:00AM',
      },
    ],
    eveningTime: [
      {
        id: 1,
        Morning: '08:30PM',
      },
      {
        id: 2,
        Morning: '09:00PM',
      },
      {
        id: 3,
        Morning: '09:30PM',
      },
      {
        id: 4,
        Morning: '10:00PM',
      },
      {
        id: 5,
        Morning: '10:30PM',
      },
      {
        id: 6,
        Morning: '11:00PM',
      },
    ],
  },
  {
    id: 3,
    name: 'Dr Ping Pong',
    specialist: 'liver',
    experience: 'Experience 6 Year',
    displayImage:
      'https://cdn.picpng.com/doctors_and_nurses/icon-doctors-and-nurses-32704.png',
    review: 'Reviews (24)',
    fee: 'Fee: €50.00',
    booking: 'Book Appointment (10 Slots)',
    city: 'london',
    rating: 4.4,
    location: {
      lng: '51.47991728862196',
      ltd: '-0.06451979552075351',
    },
    dates: [
      {
        id: 1,
        day: 'Mon',
        date: 3,
      },
      {
        id: 2,
        day: 'Tues',
        date: 4,
      },
      {
        id: 3,
        day: 'Wed',
        date: 5,
      },
      {
        id: 4,
        day: 'Thu',
        date: 6,
      },
      {
        id: 5,
        day: 'Fri',
        date: 7,
      },
    ],
    morningTime: [
      {
        id: 1,
        Morning: '08:30AM',
      },
      {
        id: 2,
        Morning: '09:00AM',
      },
      {
        id: 3,
        Morning: '09:30AM',
      },
      {
        id: 4,
        Morning: '10:00AM',
      },
      {
        id: 5,
        Morning: '10:30AM',
      },
      {
        id: 6,
        Morning: '11:00AM',
      },
    ],
    eveningTime: [
      {
        id: 1,
        Morning: '08:30PM',
      },
      {
        id: 2,
        Morning: '09:00PM',
      },
      {
        id: 3,
        Morning: '09:30PM',
      },
      {
        id: 4,
        Morning: '10:00PM',
      },
      {
        id: 5,
        Morning: '10:30PM',
      },
      {
        id: 6,
        Morning: '11:00PM',
      },
    ],
  },
  {
    id: 3,
    name: 'Dr Murtaza Azad',
    specialist: 'cardiologist',
    experience: 'Experience 3 Year',
    displayImage:
      'https://www.kindpng.com/picc/m/101-1018785_transparent-handsome-png-indian-doctor-image-png-png.png',
    review: 'Reviews (24)',
    fee: 'Fee: €50.00',
    booking: 'Book Appointment (10 Slots)',
    city: 'london',
    rating: 3.5,
    location: {
      lng: '51.61271799611327',
      ltd: '0.09272201328938452',
    },
    dates: [
      {
        id: 1,
        day: 'Mon',
        date: 3,
      },
      {
        id: 2,
        day: 'Tues',
        date: 4,
      },
      {
        id: 3,
        day: 'Wed',
        date: 5,
      },
      {
        id: 4,
        day: 'Thu',
        date: 6,
      },
      {
        id: 5,
        day: 'Fri',
        date: 7,
      },
    ],
    morningTime: [
      {
        id: 1,
        Morning: '08:30AM',
      },
      {
        id: 2,
        Morning: '09:00AM',
      },
      {
        id: 3,
        Morning: '09:30AM',
      },
      {
        id: 4,
        Morning: '10:00AM',
      },
      {
        id: 5,
        Morning: '10:30AM',
      },
      {
        id: 6,
        Morning: '11:00AM',
      },
    ],
    eveningTime: [
      {
        id: 1,
        Morning: '08:30PM',
      },
      {
        id: 2,
        Morning: '09:00PM',
      },
      {
        id: 3,
        Morning: '09:30PM',
      },
      {
        id: 4,
        Morning: '10:00PM',
      },
      {
        id: 5,
        Morning: '10:30PM',
      },
      {
        id: 6,
        Morning: '11:00PM',
      },
    ],
  },
  {
    id: 3,
    name: 'Dr Tom Bret',
    specialist: 'gastrologist',
    experience: 'Experience 7 Year',
    displayImage:
      'https://www.kindpng.com/picc/m/101-1018785_transparent-handsome-png-indian-doctor-image-png-png.png',
    review: 'Reviews (24)',
    fee: 'Fee: €50.00',
    booking: 'Book Appointment (10 Slots)',
    city: 'london',
    rating: 4,
    location: {
      lng: '51.42976399956138',
      ltd: '-0.009244836528543425',
    },
    dates: [
      {
        id: 1,
        day: 'Mon',
        date: 3,
      },
      {
        id: 2,
        day: 'Tues',
        date: 4,
      },
      {
        id: 3,
        day: 'Wed',
        date: 5,
      },
      {
        id: 4,
        day: 'Thu',
        date: 6,
      },
      {
        id: 5,
        day: 'Fri',
        date: 7,
      },
    ],
    morningTime: [
      {
        id: 1,
        Morning: '08:30AM',
      },
      {
        id: 2,
        Morning: '09:00AM',
      },
      {
        id: 3,
        Morning: '09:30AM',
      },
      {
        id: 4,
        Morning: '10:00AM',
      },
      {
        id: 5,
        Morning: '10:30AM',
      },
      {
        id: 6,
        Morning: '11:00AM',
      },
    ],
    eveningTime: [
      {
        id: 1,
        Morning: '08:30PM',
      },
      {
        id: 2,
        Morning: '09:00PM',
      },
      {
        id: 3,
        Morning: '09:30PM',
      },
      {
        id: 4,
        Morning: '10:00PM',
      },
      {
        id: 5,
        Morning: '10:30PM',
      },
      {
        id: 6,
        Morning: '11:00PM',
      },
    ],
  },
  {
    id: 3,
    name: 'Dr Robinson',
    specialist: 'liver',
    experience: 'Experience 7 Year',
    displayImage:
      'https://ashokanursingparamedicalcollege.com/img/c4dc54dd-india-doctor.png',
    review: 'Reviews (24)',
    fee: 'Fee: €50.00',
    booking: 'Book Appointment (10 Slots)',
    city: 'london',
    rating: 5,
    location: {
      lng: '51.44346131512603',
      ltd: '-0.04632369100778992',
    },
    dates: [
      {
        id: 1,
        day: 'Mon',
        date: 3,
      },
      {
        id: 2,
        day: 'Tues',
        date: 4,
      },
      {
        id: 3,
        day: 'Wed',
        date: 5,
      },
      {
        id: 4,
        day: 'Thu',
        date: 6,
      },
      {
        id: 5,
        day: 'Fri',
        date: 7,
      },
    ],
    morningTime: [
      {
        id: 1,
        Morning: '08:30AM',
      },
      {
        id: 2,
        Morning: '09:00AM',
      },
      {
        id: 3,
        Morning: '09:30AM',
      },
      {
        id: 4,
        Morning: '10:00AM',
      },
      {
        id: 5,
        Morning: '10:30AM',
      },
      {
        id: 6,
        Morning: '11:00AM',
      },
    ],
    eveningTime: [
      {
        id: 1,
        Morning: '08:30PM',
      },
      {
        id: 2,
        Morning: '09:00PM',
      },
      {
        id: 3,
        Morning: '09:30PM',
      },
      {
        id: 4,
        Morning: '10:00PM',
      },
      {
        id: 5,
        Morning: '10:30PM',
      },
      {
        id: 6,
        Morning: '11:00PM',
      },
    ],
  },
];

export default DrData;
