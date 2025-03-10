let stations = [
  "Acton Town", "Aldgate", "Aldgate East", "Alperton", "Amersham", "Angel",
  "Archway", "Arnos Grove", "Arsenal", "Baker Street", "Balham", "Bank",
  "Barbican", "Barking", "Barkingside", "Barons Court", "Bayswater",
  "Becontree", "Belsize Park", "Bermondsey", "Bethnal Green", "Blackfriars",
  "Blackhorse Road", "Bond Street", "Borough", "Boston Manor", "Bounds Green",
  "Bow Road", "Brent Cross", "Brixton", "Bromley-by-Bow", "Buckhurst Hill",
  "Burnt Oak", "Caledonian Road", "Camden Town", "Canada Water", "Canary Wharf",
  "Canning Town", "Cannon Street", "Canons Park", "Chalfont & Latimer",
  "Chalk Farm", "Chancery Lane", "Charing Cross", "Chesham", "Chigwell",
  "Chiswick Park", "Chorleywood", "Clapham Common", "Clapham North",
  "Clapham South", "Cockfosters", "Colindale", "Colliers Wood", "Covent Garden",
  "Croxley", "Dagenham East", "Dagenham Heathway", "Debden", "Dollis Hill",
  "Ealing Broadway", "Ealing Common", "Earl's Court", "East Acton",
  "East Finchley", "East Ham", "East Putney", "Eastcote", "Edgware",
  "Edgware Road", "Elephant & Castle", "Elm Park", "Embankment", "Epping",
  "Euston", "Euston Square", "Fairlop", "Farringdon", "Finchley Central",
  "Finchley Road", "Finsbury Park", "Fulham Broadway", "Gants Hill",
  "Gloucester Road", "Golders Green", "Goldhawk Road", "Goodge Street",
  "Grange Hill", "Great Portland Street", "Green Park", "Greenford",
  "Gunnersbury", "Hainault", "Hammersmith", "Hampstead", "Hanger Lane",
  "Harlesden", "Harrow & Wealdstone", "Harrow-on-the-Hill", "Hatton Cross",
  "Heathrow Terminals 2 & 3", "Heathrow Terminal 4", "Heathrow Terminal 5",
  "Hendon Central", "High Barnet", "High Street Kensington",
  "Highbury & Islington", "Highgate", "Hillingdon", "Holborn", "Holland Park",
  "Holloway Road", "Hornchurch", "Hounslow Central", "Hounslow East",
  "Hounslow West", "Hyde Park Corner", "Ickenham", "Kennington", "Kensal Green",
  "Kensington (Olympia)", "Kentish Town", "Kenton", "Kew Gardens", "Kilburn",
  "Kilburn Park", "Kingsbury", "King's Cross St. Pancras", "Knightsbridge",
  "Ladbroke Grove", "Lambeth North", "Lancaster Gate", "Latimer Road",
  "Leicester Square", "Leyton", "Leytonstone", "Liverpool Street",
  "London Bridge", "Loughton", "Maida Vale", "Manor House", "Mansion House",
  "Marble Arch", "Marylebone", "Mile End", "Mill Hill East", "Monument",
  "Moor Park", "Moorgate", "Morden", "Mornington Crescent", "Neasden",
  "Newbury Park", "North Acton", "North Ealing", "North Greenwich",
  "North Harrow", "North Wembley", "Northfields", "Northolt",
  "Northwick Park", "Northwood", "Northwood Hills", "Notting Hill Gate",
  "Oakwood", "Old Street", "Osterley", "Oval", "Oxford Circus", "Paddington",
  "Park Royal", "Parsons Green", "Perivale", "Piccadilly Circus", "Pimlico",
  "Pinner", "Plaistow", "Preston Road", "Putney Bridge", "Queen's Park",
  "Queensbury", "Queensway", "Ravenscourt Park", "Rayners Lane", "Redbridge",
  "Regent's Park", "Richmond", "Rickmansworth", "Roding Valley", "Royal Oak",
  "Ruislip", "Ruislip Gardens", "Ruislip Manor", "Russell Square",
  "Seven Sisters", "Shepherd's Bush", "Shoreditch High Street", "Sloane Square",
  "Snaresbrook", "South Ealing", "South Harrow", "South Kensington",
  "South Kenton", "South Ruislip", "South Wimbledon", "South Woodford",
  "Southfields", "Southgate", "St. James's Park", "St. John's Wood",
  "St. Paul's", "Stamford Brook", "Stanmore", "Stepney Green", "Stockwell",
  "Stonebridge Park", "Stratford", "Sudbury Hill", "Sudbury Town",
  "Swiss Cottage", "Temple", "Theydon Bois", "Tooting Bec", "Tooting Broadway",
  "Tottenham Court Road", "Tottenham Hale", "Totteridge & Whetstone",
  "Tower Hill", "Tufnell Park", "Turnham Green", "Turnpike Lane", "Upminster",
  "Upminster Bridge", "Upney", "Upton Park", "Uxbridge", "Vauxhall",
  "Victoria", "Walthamstow Central", "Wanstead", "Warren Street",
  "Warwick Avenue", "Waterloo", "Watford", "Wembley Central", "Wembley Park",
  "West Acton", "West Brompton", "West Finchley", "West Ham", "West Hampstead",
  "West Harrow", "West Kensington", "West Ruislip", "Westbourne Park",
  "Westminster", "White City", "Whitechapel", "Willesden Green",
  "Willesden Junction", "Wimbledon", "Wimbledon Park", "Wood Green",
  "Wood Lane", "Woodford", "Woodside Park"
]

let zone1 = [
  "Aldgate",
  "Angel",
  "Baker Street",
  "Bank",
  "Barbican",
  "Bayswater",
  "Blackfriars",
  "Bond Street",
  "Borough",
  "Chancery Lane",
  "Charing Cross",
  "Covent Garden",
  "Edgware Road",
  "Euston",
  "Euston Square",
  "Embankment",
  "Farringdon",
  "Gloucester Road",
  "Goodge Street",
  "Great Portland Street",
  "Green Park",
  "High Street Kensington",
  "Holborn",
  "Hyde Park Corner",
  "King's Cross St Pancras",
  "Knightsbridge",
  "Lambeth North",
  "Lancaster Gate",
  "Leicester Square",
  "Liverpool Street",
  "London Bridge",
  "Marble Arch",
  "Marylebone",
  "Monument",
  "Moorgate",
  "Notting Hill Gate",
  "Old Street",
  "Oxford Circus",
  "Paddington",
  "Piccadilly Circus",
  "Pimlico",
  "Queensway",
  "Regent's Park",
  "Russell Square",
  "South Kensington",
  "Sloane Square",
  "St. James's Park",
  "St. Paul's",
  "Temple",
  "Tottenham Court Road",
  "Tower Hill",
  "Vauxhall",
  "Victoria",
  "Warren Street",
  "Waterloo",
  "Westminster"
]

function run(){
  let sn = Math.floor(Math.random() * stations.length)
  let s = stations[sn]
  let s1n = Math.floor(Math.random() * stations.length)
  let s1 = stations[s1n]
  if (s1 == s){
    run()
  }
  let password = s + " to " + s1
  console.log(password)
  document.getElementById("output").innerHTML=password
  let go = document.getElementById("go")
}
function run2() {
  let sn = Math.floor(Math.random() * stations.length)
  let s = stations[sn]
  let password = s
  console.log(password)
  document.getElementById("output").innerHTML=password
}
function run3(){
  let sn = Math.floor(Math.random() * zone1.length)
  let s = zone1[sn]
  let s1n = Math.floor(Math.random() * zone1.length)
  let s1 = zone1[s1n]
  if (s1 == s){
    run3()
  }
  let password = s + " to " + s1
  console.log(password)
  document.getElementById("output").innerHTML=password
}
function run4() {
  let sn = Math.floor(Math.random() * zone1.length)
  let s = zone1[sn]
  let password = s
  console.log(password)
  document.getElementById("output").innerHTML=password
}
