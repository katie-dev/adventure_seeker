// Generate random month 

const randMonth = () => {
    const monthNum = Math.floor(Math.random() * 12) + 1;
    
    let month = '';
    
    switch (monthNum) {
        case 1:
            month = 'January';
            break;
        case 2:
            month = 'February';
            break;
        case 3:
            month = 'March';
            break;
        case 4:
            month = 'April';
            break;
        case 5:
            month = 'May';
            break;
        case 6:
            month = 'June';
            break;
        case 7:
            month = 'July';
            break;
        case 8:
            month = 'August';
            break;
        case 9:
            month = 'September';
            break;
        case 10:
            month = 'October';
            break;
        case 11:
            month = 'November';
            break;
        case 12:
            month = 'December'
            break;
    }
    //console.log(month);
    return month;
};

// Generate a random country
const randCountry = () => {
    const countryNum = Math.floor(Math.random() * 6) + 1;

    let country = '';

    switch (countryNum) {
        case 1:
            country = 'Canada';
            break;
        case 2:
            country = 'Switzerland';
            break;
        case 3:
            country = 'Austria';
            break;
        case 4:
            country = 'France';
            break;
        case 5:
            country = 'Germany';
            break;
        case 6:
            country = 'Italy';
            break;
    }
    //console.log(country);
    return country;
};

// Pick a random activity to do on adventure

const randActivity = () => {
    const activityNum = Math.floor(Math.random() * 3) + 1;

    let activity = '';

    switch (activityNum) {
        case 1:
            activity = 'go skiing';
            break;
        case 2:
            activity = 'go hiking';
            break;
        case 3:
            activity = 'take a cooking class';
            break;
    }
    //console.log(activity)
    return activity;
}

// Display adventure details
const adventureMonth = randMonth()
const adventureCountry = randCountry()
const adventureActivity = randActivity()
const adventureResult = `For your next adventure, we suggest you travel to ${adventureCountry} in ${adventureMonth} to ${adventureActivity}.`
console.log(adventureResult)

