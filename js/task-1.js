const categories = document.querySelectorAll('#categories .item');

if (categories.length > 0) {
  console.log(`Number of categories: ${categories.length}`);

  categories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent; 
    const itemsCount = category.querySelectorAll('ul li').length; 

    console.log(`Category: ${categoryName}, Items: ${itemsCount}`);
  });
};