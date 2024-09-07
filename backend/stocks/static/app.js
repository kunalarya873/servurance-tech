document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://localhost:8000/api/stocks/';

    const fetchStocks = async () => {
        const response = await fetch(apiUrl);
        const stocks = await response.json();
        displayStocks(stocks);
    };

    const displayStocks = (stocks) => {
        const stockList = document.getElementById('stock-list');
        stockList.innerHTML = '';
        stocks.forEach(stock => {
            const stockItem = document.createElement('div');
            stockItem.className = 'stock-item';
            stockItem.innerHTML = `
                <h4>${stock.name} (${stock.ticker})</h4>
                <p>Price: $${stock.price}</p>
                <button class="btn btn-warning" onclick="editStock(${stock.id})">Edit</button>
                <button class="btn btn-danger" onclick="deleteStock(${stock.id})">Delete</button>
            `;
            stockList.appendChild(stockItem);
        });
    };

    const addStock = async (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const ticker = document.getElementById('ticker').value;
        const price = document.getElementById('price').value;

        await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, ticker, price })
        });
        fetchStocks();
    };

    const editStock = async (id) => {
        // Handle edit functionality here
    };

    const deleteStock = async (id) => {
        await fetch(`${apiUrl}${id}/`, {
            method: 'DELETE'
        });
        fetchStocks();
    };

    document.getElementById('stock-form').addEventListener('submit', addStock);
    fetchStocks();
});
