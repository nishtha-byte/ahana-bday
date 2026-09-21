const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const stickerLayer = $('#sticker-layer');
['✦', '♡', '★', 'ahh!', '✿', 'xoxo', '🎀', '♥', 'yay!', '✧', 'flower power', '★'].forEach((stickerText, index) => {
	const sticker = document.createElement('span');
	sticker.className = 'sticker';
	sticker.textContent = stickerText;
	sticker.style.left = `${4 + Math.random() * 91}%`;
	sticker.style.top = `${8 + Math.random() * 84}%`;
	sticker.style.transform = `rotate(${-18 + Math.random() * 36}deg)`;
	sticker.style.animationDelay = `${index * -0.45}s`;
	stickerLayer.appendChild(sticker);
});
const birthdayLetter = `To my Matar,
my Baddie Bhabhi,
my fellow member of the Sabji Gang,
and unfortunately, one of the people I have to tolerate on a daily basis—

HAPPY BIRTHDAYYYYY!!! 🥳💗🎂

Okay, first of all, I genuinely don't know how to start this because there is approximately a 0% chance that I can write a normal birthday letter for you. Like, how am I supposed to describe our friendship without mentioning the absolute stupidity that is the Sabji Gang, our bus fights, or the fact that you somehow manage to be annoying and cool at the exact same time?

We've been friends for around 3–4 years, which is actually crazy to think about. Somewhere along the way, you went from being just a person I knew to being one of those people who are just… permanently. And honestly, I wouldn't have it any other way.

You are genuinely one of the funniest people I know. Half the time, you don't even have to TRY to make me laugh. You just exist and somehow something happens. 😭

And speaking of things that should NEVER be forgotten—

LASER TAG.

Your birthday party.

You.

On the opposite team.

Me and Simrat.

Camping at one single spot.

And absolutely destroying you every time you came near us.

I don't think you understand how funny that was. 😭😭 You were literally at your own birthday party and we basically decided, "You know what? Let's make this personal." I am still not sorry.

Actually, I think it was one of the greatest displays of friendship we've ever produced.

And then there are our bus fights, which are somehow always about food. Because apparently you are incapable of sharing your food with me.

HAWWWW.

Like excuse me??? What happened to friendship??? What happened to love??? What happened to the sacred laws of sharing snacks with your best friend??? Every time you refuse to give me food, a tiny piece of my soul leaves my body.

But somehow, five minutes later, we're completely normal again. That's literally us.

We can argue, annoy each other, make fun of each other, say the most random things imaginable, and then just continue talking like nothing happened. And honestly, I love that.

I love that I never feel like I have to pretend around you. You're just… you. Funny. Annoying. Cool. Slightly insane. Sometimes questionable. Occasionally criminal. But somehow still perfect.

And I really mean that.

One of the things I appreciate about you the most is how you've always supported me. You never make me feel insecure about myself, and that means so much more than you probably realise.

There are people who can make you question yourself without even meaning to, and then there are people who make you feel like you can just be yourself. You're the second kind.

You've always been someone I can laugh with, rant to, be stupid with, and just exist around without worrying about whether I'm being "too much." And I hope you know that I'll always try to give that same feeling back to you.

You deserve to have people around you who make you feel loved, appreciated, and completely comfortable being yourself.

And yes, before this gets TOO emotional—

TRIGGERED INSAAN.

😭😭😭

I genuinely cannot think about him normally anymore because of you. There was a time when mentioning Nischay Malhan was basically a guaranteed way to start a conversation with you. And now it's literally an inside joke.

The funniest part is that you don't even like him THAT much anymore, but the damage has already been done. You created the association. You cannot undo it.

Nischay Malhan = Ahana lore.

And then, of course…

SABJI GANG. 🥦🥕🍅

I don't even know how we got here. I don't know why we're vegetables. I don't know why it makes sense. I don't know why "Matar" is somehow your identity now. But honestly? I wouldn't change it.

Because that's what makes our friendship ours. All the completely random things that wouldn't make sense to anyone else somehow become the things we'll remember forever.

And Baddie Bhabhi. Obviously. That title is permanent. No refunds. No exchanges. No cancellations.

You've been my friend through so many random phases and moments over these past few years, and I'm genuinely so grateful that somehow life decided to put you in mine.

I hope this year brings you SO many good things. I hope you laugh until your stomach hurts. I hope you get everything you've been wishing for. I hope you meet people who appreciate you exactly as you are. I hope you have days where everything just goes right. And I hope you never forget how loved you are by the people who genuinely care about you.

Especially me.

Even though I will still fight you for your food. That part is non-negotiable.

And if you ever start thinking you're not good enough, or you're annoying, or you're not doing enough, or you're somehow less than the person you want to be— I hope you remember that there is someone sitting somewhere thinking, "That's literally my Matar. She's perfect."

Because you really are.

Not perfect in the boring, flawless, everything-goes-right way. Perfect in the you way.

The funny way. The annoying way. The chaotic way. The way that makes me laugh when I don't even want to. The way that makes stupid memories become some of my favourite memories. The way that makes a normal bus ride turn into an argument over food. The way that makes laser tag unnecessarily competitive. The way that turned Matar, Patagobhi, Sabji Gang and Baddie Bhabhi into things that actually mean something to us.

So thank you. Thank you for being there. Thank you for supporting me. Thank you for never making me feel like I have to change myself to fit in. Thank you for all the laughs. Thank you for all the stupid conversations. Thank you for all the memories we've already made. And thank you in advance for all the ridiculous ones we're definitely going to make in the future.

We've already got 3–4 years of nonsense behind us. Imagine how much more we're going to collect. 😭

One day we're going to look back at all this and be like, "Why were we like this?" And honestly, I hope the answer is: "Because we were us."

So here's to another year of you being amazing, me annoying you, you annoying me, us fighting over food, making absolutely zero sense, reviving ancient inside jokes, and somehow creating even more lore.

I genuinely hope you have the best birthday ever. You deserve a day that's as wonderful, funny, chaotic, and special as you are.

Happy Birthday, Matar. 💗

Never change.

Okay, maybe change one thing.

START SHARING YOUR FOOD.

HAAWWWW. 😭

Love you loads,
your Palak 🥬💗

P.S. If you ever forget how much I love you, remember that I willingly spent an entire laser-tag game camping just to shoot you.

That's friendship.

That's dedication.

That's love.

SABJI GANG FOREVER. 🥦🫛🥕💗`;
const letterField = document.querySelector('.letter-paper textarea');
letterField.value = birthdayLetter;
letterField.readOnly = true;
letterField.setAttribute('aria-readonly', 'true');
const coverUpload = $('#cover-upload');
const coverImage = $('.mag-image');
coverImage.querySelector('span').innerHTML = "AHANA'S<br> COVER<br> PHOTO";
const heroPhoto = $('[data-photo-target="hero"]');
const makeImage = (src, alt = 'Ahana') => { const image = document.createElement('img'); image.src = src; image.alt = alt; return image; };
coverUpload.addEventListener('change', (event) => { const file = event.target.files[0]; if (!file) return; const src = URL.createObjectURL(file); coverImage.replaceChildren(makeImage(src)); heroPhoto.replaceChildren(makeImage(src)); });
coverUpload.disabled = true;
document.querySelector('.upload-label').hidden = true;
document.querySelector('.cover-intro > p:not(.eyebrow)').textContent = 'Ahana gets the glossy magazine cover she has always deserved.';
document.querySelector('.letter-hint').textContent = 'A letter from someone who loves you very, very much.';
const memorySection = document.createElement('section');
memorySection.className = 'memory-section';
memorySection.innerHTML = `<div class="section-wrap"><div class="section-label"><span>04</span><span>the sabji gang arcade</span></div><div class="memory-intro"><div><p class="eyebrow">a tiny brain break</p><h2>matar's<br /><em>memory match.</em></h2></div><p>Find all three pairs of sabjis. Because no one understands this game like the Sabji Gang.</p></div><div class="memory-board" id="memory-board"></div><p class="memory-status" id="memory-status">find the pairs <small>0 / 3 matched</small></p><button class="memory-reset" id="memory-reset">shuffle again</button></div>`;
document.querySelector('.letter-section').before(memorySection);
const memoryBoard = $('#memory-board');
const memoryStatus = $('#memory-status');
const memoryCards = ['MATAR', 'MATAR', 'PATAGOBHI', 'PATAGOBHI', 'PALAK', 'PALAK'];
let firstCard; let secondCard; let matchedPairs = 0; let lockBoard = false;
const clearCards = () => { firstCard = null; secondCard = null; lockBoard = false; };
const resetMemory = () => { memoryBoard.replaceChildren(); matchedPairs = 0; clearCards(); memoryCards.sort(() => Math.random() - .5).forEach((symbol) => { const card = document.createElement('button'); card.className = 'memory-card'; card.dataset.symbol = symbol; card.innerHTML = `<span>${symbol}</span>`; card.addEventListener('click', () => { if (lockBoard || card === firstCard || card.classList.contains('matched')) return; card.classList.add('flipped'); if (!firstCard) { firstCard = card; return; } secondCard = card; lockBoard = true; if (firstCard.dataset.symbol === secondCard.dataset.symbol) { firstCard.classList.add('matched'); secondCard.classList.add('matched'); matchedPairs += 1; memoryStatus.innerHTML = matchedPairs === 3 ? 'sabji gang forever ✦ <small>you found every pair</small>' : `nice one ✦ <small>${matchedPairs} / 3 matched</small>`; clearCards(); } else { setTimeout(() => { firstCard.classList.remove('flipped'); secondCard.classList.remove('flipped'); clearCards(); }, 700); } }); memoryBoard.appendChild(card); }); };
$('#memory-reset').addEventListener('click', resetMemory);
resetMemory();
const video = $('#camera'); const canvas = $('#snapshot-canvas'); const fallback = $('#camera-fallback'); const startButton = $('#start-camera'); const takeButton = $('#take-photo'); const boothUpload = $('#booth-upload'); const slots = $$('.strip-slot'); let stream; let shots = []; let activeFilter = 'normal'; let filterClass = 'normal';
const renderSlot = (src, index) => { if (!slots[index]) return; slots[index].classList.remove('empty'); slots[index].replaceChildren(makeImage(src)); slots[index].classList.add(filterClass); };
const addShot = (src) => { if (shots.length >= 4) return; shots.push(src); renderSlot(src, shots.length - 1); $('#shot-count').textContent = `${shots.length} / 4`; $('#download-strip').disabled = false; };
startButton.addEventListener('click', async () => { if (!navigator.mediaDevices?.getUserMedia) return; try { stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false }); video.srcObject = stream; video.classList.add('active'); fallback.style.display = 'none'; } catch { fallback.querySelector('p').textContent = 'No camera? No problem. Upload a cute photo instead.'; } });
const getFilteredData = (source) => { const context = canvas.getContext('2d'); canvas.width = source.videoWidth || source.naturalWidth || 800; canvas.height = source.videoHeight || source.naturalHeight || 600; context.save(); if (source === video) { context.translate(canvas.width, 0); context.scale(-1, 1); } context.filter = activeFilter === 'rose' ? 'sepia(.25) saturate(1.4) hue-rotate(315deg)' : activeFilter === 'mono' ? 'grayscale(1) contrast(1.1)' : activeFilter === 'warm' ? 'sepia(.3) saturate(1.25)' : 'none'; context.drawImage(source, 0, 0, canvas.width, canvas.height); context.restore(); return canvas.toDataURL('image/jpeg', .9); };
takeButton.addEventListener('click', () => { if (!video.classList.contains('active')) { fallback.querySelector('p').textContent = 'Start the camera first, or upload a photo below.'; return; } addShot(getFilteredData(video)); });
boothUpload.addEventListener('change', (event) => { const file = event.target.files[0]; if (!file) return; const image = new Image(); image.onload = () => addShot(getFilteredData(image)); image.src = URL.createObjectURL(file); });
$$('.filter').forEach((button) => button.addEventListener('click', () => { $$('.filter').forEach((item) => item.classList.remove('active')); button.classList.add('active'); activeFilter = button.dataset.filter; filterClass = activeFilter; }));
$('#download-strip').addEventListener('click', () => { const strip = document.createElement('canvas'); const context = strip.getContext('2d'); strip.width = 600; strip.height = 1040; context.fillStyle = '#f7f1e7'; context.fillRect(0, 0, strip.width, strip.height); context.fillStyle = '#171516'; context.textAlign = 'center'; context.font = 'bold 42px Georgia'; context.fillText('AHANA ★', 300, 62); shots.forEach((src, index) => { const image = new Image(); image.onload = () => { context.drawImage(image, 44, 88 + index * 225, 512, 195); if (index === shots.length - 1) { const link = document.createElement('a'); link.download = 'ahana-memory-strip.jpg'; link.href = strip.toDataURL('image/jpeg'); link.click(); } }; image.src = src; }); });
const gameBoard = $('#game-board'); const message = $('#game-message'); let score = 0; let gameTimer; let hazardTimer;
const spawnStar = () => { const star = document.createElement('button'); star.className = 'game-star'; star.textContent = ['✦', '★', '♥'][Math.floor(Math.random() * 3)]; star.style.left = `${8 + Math.random() * 84}%`; star.style.top = `${20 + Math.random() * 65}%`; star.addEventListener('click', () => { score += 1; $('#score').textContent = score; star.remove(); if (score >= 10) { clearInterval(gameTimer); message.innerHTML = 'you caught all the good vibes ✦<br /><small>Ahana is officially the star of the show.</small>'; } }); gameBoard.appendChild(star); setTimeout(() => star.remove(), 1800); };
const spawnHazard = () => { const hazard = document.createElement('button'); hazard.className = 'game-hazard'; hazard.textContent = ['◉', '➤', '☄'][Math.floor(Math.random() * 3)]; hazard.title = 'Oops! Lose a point'; hazard.style.left = `${8 + Math.random() * 84}%`; hazard.style.top = `${20 + Math.random() * 65}%`; hazard.addEventListener('click', () => { score = Math.max(0, score - 1); $('#score').textContent = score; hazard.remove(); }); gameBoard.appendChild(hazard); setTimeout(() => hazard.remove(), 2200); };
$('#start-game').addEventListener('click', (event) => { event.stopPropagation(); score = 0; $('#score').textContent = 0; message.remove(); $$('.game-star,.game-hazard').forEach((item) => item.remove()); clearInterval(gameTimer); clearInterval(hazardTimer); gameTimer = setInterval(spawnStar, 650); hazardTimer = setInterval(spawnHazard, 1050); spawnStar(); });