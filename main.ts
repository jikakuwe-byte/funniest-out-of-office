// Entry for make.fun's "The Funniest Out-of-Office" bounty: a single
// out-of-office auto-reply, 140 characters or fewer. The joke hands the
// inbox to the least qualified deputy imaginable — a houseplant — and
// lets its deadpan one-word reply ("noted") plus one (1) leaf do the
// work. Running the program prints the joke, and nothing else.

/** The joke: the absence, the deputy, the reply. */
function jokeLine(): string {
  const away = "I'm out of the office until Monday.";
  const deputy =
    "My inbox is now handled by my houseplant, which has replied to everyone with 'noted' and one (1) leaf.";
  return `${away} ${deputy}`;
}

console.log(jokeLine());
