const words = [
  "AGUACATE",
  "Manga".toUpperCase(),
  "Disfraz".toUpperCase(),
  "Palabra".toUpperCase(),
  "Indicio".toUpperCase(),
  "Caballero".toUpperCase(),
  "Base".toUpperCase(),
  "Enojado".toUpperCase(),
  "Cuchillo".toUpperCase(),
  "Embudo".toUpperCase(),
  "Aflojar".toUpperCase(),
  "Venado".toUpperCase(),
  "Muérdago".toUpperCase(),
];
export function getRandomWord(): string {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}
