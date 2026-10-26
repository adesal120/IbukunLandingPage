export type TravelCountry = {
  id: string;
  name: string;
  continent: string;
  cities: string;
  left: string;
  top: string;
};

export const travelCountries: TravelCountry[] = [
  { id: "uk", name: "United Kingdom", continent: "Europe", cities: "London · Birmingham · Coventry · Manchester · Leicester · Milton Keynes · Sunderland", left: "46.91%", top: "15.95%" },
  { id: "nl", name: "Netherlands", continent: "Europe", cities: "Amsterdam · Rotterdam", left: "48.38%", top: "16.35%" },
  { id: "ro", name: "Romania", continent: "Europe", cities: "Bucharest", left: "53.04%", top: "20.21%" },
  { id: "me", name: "Montenegro", continent: "Europe", cities: "Budva · Kotor Bay · Podgorica", left: "51.73%", top: "22.22%" },
  { id: "gr", name: "Greece", continent: "Europe", cities: "Crete", left: "52.7%", top: "24.8%" },
  { id: "ma", name: "Morocco", continent: "Africa", cities: "Marrakech · Fes · Ifrane", left: "44.67%", top: "31.54%" },
  { id: "ng", name: "Nigeria", continent: "Africa", cities: "Lagos · Abeokuta · Ibadan", left: "48.98%", top: "47.05%" },
  { id: "ke", name: "Kenya", continent: "Africa", cities: "Nairobi", left: "57.2%", top: "54.21%" },
  { id: "rw", name: "Rwanda", continent: "Africa", cities: "Kigali", left: "55.02%", top: "56.28%" },
  { id: "na", name: "Namibia", continent: "Africa", cities: "Windhoek · Walvis Bay · Swakopmund", left: "51.43%", top: "72.07%" },
  { id: "cn", name: "China", continent: "Asia", cities: "Beijing", left: "73.38%", top: "28.37%" },
  { id: "vn", name: "Vietnam", continent: "Asia", cities: "Hanoi · Ho Chi Minh City · Ha Long", left: "75.18%", top: "38.1%" },
  { id: "sg", name: "Singapore", continent: "Asia", cities: "Singapore", left: "75.47%", top: "53.6%" },
];
