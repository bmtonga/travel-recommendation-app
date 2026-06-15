let travelData = [];

// 1. Fetch data - Ensure the filename matches EXACTLY
fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => { travelData = data; })
    .catch(error => console.error('Error fetching JSON:', error));

const searchInput = document.getElementById('searchInput');
const searchForm = document.getElementById('searchForm');
const clearBtn = document.getElementById('clearBtn');

// 2. Create and append the container to the MAIN element
const resultsContainer = document.createElement('section');
resultsContainer.className = 'results-grid';
document.querySelector('main').appendChild(resultsContainer);

function displayResults(results) {
    resultsContainer.innerHTML = '';
    
    if (results.length === 0) {
        resultsContainer.style.display = 'none';
        return;
    }
    
    resultsContainer.style.display = 'grid';
    
    results.forEach(item => {
        const card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;
        resultsContainer.appendChild(card);
    });
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.toLowerCase().trim();
    if (!query || !travelData.countries) return;

    let filtered = [];
    if (query.includes('beach')) {
        filtered = travelData.beaches;
    } else if (query.includes('temple')) {
        filtered = travelData.temples;
    } else {
        travelData.countries.forEach(country => {
            if (country.name.toLowerCase().includes(query)) {
                filtered = [...filtered, ...country.cities];
            } else {
                const cities = country.cities.filter(c => c.name.toLowerCase().includes(query));
                filtered = [...filtered, ...cities];
            }
        });
    }
    displayResults(filtered);
});

clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    resultsContainer.innerHTML = '';
    resultsContainer.style.display = 'none';
});