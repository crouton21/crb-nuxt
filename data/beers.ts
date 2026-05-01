export interface Beer {
  name: string
  description: string
  abv?: number
  ibu?: number
}

export const beers: Beer[] = [
  {
    name: 'Jarn Kuk Kveik IPA',
    description: 'Citrusy, juicy, made with Scandinavian yeast',
    abv: 6.6,
    ibu: 29,
  },
  {
    name: 'Out of Bounds IPA',
    description: 'West coast style IPA',
    abv: 7.4,
    ibu: 39,
  },
  {
    name: 'Cheap Date Golden Ale',
    description: 'Easy drinker, crushable',
    abv: 6,
    ibu: 27,
  },
  {
    name: 'Sandpiper Cream Ale',
    description: 'Light, casual, goes the distance',
    abv: 6.6,
    ibu: 9,
  },
  {
    name: 'The Pioneer Lager',
    description: 'Oktoberfest-style Marzen',
    abv: 6,
    ibu: 21,
  },
  {
    name: 'Dad Bod Lager',
    description: '',
    abv: 5.5,
    ibu: 27,
  },
  {
    name: 'Sour Sea Witch Berlinerwisse',
    description: 'Made with Cordova kelp, comes with choice of syrup',
    abv: 5.8,
    ibu: 2,
  },
  {
    name: 'Trapper Hat Belgian Ale',
    description: 'Robust. Festive',
    abv: 8.1,
    ibu: 10,
  },
  {
    name: 'Hygge Stout',
    description: 'Dark Ale, Light, Luscious, Dry Stout',
    abv: 4.7,
    ibu: 18,
  },
  {
    name: 'North Fill Porter',
    description: 'Chocolatey, Rich, Smooth, Roasted',
    abv: 5.8,
    ibu: 24,
  },
  {
    name: 'Good Gourd Pumpkin Ale',
    description: '',
    abv: 7.1,
    ibu: 19,
  },
]
