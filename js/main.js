document.addEventListener('DOMContentLoaded', async () => {
    const categoriesContainer = document.getElementById('categories');
    const categoryDetails = document.getElementById('category-details');

    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const data = await response.json();
        const categories = data.categories;
        categories.forEach(category => {
            const div = document.createElement('div');
            div.classList.add('category');
            div.innerHTML = `
                <img src="${category.strCategoryThumb}" alt="${category.strCategory}">
                <h3>${category.strCategory}</h3>
            `;
            div.addEventListener('click', () => {
                categoryDetails.innerHTML = `
                    <h2>${category.strCategory}</h2>
                    <p>${category.strCategoryDescription}</p>
                `;
            });
            categoriesContainer.appendChild(div);
        });
    }
    
    catch (error) {
        console.error('Error fetching categories:', error);
    }
});