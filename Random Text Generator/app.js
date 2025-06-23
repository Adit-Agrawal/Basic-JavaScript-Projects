const text = [
  "Butterbeer-stained scrolls, chocolate frog wrappers in the common room, and a suspiciously grumpy painting muttering about misfiled goblin tax codes. Hogsmeade weekends pass in a blur of Zonko’s chaos and Honeydukes regret. Prefects glare at first-years who can’t navigate moving staircases. Peeves zooms overhead, juggling dungbombs with delight.",
  
  "Expelliarmus! shouted mid-lecture, followed by awkward silence and a startled bat from the rafters. Ravenclaw discussions spiral into wand-core theory while Slytherins scheme over buttered toast. Gryffindors attempt to tame a rogue broomstick in the corridor. Meanwhile, Hufflepuffs are just vibing with magical puffskeins and herbology experiments gone mildly explosive.",
  
  "Pumpkin pasties levitate past enchanted suits of armor doing synchronized dances to the Fat Lady’s humming. Divination smoke curls around a crystal ball revealing an ominous \"meh.\" A talking mirror gives unsolicited fashion advice. A cauldron burps lavender steam. Detention means polishing trophies while hearing ghosts re-enact tragic Quidditch accidents.",
  
  "Fanged frisbees chase a screaming fourth year down the Charms corridor while Filch yells about confiscated Niffler nests. Magical ink leaks out of essays and corrects poor spelling with sass. Quills write love poems by accident. Somewhere in the Forbidden Forest, centaurs argue about Mars being in retrograde again.",
  
  "Professor Trelawney dramatically faints during breakfast, muttering about doom and misplaced house socks. A second-year transfigures their teacup into a ferret. Not on purpose. Moaning Myrtle throws a tantrum in the prefects' bathroom over a stolen bath bomb. The Room of Requirement briefly turns into a disco floor with talking furniture.",
  
  "Dobby the house-elf organizes a sock exchange, proudly modeling his polka-dotted favorites. Headless Nick hosts a Nearly Dead Poetry Slam. Flourish & Blotts sends textbooks that read themselves aloud in sarcastic tones. Owl post goes rogue, delivering howlers to the wrong recipients. A first-year accidentally animates their pumpkin juice.",

  "Magical portraits bicker about which era of headmasters was most fashionable. The Sorting Hat hosts open mic nights when not in use, rapping about student drama. Quidditch practice ends in broom entanglement and glitter explosions thanks to a misfired charm. Fred and George’s legacy continues through secret passage fireworks.",
  
  "An enchanted gramophone in the library plays lo-fi study beats mixed with Basilisk hisses. Snape’s old office now smells faintly of regret and chamomile. Mischief Managed appears on Marauder’s Map but with snarky comments. Hippogriffs judge students silently from afar. Gillyweed smoothies are trending among third years.",
  
  "In the dungeons, slime molds become sentient and apply for prefect status. A Hogsmeade shop sells licorice wands that recite Shakespeare. Spellbooks whisper when left unattended. The Astronomy Tower sees more confessions than stargazing. The giant squid starts an underwater podcast, mostly grunts and bubbles.",
];



const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function (e) {
  // A click on a form submit button – initiates its submission to the server.

  e.preventDefault();

  const value = parseInt(amount.value);

  if (!isNaN(value) && (value > 0 && value <= 9)) {
    const displayText = text.slice(0, value);
    result.innerHTML = displayText.join("<br><br>");
  } else {
    let tempText = 'Entered value is out of range';
    result.innerHTML = tempText;
  }
});
