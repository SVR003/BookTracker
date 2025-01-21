const BASE_URL = "https://btserver-74j2.onrender.com/books";

export const getAllBooks = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Failed to fetch books");
    return await response.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

export const getBookById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error("Failed to fetch book");
    return await response.json();
  } catch (error) {
    console.error("Error fetching book:", error);
    throw error;
  }
};

export const saveBook = async (book) => {
  try {
    const method = book.id ? "PUT" : "POST";
    const url = book.id ? `${BASE_URL}/${book.id}` : BASE_URL;

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });

    if (!response.ok) {
      throw new Error(book.id ? "Failed to update book" : "Failed to add book");
    }

    const savedBook = await response.json();
    return savedBook;

  } catch (error) {
    console.error("Error saving book:", error);
    throw error;
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete book");
    return response.ok;
  } catch (error) {
    console.error("Error deleting book:", error);
    throw error;
  }
};
