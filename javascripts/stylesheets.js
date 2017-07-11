for ( let i = 5; i < 120; i += 10){
console.log("i", i);
}

for (let d = 4096; d > 1; d /= 2){
    console.log("d", d);
}

var Presidents = ["President #1 was George Washington", "President #2 was John Adams", "President #3 was Thomas Jefferson"];

for (presidents = 0; presidents < 4; presidents++){
console.log("Presidents", Presidents);
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var prop in antSpecies) {
    console.log(`antSpecies.${prop} = ${antSpecies[prop]}`);
}