const expandPosterButton = document.getElementById("expandPoster");
const posterModal = document.getElementById("posterModal");
const closePosterBackdrop = document.getElementById("closePoster");
const closePosterButton = document.getElementById("closePosterButton");
const prevPoemButton = document.getElementById("prevPoem");
const nextPoemButton = document.getElementById("nextPoem");
const poemVolume = document.getElementById("poemVolume");
const poemTitle = document.getElementById("poemTitle");
const poemBody = document.getElementById("poemBody");
const poemCounter = document.getElementById("poemCounter");
const modalPoemVolume = document.getElementById("modalPoemVolume");
const modalPoemTitle = document.getElementById("modalPoemTitle");
const modalPoemBody = document.getElementById("modalPoemBody");

const poems = [
  {
    volume: "Daily Poetry<br>Vol. 001",
    title: "Beauty in becoming",
    body: `There is a kind of healing<br>
that does not arrive loudly.<br>
It enters with warm tea,<br>
a slower breath,<br>
a notebook opened after midnight.<br>
This semester taught me<br>
that self-care is not escape,<br>
but a return.<br><br>

A return to my body<br>
when stress asked too much of it.<br>
A return to language<br>
when my thoughts felt crowded.<br>
A return to morning light,<br>
to stretching, walking,<br>
to meals made with attention,<br>
to quiet that did not feel empty.<br><br>

I wrote poems in fragments,<br>
between deadlines and long weeks,<br>
and each line became proof<br>
that care can be small<br>
and still be real.<br>
A glass of water.<br>
A window opened.<br>
A page that held what I could not say aloud.<br><br>

I am learning that resilience<br>
is not the absence of strain.<br>
It is the choice to soften,<br>
to pause before breaking,<br>
to keep making space<br>
for beauty, even here.<br><br>

And in that space,<br>
I found myself again.`,
    modalBody: `There is a kind of healing that does not arrive loudly. It enters with warm tea, a slower breath, a
notebook opened after midnight. This semester taught me that self-care is not escape, but a return.
A return to my body when stress asked too much of it. A return to language when my thoughts felt crowded.
A return to morning light, to stretching, walking, to meals made with attention, to quiet that did not
feel empty. I wrote poems in fragments, between deadlines and long weeks, and each line became proof
that care can be small and still be real. I am learning that resilience is not the absence of strain.
It is the choice to soften, to pause before breaking, to keep making space for beauty, even here.
And in that space, I found myself again.`
  },
  {
    volume: "Daily Poetry<br>Vol. 002",
    title: "When the week feels heavy",
    body: `Some weeks felt crowded<br>
before they even began.<br>
Assignments, expectations,<br>
midterms, future plans,<br>
all waiting in the same room.<br><br>

I told myself to keep going,<br>
but stress stayed in my shoulders,<br>
in the way I checked the clock,<br>
in the feeling that there was never<br>
enough time to do everything well.<br><br>

I used to think coping meant<br>
finding a way not to feel it.<br>
A show in the background,<br>
music in my headphones,<br>
anything that could make the day quieter.<br><br>

But this semester taught me<br>
that avoidance and rest<br>
do not always mean the same thing.<br>
Sometimes care looked like<br>
starting earlier,<br>
breaking work into smaller pieces,<br>
and letting a short break be enough.<br><br>

I am still learning,<br>
but I know this now:<br>
stress becomes easier to carry<br>
when I stop pretending<br>
I should carry it alone.`,
    modalBody: `Some weeks felt crowded before they even began. Assignments, expectations, midterms, future plans,
all waiting in the same room. I told myself to keep going, but stress stayed in my shoulders, in the way
I checked the clock, in the feeling that there was never enough time to do everything well. I used to
think coping meant finding a way not to feel it. A show in the background, music in my headphones,
anything that could make the day quieter. But this semester taught me that avoidance and rest do not
always mean the same thing. Sometimes care looked like starting earlier, breaking work into smaller
pieces, and letting a short break be enough. I am still learning, but I know this now: stress becomes
easier to carry when I stop pretending I should carry it alone.`
  },
  {
    volume: "Daily Poetry<br>Vol. 003",
    title: "Protecting my attention",
    body: `I did not notice at first<br>
how often my hand reached<br>
for short videos during breaks.<br>
Just a few minutes, I thought,<br>
and then a few more.<br><br>

The scrolling felt easy,<br>
but afterwards my mind<br>
felt more scattered than before.<br>
I was entertained,<br>
but not restored.<br><br>

So I tried something smaller<br>
than a big reset.<br>
Just a few hours away.<br>
No TikTok.<br>
No Reels.<br>
Only space.<br><br>

At first there was boredom.<br>
Then there was focus.<br>
Then there was the quiet surprise<br>
of finishing tasks with less resistance.<br><br>

That day reminded me<br>
that self-care is sometimes<br>
about protecting attention,<br>
not only calming emotion.<br>
It is choosing what helps me recover,<br>
instead of what only helps me disappear.`,
    modalBody: `I did not notice at first how often my hand reached for short videos during breaks. Just a few minutes,
I thought, and then a few more. The scrolling felt easy, but afterwards my mind felt more scattered than before.
I was entertained, but not restored. So I tried something smaller than a big reset. Just a few hours away.
No TikTok. No Reels. Only space. At first there was boredom. Then there was focus. Then there was the quiet
surprise of finishing tasks with less resistance. That day reminded me that self-care is sometimes about
protecting attention, not only calming emotion. It is choosing what helps me recover, instead of what only
helps me disappear.`
  }
];

let currentPoemIndex = 0;

const renderPoem = () => {
  const poem = poems[currentPoemIndex];
  const poemNumber = String(currentPoemIndex + 1).padStart(2, "0");
  const poemTotal = String(poems.length).padStart(2, "0");

  poemVolume.innerHTML = poem.volume;
  poemTitle.textContent = poem.title;
  poemBody.innerHTML = `<p>${poem.body}</p>`;
  poemCounter.textContent = `${poemNumber} / ${poemTotal}`;
  modalPoemVolume.innerHTML = poem.volume;
  modalPoemTitle.textContent = poem.title;
  modalPoemBody.textContent = poem.modalBody;
};

const openModal = () => {
  posterModal.classList.add("is-open");
  posterModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
};

const closeModal = () => {
  posterModal.classList.remove("is-open");
  posterModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

if (expandPosterButton) {
  expandPosterButton.addEventListener("click", openModal);
}

if (prevPoemButton) {
  prevPoemButton.addEventListener("click", () => {
    currentPoemIndex = (currentPoemIndex - 1 + poems.length) % poems.length;
    renderPoem();
  });
}

if (nextPoemButton) {
  nextPoemButton.addEventListener("click", () => {
    currentPoemIndex = (currentPoemIndex + 1) % poems.length;
    renderPoem();
  });
}

if (closePosterBackdrop) {
  closePosterBackdrop.addEventListener("click", closeModal);
}

if (closePosterButton) {
  closePosterButton.addEventListener("click", closeModal);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && posterModal.classList.contains("is-open")) {
    closeModal();
  }
});

renderPoem();
