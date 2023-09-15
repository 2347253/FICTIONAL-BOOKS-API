// main.js
document.addEventListener("DOMContentLoaded", () => {
    const url = 'https://book-discovery-by-readsomnia.p.rapidapi.com/search/Harry%20Potter';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c48b1684bbmshe108b8bf8f0ed89p1e969fjsnc01c13f88480',
            'X-RapidAPI-Host': 'book-discovery-by-readsomnia.p.rapidapi.com'
        }
    };

    const fetchBooksButton = document.getElementById("fetchBooks");
    const bookList = document.getElementById("bookList");

    fetchBooksButton.addEventListener("click", async () => {
        try {
            const response = await fetch(url, options);
            const data = await response.json();

            // Clear the existing content in the bookList div
            bookList.innerHTML = "";

            // Display each book in the bookList div
            data.books.forEach((book) => {
                const bookElement = document.createElement("div");
                bookElement.className = "book";
                bookElement.innerHTML = `
                    <h3>${book.title}</h3>
                    <p>${book.author}</p>
                    <p>${book.description}</p>
                `;
                bookList.appendChild(bookElement);
            });
        } catch (error) {
            console.error(error);
        }
    });
});
