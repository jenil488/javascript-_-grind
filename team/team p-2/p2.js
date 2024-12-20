// Initialize player cards and game state
let userCards = [];
let opponentCards = [];
let round = 0;

// Function to generate a shuffled deck of 20 unique cards (10 for each player)
function generateDeck() {
    let deck = [];
    for (let i = 1; i <= 100; i++) {
        deck.push(i);
    }
    deck = shuffle(deck);
    return deck.slice(0, 20); // Get first 20 cards
}

// Shuffle function to randomize the deck
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
    return arr;
}

// Deal 10 cards to each player
function dealCards() {
    let deck = generateDeck();
    userCards = deck.slice(0, 10);
    opponentCards = deck.slice(10, 20);
    displayCards();
}

// Display the current cards for both players
function displayCards() {
    const userCardContainer = document.getElementById('user-card');
    const opponentCardContainer = document.getElementById('opponent-card');

    // If both players have cards left, show their top card
    if (userCards.length > 0 && opponentCards.length > 0) {
        userCardContainer.textContent = userCards[0];
        opponentCardContainer.textContent = opponentCards[0];
        document.getElementById('user-cards-left').textContent = `Cards Left: ${userCards.length}`;
        document.getElementById('opponent-cards-left').textContent = `Cards Left: ${opponentCards.length}`;
    } else {
        userCardContainer.textContent = 'Game Over';
        opponentCardContainer.textContent = 'Game Over';
    }
}

// Handle card flip and comparison
function flipCards() {
    // Only proceed if both players still have cards
    if (userCards.length === 0 || opponentCards.length === 0) {
        document.getElementById('result').textContent = 'Game Over! No more cards to play.';
        return;
    }

    // Get the top cards from both players
    const userCard = userCards.shift(); // Remove the first card from user's hand
    const opponentCard = opponentCards.shift(); // Remove the first card from opponent's hand

    // Display the current cards and animate flipping
    const userCardContainer = document.getElementById('user-card');
    const opponentCardContainer = document.getElementById('opponent-card');

    // Add flip effect
    userCardContainer.classList.add('flipped');
    opponentCardContainer.classList.add('flipped');

    setTimeout(() => {
        // Compare cards
        let resultText = `Round ${round + 1}: `;
        let winner = '';
        if (userCard === opponentCard) {
            resultText += `It's a match! Both cards removed.`;
            userCardContainer.classList.add('winner');
            opponentCardContainer.classList.add('winner');
        } else if (userCard > opponentCard) {
            resultText += `You win this round! Opponent loses their card.`;
            userCardContainer.classList.add('winner');
            opponentCardContainer.classList.add('loser');
        } else {
            resultText += `Opponent wins this round! You lose your card.`;
            userCardContainer.classList.add('loser');
            opponentCardContainer.classList.add('winner');
        }

        // Update the result and display the new cards
        document.getElementById('round-result').textContent = resultText;

        // Show remaining cards
        document.getElementById('user-cards-left').textContent = `Cards Left: ${userCards.length}`;
        document.getElementById('opponent-cards-left').textContent = `Cards Left: ${opponentCards.length}`;

        // Reset the cards for next round after a short delay
        setTimeout(() => {
            userCardContainer.classList.remove('flipped', 'winner', 'loser');
            opponentCardContainer.classList.remove('flipped', 'winner', 'loser');
            displayCards();

            // Display team result after the cards are reset
            setTimeout(() => {
                let teamResult = userCards.length > opponentCards.length ? 'You are in the lead!' : 'Opponent is in the lead!';
                document.getElementById('team-result').textContent = `Team Status: ${teamResult}`;
            }, 500); // Delay the team result for a better user experience
        }, 1500); // Wait for a moment before resetting the cards

        round++;
    }, 1000); // Wait for the flip animation to finish before comparison
}

// Start the game and deal cards when the page loads
dealCards();

// Add event listener to play button
document.getElementById('playButton').addEventListener('click', flipCards);
