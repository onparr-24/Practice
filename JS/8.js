const city = 'New York City';

const logCitySkyline = () => {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
};

console.log(logCitySkyline());

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};

console.log(callMyNightSky());

const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
};
  
logVisibleLightWaves();
console.log(lightWaves);

const satellite2 = 'The Moon';
const galaxy2 = 'The Milky Way';
let stars2 = 'North Star';

const callMyNightSky2 = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite2 + ', ' + stars2 + ', ' + galaxy2;
};

console.log(callMyNightSky2());
console.log(stars2);

const logVisibleLightWaves2 = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if (region === 'The Arctic') {
      let lightWaves = 'Northern Lights';
      console.log(lightWaves);
    };
    console.log(lightWaves);
};
  
logVisibleLightWaves2();